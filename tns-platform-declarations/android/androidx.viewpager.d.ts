declare module androidx {
	export module viewpager {
		export module widget {
			export abstract class PagerAdapter {
				public static class: java.lang.Class<androidx.viewpager.widget.PagerAdapter>;
				public static POSITION_UNCHANGED: number;
				public static POSITION_NONE: number;
				public saveState(): globalAndroid.os.Parcelable;
				public registerDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
				public setPrimaryItem(param0: globalAndroid.view.View, param1: number, param2: any): void;
				public notifyDataSetChanged(): void;
				public finishUpdate(param0: globalAndroid.view.View): void;
				public startUpdate(param0: globalAndroid.view.ViewGroup): void;
				public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): any;
				public destroyItem(param0: globalAndroid.view.View, param1: number, param2: any): void;
				public finishUpdate(param0: globalAndroid.view.ViewGroup): void;
				public getCount(): number;
				public constructor();
				public setPrimaryItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
				public instantiateItem(param0: globalAndroid.view.View, param1: number): any;
				public getItemPosition(param0: any): number;
				public unregisterDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
				public restoreState(param0: globalAndroid.os.Parcelable, param1: java.lang.ClassLoader): void;
				public getPageTitle(param0: number): string;
				public getPageWidth(param0: number): number;
				public startUpdate(param0: globalAndroid.view.View): void;
				public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
				public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
			}
		}
	}
}

declare module androidx {
	export module viewpager {
		export module widget {
			export class PagerTabStrip extends androidx.viewpager.widget.PagerTitleStrip {
				public static class: java.lang.Class<androidx.viewpager.widget.PagerTabStrip>;
				public setBackgroundColor(param0: number): void;
				public getDrawFullUnderline(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public setTabIndicatorColorResource(param0: number): void;
				public getTabIndicatorColor(): number;
				public setTextSpacing(param0: number): void;
				public setDrawFullUnderline(param0: boolean): void;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public setTabIndicatorColor(param0: number): void;
				public setPadding(param0: number, param1: number, param2: number, param3: number): void;
				public constructor(param0: globalAndroid.content.Context);
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setBackgroundResource(param0: number): void;
			}
		}
	}
}

declare module androidx {
	export module viewpager {
		export module widget {
			export class PagerTitleStrip {
				public static class: java.lang.Class<androidx.viewpager.widget.PagerTitleStrip>;
				public setTextColor(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setTextSize(param0: number, param1: number): void;
				public setTextSpacing(param0: number): void;
				public requestLayout(): void;
				public constructor(param0: globalAndroid.content.Context);
				public onMeasure(param0: number, param1: number): void;
				public getTextSpacing(): number;
				public onDetachedFromWindow(): void;
				public setGravity(param0: number): void;
				public setNonPrimaryAlpha(param0: number): void;
				public onAttachedToWindow(): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			}
			export module PagerTitleStrip {
				export class PageListener implements androidx.viewpager.widget.ViewPager.OnPageChangeListener, androidx.viewpager.widget.ViewPager.OnAdapterChangeListener {
					public static class: java.lang.Class<androidx.viewpager.widget.PagerTitleStrip.PageListener>;
					public onPageSelected(param0: number): void;
					public onChanged(): void;
					public onPageScrolled(param0: number, param1: number, param2: number): void;
					public onAdapterChanged(param0: androidx.viewpager.widget.ViewPager, param1: androidx.viewpager.widget.PagerAdapter, param2: androidx.viewpager.widget.PagerAdapter): void;
					public onPageScrollStateChanged(param0: number): void;
				}
				export class SingleLineAllCapsTransform {
					public static class: java.lang.Class<androidx.viewpager.widget.PagerTitleStrip.SingleLineAllCapsTransform>;
					public getTransformation(param0: string, param1: globalAndroid.view.View): string;
				}
			}
		}
	}
}

declare module androidx {
	export module viewpager {
		export module widget {
			export class ViewPager extends android.view.ViewGroup {
				public static class: java.lang.Class<androidx.viewpager.widget.ViewPager>;
				public static SCROLL_STATE_IDLE: number;
				public static SCROLL_STATE_DRAGGING: number;
				public static SCROLL_STATE_SETTLING: number;
				public canScrollHorizontally(param0: number): boolean;
				public setAdapter(param0: androidx.viewpager.widget.PagerAdapter): void;
				public setPageTransformer(param0: boolean, param1: androidx.viewpager.widget.ViewPager.PageTransformer, param2: number): void;
				public setOnPageChangeListener(param0: androidx.viewpager.widget.ViewPager.OnPageChangeListener): void;
				public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public setPageMarginDrawable(param0: number): void;
				public onPageScrolled(param0: number, param1: number, param2: number): void;
				public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public setOffscreenPageLimit(param0: number): void;
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public onRequestFocusInDescendants(param0: number, param1: globalAndroid.graphics.Rect): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setCurrentItem(param0: number, param1: boolean): void;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public setPageMargin(param0: number): void;
				public getChildDrawingOrder(param0: number, param1: number): number;
				public removeOnAdapterChangeListener(param0: androidx.viewpager.widget.ViewPager.OnAdapterChangeListener): void;
				public getCurrentItem(): number;
				public getOffscreenPageLimit(): number;
				public executeKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				// public addFocusables(param0: java.util.ArrayList<globalAndroid.view.View>, param1: number, param2: number): void;
				public onDetachedFromWindow(): void;
				public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
				public arrowScroll(param0: number): boolean;
				public drawableStateChanged(): void;
				public getPageMargin(): number;
				public generateLayoutParams(param0: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
				public isFakeDragging(): boolean;
				public endFakeDrag(): void;
				public removeView(param0: globalAndroid.view.View): void;
				public draw(param0: globalAndroid.graphics.Canvas): void;
				public canScroll(param0: globalAndroid.view.View, param1: boolean, param2: number, param3: number, param4: number): boolean;
				public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public setPageTransformer(param0: boolean, param1: androidx.viewpager.widget.ViewPager.PageTransformer): void;
				public beginFakeDrag(): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public fakeDragBy(param0: number): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public addOnAdapterChangeListener(param0: androidx.viewpager.widget.ViewPager.OnAdapterChangeListener): void;
				public clearOnPageChangeListeners(): void;
				public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
				public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public setCurrentItem(param0: number): void;
				public computeScroll(): void;
				public removeOnPageChangeListener(param0: androidx.viewpager.widget.ViewPager.OnPageChangeListener): void;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
				public onMeasure(param0: number, param1: number): void;
				public addOnPageChangeListener(param0: androidx.viewpager.widget.ViewPager.OnPageChangeListener): void;
				public setPageMarginDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				// public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onAttachedToWindow(): void;
				public getAdapter(): androidx.viewpager.widget.PagerAdapter;
				public addTouchables(param0: java.util.ArrayList<globalAndroid.view.View>): void;
			}
			export module ViewPager {
				export class DecorView {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.DecorView>;
					/**
					 * Constructs a new instance of the androidx.viewpager.widget.ViewPager$DecorView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class ItemInfo {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.ItemInfo>;
				}
				export class LayoutParams extends android.view.ViewGroup.LayoutParams {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.LayoutParams>;
					public isDecor: boolean;
					public gravity: number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor();
				}
				export class MyAccessibilityDelegate {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.MyAccessibilityDelegate>;
					public onInitializeAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public performAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
				}
				export class OnAdapterChangeListener {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.OnAdapterChangeListener>;
					/**
					 * Constructs a new instance of the androidx.viewpager.widget.ViewPager$OnAdapterChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAdapterChanged(param0: androidx.viewpager.widget.ViewPager, param1: androidx.viewpager.widget.PagerAdapter, param2: androidx.viewpager.widget.PagerAdapter): void;
					});
					public constructor();
					public onAdapterChanged(param0: androidx.viewpager.widget.ViewPager, param1: androidx.viewpager.widget.PagerAdapter, param2: androidx.viewpager.widget.PagerAdapter): void;
				}
				export class OnPageChangeListener {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.OnPageChangeListener>;
					/**
					 * Constructs a new instance of the androidx.viewpager.widget.ViewPager$OnPageChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPageScrolled(param0: number, param1: number, param2: number): void;
						onPageSelected(param0: number): void;
						onPageScrollStateChanged(param0: number): void;
					});
					public constructor();
					public onPageSelected(param0: number): void;
					public onPageScrolled(param0: number, param1: number, param2: number): void;
					public onPageScrollStateChanged(param0: number): void;
				}
				export class PageTransformer {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.PageTransformer>;
					/**
					 * Constructs a new instance of the androidx.viewpager.widget.ViewPager$PageTransformer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						transformPage(param0: globalAndroid.view.View, param1: number): void;
					});
					public constructor();
					public transformPage(param0: globalAndroid.view.View, param1: number): void;
				}
				export class PagerObserver {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.PagerObserver>;
					public onChanged(): void;
					public onInvalidated(): void;
				}
				export class SavedState {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.viewpager.widget.ViewPager.SavedState>;
					public toString(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public constructor(param0: globalAndroid.os.Parcelable);
				}
				export class SimpleOnPageChangeListener extends androidx.viewpager.widget.ViewPager.OnPageChangeListener {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.SimpleOnPageChangeListener>;
					public onPageSelected(param0: number): void;
					public onPageScrolled(param0: number, param1: number, param2: number): void;
					public constructor();
					public onPageScrollStateChanged(param0: number): void;
				}
				export class ViewPositionComparator extends java.util.Comparator<globalAndroid.view.View> {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.ViewPositionComparator>;
					public compare(param0: globalAndroid.view.View, param1: globalAndroid.view.View): number;
				}
			}
		}
	}
}

//Generics information:

