import { LayoutBaseCommon, clipToBoundsProperty, isPassThroughParentEnabledProperty } from './layout-base-common';
import { paddingInternalProperty } from '../styling/style-properties';
import { Length } from '../styling/length-shared';

export * from './layout-base-common';

export class LayoutBase extends LayoutBaseCommon {
	declare nativeViewProtected: org.nativescript.widgets.LayoutBase;

	[clipToBoundsProperty.getDefault](): boolean {
		return true;
	}
	[clipToBoundsProperty.setNative](value: boolean) {
		if ((<any>this.nativeViewProtected).setClipToBounds) {
			(<any>this.nativeViewProtected).setClipToBounds(value);
		}
		if (this.nativeViewProtected.setClipToOutline) {
			this.nativeViewProtected.setClipToOutline(value);
		}
	}

	[isPassThroughParentEnabledProperty.setNative](value: boolean) {
		this.nativeViewProtected.setPassThroughParent(value);
	}

	[paddingInternalProperty.setNative](_value: string) {
		const left = this.effectivePaddingLeft + Length.toDevicePixels(this.style.borderLeftWidth, 0);
		const top = this.effectivePaddingTop + Length.toDevicePixels(this.style.borderTopWidth, 0);
		const right = this.effectivePaddingRight + Length.toDevicePixels(this.style.borderRightWidth, 0);
		const bottom = this.effectivePaddingBottom + Length.toDevicePixels(this.style.borderBottomWidth, 0);
		this.nativeViewProtected.setPadding(left, top, right, bottom);
	}
}
