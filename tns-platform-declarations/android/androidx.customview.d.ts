declare module androidx {
	export module customview {
		export module view {
			export abstract class AbsSavedState {
				public static class: java.lang.Class<androidx.customview.view.AbsSavedState>;
				public static EMPTY_STATE: androidx.customview.view.AbsSavedState;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.customview.view.AbsSavedState>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getSuperState(): globalAndroid.os.Parcelable;
				public describeContents(): number;
				public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
				public constructor(param0: globalAndroid.os.Parcelable);
				public constructor(param0: globalAndroid.os.Parcel);
			}
		}
	}
}

declare module androidx {
	export module customview {
		export module widget {
			export abstract class ExploreByTouchHelper {
				public static class: java.lang.Class<androidx.customview.widget.ExploreByTouchHelper>;
				public static INVALID_ID: number;
				public static HOST_ID: number;
				public onVirtualViewKeyboardFocusChanged(param0: number, param1: boolean): void;
				public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				public invalidateVirtualView(param0: number): void;
				public onPerformActionForVirtualView(param0: number, param1: number, param2: globalAndroid.os.Bundle): boolean;
				public invalidateRoot(): void;
				public invalidateVirtualView(param0: number, param1: number): void;
				public requestKeyboardFocusForVirtualView(param0: number): boolean;
				public sendEventForVirtualView(param0: number, param1: number): boolean;
				public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public getFocusedVirtualView(): number;
				public getAccessibilityFocusedVirtualViewId(): number;
				public dispatchHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onInitializeAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onPopulateEventForVirtualView(param0: number, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onPopulateEventForHost(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public getKeyboardFocusedVirtualViewId(): number;
				public getAccessibilityNodeProvider(param0: globalAndroid.view.View): androidx.core.view.accessibility.AccessibilityNodeProviderCompat;
				public getVisibleVirtualViews(param0: java.util.List<java.lang.Integer>): void;
				public onPopulateNodeForHost(param0: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				public onPopulateNodeForVirtualView(param0: number, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				public onFocusChanged(param0: boolean, param1: number, param2: globalAndroid.graphics.Rect): void;
				public clearKeyboardFocusForVirtualView(param0: number): boolean;
				public constructor(param0: globalAndroid.view.View);
				public getVirtualViewAt(param0: number, param1: number): number;
			}
			export module ExploreByTouchHelper {
				export class MyNodeProvider {
					public static class: java.lang.Class<androidx.customview.widget.ExploreByTouchHelper.MyNodeProvider>;
					public performAction(param0: number, param1: number, param2: globalAndroid.os.Bundle): boolean;
					public findFocus(param0: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public createAccessibilityNodeInfo(param0: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
				}
			}
		}
	}
}

declare module androidx {
	export module customview {
		export module widget {
			export class FocusStrategy {
				public static class: java.lang.Class<androidx.customview.widget.FocusStrategy>;
				public static findNextFocusInAbsoluteDirection(param0: any, param1: androidx.customview.widget.FocusStrategy.CollectionAdapter<any,any>, param2: androidx.customview.widget.FocusStrategy.BoundsAdapter<any>, param3: any, param4: globalAndroid.graphics.Rect, param5: number): any;
				public static findNextFocusInRelativeDirection(param0: any, param1: androidx.customview.widget.FocusStrategy.CollectionAdapter<any,any>, param2: androidx.customview.widget.FocusStrategy.BoundsAdapter<any>, param3: any, param4: number, param5: boolean, param6: boolean): any;
			}
			export module FocusStrategy {
				export class BoundsAdapter<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.customview.widget.FocusStrategy.BoundsAdapter<any>>;
					/**
					 * Constructs a new instance of the androidx.customview.widget.FocusStrategy$BoundsAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						obtainBounds(param0: T, param1: globalAndroid.graphics.Rect): void;
					});
					public constructor();
					public obtainBounds(param0: T, param1: globalAndroid.graphics.Rect): void;
				}
				export class CollectionAdapter<T, V>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.customview.widget.FocusStrategy.CollectionAdapter<any,any>>;
					/**
					 * Constructs a new instance of the androidx.customview.widget.FocusStrategy$CollectionAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(param0: T, param1: number): V;
						size(param0: T): number;
					});
					public constructor();
					public get(param0: T, param1: number): V;
					public size(param0: T): number;
				}
				export class SequentialComparator<T>  extends java.util.Comparator<any> {
					public static class: java.lang.Class<androidx.customview.widget.FocusStrategy.SequentialComparator<any>>;
					public compare(param0: any, param1: any): number;
				}
			}
		}
	}
}

declare module androidx {
	export module customview {
		export module widget {
			export class ViewDragHelper {
				public static class: java.lang.Class<androidx.customview.widget.ViewDragHelper>;
				public static INVALID_POINTER: number;
				public static STATE_IDLE: number;
				public static STATE_DRAGGING: number;
				public static STATE_SETTLING: number;
				public static EDGE_LEFT: number;
				public static EDGE_RIGHT: number;
				public static EDGE_TOP: number;
				public static EDGE_BOTTOM: number;
				public static EDGE_ALL: number;
				public static DIRECTION_HORIZONTAL: number;
				public static DIRECTION_VERTICAL: number;
				public static DIRECTION_ALL: number;
				public static create(param0: globalAndroid.view.ViewGroup, param1: number, param2: androidx.customview.widget.ViewDragHelper.Callback): androidx.customview.widget.ViewDragHelper;
				public getViewDragState(): number;
				public isPointerDown(param0: number): boolean;
				public getCapturedView(): globalAndroid.view.View;
				public isCapturedViewUnder(param0: number, param1: number): boolean;
				public flingCapturedView(param0: number, param1: number, param2: number, param3: number): void;
				public isEdgeTouched(param0: number, param1: number): boolean;
				public cancel(): void;
				public findTopChildUnder(param0: number, param1: number): globalAndroid.view.View;
				public checkTouchSlop(param0: number, param1: number): boolean;
				public isViewUnder(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public getEdgeSize(): number;
				public static create(param0: globalAndroid.view.ViewGroup, param1: androidx.customview.widget.ViewDragHelper.Callback): androidx.customview.widget.ViewDragHelper;
				public captureChildView(param0: globalAndroid.view.View, param1: number): void;
				public continueSettling(param0: boolean): boolean;
				public abort(): void;
				public checkTouchSlop(param0: number): boolean;
				public canScroll(param0: globalAndroid.view.View, param1: boolean, param2: number, param3: number, param4: number, param5: number): boolean;
				public smoothSlideViewTo(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public processTouchEvent(param0: globalAndroid.view.MotionEvent): void;
				public setMinVelocity(param0: number): void;
				public getActivePointerId(): number;
				public getTouchSlop(): number;
				public settleCapturedViewAt(param0: number, param1: number): boolean;
				public isEdgeTouched(param0: number): boolean;
				public getMinVelocity(): number;
				public shouldInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public setEdgeTrackingEnabled(param0: number): void;
			}
			export module ViewDragHelper {
				export abstract class Callback {
					public static class: java.lang.Class<androidx.customview.widget.ViewDragHelper.Callback>;
					public onEdgeTouched(param0: number, param1: number): void;
					public onEdgeDragStarted(param0: number, param1: number): void;
					public onViewCaptured(param0: globalAndroid.view.View, param1: number): void;
					public clampViewPositionHorizontal(param0: globalAndroid.view.View, param1: number, param2: number): number;
					public onViewPositionChanged(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public onViewDragStateChanged(param0: number): void;
					public getViewHorizontalDragRange(param0: globalAndroid.view.View): number;
					public constructor();
					public onEdgeLock(param0: number): boolean;
					public getOrderedChildIndex(param0: number): number;
					public clampViewPositionVertical(param0: globalAndroid.view.View, param1: number, param2: number): number;
					public getViewVerticalDragRange(param0: globalAndroid.view.View): number;
					public tryCaptureView(param0: globalAndroid.view.View, param1: number): boolean;
					public onViewReleased(param0: globalAndroid.view.View, param1: number, param2: number): void;
				}
			}
		}
	}
}

//Generics information:
//androidx.customview.widget.FocusStrategy.BoundsAdapter:1
//androidx.customview.widget.FocusStrategy.CollectionAdapter:2
//androidx.customview.widget.FocusStrategy.SequentialComparator:1

