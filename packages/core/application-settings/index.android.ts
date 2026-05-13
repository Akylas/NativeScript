import * as common from './application-settings-common';
import { Application, DiscardedErrorEventData } from '../application';
import { wrapNativeException } from '../utils';

let sharedPreferences: android.content.SharedPreferences;
function ensureSharedPreferences() {
	if (!sharedPreferences) {
		sharedPreferences = Application.android.getNativeApplication().getApplicationContext().getSharedPreferences('prefs.db', 0);
	}
}

function verify(key: string): boolean {
	if (!common.checkKey(key)) {
		return false;
	}
	ensureSharedPreferences();
	return true;
}

export function hasKey(key: string): boolean {
	if (!verify(key)) {
		return;
	}

	return sharedPreferences.contains(key);
}

// getters
export function getBoolean(key: string, defaultValue?: boolean): boolean {
	if (!verify(key)) {
		return;
	}
	if (hasKey(key)) {
		return sharedPreferences.getBoolean(key, false);
	}

	return defaultValue;
}

export function getString(key: string, defaultValue?: string): string {
	if (!verify(key)) {
		return;
	}
	if (hasKey(key)) {
		return sharedPreferences.getString(key, '');
	}

	return defaultValue;
}

export function getNumber(key: string, defaultValue?: number): number {
	if (!verify(key)) {
		return;
	}
	if (hasKey(key)) {
		let val;

		val = sharedPreferences.getLong(key, long(0));
		// SharedPreferences has no getter or setter for double so we retrieve value as a long and convert it to double
		return java.lang.Double.longBitsToDouble(val);
	}

	return defaultValue;
}

// setters
export function setBoolean(key: string, value: boolean): void {
	if (!verify(key)) {
		return;
	}
	if (!common.ensureValidValue(value, 'boolean')) {
		return;
	}
	const editor = sharedPreferences.edit();
	editor.putBoolean(key, value);
	editor.apply();
}

export function setString(key: string, value: string): void {
	if (!verify(key)) {
		return;
	}
	if (!common.ensureValidValue(value, 'string')) {
		return;
	}
	const editor = sharedPreferences.edit();
	editor.putString(key, value);
	editor.apply();
}

export function setNumber(key: string, value: number): void {
	if (!verify(key)) {
		return;
	}
	if (!common.ensureValidValue(value, 'number')) {
		return;
	}
	const editor = sharedPreferences.edit();
	// SharedPreferences has no getter or setter for double so we convert value and store it as a long
	editor.putLong(key, java.lang.Double.doubleToRawLongBits(double(value)));
	editor.apply();
}

export function remove(key: string): void {
	if (!verify(key)) {
		return;
	}
	const editor = sharedPreferences.edit();
	editor.remove(key);
	editor.apply();
}

export function clear(): void {
	ensureSharedPreferences();
	sharedPreferences.edit().clear().apply();
}

export function flush(): boolean {
	ensureSharedPreferences();

	return sharedPreferences.edit().commit();
}

export function getAllKeys(): Array<string> {
	const mappedPreferences = getNative().getAll();
	const iterator = mappedPreferences.keySet().iterator();
	const result = [];
	while (iterator.hasNext()) {
		const key = iterator.next();
		result.push(key);
	}

	return result;
}

export function getAllJSON(ignoreRegexp?: string | RegExp) {
	const mappedPreferences = getNative().getAll();
	const iterator = mappedPreferences.keySet().iterator();

	// we need to transform numbers which are stored as longBits
	while (iterator.hasNext()) {
		const key = iterator.next() as string;
		if (ignoreRegexp && key.match(ignoreRegexp)) {
			continue;
		}
		const value = mappedPreferences.get(key);
		if (value instanceof java.lang.Long) {
			mappedPreferences.put(key, java.lang.Double.valueOf(java.lang.Double.longBitsToDouble(value.longValue())));
		}
	}
	const json = new org.json.JSONObject(mappedPreferences);
	return json.toString();
}

export function getNative() {
	ensureSharedPreferences();
	return sharedPreferences;
}
