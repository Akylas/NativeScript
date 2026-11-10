import type { ScrollEventData } from './scroll-view-common';
import { ScrollViewBase, scrollBarIndicatorVisibleProperty, isScrollEnabledProperty, iosContentInsetAdjustmentBehaviorProperty, iosScrollEdgeEffectProperty } from './scroll-view-common';
import { layout } from '../../utils';
import { SDK_VERSION } from '../../utils/constants';
import { View } from '../core/view';
import { IOSHelper, ScrollEdgeContainers } from '../core/view/view-helper';
import { CoreTypes } from '../enums';

export * from './scroll-view-common';

@NativeClass
class UIScrollViewDelegateImpl extends NSObject implements UIScrollViewDelegate {
	private _owner: WeakRef<ScrollView>;

	public static initWithOwner(owner: WeakRef<ScrollView>): UIScrollViewDelegateImpl {
		const impl = <UIScrollViewDelegateImpl>UIScrollViewDelegateImpl.new();
		impl._owner = owner;

		return impl;
	}

	public scrollViewDidScroll(sv: UIScrollView): void {
		const owner = this._owner?.deref();
		if (owner) {
			owner.notify(<ScrollEventData>{
				object: owner,
				eventName: 'scroll',
				scrollX: owner.horizontalOffset,
				scrollY: owner.verticalOffset,
			});
		}
	}

	public scrollViewDidChangeAdjustedContentInset(sv: UIScrollView): void {
		this._owner?.deref()?.onAdjustedContentInsetChanged();
	}

	public static ObjCProtocols = [UIScrollViewDelegate];
}

export class ScrollView extends ScrollViewBase {
	public nativeViewProtected: UIScrollView;

	private _contentMeasuredWidth = 0;
	private _contentMeasuredHeight = 0;
	private _layoutAdjustedInset: UIEdgeInsets;
	private _isFirstLayout: boolean = true;
	private _delegate: UIScrollViewDelegateImpl;
	private _scrollEdgeContainers: ScrollEdgeContainers;

	public createNativeView() {
		return UIScrollView.new();
	}

	initNativeView() {
		super.initNativeView();
		this.updateScrollBarVisibility(this.scrollBarIndicatorVisible);
		this._setNativeClipToBounds();
		// UIKit defaults to `automatic` while the property defaults to `never`, and
		// setNative only runs for non-default values — so apply it up front.
		this.updateContentInsetAdjustmentBehavior(this.iosContentInsetAdjustmentBehavior);
		this._scrollEdgeContainers?.attach();
	}

	public disposeNativeView() {
		this._scrollEdgeContainers?.detach();
		super.disposeNativeView();

		this._isFirstLayout = true;
	}

	public addScrollEdgeContainer(view: View, edge: CoreTypes.ScrollEdgeType): void {
		if (!this._scrollEdgeContainers) {
			this._scrollEdgeContainers = new ScrollEdgeContainers(this);
		}
		this._scrollEdgeContainers.add(view, edge);
	}

	public removeScrollEdgeContainer(view: View): void {
		this._scrollEdgeContainers?.remove(view);
	}

	_setNativeClipToBounds() {
		if (!this.nativeViewProtected) {
			return;
		}
		// Always set clipsToBounds for scroll-view
		this.nativeViewProtected.clipsToBounds = true;
	}

	protected attachNative() {
		if (!this._delegate) {
			this._delegate = UIScrollViewDelegateImpl.initWithOwner(new WeakRef(this));
			this.nativeViewProtected.delegate = this._delegate;
		}
	}

	protected detachNative() {
		if (this._delegate) {
			if (this.nativeViewProtected) {
				this.nativeViewProtected.delegate = null;
			}
			this._delegate = null;
		}
	}

	protected updateScrollBarVisibility(value) {
		if (!this.nativeViewProtected) {
			return;
		}
		if (this.orientation === 'horizontal') {
			this.nativeViewProtected.showsHorizontalScrollIndicator = value;
		} else {
			this.nativeViewProtected.showsVerticalScrollIndicator = value;
		}
	}

	protected updateContentInsetAdjustmentBehavior(value: 'never' | 'automatic' | 'scrollableAxes' | 'always') {
		if (!this.nativeViewProtected || SDK_VERSION <= 10) {
			return;
		}
		// https://developer.apple.com/documentation/uikit/uiscrollview/contentinsetadjustmentbehavior
		let behavior = UIScrollViewContentInsetAdjustmentBehavior.Never;
		if (value === 'automatic') {
			behavior = UIScrollViewContentInsetAdjustmentBehavior.Automatic;
		} else if (value === 'scrollableAxes') {
			behavior = UIScrollViewContentInsetAdjustmentBehavior.ScrollableAxes;
		} else if (value === 'always') {
			behavior = UIScrollViewContentInsetAdjustmentBehavior.Always;
		}
		this.nativeViewProtected.contentInsetAdjustmentBehavior = behavior;
	}

	get horizontalOffset(): number {
		return this.nativeViewProtected ? this.nativeViewProtected.contentOffset.x : 0;
	}

	get verticalOffset(): number {
		return this.nativeViewProtected ? this.nativeViewProtected.contentOffset.y : 0;
	}

	// Each is the largest offset a scroll reaches, end inset included, so scrolling to it shows the end of the
	// content above a keyboard or docked bar that sets contentInset.bottom.
	get scrollableWidth(): number {
		if (!this.nativeViewProtected || this.orientation !== 'horizontal') {
			return 0;
		}

		const nativeView = this.nativeViewProtected;
		return Math.max(0, nativeView.contentSize.width + nativeView.adjustedContentInset.right - nativeView.bounds.size.width);
	}

	get scrollableHeight(): number {
		if (!this.nativeViewProtected || this.orientation !== 'vertical') {
			return 0;
		}

		const nativeView = this.nativeViewProtected;
		return Math.max(0, nativeView.contentSize.height + nativeView.adjustedContentInset.bottom - nativeView.bounds.size.height);
	}

	[isScrollEnabledProperty.getDefault](): boolean {
		return this.nativeViewProtected.scrollEnabled;
	}
	[isScrollEnabledProperty.setNative](value: boolean) {
		this.nativeViewProtected.scrollEnabled = value;
	}

	[scrollBarIndicatorVisibleProperty.getDefault](): boolean {
		return true;
	}
	[scrollBarIndicatorVisibleProperty.setNative](value: boolean) {
		this.updateScrollBarVisibility(value);
	}

	[iosContentInsetAdjustmentBehaviorProperty.setNative](value: 'never' | 'automatic' | 'scrollableAxes' | 'always') {
		this.updateContentInsetAdjustmentBehavior(value);
	}

	[iosScrollEdgeEffectProperty.setNative](value: CoreTypes.ScrollEdgeEffectType) {
		IOSHelper.setScrollEdgeEffect(this.nativeViewProtected, value);
	}

	// The offset is set directly rather than through scrollRectToVisible with a
	// viewport-sized rect: that rect cannot fit inside a content inset, so UIKit
	// would land contentInset.bottom (or .right) past the requested offset. The
	// value is clamped to the range a user scroll can reach.
	public scrollToVerticalOffset(value: number, animated: boolean) {
		const nativeView = this.nativeViewProtected;
		if (nativeView && this.orientation === 'vertical' && this.isScrollEnabled) {
			const inset = nativeView.adjustedContentInset;
			const min = -inset.top;
			const max = Math.max(min, nativeView.contentSize.height + inset.bottom - nativeView.bounds.size.height);
			nativeView.setContentOffsetAnimated(CGPointMake(nativeView.contentOffset.x, Math.min(Math.max(value, min), max)), animated);
		}
	}

	public scrollToHorizontalOffset(value: number, animated: boolean) {
		const nativeView = this.nativeViewProtected;
		if (nativeView && this.orientation === 'horizontal' && this.isScrollEnabled) {
			const inset = nativeView.adjustedContentInset;
			const min = -inset.left;
			const max = Math.max(min, nativeView.contentSize.width + inset.right - nativeView.bounds.size.width);
			nativeView.setContentOffsetAnimated(CGPointMake(Math.min(Math.max(value, min), max), nativeView.contentOffset.y), animated);
		}
	}

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
		// Don't call measure because it will measure content twice.
		const width = layout.getMeasureSpecSize(widthMeasureSpec);
		const widthMode = layout.getMeasureSpecMode(widthMeasureSpec);

		const height = layout.getMeasureSpecSize(heightMeasureSpec);
		const heightMode = layout.getMeasureSpecMode(heightMeasureSpec);

		const child = this.layoutView;
		this._contentMeasuredWidth = this.effectiveMinWidth;
		this._contentMeasuredHeight = this.effectiveMinHeight;

		if (child) {
			let childSize: { measuredWidth: number; measuredHeight: number };
			if (this.orientation === 'vertical') {
				childSize = View.measureChild(this, child, widthMeasureSpec, layout.makeMeasureSpec(0, layout.UNSPECIFIED));
			} else {
				childSize = View.measureChild(this, child, layout.makeMeasureSpec(0, layout.UNSPECIFIED), heightMeasureSpec);
			}

			this._contentMeasuredWidth = Math.max(childSize.measuredWidth, this.effectiveMinWidth);
			this._contentMeasuredHeight = Math.max(childSize.measuredHeight, this.effectiveMinHeight);
		}

		const widthAndState = View.resolveSizeAndState(this._contentMeasuredWidth, width, widthMode, 0);
		const heightAndState = View.resolveSizeAndState(this._contentMeasuredHeight, height, heightMode, 0);

		this.setMeasuredDimension(widthAndState, heightAndState);
	}

	public onLayout(left: number, top: number, right: number, bottom: number): void {
		const view = this.nativeViewProtected;
		if (!view) {
			return;
		}

		// When iOS adjusts content insets itself (the property, or a plugin like the app bar setting it on the native view), don't also subtract safe-area insets here —
		// doing both makes contentSize track the dynamic navbar height and causes scroll drift with large titles.
		const useIOSInsetAdjustment = SDK_VERSION > 10 && view.contentInsetAdjustmentBehavior !== UIScrollViewContentInsetAdjustmentBehavior.Never;
		const insets = useIOSInsetAdjustment ? { left: 0, top: 0, right: 0, bottom: 0 } : this.getSafeAreaInsets();

		// The viewport minus the insets UIKit adds itself (large title, toolbar): a content that fits there must not be scrollable.
		const adjustedInsets = useIOSInsetAdjustment ? view.adjustedContentInset : { left: 0, top: 0, right: 0, bottom: 0 };
		const adjustedWidth = layout.toDevicePixels(adjustedInsets.left + adjustedInsets.right);
		const adjustedHeight = layout.toDevicePixels(adjustedInsets.top + adjustedInsets.bottom);
		this._layoutAdjustedInset = adjustedInsets;

		let scrollWidth = right - left - insets.right - insets.left - adjustedWidth;
		let scrollHeight = bottom - top - insets.bottom - insets.top - adjustedHeight;

		let scrollInsetWidth = scrollWidth + insets.left + insets.right;
		let scrollInsetHeight = scrollHeight + insets.top + insets.bottom;

		if (this.orientation === 'horizontal') {
			scrollInsetWidth = Math.max(this._contentMeasuredWidth + insets.left + insets.right, scrollInsetWidth);
			scrollWidth = Math.max(this._contentMeasuredWidth, scrollWidth);
		} else {
			scrollInsetHeight = Math.max(this._contentMeasuredHeight + insets.top + insets.bottom, scrollInsetHeight);
			scrollHeight = Math.max(this._contentMeasuredHeight, scrollHeight);
		}

		view.contentSize = CGSizeMake(layout.toDeviceIndependentPixels(scrollInsetWidth), layout.toDeviceIndependentPixels(scrollInsetHeight));

		// RTL handling
		if (this.orientation === 'horizontal') {
			if (this._isFirstLayout) {
				this._isFirstLayout = false;

				if (this.direction === CoreTypes.LayoutDirection.rtl) {
					const scrollableWidth = scrollInsetWidth - this.getMeasuredWidth();
					if (scrollableWidth > 0) {
						view.contentOffset = CGPointMake(layout.toDeviceIndependentPixels(scrollableWidth), this.verticalOffset);
					}
				}
			}
		}

		View.layoutChild(this, this.layoutView, insets.left, insets.top, insets.left + scrollWidth, insets.top + scrollHeight);
	}

	/** the inset UIKit adds changes (large title collapsing, toolbar): a content that fits in the viewport follows it */
	public onAdjustedContentInsetChanged() {
		const view = this.nativeViewProtected;
		const inset = view?.adjustedContentInset;
		const laidOut = this._layoutAdjustedInset;
		if (!inset || !laidOut) {
			return;
		}
		const horizontal = this.orientation === 'horizontal';
		const laidOutSize = horizontal ? laidOut.left + laidOut.right : laidOut.top + laidOut.bottom;
		const size = horizontal ? inset.left + inset.right : inset.top + inset.bottom;
		if (size === laidOutSize) {
			return;
		}
		const viewport = horizontal ? view.bounds.size.width : view.bounds.size.height;
		const content = layout.toDeviceIndependentPixels(horizontal ? this._contentMeasuredWidth : this._contentMeasuredHeight);
		if (content <= viewport - Math.min(size, laidOutSize)) {
			this.requestLayout();
		}
	}

	public _onOrientationChanged() {
		this._isFirstLayout = true;
		this.updateScrollBarVisibility(this.scrollBarIndicatorVisible);
	}
}

ScrollView.prototype.recycleNativeView = 'auto';
