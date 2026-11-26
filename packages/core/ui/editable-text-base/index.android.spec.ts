import { describe, it, expect, vi } from 'vitest';

vi.hoisted(() => {
	const g = globalThis as any;
	g.android = {
		...g.android,
		text: {
			...g.android?.text,
			InputType: { TYPE_NULL: 0, TYPE_CLASS_TEXT: 1, TYPE_CLASS_NUMBER: 2, TYPE_CLASS_PHONE: 3, TYPE_TEXT_VARIATION_EMAIL_ADDRESS: 32 },
		},
	};
});

import { EditableTextBase } from './index.android';
import { editableProperty, keyboardTypeProperty, selectableProperty } from './editable-text-base-common';

function inputTypeFor(value: unknown): number {
	const target = { _setInputType: vi.fn() };
	(EditableTextBase.prototype as any)[keyboardTypeProperty.setNative].call(target, value);
	return target._setInputType.mock.calls[0][0];
}

describe('EditableTextBase keyboardType (Android)', () => {
	const InputType = (globalThis as any).android.text.InputType;

	it('uses the text keyboard for null and undefined', () => {
		expect(inputTypeFor(null)).toBe(InputType.TYPE_CLASS_TEXT);
		expect(inputTypeFor(undefined)).toBe(InputType.TYPE_CLASS_TEXT);
	});

	it('uses the text keyboard for unknown names', () => {
		expect(inputTypeFor('text')).toBe(InputType.TYPE_CLASS_TEXT);
	});

	it('passes native input type numbers through, including TYPE_NULL', () => {
		expect(inputTypeFor(InputType.TYPE_CLASS_PHONE)).toBe(InputType.TYPE_CLASS_PHONE);
		expect(inputTypeFor('3')).toBe(InputType.TYPE_CLASS_PHONE);
		expect(inputTypeFor(0)).toBe(InputType.TYPE_NULL);
	});

	it('maps named keyboard types', () => {
		expect(inputTypeFor('integer')).toBe(InputType.TYPE_CLASS_NUMBER);
	});
});

describe('EditableTextBase editable and selectable (Android)', () => {
	function applyEditable(editable: boolean, selectable: boolean) {
		const nativeView = {
			getKeyListener: vi.fn(),
			setKeyListener: vi.fn(),
			setFocusable: vi.fn(),
			setFocusableInTouchMode: vi.fn(),
			setLongClickable: vi.fn(),
			setClickable: vi.fn(),
			setShowSoftInputOnFocus: vi.fn(),
			setTextIsSelectable: vi.fn(),
		};
		const target = Object.create(EditableTextBase.prototype);
		Object.defineProperties(target, {
			nativeTextViewProtected: { value: nativeView },
			editable: { value: editable },
			selectable: { value: selectable },
		});
		(EditableTextBase.prototype as any)[editableProperty.setNative].call(target, editable);
		return { target, nativeView };
	}

	it('keeps read-only text selectable', () => {
		const { nativeView } = applyEditable(false, true);
		expect(nativeView.setKeyListener).toHaveBeenCalledWith(null);
		expect(nativeView.setFocusable).toHaveBeenCalledWith(true);
		expect(nativeView.setLongClickable).toHaveBeenCalledWith(true);
		expect(nativeView.setShowSoftInputOnFocus).toHaveBeenCalledWith(false);
	});

	it('makes read-only text not selectable when asked', () => {
		const { nativeView } = applyEditable(false, false);
		expect(nativeView.setFocusable).toHaveBeenCalledWith(false);
		expect(nativeView.setLongClickable).toHaveBeenCalledWith(false);
	});

	it('shows the keyboard of editable text', () => {
		const { nativeView } = applyEditable(true, false);
		expect(nativeView.setFocusable).toHaveBeenCalledWith(true);
		expect(nativeView.setShowSoftInputOnFocus).toHaveBeenCalledWith(true);
	});

	it('keeps the editable and selectable state when selectable changes', () => {
		const { target, nativeView } = applyEditable(false, true);
		nativeView.setFocusable.mockClear();
		(EditableTextBase.prototype as any)[selectableProperty.setNative].call(target, true);
		expect(nativeView.setTextIsSelectable).toHaveBeenCalledWith(true);
		expect(nativeView.setFocusable).toHaveBeenLastCalledWith(true);
	});
});
