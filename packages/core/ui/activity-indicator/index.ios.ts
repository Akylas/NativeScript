import { ActivityIndicatorBase, busyProperty } from './activity-indicator-common';
import { colorProperty } from '../styling/style-properties';
import { Color } from '../../color';
import { SDK_VERSION } from '../../utils';

export * from './activity-indicator-common';

export class ActivityIndicator extends ActivityIndicatorBase {
	declare nativeViewProtected: UIActivityIndicatorView;

	private _activityIndicatorViewStyle = SDK_VERSION <= 12 || !UIActivityIndicatorViewStyle.Medium ? UIActivityIndicatorViewStyle.Gray : UIActivityIndicatorViewStyle.Medium;

	createNativeView() {
		const viewStyle = this._activityIndicatorViewStyle;
		const view = UIActivityIndicatorView.alloc().initWithActivityIndicatorStyle(viewStyle);
		view.hidesWhenStopped = true;

		return view;
	}

	// @ts-ignore
	get ios(): UIActivityIndicatorView {
		return this.nativeViewProtected;
	}

	[busyProperty.getDefault](): boolean {
		if ((<any>this.nativeViewProtected).isAnimating) {
			return (<any>this.nativeViewProtected).isAnimating();
		} else {
			return this.nativeViewProtected.animating;
		}
	}
	[busyProperty.setNative](value: boolean) {
		const nativeView = this.nativeViewProtected;
		if (value) {
			nativeView.startAnimating();
		} else {
			nativeView.stopAnimating();
		}

		if (nativeView.hidesWhenStopped) {
			this.requestLayout();
		}
	}

	[colorProperty.getDefault](): UIColor {
		return this.nativeViewProtected.color;
	}
	[colorProperty.setNative](value: UIColor | Color) {
		this.nativeViewProtected.color = value instanceof Color ? value.ios : value;
	}
}
