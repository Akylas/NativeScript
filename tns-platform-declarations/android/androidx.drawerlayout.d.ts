declare module androidx {
	export module drawerlayout {
		export module widget {
			export class DrawerLayout {
				public static class: java.lang.Class<androidx.drawerlayout.widget.DrawerLayout>;
				public static STATE_IDLE: number;
				public static STATE_DRAGGING: number;
				public static STATE_SETTLING: number;
				public static LOCK_MODE_UNLOCKED: number;
				public static LOCK_MODE_LOCKED_CLOSED: number;
				public static LOCK_MODE_LOCKED_OPEN: number;
				public static LOCK_MODE_UNDEFINED: number;
				public setStatusBarBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public closeDrawer(param0: number): void;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public getDrawerTitle(param0: number): string;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public closeDrawer(param0: number, param1: boolean): void;
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public setScrimColor(param0: number): void;
				public setChildInsets(param0: any, param1: boolean): void;
				public setDrawerShadow(param0: number, param1: number): void;
				public closeDrawer(param0: globalAndroid.view.View, param1: boolean): void;
				public setStatusBarBackgroundColor(param0: number): void;
				public closeDrawer(param0: globalAndroid.view.View): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setDrawerLockMode(param0: number, param1: number): void;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public getStatusBarBackgroundDrawable(): globalAndroid.graphics.drawable.Drawable;
				public getDrawerLockMode(param0: number): number;
				public setStatusBarBackground(param0: number): void;
				public addFocusables(param0: java.util.ArrayList<globalAndroid.view.View>, param1: number, param2: number): void;
				public onDetachedFromWindow(): void;
				public addDrawerListener(param0: androidx.drawerlayout.widget.DrawerLayout.DrawerListener): void;
				public openDrawer(param0: globalAndroid.view.View): void;
				public isDrawerVisible(param0: number): boolean;
				public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
				public getDrawerLockMode(param0: globalAndroid.view.View): number;
				public openDrawer(param0: globalAndroid.view.View, param1: boolean): void;
				public onRtlPropertiesChanged(param0: number): void;
				public openDrawer(param0: number, param1: boolean): void;
				public generateLayoutParams(param0: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
				public setDrawerShadow(param0: globalAndroid.graphics.drawable.Drawable, param1: number): void;
				public setDrawerElevation(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getDrawerElevation(): number;
				public setDrawerLockMode(param0: number, param1: globalAndroid.view.View): void;
				public isDrawerOpen(param0: number): boolean;
				public dispatchGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public removeDrawerListener(param0: androidx.drawerlayout.widget.DrawerLayout.DrawerListener): void;
				public requestLayout(): void;
				public constructor(param0: globalAndroid.content.Context);
				public setDrawerLockMode(param0: number): void;
				public setDrawerTitle(param0: number, param1: string): void;
				public closeDrawers(): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public isDrawerOpen(param0: globalAndroid.view.View): boolean;
				public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public computeScroll(): void;
				public setDrawerListener(param0: androidx.drawerlayout.widget.DrawerLayout.DrawerListener): void;
				public isDrawerVisible(param0: globalAndroid.view.View): boolean;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public onMeasure(param0: number, param1: number): void;
				public openDrawer(param0: number): void;
				public drawChild(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.view.View, param2: number): boolean;
				public onAttachedToWindow(): void;
				public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
			}
			export module DrawerLayout {
				export class androidxdrawerlayoutwidgetDrawerLayoutAccessibilityDelegate {
					public static class: java.lang.Class<androidx.drawerlayout.widget.DrawerLayout.AccessibilityDelegate>;
					public onInitializeAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public onRequestSendAccessibilityEvent(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				}
				export type AccessibilityDelegate = androidxdrawerlayoutwidgetDrawerLayoutAccessibilityDelegate
				export class ChildAccessibilityDelegate {
					public static class: java.lang.Class<androidx.drawerlayout.widget.DrawerLayout.ChildAccessibilityDelegate>;
					public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				}
				export class DrawerListener {
					public static class: java.lang.Class<androidx.drawerlayout.widget.DrawerLayout.DrawerListener>;
					/**
					 * Constructs a new instance of the androidx.drawerlayout.widget.DrawerLayout$DrawerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDrawerSlide(param0: globalAndroid.view.View, param1: number): void;
						onDrawerOpened(param0: globalAndroid.view.View): void;
						onDrawerClosed(param0: globalAndroid.view.View): void;
						onDrawerStateChanged(param0: number): void;
					});
					public constructor();
					public onDrawerClosed(param0: globalAndroid.view.View): void;
					public onDrawerSlide(param0: globalAndroid.view.View, param1: number): void;
					public onDrawerStateChanged(param0: number): void;
					public onDrawerOpened(param0: globalAndroid.view.View): void;
				}
				export class LayoutParams {
					public static class: java.lang.Class<androidx.drawerlayout.widget.DrawerLayout.LayoutParams>;
					public gravity: number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: androidx.drawerlayout.widget.DrawerLayout.LayoutParams);
					public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(param0: number, param1: number, param2: number);
					public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
					public constructor(param0: number, param1: number);
				}
				export class SavedState {
					public static class: java.lang.Class<androidx.drawerlayout.widget.DrawerLayout.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.drawerlayout.widget.DrawerLayout.SavedState>;
					public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public constructor(param0: globalAndroid.os.Parcelable);
				}
				export abstract class SimpleDrawerListener extends androidx.drawerlayout.widget.DrawerLayout.DrawerListener {
					public static class: java.lang.Class<androidx.drawerlayout.widget.DrawerLayout.SimpleDrawerListener>;
					public onDrawerClosed(param0: globalAndroid.view.View): void;
					public constructor();
					public onDrawerSlide(param0: globalAndroid.view.View, param1: number): void;
					public onDrawerStateChanged(param0: number): void;
					public onDrawerOpened(param0: globalAndroid.view.View): void;
				}
				export class ViewDragCallback {
					public static class: java.lang.Class<androidx.drawerlayout.widget.DrawerLayout.ViewDragCallback>;
					public removeCallbacks(): void;
					public setDragger(param0: androidx.customview.widget.ViewDragHelper): void;
					public onEdgeTouched(param0: number, param1: number): void;
					public onEdgeDragStarted(param0: number, param1: number): void;
					public onViewCaptured(param0: globalAndroid.view.View, param1: number): void;
					public clampViewPositionHorizontal(param0: globalAndroid.view.View, param1: number, param2: number): number;
					public onViewPositionChanged(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public onViewDragStateChanged(param0: number): void;
					public getViewHorizontalDragRange(param0: globalAndroid.view.View): number;
					public onEdgeLock(param0: number): boolean;
					public clampViewPositionVertical(param0: globalAndroid.view.View, param1: number, param2: number): number;
					public tryCaptureView(param0: globalAndroid.view.View, param1: number): boolean;
					public onViewReleased(param0: globalAndroid.view.View, param1: number, param2: number): void;
				}
			}
		}
	}
}

//Generics information:

