import { ViewBase } from '../view-base';
import { PropertyChangeData, PropertyChangeOrigin, WrappedValue } from '../../../data/observable';
import { Trace } from '../../../trace';

import { Style } from '../../styling/style';

import { profile } from '../../../profiling';
import { unsetValue, PropertyOptions, CoerciblePropertyOptions, CssPropertyOptions, ShorthandPropertyOptions, CssAnimationPropertyOptions, isCssWideKeyword, isCssUnsetValue, isResetValue } from './property-shared';
import { getRootView } from 'application/helpers-common';

export { makeValidator, makeParser } from '../../../core-types/validators';

//fixes issue https://github.com/microsoft/TypeScript/issues/37663
const isFunction = (x: unknown): x is Function => typeof x === 'function';

const cssPropertyNames: string[] = [];
const cssShorthandConverters = new Map<string, (value: string) => [any, any][]>();
const cssShorthandLonghands = new Map<string, string[]>();
// Bumped per shorthand registration, so rules parsed before it can still expand it.
let cssShorthandsVersion = 0;
const HAS_OWN = Object.prototype.hasOwnProperty;
const symbolPropertyMap = {};
const cssSymbolPropertyMap = {};

// Hoisted regex/constants for hot paths to avoid re-allocation
const CSS_VARIABLE_NAME_RE = /^--[^,\s]+?$/;
const DIP_RE = /([0-9]+(\.[0-9]+)?)dip\b/g;
const UNSET_RE = /unset/g;
/** Stands in for an unresolved var() until the whole value is known; a NUL never occurs in css. */
const UNRESOLVED_VAR = '\u0000';
const INFINITY_RE = /infinity/g;

const inheritableProperties = new Array<InheritedProperty<any, any>>();
const inheritableCssProperties = new Array<InheritedCssProperty<any, any>>();

const enum ValueSource {
	Default = 0,
	Inherited = 1,
	Css = 2,
	Local = 3,
	Keyframe = 4,
}

/** `sourceKey` of every registered `CssProperty`, by css name. */
const cssValueSourceKeys: Record<string, symbol> = Object.create(null);

/**
 * Whether the style still carries what the cascade last wrote for the property.
 * A `CssProperty` keeps one value: a local value both suppresses the css write and
 * takes the slot, so the style can stop carrying what the cascade recorded. The
 * cascade has to write it again rather than skip it as unchanged.
 */
export function _isCssValueStillApplied(style: unknown, cssLocalName: string, value: unknown): boolean {
	const sourceKey = cssValueSourceKeys[cssLocalName];
	if (sourceKey === undefined) {
		// Applied through the view rather than the style; nothing to verify.
		return true;
	}

	// A reset leaves no source behind, so it is in effect precisely when nothing else claimed the property.
	return style[sourceKey] === (isResetValue(value) ? undefined : ValueSource.Css);
}

/**
 * What a released local value falls back to: the value the cascade last resolved for
 * the property, or `undefined` when it resolved none.
 */
function cascadedCssValue(view: ViewBase, cssLocalName: string): unknown {
	const value = view._cssState?._getAppliedPropertyValue(cssLocalName);

	return value === '' || isResetValue(value) ? undefined : value;
}

function print(map) {
	const symbols = Object.getOwnPropertySymbols(map);
	for (const symbol of symbols) {
		const prop = map[symbol];
		if (!prop.registered) {
			console.log(`Property ${prop.name} not Registered!!!!!`);
		}
	}
}

export function _printUnregisteredProperties(): void {
	print(symbolPropertyMap);
	print(cssSymbolPropertyMap);
}

export function _getProperties(): Property<any, any>[] {
	return getPropertiesFromMap(symbolPropertyMap) as Property<any, any>[];
}

export function _getStyleProperties(): CssProperty<any, any>[] {
	return getPropertiesFromMap(cssSymbolPropertyMap) as CssProperty<any, any>[];
}

/**
 * Placeholder cascaded for each longhand of a shorthand that cannot be split while
 * parsing - a single `var()` may substitute several longhands at once, so the
 * shorthand is only parsed once its expression is resolved per view.
 * @see https://drafts.csswg.org/css-variables/#variables-in-shorthands
 */
export class CssPendingSubstitution {
	constructor(
		public readonly shorthand: string,
		public readonly value: string,
	) {}

	toString(): string {
		return this.value;
	}
}

export function _isCssPendingSubstitution(value: unknown): value is CssPendingSubstitution {
	return value instanceof CssPendingSubstitution;
}

/**
 * The longhands a shorthand expands into, probed from its converter on first use -
 * the longhand properties a converter closes over are not initialized yet while
 * the shorthand itself is being registered.
 */
function getCssShorthandLonghands(cssName: string): string[] | undefined {
	const known = cssShorthandLonghands.get(cssName);
	if (known) {
		return known;
	}

	const converter = cssShorthandConverters.get(cssName);
	if (!converter) {
		return undefined;
	}

	try {
		const probed = converter(unsetValue);
		if (!probed?.length) {
			return undefined;
		}

		const longhands: string[] = [];
		for (let i = 0, length = probed.length; i < length; i++) {
			longhands.push(probed[i][0].cssLocalName);
		}

		cssShorthandLonghands.set(cssName, longhands);

		return longhands;
	} catch (e) {
		Trace.write(`Could not determine the longhands of shorthand [${cssName}]. ${e}`, Trace.categories.Style, Trace.messageType.warn);

		return undefined;
	}
}

/**
 * One pending-substitution value per longhand of the shorthand, or `undefined`
 * when the longhands cannot be determined.
 */
export function _pendingCssShorthandSubstitution(cssName: string, value: string): [string, CssPendingSubstitution][] | undefined {
	const longhands = getCssShorthandLonghands(cssName);
	if (!longhands) {
		return undefined;
	}

	const pending = new CssPendingSubstitution(cssName, value);
	const declarations: [string, CssPendingSubstitution][] = [];
	for (let i = 0, length = longhands.length; i < length; i++) {
		declarations.push([longhands[i], pending]);
	}

	return declarations;
}

/** Changes whenever a shorthand is registered. */
export function _getCssShorthandsVersion(): number {
	return cssShorthandsVersion;
}

/** Whether `cssName` is a registered shorthand. */
export function _isCssShorthand(cssName: string): boolean {
	return cssShorthandConverters.has(cssName);
}

/**
 * Expand a shorthand declaration into its longhand declarations, or `undefined`
 * when the property is not a shorthand, the value still has to be evaluated per
 * view (`var()`/`calc()`), or it does not parse.
 */
export function _expandCssShorthand(cssName: string, value: string): [string, any][] | undefined {
	const converter = cssShorthandConverters.get(cssName);
	if (!converter) {
		return undefined;
	}

	if (typeof value === 'string' && (isCssVariableExpression(value) || isCssCalcExpression(value))) {
		return undefined;
	}

	try {
		const converted = converter(value);
		const expanded: [string, any][] = [];
		for (let i = 0, length = converted.length; i < length; i++) {
			expanded.push([converted[i][0].cssLocalName, converted[i][1]]);
		}

		return expanded;
	} catch (e) {
		Trace.write(`Failed to expand shorthand [${cssName}] with value [${value}]. ${e}`, Trace.categories.Style, Trace.messageType.warn);

		return undefined;
	}
}

export function isCssVariable(property: string) {
	return CSS_VARIABLE_NAME_RE.test(property);
}

export function isCssCalcExpression(value: string) {
	return value.includes('calc(');
}

export function isCssVariableExpression(value: string) {
	return value.includes('var(--');
}

export function _evaluateCssVariableExpression(view: ViewBase, cssName: string, value: string): string {
	if (typeof value !== 'string') {
		return value;
	}

	if (!isCssVariableExpression(value)) {
		// Value is not using css-variable(s)
		return value;
	}

	let output = value.trim();

	// Evaluate every (and nested) css-variables in the value.
	let lastValue: string;
	while (lastValue !== output) {
		lastValue = output;

		const idx = output.lastIndexOf('var(');
		if (idx === -1) {
			continue;
		}

		const endIdx = findClosingParenthesis(output, idx + 3);
		if (endIdx === -1) {
			continue;
		}

		const body = output.substring(idx + 4, endIdx);
		const commaIdx = body.indexOf(',');
		const cssVariableName = (commaIdx === -1 ? body : body.substring(0, commaIdx)).trim();
		const fallback = commaIdx === -1 ? '' : body.substring(commaIdx + 1).trim();
		let cssVariableValue;
		const rootView = getRootView();
		if (typeof __ONLY_ALLOW_ROOT_VARIABLES__ !== 'undefined' && __ONLY_ALLOW_ROOT_VARIABLES__ === true && rootView) {
			cssVariableValue = rootView.style.getCssVariable(cssVariableName);
		} else {
			cssVariableValue = view.style.getCssVariable(cssVariableName);
		}
		if (typeof cssVariableValue === 'string' && cssVariableValue.trim() === 'initial') {
			cssVariableValue = null;
		}
		if (cssVariableValue === null && fallback) {
			cssVariableValue = _evaluateCssVariableExpression(view, cssName, fallback);
		}

		if (!cssVariableValue || cssVariableValue === 'unset') {
			cssVariableValue = UNRESOLVED_VAR;
		}

		output = `${output.substring(0, idx)}${cssVariableValue}${output.substring(endIdx + 1)}`;
	}

	// An unresolved var() invalidates the whole declaration, wherever it is nested,
	// unless it sat in the fallback of a var() that resolved.
	return output.includes(UNRESOLVED_VAR) ? 'unset' : output;
}

function findClosingParenthesis(value: string, openIdx: number): number {
	let depth = 0;
	for (let i = openIdx; i < value.length; i++) {
		const ch = value[i];
		if (ch === '(') {
			depth++;
		} else if (ch === ')' && --depth === 0) {
			return i;
		}
	}

	return -1;
}

export function _evaluateCssCalcExpression(value: string) {
	if (typeof value !== 'string') {
		return value;
	}

	if (isCssCalcExpression(value)) {
		if (__CSS_USE_CSS_TOOLS__) {
			return require('@csstools/css-calc').calc(_replaceKeywordsWithValues(_replaceDip(value)));
		} else {
			Trace.write(`To use css calc() you must define __CSS_USE_CSS_TOOLS__ in webpack Define`, Trace.categories.Accessibility, Trace.messageType.error);
			return value;
		}
	} else {
		return value;
	}
}

export function _getStoredClassDefaultPropertyValue(property, view, defaultBlock) {
	let defaultValue = view.constructor.prototype[property.defaultValueKey];
	if (!defaultValue) {
		defaultValue = view.constructor.prototype[property.defaultValueKey] = defaultBlock();
	}
	return defaultValue;
}

function _replaceDip(value: string) {
	return value.replace(DIP_RE, '$1');
}

function _replaceKeywordsWithValues(value: string) {
	let cssValue = value;
	if (cssValue.includes('unset')) {
		cssValue = cssValue.replace(UNSET_RE, '0');
	}
	if (cssValue.includes('infinity')) {
		cssValue = cssValue.replace(INFINITY_RE, '999999');
	}
	return cssValue;
}

function getPropertiesFromMap(map): Property<any, any>[] | CssProperty<any, any>[] {
	const symbols = Object.getOwnPropertySymbols(map);
	const len = symbols.length;
	const props = new Array(len);
	for (let i = 0; i < len; i++) {
		props[i] = map[symbols[i]];
	}
	return props;
}

function overrideHandlers<T, U>(property: Property<any, U> | CssProperty<any, U> | ShorthandProperty<any, U> | CssAnimationProperty<any, U>) {
	return function (options: any) {
		if (property instanceof CssAnimationProperty || property instanceof CssProperty || property instanceof ShorthandProperty) {
			Object.keys(options).forEach((key) => {
				if (key === 'cssName') {
					if (options[key] !== undefined) {
						//@ts-ignore ignore readonly
						property.cssName = 'css:' + options[key];
						//@ts-ignore ignore readonly
						property.cssLocalName = options[key];
					}
				} else if (options[key] !== undefined) {
					property[key] = options[key];
				}
			});
		} else {
			Object.keys(options).forEach((key) => {
				if (options[key] !== undefined) {
					property[key] = options[key];
				}
			});
		}
	};
}

function getPropertySetter<T extends ViewBase, U>(property: Property<T, U>) {
	return function (this: T, boxedValue: U, origin?: PropertyChangeOrigin): void {
		const reset = isResetValue(boxedValue);
		let value: U;
		let wrapped: boolean;
		const key = property.key;
		const defaultValue = property.defaultValue;
		const actualDefaultValue = isFunction(defaultValue) ? defaultValue(property, this) : defaultValue;
		if (reset) {
			value = actualDefaultValue;
			if (property instanceof CoercibleProperty) {
				delete this[property.coerceKey];
			}
		} else {
			wrapped = boxedValue && (<any>boxedValue).wrapped;
			value = wrapped ? WrappedValue.unwrap(boxedValue) : boxedValue;

			if (property.valueConverter && typeof value === 'string') {
				value = property.valueConverter.call(this, value);
			}
			if (property instanceof CoercibleProperty) {
				this[property.coerceKey] = value;
				value = property.coerceValue(this, value);
			}
		}
		const oldValue = <U>(key in this ? this[key] : actualDefaultValue);
		const changed: boolean = property.equalityComparer ? !property.equalityComparer(oldValue, value) : oldValue !== value;

		if (wrapped || changed) {
			const defaultValueKey = property.defaultValueKey;
			const setNative = property.setNative;
			const valueChanged = property.valueChanged;
			const getDefault = property.getDefault;
			const eventName = property.eventName;
			const propertyName = property.name;
			if (reset) {
				delete this[key];
				if (valueChanged) {
					valueChanged(this, oldValue, value);
				}
				if (this[setNative]) {
					if (this._suspendNativeUpdatesCount) {
						this._suspendedUpdates?.set(propertyName, property);
					} else {
						if (defaultValueKey in this) {
							this[setNative](this[defaultValueKey]);
						} else {
							this[setNative](actualDefaultValue);
						}
					}
				}
			} else {
				this[key] = value;
				if (valueChanged) {
					valueChanged(this, oldValue, value);
				}

				if (this[setNative]) {
					if (this._suspendNativeUpdatesCount) {
						this._suspendedUpdates?.set(propertyName, property);
					} else {
						if (!(defaultValueKey in this)) {
							this[defaultValueKey] = this[getDefault] ? this[getDefault]() : actualDefaultValue;
						}
						this[setNative](value);
					}
				}
			}

			if ((!__UI_USE_EXTERNAL_RENDERER__ || !this._suspendNativeUpdatesCount) && this.hasListeners(eventName)) {
				this.notify<PropertyChangeData>({
					object: this,
					eventName,
					propertyName,
					value,
					oldValue,
					origin: origin ?? 'script',
				});
			}

			if (property.affectsLayout) {
				this.requestLayout();
			}

			if (this.domNode) {
				if (reset) {
					this.domNode.attributeRemoved(propertyName);
				} else {
					this.domNode.attributeModified(propertyName, value);
				}
			}
		}
	};
}

export class Property<T extends ViewBase, U> implements TypedPropertyDescriptor<U>, Property<T, U> {
	private registered: boolean;

	public readonly name: string;
	public readonly key: symbol;
	public readonly eventName: string;

	public readonly getDefault: symbol;
	public readonly setNative: symbol;

	public readonly defaultValueKey: symbol;
	public readonly defaultValue: U | ((property: Property<T, U>, view: T) => U);

	public isStyleProperty: boolean;

	public affectsLayout?: boolean;
	public equalityComparer?: (x: U, y: U) => boolean;
	public valueChanged?: (target: T, oldValue: U, newValue: U) => void;
	public valueConverter?: (value: string) => U;

	public get: () => U;
	public set: (value: U, origin?: PropertyChangeOrigin) => void;
	public overrideHandlers: (options: PropertyOptions<T, U>) => void;
	public enumerable = true;
	public configurable = true;

	constructor(options: PropertyOptions<T, U>) {
		this.overrideHandlers = overrideHandlers(this);
		this.overrideHandlers(options);
		const propertyName = this.name;
		const key = Symbol(propertyName + ':propertyKey');
		this.key = key;

		const getDefault = Symbol(propertyName + ':getDefault');
		this.getDefault = getDefault;

		const setNative = Symbol(propertyName + ':setNative');
		this.setNative = setNative;

		const defaultValueKey = Symbol(propertyName + ':nativeDefaultValue');
		this.defaultValueKey = defaultValueKey;

		this.eventName = propertyName + 'Change';
		const property = this;
		this.set = getPropertySetter(this);
		this.get = function (this: T): U {
			if (key in this) {
				return <U>this[key];
			}
			const actualDefaultValue = isFunction(property.defaultValue) ? property.defaultValue(property, this) : property.defaultValue;
			return <U>actualDefaultValue;
		};
		symbolPropertyMap[key] = this;
	}
	nativeValueChange(owner: T, value: U): void {
		const key = this.key;
		const defaultValue = this.defaultValue;
		const actualDefaultValue = isFunction(defaultValue) ? defaultValue(this, owner) : defaultValue;
		const oldValue = <U>(key in owner ? owner[key] : actualDefaultValue);
		const changed = this.equalityComparer ? !this.equalityComparer(oldValue, value) : oldValue !== value;
		if (changed) {
			const defaultValueKey = this.defaultValueKey;
			const getDefault = this.getDefault;
			const eventName = this.eventName;
			const propertyName = this.name;
			owner[key] = value;
			if (this.valueChanged) {
				this.valueChanged(owner, oldValue, value);
			}

			if (owner.nativeViewProtected && !(defaultValueKey in owner)) {
				owner[defaultValueKey] = owner[getDefault] ? owner[getDefault]() : actualDefaultValue;
			}

			if (owner.hasListeners(eventName)) {
				owner.notify<PropertyChangeData>({
					object: owner,
					eventName,
					propertyName,
					value,
					oldValue,
					origin: 'native',
				});
			}

			if (this.affectsLayout) {
				owner.requestLayout();
			}

			if (owner.domNode) {
				owner.domNode.attributeModified(propertyName, value);
			}
		}
	}
	public register(cls: { prototype: T }): void {
		if (this.registered) {
			throw new Error(`Property ${this.name} already registered.`);
		}
		this.registered = true;
		// we store the property in the class static variable
		// so that animations can get access to us
		if (!cls['registeredProps']) {
			cls['registeredProps'] = {};
		}
		cls['registeredProps'][this.name] = this;
		Object.defineProperty(cls.prototype, this.name, this);
	}

	public isSet(instance: T): boolean {
		return this.key in instance;
	}
}
Property.prototype.isStyleProperty = false;

export class CoercibleProperty<T extends ViewBase, U> extends Property<T, U> implements CoercibleProperty<T, U> {
	coerceKey?: symbol;
	coerceValue?: (t: T, u: U) => U;

	constructor(options: CoerciblePropertyOptions<T, U>) {
		super(options);
		this.coerceKey = Symbol(this.name + ':coerceKey');
	}

	coerce(target: T): void {
		const actualDefaultValue = isFunction(this.defaultValue) ? this.defaultValue(this, target) : this.defaultValue;
		const originalValue = <U>(this.coerceKey in target ? target[this.coerceKey] : actualDefaultValue);
		// need that to make coercing but also fire change events
		target[this.name] = originalValue;
	}
}

export class InheritedProperty<T extends ViewBase, U> extends Property<T, U> implements InheritedProperty<T, U> {
	public readonly sourceKey: symbol;
	public readonly setInheritedValue: (value: U) => void;

	constructor(options: PropertyOptions<T, U>) {
		super(options);
		const key = this.key;

		const sourceKey = Symbol(this.name + ':valueSourceKey');
		this.sourceKey = sourceKey;

		const setBase = this.set;
		const property = this;
		const setFunc = (valueSource: ValueSource) =>
			function (value: U): void {
				const that = <T>this;

				let unboxedValue: U;
				let newValueSource: number;

				if (isResetValue(value)) {
					const parent: ViewBase = that.parent;

					// If value is not initial or unset and view has a parent that has non-default value, use it as the reset value.
					if (value !== 'initial' && parent && parent[sourceKey] !== ValueSource.Default) {
						unboxedValue = parent[property.name];
						newValueSource = ValueSource.Inherited;
					} else {
						const actualDefaultValue = isFunction(property.defaultValue) ? property.defaultValue(property, that) : property.defaultValue;
						unboxedValue = actualDefaultValue;
						newValueSource = ValueSource.Default;
					}
				} else {
					// else we are set through property set.
					unboxedValue = value;
					newValueSource = valueSource;
				}

				// take currentValue before calling base - base may change it.
				const currentValue = that[key];
				setBase.call(that, unboxedValue, valueSource === ValueSource.Local ? 'script' : 'inherited');

				const newValue = that[key];
				that[sourceKey] = newValueSource;

				if (currentValue !== newValue) {
					const reset = newValueSource === ValueSource.Default;
					that.eachChild((child) => {
						const childValueSource = child[sourceKey] || ValueSource.Default;
						if (reset) {
							if (childValueSource === ValueSource.Inherited) {
								setFunc.call(child, unsetValue);
							}
						} else {
							if (childValueSource <= ValueSource.Inherited) {
								setInheritedValue.call(child, newValue);
							}
						}

						return true;
					});
				}
			};

		const setInheritedValue = setFunc(ValueSource.Inherited);
		this.setInheritedValue = setInheritedValue;

		this.set = setFunc(ValueSource.Local);

		inheritableProperties.push(this);
	}
}

function setCssFunc<T extends Style, U>(property: CssProperty<T, U>, valueSource: ValueSource) {
	return function (this: T, newValue: any): void {
		const view = this.viewRef.get();
		if (!view) {
			Trace.write(`${newValue} not set to view because ".viewRef" is cleared`, Trace.categories.Style, Trace.messageType.warn);

			return;
		}
		const sourceKey = property.sourceKey;
		const isLocalWrite = valueSource === ValueSource.Local;
		if (valueSource === ValueSource.Css) {
			const currentValueSource: number = this[sourceKey] || ValueSource.Default;

			// We have localValueSource - NOOP.
			if (currentValueSource === ValueSource.Local) {
				return;
			}
		}
		if (isLocalWrite) {
			this._localValueVersion++;
		}
		const defaultValue = property.defaultValue;
		const actualDefaultValue = isFunction(defaultValue) ? defaultValue(property, view) : defaultValue;
		const key = property.key;
		let reset = isResetValue(newValue) || newValue === '';
		let newValueSource = valueSource;
		let value: U;
		if (reset && isLocalWrite) {
			// Releasing a local value falls back to what the cascade last resolved.
			const cssValue = cascadedCssValue(view, property.cssLocalName);
			if (cssValue !== undefined) {
				newValue = cssValue;
				newValueSource = ValueSource.Css;
				reset = false;
			}
		}
		if (reset) {
			value = actualDefaultValue;
			delete this[sourceKey];
		} else {
			this[sourceKey] = newValueSource;
			value = property.valueConverter && typeof newValue === 'string' ? property.valueConverter(newValue) : <U>newValue;
		}

		const oldValue = <U>(key in this ? this[key] : actualDefaultValue);
		const changed: boolean = property.equalityComparer ? !property.equalityComparer(oldValue, value, this) : oldValue !== value;
		if (changed) {
			const setNative = property.setNative;
			const defaultValueKey = property.defaultValueKey;
			const propertyName = property.name;
			const valueChanged = property.valueChanged;
			const eventName = property.eventName;
			if (reset) {
				delete this[key];
				if (valueChanged) {
					valueChanged(this, oldValue, value);
				}

				if (view[setNative]) {
					if (view._suspendNativeUpdatesCount) {
						view._suspendedUpdates?.set(propertyName, property);
					} else {
						if (defaultValueKey in this) {
							view[setNative](this[defaultValueKey]);
						} else {
							view[setNative](actualDefaultValue);
						}
					}
				}
			} else {
				this[key] = value;
				if (valueChanged) {
					valueChanged(this, oldValue, value);
				}

				if (view[setNative]) {
					if (view._suspendNativeUpdatesCount) {
						view._suspendedUpdates?.set(propertyName, property);
					} else {
						if (!(defaultValueKey in this)) {
							const getDefault = property.getDefault;
							this[defaultValueKey] = view[getDefault] ? view[getDefault]() : actualDefaultValue;
						}
						view[setNative](value);
					}
				}
			}

			if ((!__UI_USE_EXTERNAL_RENDERER__ || !view._suspendNativeUpdatesCount) && this.hasListeners(eventName)) {
				this.notify<PropertyChangeData>({
					object: this,
					eventName,
					propertyName,
					value,
					oldValue,
					origin: isLocalWrite ? 'script' : 'css',
				});
			}

			if (property.affectsLayout) {
				view.requestLayout();
			}
		}
	};
}

export class CssProperty<T extends Style, U> implements CssProperty<T, U> {
	public static properties: {
		[cssName: string]: CssProperty<any, any>;
	} = {};
	private registered: boolean;

	public readonly name: string;
	public readonly cssName: string;
	public readonly cssLocalName: string;
	public readonly eventName: string;

	protected readonly cssValueDescriptor: PropertyDescriptor;
	protected readonly localValueDescriptor: PropertyDescriptor;

	public isStyleProperty: boolean;

	public readonly key: symbol;
	public readonly getDefault: symbol;
	public readonly setNative: symbol;
	public readonly sourceKey: symbol;
	public readonly defaultValueKey: symbol;
	public readonly defaultValue: U | ((property: CssProperty<T, U>, view: ViewBase) => U);

	public affectsLayout?: boolean;
	public equalityComparer?: (x: U, y: U, target: T) => boolean;
	public valueChanged?: (target: T, oldValue: U, newValue: U) => void;
	public valueConverter?: (value: string) => U;

	public overrideHandlers: (options: CssPropertyOptions<T, U>) => void;

	constructor(options: CssPropertyOptions<T, U>) {
		this.overrideHandlers = overrideHandlers(this);
		this.overrideHandlers(options);
		const propertyName = this.name;

		CssProperty.properties[propertyName] = this;
		if (this.cssLocalName && this.cssLocalName !== propertyName) {
			CssProperty.properties[this.cssLocalName] = this;
		}

		const key = Symbol(propertyName + ':propertyKey');
		this.key = key;

		this.sourceKey = Symbol(propertyName + ':valueSourceKey');

		this.getDefault = Symbol(propertyName + ':getDefault');

		this.setNative = Symbol(propertyName + ':setNative');

		this.defaultValueKey = Symbol(propertyName + ':nativeDefaultValue');

		this.eventName = propertyName + 'Change';

		const property = this;
		function get(): U {
			if (key in this) {
				return <U>this[key];
			}
			const actualDefaultValue = isFunction(property.defaultValue) ? property.defaultValue(property, this.viewRef.get()) : property.defaultValue;
			return <U>actualDefaultValue;
		}

		this.cssValueDescriptor = {
			enumerable: true,
			configurable: true,
			get: get,
			set: setCssFunc(this, ValueSource.Css),
		};

		this.localValueDescriptor = {
			enumerable: true,
			configurable: true,
			get: get,
			set: setCssFunc(this, ValueSource.Local),
		};

		cssSymbolPropertyMap[key] = this;
	}

	public register(cls: { prototype: T }): void {
		if (this.registered) {
			throw new Error(`Property ${this.name} already registered.`);
		}
		// we add it so that overrideHandlers might work
		cssPropertyNames.push(this.cssLocalName);

		this.registered = true;
		Object.defineProperty(cls.prototype, this.name, this.localValueDescriptor);
		Object.defineProperty(cls.prototype, this.cssName, this.cssValueDescriptor);
		if (this.cssLocalName !== this.cssName) {
			Object.defineProperty(cls.prototype, this.cssLocalName, this.localValueDescriptor);
		}

		cssValueSourceKeys[this.cssLocalName] = this.sourceKey;
	}

	public isSet(instance: T): boolean {
		return this.key in instance;
	}
}
CssProperty.prototype.isStyleProperty = true;

export class CssAnimationProperty<T extends Style, U> implements CssAnimationProperty<T, U> {
	public readonly name: string;
	public readonly cssName: string;
	public readonly cssLocalName: string;
	public readonly eventName: string;

	public readonly getDefault: symbol;
	public readonly setNative: symbol;

	public readonly register: (cls: { prototype }) => void;

	public readonly keyframe: string;
	public readonly defaultValueKey: symbol;
	public readonly key: symbol;
	private readonly source: symbol;

	public readonly defaultValue: U | ((property: CssAnimationProperty<T, U>, view: ViewBase) => U);

	public isStyleProperty: boolean;

	public static properties: {
		[cssName: string]: CssAnimationProperty<any, any>;
	} = {};

	readonly affectsLayout?: boolean;
	readonly equalityComparer?: (x: U, y: U) => boolean;
	readonly valueChanged?: (target: T, oldValue: U, newValue: U) => void;
	readonly valueConverter?: (value: string) => U;
	public overrideHandlers: (options: CssAnimationPropertyOptions<T, U>) => void;

	constructor(options: CssAnimationPropertyOptions<T, U>) {
		this.overrideHandlers = overrideHandlers(this);
		this.overrideHandlers(options);

		const propertyName = this.name;

		CssAnimationProperty.properties[propertyName] = this;
		if (this.cssLocalName && this.cssLocalName !== propertyName) {
			CssAnimationProperty.properties[this.cssLocalName] = this;
		}

		const keyframeName = 'keyframe:' + propertyName;
		this.keyframe = keyframeName;
		const defaultName = 'default:' + propertyName;

		const defaultValueKey = Symbol(defaultName);
		this.defaultValueKey = defaultValueKey;

		const cssValue = Symbol(this.cssName);
		const styleValue = Symbol(`local:${propertyName}`);
		const keyframeValue = Symbol(keyframeName);
		const computedValue = Symbol('computed-value:' + propertyName);
		this.key = computedValue;
		const computedSource = Symbol('computed-source:' + propertyName);
		this.source = computedSource;

		this.getDefault = Symbol(propertyName + ':getDefault');
		const getDefault = this.getDefault;
		const setNative = (this.setNative = Symbol(propertyName + ':setNative'));
		this.eventName = propertyName + 'Change';

		const property = this;

		function descriptor(symbol: symbol, propertySource: ValueSource, enumerable: boolean, configurable: boolean, getsComputed: boolean): PropertyDescriptor {
			const origin: PropertyChangeOrigin = propertySource === ValueSource.Keyframe ? 'animation' : propertySource === ValueSource.Css ? 'css' : 'script';

			return {
				enumerable,
				configurable,
				get: getsComputed
					? function (this: T) {
							return this[computedValue];
						}
					: function (this: T) {
							return this[symbol];
						},
				set(this: T, boxedValue: U | string) {
					const view = this.viewRef.get();
					if (!view) {
						Trace.write(`${boxedValue} not set to view because ".viewRef" is cleared`, Trace.categories.Animation, Trace.messageType.warn);

						return;
					}

					let oldValue = this[computedValue];
					// this[computedValue] is set at prototype level to property.defaultValue
					// so we need to check if property.defaultValue is a function
					if (property.defaultValue === oldValue && typeof oldValue === 'function') {
						oldValue = oldValue(property, view);
					}
					const oldSource = this[computedSource];
					const wasSet = oldSource !== ValueSource.Default;
					const reset = isResetValue(boxedValue) || boxedValue === '';

					if (reset) {
						this[symbol] = boxedValue;
						if (this[computedSource] === propertySource) {
							// Fallback to lower value source.
							if (!isResetValue(this[styleValue])) {
								this[computedSource] = ValueSource.Local;
								this[computedValue] = this[styleValue];
							} else if (!isResetValue(this[cssValue])) {
								this[computedSource] = ValueSource.Css;
								this[computedValue] = this[cssValue];
							} else {
								delete this[computedSource];
								delete this[computedValue];
							}
						}
					} else {
						if (property.valueConverter && typeof boxedValue === 'string') {
							boxedValue = property.valueConverter.call(this, boxedValue);
						}
						this[symbol] = boxedValue;
						if (this[computedSource] <= propertySource) {
							this[computedSource] = propertySource;
							this[computedValue] = boxedValue;
						}
					}

					const value = this[computedValue];
					const source = this[computedSource];
					const isSet = source !== ValueSource.Default;

					const computedValueChanged = oldValue !== value && (!property.equalityComparer || !property.equalityComparer(oldValue, value));

					if (computedValueChanged && property.valueChanged) {
						property.valueChanged(this, oldValue, value);
					}

					if (view[setNative] && (computedValueChanged || isSet !== wasSet)) {
						if (view._suspendNativeUpdatesCount) {
							view._suspendedUpdates?.set(propertyName, property);
						} else {
							if (isSet) {
								if (!wasSet && !(defaultValueKey in this)) {
									const actualDefaultValue = isFunction(property.defaultValue) ? property.defaultValue(property, this.viewRef.get()) : property.defaultValue;
									this[defaultValueKey] = view[getDefault] ? view[getDefault]() : actualDefaultValue;
								}
								view[setNative](value);
							} else if (wasSet) {
								if (defaultValueKey in this) {
									view[setNative](this[defaultValueKey]);
								} else {
									const actualDefaultValue = isFunction(property.defaultValue) ? property.defaultValue(property, this.viewRef.get()) : property.defaultValue;
									view[setNative](actualDefaultValue);
								}
							}
						}
						if (property.affectsLayout) {
							view.requestLayout();
						}
					}
					const eventName = property.eventName;
					if (computedValueChanged && (!__UI_USE_EXTERNAL_RENDERER__ || !view._suspendNativeUpdatesCount) && this.hasListeners(eventName)) {
						this.notify<PropertyChangeData>({
							object: this,
							eventName,
							propertyName,
							value,
							oldValue,
							origin,
						});
					}
				},
			};
		}

		const defaultPropertyDescriptor = descriptor(defaultValueKey, ValueSource.Default, false, false, false);
		const cssPropertyDescriptor = descriptor(cssValue, ValueSource.Css, false, false, false);
		const stylePropertyDescriptor = descriptor(styleValue, ValueSource.Local, true, true, true);
		const keyframePropertyDescriptor = descriptor(keyframeValue, ValueSource.Keyframe, false, false, false);

		symbolPropertyMap[computedValue] = this;
		cssSymbolPropertyMap[computedValue] = this;

		this.register = (cls: { prototype: T }) => {
			// we add it so that overrideHandlers might work
			cssPropertyNames.push(this.cssLocalName);

			cls.prototype[computedValue] = this.defaultValue;
			cls.prototype[computedSource] = ValueSource.Default;

			cls.prototype[cssValue] = unsetValue;
			cls.prototype[styleValue] = unsetValue;
			cls.prototype[keyframeValue] = unsetValue;

			Object.defineProperty(cls.prototype, defaultName, defaultPropertyDescriptor);
			Object.defineProperty(cls.prototype, this.cssName, cssPropertyDescriptor);
			Object.defineProperty(cls.prototype, propertyName, stylePropertyDescriptor);
			if (this.cssLocalName && this.cssLocalName !== this.name) {
				Object.defineProperty(cls.prototype, this.cssLocalName, stylePropertyDescriptor);
			}
			Object.defineProperty(cls.prototype, keyframeName, keyframePropertyDescriptor);
		};
	}

	public _initDefaultNativeValue(target: T): void {
		const view = target.viewRef.get();
		if (!view) {
			Trace.write(`_initDefaultNativeValue not executed to view because ".viewRef" is cleared`, Trace.categories.Animation, Trace.messageType.warn);

			return;
		}

		const defaultValueKey = this.defaultValueKey;

		if (!(defaultValueKey in target)) {
			const getDefault = this.getDefault;
			const actualDefaultValue = isFunction(this.defaultValue) ? this.defaultValue(this, view) : this.defaultValue;
			target[defaultValueKey] = view[getDefault] ? view[getDefault]() : actualDefaultValue;
		}
	}

	public static _getByCssName(name: string): CssAnimationProperty<any, any> {
		return this.properties[name];
	}

	public static _getPropertyNames(): string[] {
		return Object.keys(CssAnimationProperty.properties);
	}

	public isSet(instance: T): boolean {
		return instance[this.source] !== ValueSource.Default;
	}
}
CssAnimationProperty.prototype.isStyleProperty = true;

function setCssInheritedFunc<T extends Style, U>(property: InheritedCssProperty<T, U>, valueSource: ValueSource) {
	const isLocalWrite = valueSource === ValueSource.Local;
	// Default is only used by the cascade below, to reset a child that inherited this value.
	const origin: PropertyChangeOrigin = isLocalWrite ? 'script' : valueSource === ValueSource.Css ? 'css' : 'inherited';

	return function (this: T, boxedValue: any): void {
		const view = this.viewRef.get();
		if (!view) {
			Trace.write(`${boxedValue} not set to view's property because ".viewRef" is cleared`, Trace.categories.Style, Trace.messageType.warn);

			return;
		}
		if (isLocalWrite) {
			this._localValueVersion++;
		}
		const key = property.key;
		const defaultValue = property.defaultValue;
		const actualDefaultValue = isFunction(defaultValue) ? defaultValue(property, view) : defaultValue;
		const sourceKey = property.sourceKey;
		const propertyName = property.name;

		let reset = isResetValue(boxedValue) || boxedValue === '';
		let newValueSource = valueSource;
		if (reset && isLocalWrite) {
			// Releasing a local value falls back to what the cascade last resolved.
			const cssValue = cascadedCssValue(view, property.cssLocalName);
			if (cssValue !== undefined) {
				boxedValue = cssValue;
				newValueSource = ValueSource.Css;
				reset = false;
			}
		}
		const currentValueSource: number = this[sourceKey] || ValueSource.Default;
		if (reset) {
			// If we want to reset cssValue and we have localValue - return;
			if (valueSource === ValueSource.Css && currentValueSource === ValueSource.Local) {
				return;
			}
		} else {
			if (currentValueSource > valueSource) {
				return;
			}
		}

		const oldValue = <U>(key in this ? this[key] : actualDefaultValue);
		let value: U;
		let unsetNativeValue = false;
		if (reset) {
			const parentStyle = view.parent ? view.parent.style : null;

			// If value is not initial or unset and view has a parent that has non-default value, use it as the reset value.
			if (boxedValue !== 'initial' && parentStyle && parentStyle[sourceKey] > ValueSource.Default) {
				value = parentStyle[propertyName];
				this[sourceKey] = ValueSource.Inherited;
				this[key] = value;
			} else {
				value = actualDefaultValue;
				delete this[sourceKey];
				delete this[key];
				unsetNativeValue = true;
			}
		} else {
			this[sourceKey] = newValueSource;
			if (property.valueConverter && typeof boxedValue === 'string') {
				value = property.valueConverter(boxedValue);
			} else {
				value = boxedValue;
			}
			this[key] = value;
		}

		const changed: boolean = property.equalityComparer ? !property.equalityComparer(oldValue, value, this) : oldValue !== value;

		if (changed) {
			const setNative = property.setNative;
			const defaultValueKey = property.defaultValueKey;
			const eventName = property.eventName;
			const getDefault = property.getDefault;
			if (property.valueChanged) {
				property.valueChanged(this, oldValue, value);
			}

			if (view[setNative]) {
				if (view._suspendNativeUpdatesCount) {
					view._suspendedUpdates?.set(propertyName, property);
				} else {
					if (unsetNativeValue) {
						if (defaultValueKey in this) {
							view[setNative](this[defaultValueKey]);
						} else {
							view[setNative](actualDefaultValue);
						}
					} else {
						if (!(defaultValueKey in this)) {
							this[defaultValueKey] = view[getDefault] ? view[getDefault]() : actualDefaultValue;
						}

						view[setNative](value);
					}
				}
			}

			if ((!__UI_USE_EXTERNAL_RENDERER__ || !view._suspendNativeUpdatesCount) && this.hasListeners(eventName)) {
				this.notify<PropertyChangeData>({
					object: this,
					eventName,
					propertyName,
					value,
					oldValue,
					origin,
				});
			}

			if (property.affectsLayout) {
				view.requestLayout();
			}

			view.eachChild((child) => {
				const childStyle = child.style;
				const childValueSource = childStyle[sourceKey] || ValueSource.Default;
				if (reset) {
					if (childValueSource === ValueSource.Inherited) {
						property.setDefaultValue.call(childStyle, unsetValue);
					}
				} else {
					if (childValueSource <= ValueSource.Inherited) {
						property.setInheritedValue.call(childStyle, value);
					}
				}

				return true;
			});
		}
	};
}

export class InheritedCssProperty<T extends Style, U> extends CssProperty<T, U> implements InheritedCssProperty<T, U> {
	public setInheritedValue: (value: U) => void;
	public setDefaultValue: (value: U) => void;
	public static properties: {
		[cssName: string]: InheritedCssProperty<any, any>;
	} = {};
	constructor(options: CssPropertyOptions<T, U>) {
		super(options);
		const propertyName = options.name;
		InheritedCssProperty.properties[propertyName] = this;

		this.setDefaultValue = setCssInheritedFunc(this, ValueSource.Default);
		this.setInheritedValue = setCssInheritedFunc(this, ValueSource.Inherited);
		this.cssValueDescriptor.set = setCssInheritedFunc(this, ValueSource.Css);
		this.localValueDescriptor.set = setCssInheritedFunc(this, ValueSource.Local);
		inheritableCssProperties.push(this);
	}
}

function setShorthandFunc<T extends Style, U>(property: ShorthandProperty<T, U>, valueSource: ValueSource) {
	return function (this: T, newValue: any): void {
		const view = this.viewRef.get();
		if (!view) {
			Trace.write(`setLocalValue not executed to view because ".viewRef" is cleared`, Trace.categories.Animation, Trace.messageType.warn);

			return;
		}

		view._batchUpdate(() => {
			for (const [p, v] of property.converter(newValue)) {
				if (valueSource === ValueSource.Css) {
					this[p.cssName] = v;
				} else {
					this[p.name] = v;
				}
			}
		});
	};
}
export class ShorthandProperty<T extends Style, P> implements ShorthandProperty<T, P> {
	private registered: boolean;

	public readonly key: symbol;
	public readonly name: string;
	public readonly cssName: string;
	public readonly cssLocalName: string;

	protected readonly cssValueDescriptor: PropertyDescriptor;
	protected readonly localValueDescriptor: PropertyDescriptor;
	readonly converter: (value: string | P) => [CssProperty<any, any> | CssAnimationProperty<any, any>, any][];
	public overrideHandlers: (options: ShorthandPropertyOptions<P>) => void;
	public readonly sourceKey: symbol;

	public static properties: {
		[cssName: string]: ShorthandProperty<any, any>;
	} = {};

	constructor(options: ShorthandPropertyOptions<P>) {
		this.overrideHandlers = overrideHandlers(this);
		this.overrideHandlers(options);
		const key = Symbol(this.name + ':propertyKey');
		ShorthandProperty.properties[this.name] = this;
		this.key = key;
		cssShorthandConverters.set(options.cssName, options.converter as (value: string) => [any, any][]);
		cssShorthandsVersion++;

		this.cssValueDescriptor = {
			enumerable: true,
			configurable: true,
			get: options.getter,
			set: setShorthandFunc(this, ValueSource.Css),
		};

		this.localValueDescriptor = {
			enumerable: true,
			configurable: true,
			get: options.getter,
			set: setShorthandFunc(this, ValueSource.Local),
		};

		cssSymbolPropertyMap[key] = this;
	}

	public register(cls: typeof Style): void {
		if (this.registered) {
			throw new Error(`Property ${this.name} already registered.`);
		}

		this.registered = true;
		Object.defineProperty(cls.prototype, this.name, this.localValueDescriptor);
		Object.defineProperty(cls.prototype, this.cssName, this.cssValueDescriptor);
		if (this.cssLocalName !== this.cssName) {
			Object.defineProperty(cls.prototype, this.cssLocalName, this.localValueDescriptor);
		}

		// Nothing is defined on `PropertyBag`: shorthands are expanded while parsing,
		// and the var()/calc() ones that do reach the bag must stay unconverted.
	}
}

function inheritablePropertyValuesOn<T extends InheritedProperty<any, any> | InheritedCssProperty<any, any>>(view: ViewBase | Style, properties: Array<T>): Array<{ property: T; value: any }> {
	const array = new Array<{
		property: T;
		value: any;
	}>();
	for (const prop of properties) {
		const sourceKey = prop.sourceKey;
		const valueSource: number = view[sourceKey] || ValueSource.Default;
		if (valueSource !== ValueSource.Default) {
			// use prop.name as it will return value or default value.
			// prop.key will return undefined if property is set the same value as default one.
			array.push({ property: prop, value: view[prop.name] });
		}
	}

	return array;
}

type PropertyInterface = Property<ViewBase, any> | CssProperty<Style, any> | CssAnimationProperty<Style, any>;

export const initNativeView = profile('"properties".initNativeView', function initNativeView(view: ViewBase): void {
	if (view._suspendNativeUpdatesCount) {
		return;
	}
	const wasSuspended = view.suspendRequestLayout;
	view.suspendRequestLayout = true;

	if (view._suspendedUpdates) {
		applyPendingNativeSetters(view);
		view._suspendedUpdates.clear();
	} else {
		// this case can happen for example after a _teardownUI / _setupUI.
		// in this case style props are already set to the right values
		// so they wont trigger a change => _suspendedUpdates
		// so we need to iterate over them all (slow but not that slow)
		applyAllNativeSetters(view);
	}

	// if the view requestLayout was not suspended before
	// it means we can request a layout if needed.
	// will be done after otherwise
	view.suspendRequestLayout = wasSuspended;
	if (!wasSuspended) {
		view.requestlayoutIfNeeded();
	}
});

export function applyPendingNativeSetters(view: ViewBase): void {
	// TODO: Check what happens if a view was suspended and its value was reset, or set back to default!
	view._suspendedUpdates.forEach((property, propertyName) => {
		const setNative = property.setNative;
		if (view[setNative]) {
			const { getDefault, isStyleProperty, defaultValueKey, defaultValue } = property;
			const actualDefaultValue = isFunction(defaultValue) ? defaultValue(property, view) : defaultValue;
			let value;
			if (isStyleProperty) {
				const style = view.style;
				if ((<CssProperty<Style, any> | CssAnimationProperty<Style, any>>property).isSet(view.style)) {
					if (!(defaultValueKey in style)) {
						style[defaultValueKey] = view[getDefault] ? view[getDefault]() : actualDefaultValue;
					}
					value = view.style[propertyName];
				} else {
					value = style[defaultValueKey];
				}
			} else {
				if ((<Property<ViewBase, any>>property).isSet(view)) {
					if (!(defaultValueKey in view)) {
						view[defaultValueKey] = view[getDefault] ? view[getDefault]() : actualDefaultValue;
					}
					value = view[propertyName];
				} else {
					value = view[defaultValueKey];
				}
			}
			// TODO: Only if value is different from the value before the scope was created.
			view[setNative](value);
		}
	});
}

export function applyAllNativeSetters(view: ViewBase): void {
	let symbols = Object.getOwnPropertySymbols(view);
	for (const symbol of symbols) {
		const property: Property<any, any> = symbolPropertyMap[symbol];
		if (!property) {
			continue;
		}

		const setNative = property.setNative;
		const getDefault = property.getDefault;
		if (setNative in view) {
			const defaultValueKey = property.defaultValueKey;
			if (!(defaultValueKey in view)) {
				const actualDefaultValue = isFunction(property.defaultValue) ? property.defaultValue(view) : property.defaultValue;
				view[defaultValueKey] = view[getDefault] ? view[getDefault]() : actualDefaultValue;
			}

			const value = view[symbol];
			view[setNative](value);
		}
	}

	const style = view.style;
	symbols = Object.getOwnPropertySymbols(style);
	for (const symbol of symbols) {
		const property: CssProperty<any, any> = cssSymbolPropertyMap[symbol];
		if (!property) {
			continue;
		}

		if (view[property.setNative]) {
			const defaultValueKey = property.defaultValueKey;
			if (!(defaultValueKey in style)) {
				const actualDefaultValue = isFunction(property.defaultValue) ? property.defaultValue(view) : property.defaultValue;
				style[defaultValueKey] = view[property.getDefault] ? view[property.getDefault]() : actualDefaultValue;
			}

			const value = style[symbol];
			view[property.setNative](value);
		}
	}
}

export function resetNativeView(view: ViewBase): void {
	let symbols = Object.getOwnPropertySymbols(view);
	for (const symbol of symbols) {
		const property: Property<any, any> = symbolPropertyMap[symbol];
		if (!property) {
			continue;
		}

		if (view[property.setNative]) {
			if (property.defaultValueKey in view) {
				view[property.setNative](view[property.defaultValueKey]);
			} else {
				const actualDefaultValue = isFunction(property.defaultValue) ? property.defaultValue(property, view) : property.defaultValue;
				view[property.setNative](actualDefaultValue);
			}
		}
	}

	const style = view.style;

	symbols = Object.getOwnPropertySymbols(style);
	for (const symbol of symbols) {
		const property: CssProperty<any, any> = cssSymbolPropertyMap[symbol];
		if (!property) {
			continue;
		}

		if (view[property.setNative]) {
			if (property.defaultValueKey in style) {
				view[property.setNative](style[property.defaultValueKey]);
			} else {
				const actualDefaultValue = isFunction(property.defaultValue) ? property.defaultValue(property, view) : property.defaultValue;
				view[property.setNative](actualDefaultValue);
			}
		}
	}
}

export function clearInheritedProperties(view: ViewBase): void {
	for (const prop of inheritableProperties) {
		const sourceKey = prop.sourceKey;
		if (view[sourceKey] === ValueSource.Inherited) {
			prop.set.call(view, unsetValue);
		}
	}

	const style = view.style;
	for (const prop of inheritableCssProperties) {
		const sourceKey = prop.sourceKey;
		if (style[sourceKey] === ValueSource.Inherited) {
			prop.setInheritedValue.call(style, unsetValue);
		}
	}
}

export function resetCSSProperties(style: Style): void {
	const symbols = Object.getOwnPropertySymbols(style);
	for (const symbol of symbols) {
		let cssProperty;
		if ((cssProperty = cssSymbolPropertyMap[symbol])) {
			style[cssProperty.cssName] = unsetValue;
			if (cssProperty instanceof CssAnimationProperty) {
				style[cssProperty.keyframe] = unsetValue;
			}
		}
	}
}

export function propagateInheritableCssProperties(style: Style, child: Style) {
	return _propagateInheritableProperties(style, child, inheritableCssProperties);
}
export function propagateInheritableProperties(view: ViewBase, child: ViewBase) {
	return _propagateInheritableProperties(view, child, inheritableProperties);
}
function _propagateInheritableProperties<U extends ViewBase | Style, T extends InheritedProperty<any, any> | InheritedCssProperty<any, any>>(view: U, child: U, properties: Array<T>): void {
	const inheritablePropertyValues = inheritablePropertyValuesOn(view, properties);
	for (const pair of inheritablePropertyValues) {
		const prop = pair.property;
		const sourceKey = prop.sourceKey;
		const currentValueSource: number = child[sourceKey] || ValueSource.Default;
		if (currentValueSource <= ValueSource.Inherited) {
			prop.setInheritedValue.call(child, pair.value);
		}
	}
}

export function getSetProperties(view: ViewBase): [string, any][] {
	const result = [];

	const ownProps = Object.getOwnPropertyNames(view);
	for (let i = 0; i < ownProps.length; i++) {
		const prop = ownProps[i];
		result.push([prop, view[prop]]);
	}

	const symbols = Object.getOwnPropertySymbols(view);
	for (const symbol of symbols) {
		const property = symbolPropertyMap[symbol];
		if (!property) {
			continue;
		}

		const value = view[property.key];
		result.push([property.name, value]);
	}

	return result;
}

export function getComputedCssValues(view: ViewBase): [string, any][] {
	const result = [];
	const style = view.style;
	for (const prop of cssPropertyNames) {
		if (prop !== undefined && prop !== null) {
			result.push([prop, style[prop]]);
		}
	}

	// Add these to enable box model in chrome-devtools styles tab
	result.push(['top', 'auto']);
	result.push(['left', 'auto']);
	result.push(['bottom', 'auto']);
	result.push(['right', 'auto']);

	return result;
}
