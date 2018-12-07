
declare module androidx {
	export module appcompat {
		export module app {
			export abstract class ActionBar {
				public static class: java.lang.Class<androidx.appcompat.app.ActionBar>;
				public static NAVIGATION_MODE_STANDARD: number;
				public static NAVIGATION_MODE_LIST: number;
				public static NAVIGATION_MODE_TABS: number;
				public static DISPLAY_USE_LOGO: number;
				public static DISPLAY_SHOW_HOME: number;
				public static DISPLAY_HOME_AS_UP: number;
				public static DISPLAY_SHOW_TITLE: number;
				public static DISPLAY_SHOW_CUSTOM: number;
				public getHeight(): number;
				public setShowHideAnimationEnabled(param0: boolean): void;
				public onMenuKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public setIcon(param0: number): void;
				public setTitle(param0: string): void;
				public constructor();
				public show(): void;
				public setDisplayShowHomeEnabled(param0: boolean): void;
				public isShowing(): boolean;
				public setListNavigationCallbacks(param0: globalAndroid.widget.SpinnerAdapter, param1: androidx.appcompat.app.ActionBar.OnNavigationListener): void;
				public setHideOnContentScrollEnabled(param0: boolean): void;
				public setTitle(param0: number): void;
				public setCustomView(param0: number): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setStackedBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public newTab(): androidx.appcompat.app.ActionBar.Tab;
				public setDefaultDisplayHomeAsUpEnabled(param0: boolean): void;
				public setWindowTitle(param0: string): void;
				public setCustomView(param0: globalAndroid.view.View): void;
				public getThemedContext(): globalAndroid.content.Context;
				public setDisplayOptions(param0: number): void;
				public invalidateOptionsMenu(): boolean;
				public setDisplayUseLogoEnabled(param0: boolean): void;
				public dispatchMenuVisibilityChanged(param0: boolean): void;
				public setHideOffset(param0: number): void;
				public setCustomView(param0: globalAndroid.view.View, param1: androidx.appcompat.app.ActionBar.LayoutParams): void;
				public setHomeActionContentDescription(param0: string): void;
				public addOnMenuVisibilityListener(param0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public getSelectedTab(): androidx.appcompat.app.ActionBar.Tab;
				public setSubtitle(param0: string): void;
				public openOptionsMenu(): boolean;
				public setLogo(param0: number): void;
				public getElevation(): number;
				public onKeyShortcut(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public getSubtitle(): string;
				public setSubtitle(param0: number): void;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number): void;
				public removeTabAt(param0: number): void;
				public removeAllTabs(): void;
				public setHomeButtonEnabled(param0: boolean): void;
				public setHomeAsUpIndicator(param0: number): void;
				public setElevation(param0: number): void;
				public startActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public removeOnMenuVisibilityListener(param0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public getNavigationMode(): number;
				public isHideOnContentScrollEnabled(): boolean;
				public getHideOffset(): number;
				public getCustomView(): globalAndroid.view.View;
				public removeTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public getDisplayOptions(): number;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public getTabAt(param0: number): androidx.appcompat.app.ActionBar.Tab;
				public getSelectedNavigationIndex(): number;
				public closeOptionsMenu(): boolean;
				public setDisplayHomeAsUpEnabled(param0: boolean): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public getTabCount(): number;
				public setHomeAsUpIndicator(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setDisplayShowCustomEnabled(param0: boolean): void;
				public setHomeActionContentDescription(param0: number): void;
				public setDisplayShowTitleEnabled(param0: boolean): void;
				public setSplitBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public collapseActionView(): boolean;
				public getNavigationItemCount(): number;
				public isTitleTruncated(): boolean;
				public setSelectedNavigationItem(param0: number): void;
				public setLogo(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getTitle(): string;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number, param2: boolean): void;
				public hide(): void;
				public selectTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public setNavigationMode(param0: number): void;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: boolean): void;
				public setDisplayOptions(param0: number, param1: number): void;
			}
			export module ActionBar {
				export class DisplayOptions {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.DisplayOptions>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar$DisplayOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class LayoutParams extends android.view.ViewGroup.MarginLayoutParams  {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.LayoutParams>;
					public gravity: number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: androidx.appcompat.app.ActionBar.LayoutParams);
					public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(param0: number, param1: number, param2: number);
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
				}
				export class NavigationMode {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.NavigationMode>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar$NavigationMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class OnMenuVisibilityListener {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.OnMenuVisibilityListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar$OnMenuVisibilityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuVisibilityChanged(param0: boolean): void;
					});
					public constructor();
					public onMenuVisibilityChanged(param0: boolean): void;
				}
				export class OnNavigationListener {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.OnNavigationListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar$OnNavigationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onNavigationItemSelected(param0: number, param1: number): boolean;
					});
					public constructor();
					public onNavigationItemSelected(param0: number, param1: number): boolean;
				}
				export abstract class Tab {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.Tab>;
					public static INVALID_POSITION: number;
					public setTabListener(param0: androidx.appcompat.app.ActionBar.TabListener): androidx.appcompat.app.ActionBar.Tab;
					public setText(param0: string): androidx.appcompat.app.ActionBar.Tab;
					public getCustomView(): globalAndroid.view.View;
					public getText(): string;
					public setText(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public getTag(): any;
					public setIcon(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.ActionBar.Tab;
					public getIcon(): globalAndroid.graphics.drawable.Drawable;
					public setTag(param0: any): androidx.appcompat.app.ActionBar.Tab;
					public select(): void;
					public getContentDescription(): string;
					public setCustomView(param0: globalAndroid.view.View): androidx.appcompat.app.ActionBar.Tab;
					public setCustomView(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public constructor();
					public setContentDescription(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public setContentDescription(param0: string): androidx.appcompat.app.ActionBar.Tab;
					public getPosition(): number;
				}
				export class TabListener {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.TabListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar$TabListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onTabSelected(param0: androidx.appcompat.app.ActionBar.Tab, param1: androidx.fragment.app.FragmentTransaction): void;
						onTabUnselected(param0: androidx.appcompat.app.ActionBar.Tab, param1: androidx.fragment.app.FragmentTransaction): void;
						onTabReselected(param0: androidx.appcompat.app.ActionBar.Tab, param1: androidx.fragment.app.FragmentTransaction): void;
					});
					public constructor();
					public onTabReselected(param0: androidx.appcompat.app.ActionBar.Tab, param1: androidx.fragment.app.FragmentTransaction): void;
					public onTabUnselected(param0: androidx.appcompat.app.ActionBar.Tab, param1: androidx.fragment.app.FragmentTransaction): void;
					public onTabSelected(param0: androidx.appcompat.app.ActionBar.Tab, param1: androidx.fragment.app.FragmentTransaction): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class ActionBarDrawerToggle {
				public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle>;
				public setDrawerIndicatorEnabled(param0: boolean): void;
				public isDrawerSlideAnimationEnabled(): boolean;
				public setDrawerArrowDrawable(param0: androidx.appcompat.graphics.drawable.DrawerArrowDrawable): void;
				public constructor(param0: globalAndroid.app.Activity, param1: androidx.drawerlayout.widget.DrawerLayout, param2: androidx.appcompat.widget.Toolbar, param3: number, param4: number);
				public isDrawerIndicatorEnabled(): boolean;
				public getToolbarNavigationClickListener(): globalAndroid.view.View.OnClickListener;
				public syncState(): void;
				public onDrawerStateChanged(param0: number): void;
				public onDrawerOpened(param0: globalAndroid.view.View): void;
				public constructor(param0: globalAndroid.app.Activity, param1: androidx.drawerlayout.widget.DrawerLayout, param2: number, param3: number);
				public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public onDrawerSlide(param0: globalAndroid.view.View, param1: number): void;
				public setToolbarNavigationClickListener(param0: globalAndroid.view.View.OnClickListener): void;
				public getDrawerArrowDrawable(): androidx.appcompat.graphics.drawable.DrawerArrowDrawable;
				public onDrawerClosed(param0: globalAndroid.view.View): void;
				public setDrawerSlideAnimationEnabled(param0: boolean): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public setHomeAsUpIndicator(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setHomeAsUpIndicator(param0: number): void;
			}
			export module ActionBarDrawerToggle {
				export class Delegate {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle.Delegate>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBarDrawerToggle$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setActionBarUpIndicator(param0: globalAndroid.graphics.drawable.Drawable, param1: number): void;
						setActionBarDescription(param0: number): void;
						getThemeUpIndicator(): globalAndroid.graphics.drawable.Drawable;
						getActionBarThemedContext(): globalAndroid.content.Context;
						isNavigationVisible(): boolean;
					});
					public constructor();
					public setActionBarUpIndicator(param0: globalAndroid.graphics.drawable.Drawable, param1: number): void;
					public getThemeUpIndicator(): globalAndroid.graphics.drawable.Drawable;
					public isNavigationVisible(): boolean;
					public setActionBarDescription(param0: number): void;
					public getActionBarThemedContext(): globalAndroid.content.Context;
				}
				export class DelegateProvider {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle.DelegateProvider>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBarDrawerToggle$DelegateProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
					});
					public constructor();
					public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
				}
				export class FrameworkActionBarDelegate extends androidx.appcompat.app.ActionBarDrawerToggle.Delegate {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle.FrameworkActionBarDelegate>;
					public setActionBarUpIndicator(param0: globalAndroid.graphics.drawable.Drawable, param1: number): void;
					public getThemeUpIndicator(): globalAndroid.graphics.drawable.Drawable;
					public isNavigationVisible(): boolean;
					public getActionBarThemedContext(): globalAndroid.content.Context;
					public setActionBarDescription(param0: number): void;
				}
				export class ToolbarCompatDelegate extends androidx.appcompat.app.ActionBarDrawerToggle.Delegate {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle.ToolbarCompatDelegate>;
					public setActionBarUpIndicator(param0: globalAndroid.graphics.drawable.Drawable, param1: number): void;
					public getThemeUpIndicator(): globalAndroid.graphics.drawable.Drawable;
					public isNavigationVisible(): boolean;
					public setActionBarDescription(param0: number): void;
					public getActionBarThemedContext(): globalAndroid.content.Context;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class ActionBarDrawerToggleHoneycomb {
				public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggleHoneycomb>;
				public static setActionBarDescription(param0: androidx.appcompat.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo, param1: globalAndroid.app.Activity, param2: number): androidx.appcompat.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo;
				public static getThemeUpIndicator(param0: globalAndroid.app.Activity): globalAndroid.graphics.drawable.Drawable;
				public static setActionBarUpIndicator(param0: androidx.appcompat.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo, param1: globalAndroid.app.Activity, param2: globalAndroid.graphics.drawable.Drawable, param3: number): androidx.appcompat.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo;
			}
			export module ActionBarDrawerToggleHoneycomb {
				export class SetIndicatorInfo {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo>;
					public setHomeAsUpIndicator: java.lang.reflect.Method;
					public setHomeActionContentDescription: java.lang.reflect.Method;
					public upIndicatorView: globalAndroid.widget.ImageView;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AlertController {
				public static class: java.lang.Class<androidx.appcompat.app.AlertController>;
				public setView(param0: number): void;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public getListView(): globalAndroid.widget.ListView;
				public setView(param0: globalAndroid.view.View): void;
				public setIcon(param0: number): void;
				public getButton(param0: number): globalAndroid.widget.Button;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getIconAttributeResId(param0: number): number;
				public setTitle(param0: string): void;
				public setButtonPanelLayoutHint(param0: number): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public setButton(param0: number, param1: string, param2: globalAndroid.content.DialogInterface.OnClickListener, param3: globalAndroid.os.Message, param4: globalAndroid.graphics.drawable.Drawable): void;
				public installContent(): void;
				public setView(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.app.AppCompatDialog, param2: globalAndroid.view.Window);
				public setCustomTitle(param0: globalAndroid.view.View): void;
				public setMessage(param0: string): void;
			}
			export module AlertController {
				export class AlertParams {
					public static class: java.lang.Class<androidx.appcompat.app.AlertController.AlertParams>;
					public mContext: globalAndroid.content.Context;
					public mInflater: globalAndroid.view.LayoutInflater;
					public mIconId: number;
					public mIcon: globalAndroid.graphics.drawable.Drawable;
					public mIconAttrId: number;
					public mTitle: string;
					public mCustomTitleView: globalAndroid.view.View;
					public mMessage: string;
					public mPositiveButtonText: string;
					public mPositiveButtonIcon: globalAndroid.graphics.drawable.Drawable;
					public mPositiveButtonListener: globalAndroid.content.DialogInterface.OnClickListener;
					public mNegativeButtonText: string;
					public mNegativeButtonIcon: globalAndroid.graphics.drawable.Drawable;
					public mNegativeButtonListener: globalAndroid.content.DialogInterface.OnClickListener;
					public mNeutralButtonText: string;
					public mNeutralButtonIcon: globalAndroid.graphics.drawable.Drawable;
					public mNeutralButtonListener: globalAndroid.content.DialogInterface.OnClickListener;
					public mCancelable: boolean;
					public mOnCancelListener: globalAndroid.content.DialogInterface.OnCancelListener;
					public mOnDismissListener: globalAndroid.content.DialogInterface.OnDismissListener;
					public mOnKeyListener: globalAndroid.content.DialogInterface.OnKeyListener;
					public mItems: native.Array<string>;
					public mAdapter: globalAndroid.widget.ListAdapter;
					public mOnClickListener: globalAndroid.content.DialogInterface.OnClickListener;
					public mViewLayoutResId: number;
					public mView: globalAndroid.view.View;
					public mViewSpacingLeft: number;
					public mViewSpacingTop: number;
					public mViewSpacingRight: number;
					public mViewSpacingBottom: number;
					public mViewSpacingSpecified: boolean;
					public mCheckedItems: native.Array<boolean>;
					public mIsMultiChoice: boolean;
					public mIsSingleChoice: boolean;
					public mCheckedItem: number;
					public mOnCheckboxClickListener: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener;
					public mCursor: globalAndroid.database.Cursor;
					public mLabelColumn: string;
					public mIsCheckedColumn: string;
					public mForceInverseBackground: boolean;
					public mOnItemSelectedListener: globalAndroid.widget.AdapterView.OnItemSelectedListener;
					public mOnPrepareListViewListener: androidx.appcompat.app.AlertController.AlertParams.OnPrepareListViewListener;
					public mRecycleOnMeasure: boolean;
					public constructor(param0: globalAndroid.content.Context);
					public apply(param0: androidx.appcompat.app.AlertController): void;
				}
				export module AlertParams {
					export class OnPrepareListViewListener {
						public static class: java.lang.Class<androidx.appcompat.app.AlertController.AlertParams.OnPrepareListViewListener>;
						/**
						 * Constructs a new instance of the androidx.appcompat.app.AlertController$AlertParams$OnPrepareListViewListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPrepareListView(param0: globalAndroid.widget.ListView): void;
						});
						public constructor();
						public onPrepareListView(param0: globalAndroid.widget.ListView): void;
					}
				}
				export class ButtonHandler {
					public static class: java.lang.Class<androidx.appcompat.app.AlertController.ButtonHandler>;
					public constructor(param0: globalAndroid.content.DialogInterface);
					public handleMessage(param0: globalAndroid.os.Message): void;
				}
				export class CheckedItemAdapter extends globalAndroid.widget.ArrayAdapter<string> {
					public static class: java.lang.Class<androidx.appcompat.app.AlertController.CheckedItemAdapter>;
					public hasStableIds(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: native.Array<string>);
					public getItemId(param0: number): number;
				}
				export class RecycleListView {
					public static class: java.lang.Class<androidx.appcompat.app.AlertController.RecycleListView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setHasDecor(param0: boolean, param1: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AlertDialog extends androidx.appcompat.app.AppCompatDialog {
				public static class: java.lang.Class<androidx.appcompat.app.AlertDialog>;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public getListView(): globalAndroid.widget.ListView;
				public setView(param0: globalAndroid.view.View): void;
				public onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
				public getButton(param0: number): globalAndroid.widget.Button;
				public setIcon(param0: number): void;
				public setButton(param0: number, param1: string, param2: globalAndroid.os.Message): void;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setTitle(param0: string): void;
				public setIconAttribute(param0: number): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public setTitle(param0: number): void;
				public setButton(param0: number, param1: string, param2: globalAndroid.content.DialogInterface.OnClickListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public setView(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public setCustomTitle(param0: globalAndroid.view.View): void;
				public setMessage(param0: string): void;
				public setButton(param0: number, param1: string, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.content.DialogInterface.OnClickListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: globalAndroid.content.DialogInterface.OnCancelListener);
				public onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
			}
			export module AlertDialog {
				export class Builder {
					public static class: java.lang.Class<androidx.appcompat.app.AlertDialog.Builder>;
					public setMultiChoiceItems(param0: number, param1: native.Array<boolean>, param2: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setSingleChoiceItems(param0: number, param1: number, param2: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public constructor(param0: globalAndroid.content.Context, param1: number);
					public setNegativeButtonIcon(param0: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.AlertDialog.Builder;
					public setItems(param0: number, param1: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setCursor(param0: globalAndroid.database.Cursor, param1: globalAndroid.content.DialogInterface.OnClickListener, param2: string): androidx.appcompat.app.AlertDialog.Builder;
					public setItems(param0: native.Array<string>, param1: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setPositiveButton(param0: number, param1: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setOnCancelListener(param0: globalAndroid.content.DialogInterface.OnCancelListener): androidx.appcompat.app.AlertDialog.Builder;
					public setMultiChoiceItems(param0: globalAndroid.database.Cursor, param1: string, param2: string, param3: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setMessage(param0: number): androidx.appcompat.app.AlertDialog.Builder;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.AlertDialog.Builder;
					public setNegativeButton(param0: number, param1: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setSingleChoiceItems(param0: globalAndroid.widget.ListAdapter, param1: number, param2: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setTitle(param0: number): androidx.appcompat.app.AlertDialog.Builder;
					public setCustomTitle(param0: globalAndroid.view.View): androidx.appcompat.app.AlertDialog.Builder;
					public setPositiveButtonIcon(param0: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.AlertDialog.Builder;
					public setMessage(param0: string): androidx.appcompat.app.AlertDialog.Builder;
					public setPositiveButton(param0: string, param1: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setView(param0: number): androidx.appcompat.app.AlertDialog.Builder;
					public setCancelable(param0: boolean): androidx.appcompat.app.AlertDialog.Builder;
					public setIconAttribute(param0: number): androidx.appcompat.app.AlertDialog.Builder;
					public setAdapter(param0: globalAndroid.widget.ListAdapter, param1: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public getContext(): globalAndroid.content.Context;
					public setSingleChoiceItems(param0: native.Array<string>, param1: number, param2: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setNegativeButton(param0: string, param1: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setNeutralButton(param0: number, param1: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setOnItemSelectedListener(param0: globalAndroid.widget.AdapterView.OnItemSelectedListener): androidx.appcompat.app.AlertDialog.Builder;
					public setNeutralButton(param0: string, param1: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setSingleChoiceItems(param0: globalAndroid.database.Cursor, param1: number, param2: string, param3: globalAndroid.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setMultiChoiceItems(param0: native.Array<string>, param1: native.Array<boolean>, param2: globalAndroid.content.DialogInterface.OnMultiChoiceClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setOnDismissListener(param0: globalAndroid.content.DialogInterface.OnDismissListener): androidx.appcompat.app.AlertDialog.Builder;
					public setOnKeyListener(param0: globalAndroid.content.DialogInterface.OnKeyListener): androidx.appcompat.app.AlertDialog.Builder;
					public setNeutralButtonIcon(param0: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.AlertDialog.Builder;
					public setTitle(param0: string): androidx.appcompat.app.AlertDialog.Builder;
					public show(): androidx.appcompat.app.AlertDialog;
					public create(): androidx.appcompat.app.AlertDialog;
					public constructor(param0: globalAndroid.content.Context);
					public setIcon(param0: number): androidx.appcompat.app.AlertDialog.Builder;
					public setRecycleOnMeasureEnabled(param0: boolean): androidx.appcompat.app.AlertDialog.Builder;
					public setView(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): androidx.appcompat.app.AlertDialog.Builder;
					public setView(param0: globalAndroid.view.View): androidx.appcompat.app.AlertDialog.Builder;
					public setInverseBackgroundForced(param0: boolean): androidx.appcompat.app.AlertDialog.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatActivity extends android.app.Activity implements androidx.appcompat.app.AppCompatCallback, androidx.appcompat.app.ActionBarDrawerToggle.DelegateProvider {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatActivity>;
				public setSupportActionBar(param0: androidx.appcompat.widget.Toolbar): void;
				public invalidateOptionsMenu(): void;
				public setTheme(param0: number): void;
				public onSupportNavigateUp(): boolean;
				public onMenuItemSelected(param0: number, param1: globalAndroid.view.MenuItem): boolean;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public findViewById(param0: number): globalAndroid.view.View;
				public onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
				public supportShouldUpRecreateTask(param0: globalAndroid.content.Intent): boolean;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public onSupportContentChanged(): void;
				public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public setContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public constructor();
				public setSupportProgressBarIndeterminateVisibility(param0: boolean): void;
				public openOptionsMenu(): void;
				public closeOptionsMenu(): void;
				public onCreateSupportNavigateUpTaskStack(param0: androidx.core.app.TaskStackBuilder): void;
				public getDelegate(): androidx.appcompat.app.AppCompatDelegate;
				public onMenuOpened(param0: number, param1: globalAndroid.view.Menu): boolean;
				public addContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onStop(): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public setSupportProgressBarVisibility(param0: boolean): void;
				public onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
				public getSupportParentActivityIntent(): globalAndroid.content.Intent;
				public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
				public getResources(): globalAndroid.content.res.Resources;
				public onPostCreate(param0: globalAndroid.os.Bundle): void;
				public supportNavigateUpTo(param0: globalAndroid.content.Intent): void;
				public onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public setContentView(param0: number): void;
				public supportInvalidateOptionsMenu(): void;
				public setSupportProgress(param0: number): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public onContentChanged(): void;
				public setContentView(param0: globalAndroid.view.View): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onPostResume(): void;
				public onStart(): void;
				public onPanelClosed(param0: number, param1: globalAndroid.view.Menu): void;
				public onTitleChanged(param0: string, param1: number): void;
				public onPrepareSupportNavigateUpTaskStack(param0: androidx.core.app.TaskStackBuilder): void;
				public supportRequestWindowFeature(param0: number): boolean;
				public getSupportActionBar(): androidx.appcompat.app.ActionBar;
				public onDestroy(): void;
				public startSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public setSupportProgressBarIndeterminate(param0: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatCallback {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatCallback>;
				/**
				 * Constructs a new instance of the androidx.appcompat.app.AppCompatCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
					onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
					onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				});
				public constructor();
				public onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
				public onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export abstract class AppCompatDelegate {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegate>;
				public static MODE_NIGHT_NO: number;
				public static MODE_NIGHT_YES: number;
				public static MODE_NIGHT_AUTO: number;
				public static MODE_NIGHT_FOLLOW_SYSTEM: number;
				public static FEATURE_SUPPORT_ACTION_BAR: number;
				public static FEATURE_SUPPORT_ACTION_BAR_OVERLAY: number;
				public static FEATURE_ACTION_MODE_OVERLAY: number;
				public static create(param0: globalAndroid.content.Context, param1: globalAndroid.view.Window, param2: androidx.appcompat.app.AppCompatCallback): androidx.appcompat.app.AppCompatDelegate;
				public setSupportActionBar(param0: androidx.appcompat.widget.Toolbar): void;
				public invalidateOptionsMenu(): void;
				public requestWindowFeature(param0: number): boolean;
				public setHandleNativeActionModesEnabled(param0: boolean): void;
				public static isCompatVectorFromResourcesEnabled(): boolean;
				public static getDefaultNightMode(): number;
				public findViewById(param0: number): globalAndroid.view.View;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public isHandleNativeActionModesEnabled(): boolean;
				public setContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setTitle(param0: string): void;
				public static create(param0: globalAndroid.app.Activity, param1: androidx.appcompat.app.AppCompatCallback): androidx.appcompat.app.AppCompatDelegate;
				public static setCompatVectorFromResourcesEnabled(param0: boolean): void;
				public addContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public applyDayNight(): boolean;
				public hasWindowFeature(param0: number): boolean;
				public onStop(): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public setLocalNightMode(param0: number): void;
				public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
				public onPostCreate(param0: globalAndroid.os.Bundle): void;
				public setContentView(param0: number): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public createView(param0: globalAndroid.view.View, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public setContentView(param0: globalAndroid.view.View): void;
				public installViewFactory(): void;
				public static create(param0: globalAndroid.app.Dialog, param1: androidx.appcompat.app.AppCompatCallback): androidx.appcompat.app.AppCompatDelegate;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onStart(): void;
				public onPostResume(): void;
				public getSupportActionBar(): androidx.appcompat.app.ActionBar;
				public onDestroy(): void;
				public static setDefaultNightMode(param0: number): void;
				public startSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
			}
			export module AppCompatDelegate {
				export class NightMode {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegate.NightMode>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.AppCompatDelegate$NightMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatDelegateImpl extends androidx.appcompat.app.AppCompatDelegate implements androidx.appcompat.view.menu.MenuBuilder.Callback {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl>;
				public setSupportActionBar(param0: androidx.appcompat.widget.Toolbar): void;
				public invalidateOptionsMenu(): void;
				public requestWindowFeature(param0: number): boolean;
				public onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): boolean;
				public setHandleNativeActionModesEnabled(param0: boolean): void;
				public onCreateView(param0: globalAndroid.view.View, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public findViewById(param0: number): globalAndroid.view.View;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public isHandleNativeActionModesEnabled(): boolean;
				public setContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setTitle(param0: string): void;
				public onCreateView(param0: string, param1: globalAndroid.content.Context, param2: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public addContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public applyDayNight(): boolean;
				public hasWindowFeature(param0: number): boolean;
				public onStop(): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public setLocalNightMode(param0: number): void;
				public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
				public onPostCreate(param0: globalAndroid.os.Bundle): void;
				public getPanelState(param0: number, param1: boolean): androidx.appcompat.app.AppCompatDelegateImpl.PanelFeatureState;
				public setContentView(param0: number): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public createView(param0: globalAndroid.view.View, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public setContentView(param0: globalAndroid.view.View): void;
				public onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
				public installViewFactory(): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onStart(): void;
				public onPostResume(): void;
				public getSupportActionBar(): androidx.appcompat.app.ActionBar;
				public onDestroy(): void;
				public startSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
			}
			export module AppCompatDelegateImpl {
				export class ActionBarDrawableToggleImpl extends androidx.appcompat.app.ActionBarDrawerToggle.Delegate {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ActionBarDrawableToggleImpl>;
					public setActionBarUpIndicator(param0: globalAndroid.graphics.drawable.Drawable, param1: number): void;
					public getThemeUpIndicator(): globalAndroid.graphics.drawable.Drawable;
					public isNavigationVisible(): boolean;
					public getActionBarThemedContext(): globalAndroid.content.Context;
					public setActionBarDescription(param0: number): void;
				}
				export class ActionMenuPresenterCallback extends androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ActionMenuPresenterCallback>;
					public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
				}
				export class ActionModeCallbackWrapperV9 extends androidx.appcompat.view.ActionMode.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ActionModeCallbackWrapperV9>;
					public onPrepareActionMode(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
					public onDestroyActionMode(param0: androidx.appcompat.view.ActionMode): void;
					public constructor(param0: androidx.appcompat.app.AppCompatDelegateImpl, param1: androidx.appcompat.view.ActionMode.Callback);
					public onCreateActionMode(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
					public onActionItemClicked(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.MenuItem): boolean;
				}
				export class AppCompatWindowCallback extends androidx.appcompat.view.WindowCallbackWrapper {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.AppCompatWindowCallback>;
					public onPanelClosed(param0: number, param1: globalAndroid.view.Menu): void;
					public onProvideKeyboardShortcuts(param0: java.util.List<any>, param1: globalAndroid.view.Menu, param2: number): void;
					public onCreatePanelMenu(param0: number, param1: globalAndroid.view.Menu): boolean;
					public onPreparePanel(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.Menu): boolean;
					public onMenuOpened(param0: number, param1: globalAndroid.view.Menu): boolean;
					public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback, param1: number): globalAndroid.view.ActionMode;
					public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
					public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
					public dispatchKeyShortcutEvent(param0: globalAndroid.view.KeyEvent): boolean;
					public onContentChanged(): void;
				}
				export class AutoNightModeManager {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.AutoNightModeManager>;
				}
				export class ListMenuDecorView extends androidx.appcompat.widget.ContentFrameLayout {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ListMenuDecorView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
					public setBackgroundResource(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public constructor(param0: androidx.appcompat.app.AppCompatDelegateImpl, param1: globalAndroid.content.Context);
					public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				}
				export class PanelFeatureState {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.PanelFeatureState>;
					public qwertyMode: boolean;
					public hasPanelItems(): boolean;
					public clearMenuPresenters(): void;
				}
				export module PanelFeatureState {
					export class SavedState {
						public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.PanelFeatureState.SavedState>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.appcompat.app.AppCompatDelegateImpl.PanelFeatureState.SavedState>;
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
				export class PanelMenuPresenterCallback extends androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.PanelMenuPresenterCallback>;
					public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatDialog implements androidx.appcompat.app.AppCompatCallback {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatDialog>;
				public invalidateOptionsMenu(): void;
				public onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public setContentView(param0: number): void;
				public findViewById(param0: number): globalAndroid.view.View;
				public onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
				public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public setContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setTitle(param0: string): void;
				public setContentView(param0: globalAndroid.view.View): void;
				public getDelegate(): androidx.appcompat.app.AppCompatDelegate;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public constructor(param0: globalAndroid.content.Context);
				public setTitle(param0: number): void;
				public addContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public supportRequestWindowFeature(param0: number): boolean;
				public getSupportActionBar(): androidx.appcompat.app.ActionBar;
				public onStop(): void;
				public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: globalAndroid.content.DialogInterface.OnCancelListener);
				public onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatDialogFragment {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatDialogFragment>;
				public setupDialog(param0: globalAndroid.app.Dialog, param1: number): void;
				public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatViewInflater {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatViewInflater>;
				public createImageView(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatImageView;
				public createEditText(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatEditText;
				public createCheckedTextView(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatCheckedTextView;
				public createImageButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatImageButton;
				public createAutoCompleteTextView(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatAutoCompleteTextView;
				public constructor();
				public createRadioButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatRadioButton;
				public createCheckBox(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatCheckBox;
				public createSpinner(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatSpinner;
				public createTextView(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatTextView;
				public createButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatButton;
				public createSeekBar(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatSeekBar;
				public createView(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public createRatingBar(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatRatingBar;
				public createMultiAutoCompleteTextView(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): androidx.appcompat.widget.AppCompatMultiAutoCompleteTextView;
			}
			export module AppCompatViewInflater {
				export class DeclaredOnClickListener {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatViewInflater.DeclaredOnClickListener>;
					public onClick(param0: globalAndroid.view.View): void;
					public constructor(param0: globalAndroid.view.View, param1: string);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class NavItemSelectedListener {
				public static class: java.lang.Class<androidx.appcompat.app.NavItemSelectedListener>;
				public onNothingSelected(param0: globalAndroid.widget.AdapterView<any>): void;
				public onItemSelected(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
				public constructor(param0: androidx.appcompat.app.ActionBar.OnNavigationListener);
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class ResourcesFlusher {
				public static class: java.lang.Class<androidx.appcompat.app.ResourcesFlusher>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class ToolbarActionBar extends androidx.appcompat.app.ActionBar {
				public static class: java.lang.Class<androidx.appcompat.app.ToolbarActionBar>;
				public getHeight(): number;
				public setShowHideAnimationEnabled(param0: boolean): void;
				public onMenuKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public setIcon(param0: number): void;
				public setTitle(param0: string): void;
				public show(): void;
				public getWrappedWindowCallback(): globalAndroid.view.Window.Callback;
				public setDisplayShowHomeEnabled(param0: boolean): void;
				public isShowing(): boolean;
				public setListNavigationCallbacks(param0: globalAndroid.widget.SpinnerAdapter, param1: androidx.appcompat.app.ActionBar.OnNavigationListener): void;
				public setTitle(param0: number): void;
				public setCustomView(param0: number): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setStackedBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setDefaultDisplayHomeAsUpEnabled(param0: boolean): void;
				public newTab(): androidx.appcompat.app.ActionBar.Tab;
				public setWindowTitle(param0: string): void;
				public setCustomView(param0: globalAndroid.view.View): void;
				public getThemedContext(): globalAndroid.content.Context;
				public setDisplayOptions(param0: number): void;
				public invalidateOptionsMenu(): boolean;
				public setDisplayUseLogoEnabled(param0: boolean): void;
				public dispatchMenuVisibilityChanged(param0: boolean): void;
				public setCustomView(param0: globalAndroid.view.View, param1: androidx.appcompat.app.ActionBar.LayoutParams): void;
				public setHomeActionContentDescription(param0: string): void;
				public addOnMenuVisibilityListener(param0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public getSelectedTab(): androidx.appcompat.app.ActionBar.Tab;
				public setSubtitle(param0: string): void;
				public openOptionsMenu(): boolean;
				public setLogo(param0: number): void;
				public getElevation(): number;
				public onKeyShortcut(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public getSubtitle(): string;
				public setSubtitle(param0: number): void;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number): void;
				public removeTabAt(param0: number): void;
				public removeAllTabs(): void;
				public setHomeButtonEnabled(param0: boolean): void;
				public setHomeAsUpIndicator(param0: number): void;
				public setElevation(param0: number): void;
				public removeOnMenuVisibilityListener(param0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public getNavigationMode(): number;
				public getCustomView(): globalAndroid.view.View;
				public removeTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public getDisplayOptions(): number;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public getTabAt(param0: number): androidx.appcompat.app.ActionBar.Tab;
				public getSelectedNavigationIndex(): number;
				public closeOptionsMenu(): boolean;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public setDisplayHomeAsUpEnabled(param0: boolean): void;
				public setHomeAsUpIndicator(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getTabCount(): number;
				public setHomeActionContentDescription(param0: number): void;
				public setDisplayShowCustomEnabled(param0: boolean): void;
				public setSplitBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public requestFocus(): boolean;
				public setDisplayShowTitleEnabled(param0: boolean): void;
				public collapseActionView(): boolean;
				public getNavigationItemCount(): number;
				public isTitleTruncated(): boolean;
				public setSelectedNavigationItem(param0: number): void;
				public setLogo(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getTitle(): string;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number, param2: boolean): void;
				public hide(): void;
				public selectTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public setNavigationMode(param0: number): void;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: boolean): void;
				public setDisplayOptions(param0: number, param1: number): void;
			}
			export module ToolbarActionBar {
				export class ActionMenuPresenterCallback extends androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.ToolbarActionBar.ActionMenuPresenterCallback>;
					public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
				}
				export class MenuBuilderCallback extends androidx.appcompat.view.menu.MenuBuilder.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.ToolbarActionBar.MenuBuilderCallback>;
					public onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): boolean;
				}
				export class ToolbarCallbackWrapper extends androidx.appcompat.view.WindowCallbackWrapper {
					public static class: java.lang.Class<androidx.appcompat.app.ToolbarActionBar.ToolbarCallbackWrapper>;
					public onPreparePanel(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.Menu): boolean;
					public onCreatePanelView(param0: number): globalAndroid.view.View;
					public constructor(param0: globalAndroid.view.Window.Callback);
					public constructor(param0: androidx.appcompat.app.ToolbarActionBar, param1: globalAndroid.view.Window.Callback);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class TwilightCalculator {
				public static class: java.lang.Class<androidx.appcompat.app.TwilightCalculator>;
				public static DAY: number;
				public static NIGHT: number;
				public sunset: number;
				public sunrise: number;
				public state: number;
				public calculateTwilight(param0: number, param1: number, param2: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class TwilightManager {
				public static class: java.lang.Class<androidx.appcompat.app.TwilightManager>;
			}
			export module TwilightManager {
				export class TwilightState {
					public static class: java.lang.Class<androidx.appcompat.app.TwilightManager.TwilightState>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class WindowDecorActionBar extends androidx.appcompat.app.ActionBar implements androidx.appcompat.widget.ActionBarOverlayLayout.ActionBarVisibilityCallback {
				public static class: java.lang.Class<androidx.appcompat.app.WindowDecorActionBar>;
				public getHeight(): number;
				public onContentScrollStopped(): void;
				public hasLogo(): boolean;
				public showForSystem(): void;
				public setShowHideAnimationEnabled(param0: boolean): void;
				public setIcon(param0: number): void;
				public setTitle(param0: string): void;
				public constructor();
				public show(): void;
				public setDisplayShowHomeEnabled(param0: boolean): void;
				public enableContentAnimations(param0: boolean): void;
				public isShowing(): boolean;
				public setHideOnContentScrollEnabled(param0: boolean): void;
				public setListNavigationCallbacks(param0: globalAndroid.widget.SpinnerAdapter, param1: androidx.appcompat.app.ActionBar.OnNavigationListener): void;
				public setTitle(param0: number): void;
				public setCustomView(param0: number): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setStackedBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public newTab(): androidx.appcompat.app.ActionBar.Tab;
				public setDefaultDisplayHomeAsUpEnabled(param0: boolean): void;
				public setWindowTitle(param0: string): void;
				public setCustomView(param0: globalAndroid.view.View): void;
				public getThemedContext(): globalAndroid.content.Context;
				public setDisplayOptions(param0: number): void;
				public setDisplayUseLogoEnabled(param0: boolean): void;
				public dispatchMenuVisibilityChanged(param0: boolean): void;
				public setHideOffset(param0: number): void;
				public setCustomView(param0: globalAndroid.view.View, param1: androidx.appcompat.app.ActionBar.LayoutParams): void;
				public animateToMode(param0: boolean): void;
				public setHomeActionContentDescription(param0: string): void;
				public addOnMenuVisibilityListener(param0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public getSelectedTab(): androidx.appcompat.app.ActionBar.Tab;
				public onWindowVisibilityChanged(param0: number): void;
				public setSubtitle(param0: string): void;
				public doShow(param0: boolean): void;
				public getElevation(): number;
				public setLogo(param0: number): void;
				public onKeyShortcut(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public getSubtitle(): string;
				public setSubtitle(param0: number): void;
				public removeAllTabs(): void;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number): void;
				public removeTabAt(param0: number): void;
				public setHomeButtonEnabled(param0: boolean): void;
				public onContentScrollStarted(): void;
				public constructor(param0: globalAndroid.app.Activity, param1: boolean);
				public setHomeAsUpIndicator(param0: number): void;
				public setElevation(param0: number): void;
				public startActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public removeOnMenuVisibilityListener(param0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public doHide(param0: boolean): void;
				public getNavigationMode(): number;
				public isHideOnContentScrollEnabled(): boolean;
				public getHideOffset(): number;
				public getCustomView(): globalAndroid.view.View;
				public removeTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public getDisplayOptions(): number;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public getTabAt(param0: number): androidx.appcompat.app.ActionBar.Tab;
				public constructor(param0: globalAndroid.app.Dialog);
				public getSelectedNavigationIndex(): number;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public setDisplayHomeAsUpEnabled(param0: boolean): void;
				public setHomeAsUpIndicator(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getTabCount(): number;
				public constructor(param0: globalAndroid.view.View);
				public setDisplayShowCustomEnabled(param0: boolean): void;
				public setHomeActionContentDescription(param0: number): void;
				public setDisplayShowTitleEnabled(param0: boolean): void;
				public requestFocus(): boolean;
				public setSplitBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public collapseActionView(): boolean;
				public hideForSystem(): void;
				public getNavigationItemCount(): number;
				public isTitleTruncated(): boolean;
				public setSelectedNavigationItem(param0: number): void;
				public setLogo(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getTitle(): string;
				public hasIcon(): boolean;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number, param2: boolean): void;
				public hide(): void;
				public selectTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public setNavigationMode(param0: number): void;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: boolean): void;
				public setDisplayOptions(param0: number, param1: number): void;
			}
			export module WindowDecorActionBar {
				export class ActionModeImpl extends androidx.appcompat.view.ActionMode implements androidx.appcompat.view.menu.MenuBuilder.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.WindowDecorActionBar.ActionModeImpl>;
					public getTitle(): string;
					public getMenuInflater(): globalAndroid.view.MenuInflater;
					public getCustomView(): globalAndroid.view.View;
					public getMenu(): globalAndroid.view.Menu;
					public dispatchOnCreate(): boolean;
					public setTitle(param0: string): void;
					public finish(): void;
					public onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): boolean;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public setSubtitle(param0: number): void;
					public setTitle(param0: number): void;
					public onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public constructor();
					public setSubtitle(param0: string): void;
					public isTitleOptional(): boolean;
					public constructor(param0: androidx.appcompat.app.WindowDecorActionBar, param1: globalAndroid.content.Context, param2: androidx.appcompat.view.ActionMode.Callback);
					public getSubtitle(): string;
					public onCloseSubMenu(param0: androidx.appcompat.view.menu.SubMenuBuilder): void;
					public setCustomView(param0: globalAndroid.view.View): void;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public setTitleOptionalHint(param0: boolean): void;
					public invalidate(): void;
				}
				export class TabImpl extends androidx.appcompat.app.ActionBar.Tab {
					public static class: java.lang.Class<androidx.appcompat.app.WindowDecorActionBar.TabImpl>;
					public setTabListener(param0: androidx.appcompat.app.ActionBar.TabListener): androidx.appcompat.app.ActionBar.Tab;
					public getCustomView(): globalAndroid.view.View;
					public setText(param0: string): androidx.appcompat.app.ActionBar.Tab;
					public getTag(): any;
					public getText(): string;
					public setText(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public setIcon(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.app.ActionBar.Tab;
					public setTag(param0: any): androidx.appcompat.app.ActionBar.Tab;
					public getIcon(): globalAndroid.graphics.drawable.Drawable;
					public select(): void;
					public setPosition(param0: number): void;
					public getContentDescription(): string;
					public setCustomView(param0: globalAndroid.view.View): androidx.appcompat.app.ActionBar.Tab;
					public setCustomView(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public getCallback(): androidx.appcompat.app.ActionBar.TabListener;
					public constructor();
					public constructor(param0: androidx.appcompat.app.WindowDecorActionBar);
					public setContentDescription(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public setContentDescription(param0: string): androidx.appcompat.app.ActionBar.Tab;
					public getPosition(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module content {
			export module res {
				export class AppCompatResources {
					public static class: java.lang.Class<androidx.appcompat.content.res.AppCompatResources>;
					public static getColorStateList(param0: globalAndroid.content.Context, param1: number): globalAndroid.content.res.ColorStateList;
					public static getDrawable(param0: globalAndroid.content.Context, param1: number): globalAndroid.graphics.drawable.Drawable;
				}
				export module AppCompatResources {
					export class ColorStateListCacheEntry {
						public static class: java.lang.Class<androidx.appcompat.content.res.AppCompatResources.ColorStateListCacheEntry>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module graphics {
			export module drawable {
				export class AnimatedStateListDrawableCompat extends androidx.appcompat.graphics.drawable.StateListDrawable {
					public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat>;
					public addTransition(param0: number, param1: number, param2: globalAndroid.graphics.drawable.Drawable, param3: boolean): void;
					public static createFromXmlInner(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.Resources, param2: org.xmlpull.v1.XmlPullParser, param3: globalAndroid.util.AttributeSet, param4: globalAndroid.content.res.Resources.Theme): androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat;
					public jumpToCurrentState(): void;
					public onStateChange(param0: native.Array<number>): boolean;
					public isStateful(): boolean;
					public mutate(): globalAndroid.graphics.drawable.Drawable;
					public addState(param0: native.Array<number>, param1: globalAndroid.graphics.drawable.Drawable, param2: number): void;
					public inflate(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.Resources, param2: org.xmlpull.v1.XmlPullParser, param3: globalAndroid.util.AttributeSet, param4: globalAndroid.content.res.Resources.Theme): void;
					public constructor();
					public setVisible(param0: boolean, param1: boolean): boolean;
					public setConstantState(param0: androidx.appcompat.graphics.drawable.DrawableContainer.DrawableContainerState): void;
					public static create(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.content.res.Resources.Theme): androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat;
					public addState(param0: native.Array<number>, param1: globalAndroid.graphics.drawable.Drawable): void;
				}
				export module AnimatedStateListDrawableCompat {
					export class AnimatableTransition extends androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.Transition {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.AnimatableTransition>;
						public start(): void;
						public stop(): void;
					}
					export class AnimatedStateListState extends androidx.appcompat.graphics.drawable.StateListDrawable.StateListState {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.AnimatedStateListState>;
						public newDrawable(): globalAndroid.graphics.drawable.Drawable;
						public newDrawable(param0: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
					}
					export class AnimatedVectorDrawableTransition extends androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.Transition {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.AnimatedVectorDrawableTransition>;
						public start(): void;
						public stop(): void;
					}
					export class AnimationDrawableTransition extends androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.Transition {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.AnimationDrawableTransition>;
						public start(): void;
						public reverse(): void;
						public canReverse(): boolean;
						public stop(): void;
					}
					export class FrameInterpolator {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.FrameInterpolator>;
						public getInterpolation(param0: number): number;
					}
					export abstract class Transition {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.Transition>;
						public start(): void;
						public reverse(): void;
						public canReverse(): boolean;
						public stop(): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module graphics {
			export module drawable {
				export class DrawableContainer {
					public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawableContainer>;
					public getMinimumWidth(): number;
					public setDither(param0: boolean): void;
					public setTintList(param0: globalAndroid.content.res.ColorStateList): void;
					public onStateChange(param0: native.Array<number>): boolean;
					public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
					public isStateful(): boolean;
					public onLevelChange(param0: number): boolean;
					public getIntrinsicWidth(): number;
					public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;
					public setHotspot(param0: number, param1: number): void;
					public setTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
					public getChangingConfigurations(): number;
					public getPadding(param0: globalAndroid.graphics.Rect): boolean;
					public getHotspotBounds(param0: globalAndroid.graphics.Rect): void;
					public setEnterFadeDuration(param0: number): void;
					public getMinimumHeight(): number;
					public onLayoutDirectionChanged(param0: number): boolean;
					public canApplyTheme(): boolean;
					public setAutoMirrored(param0: boolean): void;
					public getOpacity(): number;
					public getAlpha(): number;
					public jumpToCurrentState(): void;
					public getIntrinsicHeight(): number;
					public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
					public getCurrent(): globalAndroid.graphics.drawable.Drawable;
					public setAlpha(param0: number): void;
					public setExitFadeDuration(param0: number): void;
					public mutate(): globalAndroid.graphics.drawable.Drawable;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
					public isAutoMirrored(): boolean;
					public setVisible(param0: boolean, param1: boolean): boolean;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public applyTheme(param0: globalAndroid.content.res.Resources.Theme): void;
					public getOutline(param0: any): void;
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public setConstantState(param0: androidx.appcompat.graphics.drawable.DrawableContainer.DrawableContainerState): void;
				}
				export module DrawableContainer {
					export class BlockInvalidateCallback {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawableContainer.BlockInvalidateCallback>;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public unwrap(): globalAndroid.graphics.drawable.Drawable.Callback;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public wrap(param0: globalAndroid.graphics.drawable.Drawable.Callback): androidx.appcompat.graphics.drawable.DrawableContainer.BlockInvalidateCallback;
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					}
					export abstract class DrawableContainerState {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawableContainer.DrawableContainerState>;
						public getConstantMinimumHeight(): number;
						public getChangingConfigurations(): number;
						public getChildCount(): number;
						public getExitFadeDuration(): number;
						public getChild(param0: number): globalAndroid.graphics.drawable.Drawable;
						public computeConstantSize(): void;
						public getConstantHeight(): number;
						public setExitFadeDuration(param0: number): void;
						public getOpacity(): number;
						public addChild(param0: globalAndroid.graphics.drawable.Drawable): number;
						public growArray(param0: number, param1: number): void;
						public getConstantWidth(): number;
						public setVariablePadding(param0: boolean): void;
						public canConstantState(): boolean;
						public isStateful(): boolean;
						public getConstantPadding(): globalAndroid.graphics.Rect;
						public isConstantSize(): boolean;
						public canApplyTheme(): boolean;
						public setEnterFadeDuration(param0: number): void;
						public setConstantSize(param0: boolean): void;
						public getConstantMinimumWidth(): number;
						public getEnterFadeDuration(): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module graphics {
			export module drawable {
				export class DrawableWrapper {
					public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawableWrapper>;
					public getMinimumWidth(): number;
					public setDither(param0: boolean): void;
					public setTintList(param0: globalAndroid.content.res.ColorStateList): void;
					public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
					public isStateful(): boolean;
					public onLevelChange(param0: number): boolean;
					public getIntrinsicWidth(): number;
					public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;
					public setWrappedDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setHotspot(param0: number, param1: number): void;
					public setTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
					public getChangingConfigurations(): number;
					public setFilterBitmap(param0: boolean): void;
					public getPadding(param0: globalAndroid.graphics.Rect): boolean;
					public getState(): native.Array<number>;
					public getMinimumHeight(): number;
					public getWrappedDrawable(): globalAndroid.graphics.drawable.Drawable;
					public setAutoMirrored(param0: boolean): void;
					public setTint(param0: number): void;
					public setChangingConfigurations(param0: number): void;
					public getOpacity(): number;
					public jumpToCurrentState(): void;
					public getTransparentRegion(): globalAndroid.graphics.Region;
					public getIntrinsicHeight(): number;
					public getCurrent(): globalAndroid.graphics.drawable.Drawable;
					public setAlpha(param0: number): void;
					public constructor(param0: globalAndroid.graphics.drawable.Drawable);
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
					public setState(param0: native.Array<number>): boolean;
					public setVisible(param0: boolean, param1: boolean): boolean;
					public isAutoMirrored(): boolean;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module graphics {
			export module drawable {
				export class DrawerArrowDrawable {
					public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawerArrowDrawable>;
					public static ARROW_DIRECTION_LEFT: number;
					public static ARROW_DIRECTION_RIGHT: number;
					public static ARROW_DIRECTION_START: number;
					public static ARROW_DIRECTION_END: number;
					public getArrowShaftLength(): number;
					public getDirection(): number;
					public setBarThickness(param0: number): void;
					public getGapSize(): number;
					public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
					public getIntrinsicWidth(): number;
					public setVerticalMirror(param0: boolean): void;
					public setSpinEnabled(param0: boolean): void;
					public setGapSize(param0: number): void;
					public setArrowHeadLength(param0: number): void;
					public getBarThickness(): number;
					public setDirection(param0: number): void;
					public getOpacity(): number;
					public setArrowShaftLength(param0: number): void;
					public setColor(param0: number): void;
					public getColor(): number;
					public getBarLength(): number;
					public getIntrinsicHeight(): number;
					public getArrowHeadLength(): number;
					public setAlpha(param0: number): void;
					public setProgress(param0: number): void;
					public getPaint(): globalAndroid.graphics.Paint;
					public constructor(param0: globalAndroid.content.Context);
					public getProgress(): number;
					public isSpinEnabled(): boolean;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public setBarLength(param0: number): void;
				}
				export module DrawerArrowDrawable {
					export class ArrowDirection {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawerArrowDrawable.ArrowDirection>;
						/**
						 * Constructs a new instance of the androidx.appcompat.graphics.drawable.DrawerArrowDrawable$ArrowDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module graphics {
			export module drawable {
				export class StateListDrawable extends androidx.appcompat.graphics.drawable.DrawableContainer {
					public static class: java.lang.Class<androidx.appcompat.graphics.drawable.StateListDrawable>;
					public inflate(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.Resources, param2: org.xmlpull.v1.XmlPullParser, param3: globalAndroid.util.AttributeSet, param4: globalAndroid.content.res.Resources.Theme): void;
					public onStateChange(param0: native.Array<number>): boolean;
					public applyTheme(param0: globalAndroid.content.res.Resources.Theme): void;
					public isStateful(): boolean;
					public setConstantState(param0: androidx.appcompat.graphics.drawable.DrawableContainer.DrawableContainerState): void;
					public mutate(): globalAndroid.graphics.drawable.Drawable;
					public addState(param0: native.Array<number>, param1: globalAndroid.graphics.drawable.Drawable): void;
				}
				export module StateListDrawable {
					export class StateListState extends androidx.appcompat.graphics.drawable.DrawableContainer.DrawableContainerState {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.StateListDrawable.StateListState>;
						public newDrawable(): globalAndroid.graphics.drawable.Drawable;
						public newDrawable(param0: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
						public growArray(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module text {
			export class AllCapsTransformationMethod {
				public static class: java.lang.Class<androidx.appcompat.text.AllCapsTransformationMethod>;
				public getTransformation(param0: string, param1: globalAndroid.view.View): string;
				public constructor(param0: globalAndroid.content.Context);
				public onFocusChanged(param0: globalAndroid.view.View, param1: string, param2: boolean, param3: number, param4: globalAndroid.graphics.Rect): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class ActionBarPolicy {
				public static class: java.lang.Class<androidx.appcompat.view.ActionBarPolicy>;
				public showsOverflowMenuButton(): boolean;
				public enableHomeButtonByDefault(): boolean;
				public getStackedTabMaxWidth(): number;
				public hasEmbeddedTabs(): boolean;
				public getMaxActionButtons(): number;
				public static get(param0: globalAndroid.content.Context): androidx.appcompat.view.ActionBarPolicy;
				public getEmbeddedMenuWidthLimit(): number;
				public getTabContainerHeight(): number;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export abstract class ActionMode {
				public static class: java.lang.Class<androidx.appcompat.view.ActionMode>;
				public isUiFocusable(): boolean;
				public finish(): void;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public getCustomView(): globalAndroid.view.View;
				public setTitle(param0: string): void;
				public getMenu(): globalAndroid.view.Menu;
				public getTitle(): string;
				public constructor();
				public isTitleOptional(): boolean;
				public setSubtitle(param0: string): void;
				public setTitle(param0: number): void;
				public invalidate(): void;
				public setTitleOptionalHint(param0: boolean): void;
				public getTag(): any;
				public getSubtitle(): string;
				public setSubtitle(param0: number): void;
				public getTitleOptionalHint(): boolean;
				public setTag(param0: any): void;
				public setCustomView(param0: globalAndroid.view.View): void;
			}
			export module ActionMode {
				export class Callback {
					public static class: java.lang.Class<androidx.appcompat.view.ActionMode.Callback>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.ActionMode$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCreateActionMode(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
						onPrepareActionMode(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
						onActionItemClicked(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.MenuItem): boolean;
						onDestroyActionMode(param0: androidx.appcompat.view.ActionMode): void;
					});
					public constructor();
					public onPrepareActionMode(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
					public onDestroyActionMode(param0: androidx.appcompat.view.ActionMode): void;
					public onCreateActionMode(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
					public onActionItemClicked(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class CollapsibleActionView {
				public static class: java.lang.Class<androidx.appcompat.view.CollapsibleActionView>;
				/**
				 * Constructs a new instance of the androidx.appcompat.view.CollapsibleActionView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onActionViewExpanded(): void;
					onActionViewCollapsed(): void;
				});
				public constructor();
				public onActionViewExpanded(): void;
				public onActionViewCollapsed(): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class ContextThemeWrapper {
				public static class: java.lang.Class<androidx.appcompat.view.ContextThemeWrapper>;
				public applyOverrideConfiguration(param0: globalAndroid.content.res.Configuration): void;
				public onApplyThemeResource(param0: globalAndroid.content.res.Resources.Theme, param1: number, param2: boolean): void;
				public setTheme(param0: number): void;
				public getThemeResId(): number;
				public getSystemService(param0: string): any;
				public getResources(): globalAndroid.content.res.Resources;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public attachBaseContext(param0: globalAndroid.content.Context): void;
				public getTheme(): globalAndroid.content.res.Resources.Theme;
				public getAssets(): globalAndroid.content.res.AssetManager;
				public constructor();
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.Resources.Theme);
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class StandaloneActionMode extends androidx.appcompat.view.ActionMode implements androidx.appcompat.view.menu.MenuBuilder.Callback {
				public static class: java.lang.Class<androidx.appcompat.view.StandaloneActionMode>;
				public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
				public isUiFocusable(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.widget.ActionBarContextView, param2: androidx.appcompat.view.ActionMode.Callback, param3: boolean);
				public onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): boolean;
				public finish(): void;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public getCustomView(): globalAndroid.view.View;
				public setTitle(param0: string): void;
				public getMenu(): globalAndroid.view.Menu;
				public getTitle(): string;
				public constructor();
				public isTitleOptional(): boolean;
				public setSubtitle(param0: string): void;
				public onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
				public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
				public setTitle(param0: number): void;
				public invalidate(): void;
				public setTitleOptionalHint(param0: boolean): void;
				public getSubtitle(): string;
				public setSubtitle(param0: number): void;
				public onCloseSubMenu(param0: androidx.appcompat.view.menu.SubMenuBuilder): void;
				public setCustomView(param0: globalAndroid.view.View): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class SupportActionModeWrapper {
				public static class: java.lang.Class<androidx.appcompat.view.SupportActionModeWrapper>;
				public finish(): void;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public getCustomView(): globalAndroid.view.View;
				public setTitle(param0: string): void;
				public getMenu(): globalAndroid.view.Menu;
				public getTitle(): string;
				public isTitleOptional(): boolean;
				public setSubtitle(param0: string): void;
				public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.ActionMode);
				public setTitle(param0: number): void;
				public invalidate(): void;
				public setTitleOptionalHint(param0: boolean): void;
				public getTag(): any;
				public getSubtitle(): string;
				public setSubtitle(param0: number): void;
				public getTitleOptionalHint(): boolean;
				public setTag(param0: any): void;
				public setCustomView(param0: globalAndroid.view.View): void;
			}
			export module SupportActionModeWrapper {
				export class CallbackWrapper extends androidx.appcompat.view.ActionMode.Callback {
					public static class: java.lang.Class<androidx.appcompat.view.SupportActionModeWrapper.CallbackWrapper>;
					public onPrepareActionMode(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
					public onDestroyActionMode(param0: androidx.appcompat.view.ActionMode): void;
					public onCreateActionMode(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
					public onActionItemClicked(param0: androidx.appcompat.view.ActionMode, param1: globalAndroid.view.MenuItem): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.ActionMode.Callback);
					public getActionModeWrapper(param0: androidx.appcompat.view.ActionMode): globalAndroid.view.ActionMode;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class SupportMenuInflater {
				public static class: java.lang.Class<androidx.appcompat.view.SupportMenuInflater>;
				public constructor(param0: globalAndroid.content.Context);
				public inflate(param0: number, param1: globalAndroid.view.Menu): void;
			}
			export module SupportMenuInflater {
				export class InflatedOnMenuItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.view.SupportMenuInflater.InflatedOnMenuItemClickListener>;
					public constructor(param0: any, param1: string);
					public onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
				}
				export class MenuState {
					public static class: java.lang.Class<androidx.appcompat.view.SupportMenuInflater.MenuState>;
					public constructor(param0: androidx.appcompat.view.SupportMenuInflater, param1: globalAndroid.view.Menu);
					public resetGroup(): void;
					public hasAddedItem(): boolean;
					public readItem(param0: globalAndroid.util.AttributeSet): void;
					public addSubMenuItem(): globalAndroid.view.SubMenu;
					public readGroup(param0: globalAndroid.util.AttributeSet): void;
					public addItem(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class ViewPropertyAnimatorCompatSet {
				public static class: java.lang.Class<androidx.appcompat.view.ViewPropertyAnimatorCompatSet>;
				public setInterpolator(param0: globalAndroid.view.animation.Interpolator): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
				public play(param0: androidx.core.view.ViewPropertyAnimatorCompat): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
				public setListener(param0: androidx.core.view.ViewPropertyAnimatorListener): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
				public start(): void;
				public playSequentially(param0: androidx.core.view.ViewPropertyAnimatorCompat, param1: androidx.core.view.ViewPropertyAnimatorCompat): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
				public cancel(): void;
				public setDuration(param0: number): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class WindowCallbackWrapper {
				public static class: java.lang.Class<androidx.appcompat.view.WindowCallbackWrapper>;
				public onMenuItemSelected(param0: number, param1: globalAndroid.view.MenuItem): boolean;
				public onCreatePanelMenu(param0: number, param1: globalAndroid.view.Menu): boolean;
				public dispatchTrackballEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback, param1: number): globalAndroid.view.ActionMode;
				public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public onActionModeFinished(param0: globalAndroid.view.ActionMode): void;
				public dispatchGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onMenuOpened(param0: number, param1: globalAndroid.view.Menu): boolean;
				public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public onPreparePanel(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.Menu): boolean;
				public onActionModeStarted(param0: globalAndroid.view.ActionMode): void;
				public onPointerCaptureChanged(param0: boolean): void;
				public onSearchRequested(param0: any): boolean;
				public dispatchKeyShortcutEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onProvideKeyboardShortcuts(param0: java.util.List<any>, param1: globalAndroid.view.Menu, param2: number): void;
				public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onWindowAttributesChanged(param0: globalAndroid.view.WindowManager.LayoutParams): void;
				public onContentChanged(): void;
				public onCreatePanelView(param0: number): globalAndroid.view.View;
				public onPanelClosed(param0: number, param1: globalAndroid.view.Menu): void;
				public onDetachedFromWindow(): void;
				public onSearchRequested(): boolean;
				public onWindowFocusChanged(param0: boolean): void;
				public constructor(param0: globalAndroid.view.Window.Callback);
				public onAttachedToWindow(): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ActionMenuItem {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ActionMenuItem>;
					public getTitle(): string;
					public setTitleCondensed(param0: string): globalAndroid.view.MenuItem;
					public setOnActionExpandListener(param0: globalAndroid.view.MenuItem.OnActionExpandListener): globalAndroid.view.MenuItem;
					public setIconTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.view.MenuItem;
					public getGroupId(): number;
					public hasSubMenu(): boolean;
					public setVisible(param0: boolean): globalAndroid.view.MenuItem;
					public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: number, param4: number, param5: string);
					public getContentDescription(): string;
					public setTooltipText(param0: string): androidx.core.internal.view.SupportMenuItem;
					public getTitleCondensed(): string;
					public setIntent(param0: globalAndroid.content.Intent): globalAndroid.view.MenuItem;
					public setEnabled(param0: boolean): globalAndroid.view.MenuItem;
					public isEnabled(): boolean;
					public setActionProvider(param0: globalAndroid.view.ActionProvider): globalAndroid.view.MenuItem;
					public setIconTintList(param0: globalAndroid.content.res.ColorStateList): globalAndroid.view.MenuItem;
					public setExclusiveCheckable(param0: boolean): androidx.appcompat.view.menu.ActionMenuItem;
					public getSupportActionProvider(): androidx.core.view.ActionProvider;
					public setChecked(param0: boolean): globalAndroid.view.MenuItem;
					public getSubMenu(): globalAndroid.view.SubMenu;
					public getIntent(): globalAndroid.content.Intent;
					public setCheckable(param0: boolean): globalAndroid.view.MenuItem;
					public getMenuInfo(): globalAndroid.view.ContextMenu.ContextMenuInfo;
					public setAlphabeticShortcut(param0: string, param1: number): globalAndroid.view.MenuItem;
					public invoke(): boolean;
					public getNumericModifiers(): number;
					public isVisible(): boolean;
					public setSupportActionProvider(param0: androidx.core.view.ActionProvider): androidx.core.internal.view.SupportMenuItem;
					public getAlphabeticModifiers(): number;
					public collapseActionView(): boolean;
					public getTooltipText(): string;
					public expandActionView(): boolean;
					public setTitle(param0: number): globalAndroid.view.MenuItem;
					public getNumericShortcut(): string;
					public isActionViewExpanded(): boolean;
					public getAlphabeticShortcut(): string;
					public setActionView(param0: number): androidx.core.internal.view.SupportMenuItem;
					public getIcon(): globalAndroid.graphics.drawable.Drawable;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.MenuItem;
					public setIcon(param0: number): globalAndroid.view.MenuItem;
					public setShowAsAction(param0: number): void;
					public getIconTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public setAlphabeticShortcut(param0: string): globalAndroid.view.MenuItem;
					public setTitle(param0: string): globalAndroid.view.MenuItem;
					public getOrder(): number;
					public getActionProvider(): globalAndroid.view.ActionProvider;
					public isCheckable(): boolean;
					public setContentDescription(param0: string): androidx.core.internal.view.SupportMenuItem;
					public isChecked(): boolean;
					public getItemId(): number;
					public setShortcut(param0: string, param1: string, param2: number, param3: number): globalAndroid.view.MenuItem;
					public setShortcut(param0: string, param1: string): globalAndroid.view.MenuItem;
					public getIconTintList(): globalAndroid.content.res.ColorStateList;
					public setOnMenuItemClickListener(param0: globalAndroid.view.MenuItem.OnMenuItemClickListener): globalAndroid.view.MenuItem;
					public setNumericShortcut(param0: string): globalAndroid.view.MenuItem;
					public setShowAsActionFlags(param0: number): androidx.core.internal.view.SupportMenuItem;
					public getActionView(): globalAndroid.view.View;
					public setNumericShortcut(param0: string, param1: number): globalAndroid.view.MenuItem;
					public setActionView(param0: globalAndroid.view.View): androidx.core.internal.view.SupportMenuItem;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ActionMenuItemView extends androidx.appcompat.widget.AppCompatTextView implements androidx.appcompat.view.menu.MenuView.ItemView, androidx.appcompat.widget.ActionMenuView.ActionMenuChildView {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ActionMenuItemView>;
					public getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
					public setTitle(param0: string): void;
					public showsIcon(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public initialize(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: number): void;
					public prefersCondensedTitle(): boolean;
					public hasText(): boolean;
					public setCheckable(param0: boolean): void;
					public setPadding(param0: number, param1: number, param2: number, param3: number): void;
					public setChecked(param0: boolean): void;
					public setEnabled(param0: boolean): void;
					public onMeasure(param0: number, param1: number): void;
					public setShortcut(param0: boolean, param1: string): void;
					public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setItemInvoker(param0: androidx.appcompat.view.menu.MenuBuilder.ItemInvoker): void;
					public needsDividerAfter(): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public setPopupCallback(param0: androidx.appcompat.view.menu.ActionMenuItemView.PopupCallback): void;
					public onClick(param0: globalAndroid.view.View): void;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setExpandedFormat(param0: boolean): void;
					public needsDividerBefore(): boolean;
				}
				export module ActionMenuItemView {
					export class ActionMenuItemForwardingListener extends androidx.appcompat.widget.ForwardingListener {
						public static class: java.lang.Class<androidx.appcompat.view.menu.ActionMenuItemView.ActionMenuItemForwardingListener>;
						public constructor(param0: globalAndroid.view.View);
						public onForwardingStarted(): boolean;
						public getPopup(): androidx.appcompat.view.menu.ShowableListMenu;
						public constructor(param0: androidx.appcompat.view.menu.ActionMenuItemView);
					}
					export abstract class PopupCallback {
						public static class: java.lang.Class<androidx.appcompat.view.menu.ActionMenuItemView.PopupCallback>;
						public constructor();
						public getPopup(): androidx.appcompat.view.menu.ShowableListMenu;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export abstract class BaseMenuPresenter extends androidx.appcompat.view.menu.MenuPresenter {
					public static class: java.lang.Class<androidx.appcompat.view.menu.BaseMenuPresenter>;
					public mSystemContext: globalAndroid.content.Context;
					public mContext: globalAndroid.content.Context;
					public mMenu: androidx.appcompat.view.menu.MenuBuilder;
					public mSystemInflater: globalAndroid.view.LayoutInflater;
					public mInflater: globalAndroid.view.LayoutInflater;
					public mMenuView: androidx.appcompat.view.menu.MenuView;
					public addItemView(param0: globalAndroid.view.View, param1: number): void;
					public setId(param0: number): void;
					public createItemView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView.ItemView;
					public getId(): number;
					public updateMenuView(param0: boolean): void;
					public bindItemView(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: androidx.appcompat.view.menu.MenuView.ItemView): void;
					public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public shouldIncludeItem(param0: number, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public filterLeftoverView(param0: globalAndroid.view.ViewGroup, param1: number): boolean;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public getCallback(): androidx.appcompat.view.menu.MenuPresenter.Callback;
					public getItemView(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public flagActionItems(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export abstract class BaseMenuWrapper<T>  extends androidx.appcompat.view.menu.BaseWrapper<any> {
					public static class: java.lang.Class<androidx.appcompat.view.menu.BaseMenuWrapper<any>>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class BaseWrapper<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.menu.BaseWrapper<any>>;
					public getWrappedObject(): T;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class CascadingMenuPopup extends androidx.appcompat.view.menu.MenuPopup implements androidx.appcompat.view.menu.MenuPresenter {
					public static class: java.lang.Class<androidx.appcompat.view.menu.CascadingMenuPopup>;
					public isShowing(): boolean;
					public setOnDismissListener(param0: globalAndroid.widget.PopupWindow.OnDismissListener): void;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public onDismiss(): void;
					public setAnchorView(param0: globalAndroid.view.View): void;
					public setVerticalOffset(param0: number): void;
					public closeMenuOnSubMenuOpened(): boolean;
					public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public flagActionItems(): boolean;
					public show(): void;
					public setGravity(param0: number): void;
					public getListView(): globalAndroid.widget.ListView;
					public getId(): number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.View, param2: number, param3: number, param4: boolean);
					public updateMenuView(param0: boolean): void;
					public setHorizontalOffset(param0: number): void;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onKey(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public addMenu(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public setForceShowIcon(param0: boolean): void;
					public dismiss(): void;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public setShowTitle(param0: boolean): void;
				}
				export module CascadingMenuPopup {
					export class CascadingMenuInfo {
						public static class: java.lang.Class<androidx.appcompat.view.menu.CascadingMenuPopup.CascadingMenuInfo>;
						public window: androidx.appcompat.widget.MenuPopupWindow;
						public menu: androidx.appcompat.view.menu.MenuBuilder;
						public position: number;
						public constructor(param0: androidx.appcompat.widget.MenuPopupWindow, param1: androidx.appcompat.view.menu.MenuBuilder, param2: number);
						public getListView(): globalAndroid.widget.ListView;
					}
					export class HorizPosition {
						public static class: java.lang.Class<androidx.appcompat.view.menu.CascadingMenuPopup.HorizPosition>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.CascadingMenuPopup$HorizPosition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ExpandedMenuView implements androidx.appcompat.view.menu.MenuBuilder.ItemInvoker, androidx.appcompat.view.menu.MenuView {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ExpandedMenuView>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onDetachedFromWindow(): void;
					public onItemClick(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
					public initialize(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public invokeItem(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getWindowAnimations(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ListMenuItemView implements androidx.appcompat.view.menu.MenuView.ItemView {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ListMenuItemView>;
					public setEnabled(param0: boolean): void;
					public getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
					public onMeasure(param0: number, param1: number): void;
					public setTitle(param0: string): void;
					public setShortcut(param0: boolean, param1: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setGroupDividerEnabled(param0: boolean): void;
					public showsIcon(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public initialize(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: number): void;
					public prefersCondensedTitle(): boolean;
					public setCheckable(param0: boolean): void;
					public adjustListItemSelectionBounds(param0: globalAndroid.graphics.Rect): void;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onFinishInflate(): void;
					public setForceShowIcon(param0: boolean): void;
					public setChecked(param0: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ListMenuPresenter extends androidx.appcompat.view.menu.MenuPresenter {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ListMenuPresenter>;
					public static VIEWS_TAG: string;
					public setId(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: number);
					public restoreHierarchyState(param0: globalAndroid.os.Bundle): void;
					public getId(): number;
					public updateMenuView(param0: boolean): void;
					public getAdapter(): globalAndroid.widget.ListAdapter;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public saveHierarchyState(param0: globalAndroid.os.Bundle): void;
					public setItemIndexOffset(param0: number): void;
					public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public onItemClick(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public constructor(param0: number, param1: number);
					public flagActionItems(): boolean;
				}
				export module ListMenuPresenter {
					export class MenuAdapter {
						public static class: java.lang.Class<androidx.appcompat.view.menu.ListMenuPresenter.MenuAdapter>;
						public constructor(param0: androidx.appcompat.view.menu.ListMenuPresenter);
						public notifyDataSetChanged(): void;
						public getItemId(param0: number): number;
						public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						public getCount(): number;
						public getItem(param0: number): androidx.appcompat.view.menu.MenuItemImpl;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuAdapter {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuAdapter>;
					public getForceShowIcon(): boolean;
					public getCount(): number;
					public constructor(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.LayoutInflater, param2: boolean, param3: number);
					public getItem(param0: number): androidx.appcompat.view.menu.MenuItemImpl;
					public setForceShowIcon(param0: boolean): void;
					public getItemId(param0: number): number;
					public notifyDataSetChanged(): void;
					public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public getAdapterMenu(): androidx.appcompat.view.menu.MenuBuilder;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuBuilder {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuBuilder>;
					public setGroupVisible(param0: number, param1: boolean): void;
					public setQwertyMode(param0: boolean): void;
					public findItemIndex(param0: number): number;
					public performIdentifierAction(param0: number, param1: number): boolean;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public add(param0: number, param1: number, param2: number, param3: string): globalAndroid.view.MenuItem;
					public size(): number;
					public setOverrideVisibleItems(param0: boolean): void;
					public startDispatchingItemsChanged(): void;
					public add(param0: number, param1: number, param2: number, param3: number): globalAndroid.view.MenuItem;
					public isShortcutsVisible(): boolean;
					public addMenuPresenter(param0: androidx.appcompat.view.menu.MenuPresenter): void;
					public getNonActionItems(): java.util.ArrayList<androidx.appcompat.view.menu.MenuItemImpl>;
					public close(): void;
					public getContext(): globalAndroid.content.Context;
					public changeMenuMode(): void;
					public add(param0: string): globalAndroid.view.MenuItem;
					public stopDispatchingItemsChanged(): void;
					public setOptionalIconsVisible(param0: boolean): void;
					public getHeaderIcon(): globalAndroid.graphics.drawable.Drawable;
					public setShortcutsVisible(param0: boolean): void;
					public removeMenuPresenter(param0: androidx.appcompat.view.menu.MenuPresenter): void;
					public setDefaultShowAsAction(param0: number): androidx.appcompat.view.menu.MenuBuilder;
					public close(param0: boolean): void;
					public removeItemAt(param0: number): void;
					public setGroupEnabled(param0: number, param1: boolean): void;
					public restorePresenterStates(param0: globalAndroid.os.Bundle): void;
					public isShortcutKey(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public getVisibleItems(): java.util.ArrayList<androidx.appcompat.view.menu.MenuItemImpl>;
					public clearAll(): void;
					public setHeaderTitleInt(param0: number): androidx.appcompat.view.menu.MenuBuilder;
					public hasVisibleItems(): boolean;
					public findGroupIndex(param0: number, param1: number): number;
					public addInternal(param0: number, param1: number, param2: number, param3: string): globalAndroid.view.MenuItem;
					public add(param0: number): globalAndroid.view.MenuItem;
					public getActionViewStatesKey(): string;
					public getHeaderView(): globalAndroid.view.View;
					public setHeaderTitleInt(param0: string): androidx.appcompat.view.menu.MenuBuilder;
					public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
					public restoreActionViewStates(param0: globalAndroid.os.Bundle): void;
					public setCurrentMenuInfo(param0: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
					public setGroupDividerEnabled(param0: boolean): void;
					public addSubMenu(param0: number): globalAndroid.view.SubMenu;
					public performItemAction(param0: globalAndroid.view.MenuItem, param1: number): boolean;
					public getActionItems(): java.util.ArrayList<androidx.appcompat.view.menu.MenuItemImpl>;
					public getExpandedItem(): androidx.appcompat.view.menu.MenuItemImpl;
					public addIntentOptions(param0: number, param1: number, param2: number, param3: globalAndroid.content.ComponentName, param4: native.Array<globalAndroid.content.Intent>, param5: globalAndroid.content.Intent, param6: number, param7: native.Array<globalAndroid.view.MenuItem>): number;
					public isGroupDividerEnabled(): boolean;
					public onItemsChanged(param0: boolean): void;
					public getRootMenu(): androidx.appcompat.view.menu.MenuBuilder;
					public performItemAction(param0: globalAndroid.view.MenuItem, param1: androidx.appcompat.view.menu.MenuPresenter, param2: number): boolean;
					public setHeaderViewInt(param0: globalAndroid.view.View): androidx.appcompat.view.menu.MenuBuilder;
					public clear(): void;
					public savePresenterStates(param0: globalAndroid.os.Bundle): void;
					public getItem(param0: number): globalAndroid.view.MenuItem;
					public flagActionItems(): void;
					public setHeaderIconInt(param0: number): androidx.appcompat.view.menu.MenuBuilder;
					public findItem(param0: number): globalAndroid.view.MenuItem;
					public getHeaderTitle(): string;
					public saveActionViewStates(param0: globalAndroid.os.Bundle): void;
					public addSubMenu(param0: string): globalAndroid.view.SubMenu;
					public addSubMenu(param0: number, param1: number, param2: number, param3: number): globalAndroid.view.SubMenu;
					public setHeaderIconInt(param0: globalAndroid.graphics.drawable.Drawable): androidx.appcompat.view.menu.MenuBuilder;
					public performShortcut(param0: number, param1: globalAndroid.view.KeyEvent, param2: number): boolean;
					public clearHeader(): void;
					public removeGroup(param0: number): void;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public addMenuPresenter(param0: androidx.appcompat.view.menu.MenuPresenter, param1: globalAndroid.content.Context): void;
					public addSubMenu(param0: number, param1: number, param2: number, param3: string): globalAndroid.view.SubMenu;
					public findGroupIndex(param0: number): number;
					public removeItem(param0: number): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				}
				export module MenuBuilder {
					export class Callback {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuBuilder.Callback>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.MenuBuilder$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): boolean;
							onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
						});
						public constructor();
						public onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): boolean;
						public onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					}
					export class ItemInvoker {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuBuilder.ItemInvoker>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.MenuBuilder$ItemInvoker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							invokeItem(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						});
						public constructor();
						public invokeItem(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuDialogHelper extends androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuDialogHelper>;
					public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
					public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public show(param0: globalAndroid.os.IBinder): void;
					public onDismiss(param0: globalAndroid.content.DialogInterface): void;
					public onKey(param0: globalAndroid.content.DialogInterface, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
					public setPresenterCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public dismiss(): void;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public constructor(param0: androidx.appcompat.view.menu.MenuBuilder);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuHelper {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuHelper>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.menu.MenuHelper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setPresenterCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
						dismiss(): void;
					});
					public constructor();
					public setPresenterCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public dismiss(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuItemImpl {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemImpl>;
					public getTitle(): string;
					public setTitleCondensed(param0: string): globalAndroid.view.MenuItem;
					public setOnActionExpandListener(param0: globalAndroid.view.MenuItem.OnActionExpandListener): globalAndroid.view.MenuItem;
					public setIconTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.view.MenuItem;
					public getGroupId(): number;
					public hasSubMenu(): boolean;
					public setVisible(param0: boolean): globalAndroid.view.MenuItem;
					public getContentDescription(): string;
					public setTooltipText(param0: string): androidx.core.internal.view.SupportMenuItem;
					public setIntent(param0: globalAndroid.content.Intent): globalAndroid.view.MenuItem;
					public getTitleCondensed(): string;
					public setEnabled(param0: boolean): globalAndroid.view.MenuItem;
					public isEnabled(): boolean;
					public setActionProvider(param0: globalAndroid.view.ActionProvider): globalAndroid.view.MenuItem;
					public setIconTintList(param0: globalAndroid.content.res.ColorStateList): globalAndroid.view.MenuItem;
					public setSubMenu(param0: androidx.appcompat.view.menu.SubMenuBuilder): void;
					public setActionViewExpanded(param0: boolean): void;
					public getSupportActionProvider(): androidx.core.view.ActionProvider;
					public setChecked(param0: boolean): globalAndroid.view.MenuItem;
					public getSubMenu(): globalAndroid.view.SubMenu;
					public getIntent(): globalAndroid.content.Intent;
					public requiresActionButton(): boolean;
					public setCheckable(param0: boolean): globalAndroid.view.MenuItem;
					public getMenuInfo(): globalAndroid.view.ContextMenu.ContextMenuInfo;
					public invoke(): boolean;
					public setAlphabeticShortcut(param0: string, param1: number): globalAndroid.view.MenuItem;
					public getNumericModifiers(): number;
					public isVisible(): boolean;
					public setSupportActionProvider(param0: androidx.core.view.ActionProvider): androidx.core.internal.view.SupportMenuItem;
					public getAlphabeticModifiers(): number;
					public requestsActionButton(): boolean;
					public collapseActionView(): boolean;
					public getTooltipText(): string;
					public expandActionView(): boolean;
					public setExclusiveCheckable(param0: boolean): void;
					public actionFormatChanged(): void;
					public setCallback(param0: java.lang.Runnable): globalAndroid.view.MenuItem;
					public setTitle(param0: number): globalAndroid.view.MenuItem;
					public getNumericShortcut(): string;
					public isActionViewExpanded(): boolean;
					public getAlphabeticShortcut(): string;
					public setActionView(param0: number): androidx.core.internal.view.SupportMenuItem;
					public hasCollapsibleActionView(): boolean;
					public getIcon(): globalAndroid.graphics.drawable.Drawable;
					public isExclusiveCheckable(): boolean;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.MenuItem;
					public setIcon(param0: number): globalAndroid.view.MenuItem;
					public shouldShowIcon(): boolean;
					public setShowAsAction(param0: number): void;
					public getIconTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public setAlphabeticShortcut(param0: string): globalAndroid.view.MenuItem;
					public toString(): string;
					public setTitle(param0: string): globalAndroid.view.MenuItem;
					public getOrder(): number;
					public getActionProvider(): globalAndroid.view.ActionProvider;
					public isCheckable(): boolean;
					public setContentDescription(param0: string): androidx.core.internal.view.SupportMenuItem;
					public isChecked(): boolean;
					public isActionButton(): boolean;
					public setIsActionButton(param0: boolean): void;
					public getItemId(): number;
					public setShortcut(param0: string, param1: string, param2: number, param3: number): globalAndroid.view.MenuItem;
					public setShortcut(param0: string, param1: string): globalAndroid.view.MenuItem;
					public getIconTintList(): globalAndroid.content.res.ColorStateList;
					public getOrdering(): number;
					public setOnMenuItemClickListener(param0: globalAndroid.view.MenuItem.OnMenuItemClickListener): globalAndroid.view.MenuItem;
					public setNumericShortcut(param0: string): globalAndroid.view.MenuItem;
					public setShowAsActionFlags(param0: number): androidx.core.internal.view.SupportMenuItem;
					public getActionView(): globalAndroid.view.View;
					public setNumericShortcut(param0: string, param1: number): globalAndroid.view.MenuItem;
					public setActionView(param0: globalAndroid.view.View): androidx.core.internal.view.SupportMenuItem;
					public showsTextAsAction(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuItemWrapperICS extends androidx.appcompat.view.menu.BaseMenuWrapper<androidx.core.internal.view.SupportMenuItem> implements globalAndroid.view.MenuItem  {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS>;
					public getTitle(): string;
					public setTitleCondensed(param0: string): globalAndroid.view.MenuItem;
					public setTooltipText(param0: string): globalAndroid.view.MenuItem;
					public setOnActionExpandListener(param0: globalAndroid.view.MenuItem.OnActionExpandListener): globalAndroid.view.MenuItem;
					public setIconTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.view.MenuItem;
					public getGroupId(): number;
					public setVisible(param0: boolean): globalAndroid.view.MenuItem;
					public hasSubMenu(): boolean;
					public getContentDescription(): string;
					public getTitleCondensed(): string;
					public setIntent(param0: globalAndroid.content.Intent): globalAndroid.view.MenuItem;
					public setEnabled(param0: boolean): globalAndroid.view.MenuItem;
					public isEnabled(): boolean;
					public setActionProvider(param0: globalAndroid.view.ActionProvider): globalAndroid.view.MenuItem;
					public setIconTintList(param0: globalAndroid.content.res.ColorStateList): globalAndroid.view.MenuItem;
					public setChecked(param0: boolean): globalAndroid.view.MenuItem;
					public getSubMenu(): globalAndroid.view.SubMenu;
					public getIntent(): globalAndroid.content.Intent;
					public setCheckable(param0: boolean): globalAndroid.view.MenuItem;
					public getMenuInfo(): globalAndroid.view.ContextMenu.ContextMenuInfo;
					public setAlphabeticShortcut(param0: string, param1: number): globalAndroid.view.MenuItem;
					public getNumericModifiers(): number;
					public isVisible(): boolean;
					public getAlphabeticModifiers(): number;
					public collapseActionView(): boolean;
					public getTooltipText(): string;
					public expandActionView(): boolean;
					public setExclusiveCheckable(param0: boolean): void;
					public setTitle(param0: number): globalAndroid.view.MenuItem;
					public setActionView(param0: number): globalAndroid.view.MenuItem;
					public getNumericShortcut(): string;
					public isActionViewExpanded(): boolean;
					public getAlphabeticShortcut(): string;
					public getIcon(): globalAndroid.graphics.drawable.Drawable;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.MenuItem;
					public setIcon(param0: number): globalAndroid.view.MenuItem;
					public setShowAsAction(param0: number): void;
					public getIconTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public setAlphabeticShortcut(param0: string): globalAndroid.view.MenuItem;
					public setTitle(param0: string): globalAndroid.view.MenuItem;
					public getOrder(): number;
					public getActionProvider(): globalAndroid.view.ActionProvider;
					public isCheckable(): boolean;
					public isChecked(): boolean;
					public getItemId(): number;
					public setShortcut(param0: string, param1: string, param2: number, param3: number): globalAndroid.view.MenuItem;
					public setShortcut(param0: string, param1: string): globalAndroid.view.MenuItem;
					public getIconTintList(): globalAndroid.content.res.ColorStateList;
					public setOnMenuItemClickListener(param0: globalAndroid.view.MenuItem.OnMenuItemClickListener): globalAndroid.view.MenuItem;
					public setNumericShortcut(param0: string): globalAndroid.view.MenuItem;
					public setContentDescription(param0: string): globalAndroid.view.MenuItem;
					public getActionView(): globalAndroid.view.View;
					public setNumericShortcut(param0: string, param1: number): globalAndroid.view.MenuItem;
					public setActionView(param0: globalAndroid.view.View): globalAndroid.view.MenuItem;
					public setShowAsActionFlags(param0: number): globalAndroid.view.MenuItem;
				}
				export module MenuItemWrapperICS {
					export class ActionProviderWrapper {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.ActionProviderWrapper>;
						public onCreateActionView(): globalAndroid.view.View;
						public onPrepareSubMenu(param0: globalAndroid.view.SubMenu): void;
						public onPerformDefaultAction(): boolean;
						public constructor(param0: androidx.appcompat.view.menu.MenuItemWrapperICS, param1: globalAndroid.content.Context, param2: globalAndroid.view.ActionProvider);
						public hasSubMenu(): boolean;
					}
					export class CollapsibleActionViewWrapper implements androidx.appcompat.view.CollapsibleActionView {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.CollapsibleActionViewWrapper>;
						public onActionViewExpanded(): void;
						public onActionViewCollapsed(): void;
					}
					export class OnActionExpandListenerWrapper extends androidx.appcompat.view.menu.BaseWrapper<globalAndroid.view.MenuItem.OnActionExpandListener> implements globalAndroid.view.MenuItem.OnActionExpandListener  {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.OnActionExpandListenerWrapper>;
						public onMenuItemActionExpand(param0: globalAndroid.view.MenuItem): boolean;
						public onMenuItemActionCollapse(param0: globalAndroid.view.MenuItem): boolean;
					}
					export class OnMenuItemClickListenerWrapper extends androidx.appcompat.view.menu.BaseWrapper<globalAndroid.view.MenuItem.OnMenuItemClickListener> implements globalAndroid.view.MenuItem.OnMenuItemClickListener  {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.OnMenuItemClickListenerWrapper>;
						public onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuItemWrapperJB extends androidx.appcompat.view.menu.MenuItemWrapperICS {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperJB>;
				}
				export module MenuItemWrapperJB {
					export class ActionProviderWrapperJB extends androidx.appcompat.view.menu.MenuItemWrapperICS.ActionProviderWrapper {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperJB.ActionProviderWrapperJB>;
						public onCreateActionView(): globalAndroid.view.View;
						public constructor(param0: androidx.appcompat.view.menu.MenuItemWrapperJB, param1: globalAndroid.content.Context, param2: globalAndroid.view.ActionProvider);
						public overridesItemVisibility(): boolean;
						public setVisibilityListener(param0: androidx.core.view.ActionProvider.VisibilityListener): void;
						public refreshVisibility(): void;
						public isVisible(): boolean;
						public constructor(param0: androidx.appcompat.view.menu.MenuItemWrapperICS, param1: globalAndroid.content.Context, param2: globalAndroid.view.ActionProvider);
						public onCreateActionView(param0: globalAndroid.view.MenuItem): globalAndroid.view.View;
						public onActionProviderVisibilityChanged(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export abstract class MenuPopup implements androidx.appcompat.view.menu.ShowableListMenu, androidx.appcompat.view.menu.MenuPresenter {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuPopup>;
					public isShowing(): boolean;
					public setOnDismissListener(param0: globalAndroid.widget.PopupWindow.OnDismissListener): void;
					public static toMenuAdapter(param0: globalAndroid.widget.ListAdapter): androidx.appcompat.view.menu.MenuAdapter;
					public setEpicenterBounds(param0: globalAndroid.graphics.Rect): void;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public setAnchorView(param0: globalAndroid.view.View): void;
					public setVerticalOffset(param0: number): void;
					public closeMenuOnSubMenuOpened(): boolean;
					public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public getEpicenterBounds(): globalAndroid.graphics.Rect;
					public flagActionItems(): boolean;
					public show(): void;
					public setGravity(param0: number): void;
					public getId(): number;
					public getListView(): globalAndroid.widget.ListView;
					public updateMenuView(param0: boolean): void;
					public static shouldPreserveIconSpacing(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public setHorizontalOffset(param0: number): void;
					public static measureIndividualMenuWidth(param0: globalAndroid.widget.ListAdapter, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.content.Context, param3: number): number;
					public onItemClick(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public addMenu(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public setForceShowIcon(param0: boolean): void;
					public dismiss(): void;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public setShowTitle(param0: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuPopupHelper extends androidx.appcompat.view.menu.MenuHelper {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuPopupHelper>;
					public getGravity(): number;
					public tryShow(): boolean;
					public show(): void;
					public getPopup(): androidx.appcompat.view.menu.MenuPopup;
					public isShowing(): boolean;
					public setGravity(param0: number): void;
					public getListView(): globalAndroid.widget.ListView;
					public setOnDismissListener(param0: globalAndroid.widget.PopupWindow.OnDismissListener): void;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View);
					public show(param0: number, param1: number): void;
					public setPresenterCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public setAnchorView(param0: globalAndroid.view.View): void;
					public onDismiss(): void;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View, param3: boolean, param4: number, param5: number);
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder);
					public tryShow(param0: number, param1: number): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View, param3: boolean, param4: number);
					public setForceShowIcon(param0: boolean): void;
					public dismiss(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuPresenter {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuPresenter>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.menu.MenuPresenter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
						getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
						updateMenuView(param0: boolean): void;
						setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
						onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
						onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
						flagActionItems(): boolean;
						expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						getId(): number;
						onSaveInstanceState(): globalAndroid.os.Parcelable;
						onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					});
					public constructor();
					public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getId(): number;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public updateMenuView(param0: boolean): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public flagActionItems(): boolean;
				}
				export module MenuPresenter {
					export class Callback {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuPresenter.Callback>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.MenuPresenter$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
							onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
						});
						public constructor();
						public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
						public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuView {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuView>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.menu.MenuView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						initialize(param0: androidx.appcompat.view.menu.MenuBuilder): void;
						getWindowAnimations(): number;
					});
					public constructor();
					public initialize(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public getWindowAnimations(): number;
				}
				export module MenuView {
					export class ItemView {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuView.ItemView>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.MenuView$ItemView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							initialize(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: number): void;
							getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
							setTitle(param0: string): void;
							setEnabled(param0: boolean): void;
							setCheckable(param0: boolean): void;
							setChecked(param0: boolean): void;
							setShortcut(param0: boolean, param1: string): void;
							setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
							prefersCondensedTitle(): boolean;
							showsIcon(): boolean;
						});
						public constructor();
						public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setChecked(param0: boolean): void;
						public prefersCondensedTitle(): boolean;
						public setTitle(param0: string): void;
						public setShortcut(param0: boolean, param1: string): void;
						public getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
						public showsIcon(): boolean;
						public setCheckable(param0: boolean): void;
						public initialize(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: number): void;
						public setEnabled(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuWrapperFactory {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuWrapperFactory>;
					public static wrapSupportMenu(param0: globalAndroid.content.Context, param1: androidx.core.internal.view.SupportMenu): globalAndroid.view.Menu;
					public static wrapSupportSubMenu(param0: globalAndroid.content.Context, param1: androidx.core.internal.view.SupportSubMenu): globalAndroid.view.SubMenu;
					public static wrapSupportMenuItem(param0: globalAndroid.content.Context, param1: androidx.core.internal.view.SupportMenuItem): globalAndroid.view.MenuItem;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuWrapperICS extends androidx.appcompat.view.menu.BaseMenuWrapper<androidx.core.internal.view.SupportMenu> implements globalAndroid.view.Menu  {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuWrapperICS>;
					public findItem(param0: number): globalAndroid.view.MenuItem;
					public setGroupVisible(param0: number, param1: boolean): void;
					public addSubMenu(param0: string): globalAndroid.view.SubMenu;
					public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
					public setQwertyMode(param0: boolean): void;
					public performIdentifierAction(param0: number, param1: number): boolean;
					public addSubMenu(param0: number, param1: number, param2: number, param3: number): globalAndroid.view.SubMenu;
					public add(param0: number, param1: number, param2: number, param3: string): globalAndroid.view.MenuItem;
					public size(): number;
					public performShortcut(param0: number, param1: globalAndroid.view.KeyEvent, param2: number): boolean;
					public addSubMenu(param0: number): globalAndroid.view.SubMenu;
					public add(param0: number, param1: number, param2: number, param3: number): globalAndroid.view.MenuItem;
					public removeGroup(param0: number): void;
					public addIntentOptions(param0: number, param1: number, param2: number, param3: globalAndroid.content.ComponentName, param4: native.Array<globalAndroid.content.Intent>, param5: globalAndroid.content.Intent, param6: number, param7: native.Array<globalAndroid.view.MenuItem>): number;
					public setGroupEnabled(param0: number, param1: boolean): void;
					public addSubMenu(param0: number, param1: number, param2: number, param3: string): globalAndroid.view.SubMenu;
					public clear(): void;
					public close(): void;
					public isShortcutKey(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public getItem(param0: number): globalAndroid.view.MenuItem;
					public add(param0: string): globalAndroid.view.MenuItem;
					public removeItem(param0: number): void;
					public hasVisibleItems(): boolean;
					public add(param0: number): globalAndroid.view.MenuItem;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ShowableListMenu {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ShowableListMenu>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.menu.ShowableListMenu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						show(): void;
						dismiss(): void;
						isShowing(): boolean;
						getListView(): globalAndroid.widget.ListView;
					});
					public constructor();
					public show(): void;
					public isShowing(): boolean;
					public getListView(): globalAndroid.widget.ListView;
					public dismiss(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class StandardMenuPopup extends androidx.appcompat.view.menu.MenuPopup implements androidx.appcompat.view.menu.MenuPresenter {
					public static class: java.lang.Class<androidx.appcompat.view.menu.StandardMenuPopup>;
					public isShowing(): boolean;
					public setOnDismissListener(param0: globalAndroid.widget.PopupWindow.OnDismissListener): void;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public onDismiss(): void;
					public setAnchorView(param0: globalAndroid.view.View): void;
					public setVerticalOffset(param0: number): void;
					public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public flagActionItems(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View, param3: number, param4: number, param5: boolean);
					public show(): void;
					public setGravity(param0: number): void;
					public getListView(): globalAndroid.widget.ListView;
					public getId(): number;
					public updateMenuView(param0: boolean): void;
					public setHorizontalOffset(param0: number): void;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public onKey(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
					public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public addMenu(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public setForceShowIcon(param0: boolean): void;
					public dismiss(): void;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public setShowTitle(param0: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class SubMenuBuilder extends androidx.appcompat.view.menu.MenuBuilder {
					public static class: java.lang.Class<androidx.appcompat.view.menu.SubMenuBuilder>;
					public getActionViewStatesKey(): string;
					public setIcon(param0: number): globalAndroid.view.SubMenu;
					public setQwertyMode(param0: boolean): void;
					public isQwertyMode(): boolean;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public setShortcutsVisible(param0: boolean): void;
					public setGroupDividerEnabled(param0: boolean): void;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public getItem(): globalAndroid.view.MenuItem;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: androidx.appcompat.view.menu.MenuItemImpl);
					public getParentMenu(): globalAndroid.view.Menu;
					public isShortcutsVisible(): boolean;
					public getRootMenu(): androidx.appcompat.view.menu.MenuBuilder;
					public isGroupDividerEnabled(): boolean;
					public setHeaderIcon(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.SubMenu;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.SubMenu;
					public getItem(param0: number): globalAndroid.view.MenuItem;
					public setHeaderView(param0: globalAndroid.view.View): globalAndroid.view.SubMenu;
					public setHeaderTitle(param0: string): globalAndroid.view.SubMenu;
					public setHeaderIcon(param0: number): globalAndroid.view.SubMenu;
					public setCallback(param0: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
					public setHeaderTitle(param0: number): globalAndroid.view.SubMenu;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class SubMenuWrapperICS extends androidx.appcompat.view.menu.MenuWrapperICS {
					public static class: java.lang.Class<androidx.appcompat.view.menu.SubMenuWrapperICS>;
					public getItem(): globalAndroid.view.MenuItem;
					public setIcon(param0: number): globalAndroid.view.SubMenu;
					public setHeaderIcon(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.SubMenu;
					public setIcon(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.view.SubMenu;
					public getWrappedObject(): androidx.core.internal.view.SupportSubMenu;
					public getItem(param0: number): globalAndroid.view.MenuItem;
					public getWrappedObject(): any;
					public setHeaderView(param0: globalAndroid.view.View): globalAndroid.view.SubMenu;
					public setHeaderTitle(param0: string): globalAndroid.view.SubMenu;
					public clearHeader(): void;
					public setHeaderIcon(param0: number): globalAndroid.view.SubMenu;
					public setHeaderTitle(param0: number): globalAndroid.view.SubMenu;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export abstract class AbsActionBarView {
				public static class: java.lang.Class<androidx.appcompat.widget.AbsActionBarView>;
				public mVisAnimListener: androidx.appcompat.widget.AbsActionBarView.VisibilityAnimListener;
				public mPopupContext: globalAndroid.content.Context;
				public mMenuView: androidx.appcompat.widget.ActionMenuView;
				public mActionMenuPresenter: androidx.appcompat.widget.ActionMenuPresenter;
				public mContentHeight: number;
				public mVisibilityAnim: androidx.core.view.ViewPropertyAnimatorCompat;
				public showOverflowMenu(): boolean;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public animateToVisibility(param0: number): void;
				public isOverflowReserved(): boolean;
				public canShowOverflowMenu(): boolean;
				public positionChild(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: boolean): number;
				public setupAnimatorToVisibility(param0: number, param1: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public setVisibility(param0: number): void;
				public isOverflowMenuShowing(): boolean;
				public static next(param0: number, param1: number, param2: boolean): number;
				public postShowOverflowMenu(): void;
				public hideOverflowMenu(): boolean;
				public setContentHeight(param0: number): void;
				public getAnimatedVisibility(): number;
				public isOverflowMenuShowPending(): boolean;
				public onHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public getContentHeight(): number;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public dismissPopupMenus(): void;
				public measureChildView(param0: globalAndroid.view.View, param1: number, param2: number, param3: number): number;
			}
			export module AbsActionBarView {
				export class VisibilityAnimListener {
					public static class: java.lang.Class<androidx.appcompat.widget.AbsActionBarView.VisibilityAnimListener>;
					public withFinalVisibility(param0: androidx.core.view.ViewPropertyAnimatorCompat, param1: number): androidx.appcompat.widget.AbsActionBarView.VisibilityAnimListener;
					public onAnimationCancel(param0: globalAndroid.view.View): void;
					public onAnimationStart(param0: globalAndroid.view.View): void;
					public onAnimationEnd(param0: globalAndroid.view.View): void;
					public constructor(param0: androidx.appcompat.widget.AbsActionBarView);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionBarBackgroundDrawable {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionBarBackgroundDrawable>;
				public constructor(param0: androidx.appcompat.widget.ActionBarContainer);
				public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
				public draw(param0: globalAndroid.graphics.Canvas): void;
				public setAlpha(param0: number): void;
				public getOpacity(): number;
				public getOutline(param0: any): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionBarContainer {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionBarContainer>;
				public drawableStateChanged(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public jumpDrawablesToCurrentState(): void;
				public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public getTabContainer(): globalAndroid.view.View;
				public onFinishInflate(): void;
				public setPrimaryBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setVisibility(param0: number): void;
				public setSplitBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
				public constructor(param0: globalAndroid.content.Context);
				public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onMeasure(param0: number, param1: number): void;
				public setTabContainer(param0: androidx.appcompat.widget.ScrollingTabContainerView): void;
				public setTransitioning(param0: boolean): void;
				public setStackedBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
				public onHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionBarContextView extends androidx.appcompat.widget.AbsActionBarView {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionBarContextView>;
				public generateLayoutParams(param0: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
				public killMode(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public showOverflowMenu(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public initForMode(param0: androidx.appcompat.view.ActionMode): void;
				public onInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setTitle(param0: string): void;
				public getTitle(): string;
				public isOverflowMenuShowing(): boolean;
				public hideOverflowMenu(): boolean;
				public isTitleOptional(): boolean;
				public setContentHeight(param0: number): void;
				public setSubtitle(param0: string): void;
				public constructor(param0: globalAndroid.content.Context);
				public onMeasure(param0: number, param1: number): void;
				public setTitleOptional(param0: boolean): void;
				public onDetachedFromWindow(): void;
				public getSubtitle(): string;
				public closeMode(): void;
				public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public setCustomView(param0: globalAndroid.view.View): void;
				public shouldDelayChildPressedState(): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionBarOverlayLayout implements androidx.appcompat.widget.DecorContentParent {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionBarOverlayLayout>;
				public generateDefaultLayoutParams(): androidx.appcompat.widget.ActionBarOverlayLayout.LayoutParams;
				public hasLogo(): boolean;
				public saveToolbarHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public showOverflowMenu(): boolean;
				public setActionBarHideOffset(param0: number): void;
				public getActionBarHideOffset(): number;
				public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public setIcon(param0: number): void;
				public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
				public setHideOnContentScrollEnabled(param0: boolean): void;
				public getNestedScrollAxes(): number;
				public setWindowTitle(param0: string): void;
				public setUiOptions(param0: number): void;
				public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onWindowVisibilityChanged(param0: number): void;
				public hideOverflowMenu(): boolean;
				public onDetachedFromWindow(): void;
				public setLogo(param0: number): void;
				public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
				public setMenuPrepared(): void;
				public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public initFeature(param0: number): void;
				public draw(param0: globalAndroid.graphics.Canvas): void;
				public isHideOnContentScrollEnabled(): boolean;
				public restoreToolbarHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public setWindowCallback(param0: globalAndroid.view.Window.Callback): void;
				public setOverlayMode(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context);
				public fitSystemWindows(param0: globalAndroid.graphics.Rect): boolean;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public setShowingForActionMode(param0: boolean): void;
				public isInOverlayMode(): boolean;
				public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
				public setMenu(param0: globalAndroid.view.Menu, param1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public dismissPopups(): void;
				public setHasNonEmbeddedTabs(param0: boolean): void;
				public onWindowSystemUiVisibilityChanged(param0: number): void;
				public canShowOverflowMenu(): boolean;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getTitle(): string;
				public hasIcon(): boolean;
				public generateLayoutParams(param0: globalAndroid.util.AttributeSet): androidx.appcompat.widget.ActionBarOverlayLayout.LayoutParams;
				public isOverflowMenuShowing(): boolean;
				public setActionBarVisibilityCallback(param0: androidx.appcompat.widget.ActionBarOverlayLayout.ActionBarVisibilityCallback): void;
				public onMeasure(param0: number, param1: number): void;
				public isOverflowMenuShowPending(): boolean;
				public onStopNestedScroll(param0: globalAndroid.view.View): void;
				public shouldDelayChildPressedState(): boolean;
			}
			export module ActionBarOverlayLayout {
				export class ActionBarVisibilityCallback {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionBarOverlayLayout.ActionBarVisibilityCallback>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActionBarOverlayLayout$ActionBarVisibilityCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWindowVisibilityChanged(param0: number): void;
						showForSystem(): void;
						hideForSystem(): void;
						enableContentAnimations(param0: boolean): void;
						onContentScrollStarted(): void;
						onContentScrollStopped(): void;
					});
					public constructor();
					public enableContentAnimations(param0: boolean): void;
					public onWindowVisibilityChanged(param0: number): void;
					public onContentScrollStarted(): void;
					public onContentScrollStopped(): void;
					public showForSystem(): void;
					public hideForSystem(): void;
				}
				export class LayoutParams {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionBarOverlayLayout.LayoutParams>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionMenuPresenter extends androidx.appcompat.view.menu.BaseMenuPresenter {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter>;
				public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
				public shouldIncludeItem(param0: number, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public showOverflowMenu(): boolean;
				public getOverflowIcon(): globalAndroid.graphics.drawable.Drawable;
				public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
				public flagActionItems(): boolean;
				public setReserveOverflow(param0: boolean): void;
				public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public onSubUiVisibilityChanged(param0: boolean): void;
				public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public setWidthLimit(param0: number, param1: boolean): void;
				public dismissPopupMenus(): boolean;
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public updateMenuView(param0: boolean): void;
				public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
				public getItemView(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public bindItemView(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: androidx.appcompat.view.menu.MenuView.ItemView): void;
				public filterLeftoverView(param0: globalAndroid.view.ViewGroup, param1: number): boolean;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
				public getId(): number;
				public setExpandedActionViewsExclusive(param0: boolean): void;
				public isOverflowReserved(): boolean;
				public hideSubMenus(): boolean;
				public isOverflowMenuShowing(): boolean;
				public hideOverflowMenu(): boolean;
				public setItemLimit(param0: number): void;
				public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
				public isOverflowMenuShowPending(): boolean;
				public setOverflowIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setMenuView(param0: androidx.appcompat.widget.ActionMenuView): void;
			}
			export module ActionMenuPresenter {
				export class ActionButtonSubmenu extends androidx.appcompat.view.menu.MenuPopupHelper {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.ActionButtonSubmenu>;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder);
					public constructor(param0: androidx.appcompat.widget.ActionMenuPresenter, param1: globalAndroid.content.Context, param2: androidx.appcompat.view.menu.SubMenuBuilder, param3: globalAndroid.view.View);
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View, param3: boolean, param4: number);
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View);
					public setPresenterCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public dismiss(): void;
					public onDismiss(): void;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View, param3: boolean, param4: number, param5: number);
				}
				export class ActionMenuPopupCallback extends androidx.appcompat.view.menu.ActionMenuItemView.PopupCallback {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.ActionMenuPopupCallback>;
					public getPopup(): androidx.appcompat.view.menu.ShowableListMenu;
				}
				export class OpenOverflowRunnable {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.OpenOverflowRunnable>;
					public constructor(param0: androidx.appcompat.widget.ActionMenuPresenter, param1: androidx.appcompat.widget.ActionMenuPresenter.OverflowPopup);
					public run(): void;
				}
				export class OverflowMenuButton extends androidx.appcompat.widget.AppCompatImageView implements androidx.appcompat.widget.ActionMenuView.ActionMenuChildView {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.OverflowMenuButton>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public performClick(): boolean;
					public setFrame(param0: number, param1: number, param2: number, param3: number): boolean;
					public constructor(param0: androidx.appcompat.widget.ActionMenuPresenter, param1: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public needsDividerBefore(): boolean;
					public needsDividerAfter(): boolean;
				}
				export class OverflowPopup extends androidx.appcompat.view.menu.MenuPopupHelper {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.OverflowPopup>;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder);
					public constructor(param0: androidx.appcompat.widget.ActionMenuPresenter, param1: globalAndroid.content.Context, param2: androidx.appcompat.view.menu.MenuBuilder, param3: globalAndroid.view.View, param4: boolean);
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View, param3: boolean, param4: number);
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View);
					public setPresenterCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public dismiss(): void;
					public onDismiss(): void;
					public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder, param2: globalAndroid.view.View, param3: boolean, param4: number, param5: number);
				}
				export class PopupPresenterCallback extends androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.PopupPresenterCallback>;
					public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
				}
				export class SavedState {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.SavedState>;
					public openSubMenuId: number;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.appcompat.widget.ActionMenuPresenter.SavedState>;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionMenuView extends androidx.appcompat.widget.LinearLayoutCompat implements androidx.appcompat.view.menu.MenuBuilder.ItemInvoker, androidx.appcompat.view.menu.MenuView {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView>;
				public setOnMenuItemClickListener(param0: androidx.appcompat.widget.ActionMenuView.OnMenuItemClickListener): void;
				public initialize(param0: androidx.appcompat.view.menu.MenuBuilder): void;
				public generateOverflowButtonLayoutParams(): androidx.appcompat.widget.ActionMenuView.LayoutParams;
				public setPopupTheme(param0: number): void;
				public generateLayoutParams(param0: globalAndroid.util.AttributeSet): androidx.appcompat.widget.ActionMenuView.LayoutParams;
				public generateDefaultLayoutParams(): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public showOverflowMenu(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getOverflowIcon(): globalAndroid.graphics.drawable.Drawable;
				public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public setOverflowReserved(param0: boolean): void;
				public peekMenu(): androidx.appcompat.view.menu.MenuBuilder;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public dismissPopupMenus(): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public generateDefaultLayoutParams(): androidx.appcompat.widget.ActionMenuView.LayoutParams;
				public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public setPresenter(param0: androidx.appcompat.widget.ActionMenuPresenter): void;
				public isOverflowReserved(): boolean;
				public generateLayoutParams(param0: globalAndroid.util.AttributeSet): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public setExpandedActionViewsExclusive(param0: boolean): void;
				public getMenu(): globalAndroid.view.Menu;
				public isOverflowMenuShowing(): boolean;
				public hideOverflowMenu(): boolean;
				public getWindowAnimations(): number;
				public setMenuCallbacks(param0: androidx.appcompat.view.menu.MenuPresenter.Callback, param1: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				public onMeasure(param0: number, param1: number): void;
				public isOverflowMenuShowPending(): boolean;
				public hasSupportDividerBeforeChildAt(param0: number): boolean;
				public onDetachedFromWindow(): void;
				public getPopupTheme(): number;
				public invokeItem(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): androidx.appcompat.widget.ActionMenuView.LayoutParams;
				public setOverflowIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
			}
			export module ActionMenuView {
				export class ActionMenuChildView {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.ActionMenuChildView>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActionMenuView$ActionMenuChildView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						needsDividerBefore(): boolean;
						needsDividerAfter(): boolean;
					});
					public constructor();
					public needsDividerBefore(): boolean;
					public needsDividerAfter(): boolean;
				}
				export class ActionMenuPresenterCallback extends androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.ActionMenuPresenterCallback>;
					public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
				}
				export class LayoutParams extends androidx.appcompat.widget.LinearLayoutCompat.LayoutParams {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.LayoutParams>;
					public isOverflowButton: boolean;
					public cellsUsed: number;
					public extraPixels: number;
					public expandable: boolean;
					public preventEdgeOffset: boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: androidx.appcompat.widget.LinearLayoutCompat.LayoutParams);
					public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(param0: number, param1: number, param2: number);
					public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
					public constructor(param0: androidx.appcompat.widget.ActionMenuView.LayoutParams);
					public constructor(param0: number, param1: number);
				}
				export class MenuBuilderCallback extends androidx.appcompat.view.menu.MenuBuilder.Callback {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.MenuBuilderCallback>;
					public onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): boolean;
				}
				export class OnMenuItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.OnMenuItemClickListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActionMenuView$OnMenuItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
					});
					public constructor();
					public onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActivityChooserModel {
				public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel>;
				public static DEFAULT_HISTORY_FILE_NAME: string;
				public static DEFAULT_HISTORY_MAX_LENGTH: number;
				public setDefaultActivity(param0: number): void;
				public getIntent(): globalAndroid.content.Intent;
				public getDefaultActivity(): globalAndroid.content.pm.ResolveInfo;
				public chooseActivity(param0: number): globalAndroid.content.Intent;
				public setOnChooseActivityListener(param0: androidx.appcompat.widget.ActivityChooserModel.OnChooseActivityListener): void;
				public static get(param0: globalAndroid.content.Context, param1: string): androidx.appcompat.widget.ActivityChooserModel;
				public getActivityIndex(param0: globalAndroid.content.pm.ResolveInfo): number;
				public getHistoryMaxSize(): number;
				public setActivitySorter(param0: androidx.appcompat.widget.ActivityChooserModel.ActivitySorter): void;
				public getHistorySize(): number;
				public setHistoryMaxSize(param0: number): void;
				public getActivity(param0: number): globalAndroid.content.pm.ResolveInfo;
				public getActivityCount(): number;
				public setIntent(param0: globalAndroid.content.Intent): void;
			}
			export module ActivityChooserModel {
				export class ActivityChooserModelClient {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.ActivityChooserModelClient>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActivityChooserModel$ActivityChooserModelClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setActivityChooserModel(param0: androidx.appcompat.widget.ActivityChooserModel): void;
					});
					public constructor();
					public setActivityChooserModel(param0: androidx.appcompat.widget.ActivityChooserModel): void;
				}
				export class ActivityResolveInfo extends java.lang.Comparable<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo> {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo>;
					public resolveInfo: globalAndroid.content.pm.ResolveInfo;
					public weight: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public compareTo(param0: androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo): number;
					public hashCode(): number;
					public constructor(param0: globalAndroid.content.pm.ResolveInfo);
				}
				export class ActivitySorter {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.ActivitySorter>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActivityChooserModel$ActivitySorter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						sort(param0: globalAndroid.content.Intent, param1: java.util.List<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo>, param2: java.util.List<androidx.appcompat.widget.ActivityChooserModel.HistoricalRecord>): void;
					});
					public constructor();
					public sort(param0: globalAndroid.content.Intent, param1: java.util.List<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo>, param2: java.util.List<androidx.appcompat.widget.ActivityChooserModel.HistoricalRecord>): void;
				}
				export class DefaultSorter extends androidx.appcompat.widget.ActivityChooserModel.ActivitySorter {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.DefaultSorter>;
					public sort(param0: globalAndroid.content.Intent, param1: java.util.List<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo>, param2: java.util.List<androidx.appcompat.widget.ActivityChooserModel.HistoricalRecord>): void;
				}
				export class HistoricalRecord {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.HistoricalRecord>;
					public activity: globalAndroid.content.ComponentName;
					public time: number;
					public weight: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: globalAndroid.content.ComponentName, param1: number, param2: number);
					public hashCode(): number;
					public constructor(param0: string, param1: number, param2: number);
				}
				export class OnChooseActivityListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.OnChooseActivityListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActivityChooserModel$OnChooseActivityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onChooseActivity(param0: androidx.appcompat.widget.ActivityChooserModel, param1: globalAndroid.content.Intent): boolean;
					});
					public constructor();
					public onChooseActivity(param0: androidx.appcompat.widget.ActivityChooserModel, param1: globalAndroid.content.Intent): boolean;
				}
				export class PersistHistoryAsyncTask extends globalAndroid.os.AsyncTask<any,java.lang.Void,java.lang.Void> {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.PersistHistoryAsyncTask>;
					public doInBackground(param0: native.Array<any>): java.lang.Void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActivityChooserView implements androidx.appcompat.widget.ActivityChooserModel.ActivityChooserModelClient {
				public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserView>;
				public isShowingPopup(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setOnDismissListener(param0: globalAndroid.widget.PopupWindow.OnDismissListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setExpandActivityOverflowButtonDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setInitialActivityCount(param0: number): void;
				public setDefaultActionButtonContentDescription(param0: number): void;
				public dismissPopup(): boolean;
				public getDataModel(): androidx.appcompat.widget.ActivityChooserModel;
				public constructor(param0: globalAndroid.content.Context);
				public onMeasure(param0: number, param1: number): void;
				public onDetachedFromWindow(): void;
				public setActivityChooserModel(param0: androidx.appcompat.widget.ActivityChooserModel): void;
				public setProvider(param0: androidx.core.view.ActionProvider): void;
				public setExpandActivityOverflowButtonContentDescription(param0: number): void;
				public onAttachedToWindow(): void;
				public showPopup(): boolean;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			}
			export module ActivityChooserView {
				export class ActivityChooserViewAdapter {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserView.ActivityChooserViewAdapter>;
					public static MAX_ACTIVITY_COUNT_UNLIMITED: number;
					public static MAX_ACTIVITY_COUNT_DEFAULT: number;
					public setShowFooterView(param0: boolean): void;
					public getDefaultActivity(): globalAndroid.content.pm.ResolveInfo;
					public getViewTypeCount(): number;
					public getCount(): number;
					public getShowDefaultActivity(): boolean;
					public setMaxActivityCount(param0: number): void;
					public getActivityCount(): number;
					public measureContentWidth(): number;
					public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public getDataModel(): androidx.appcompat.widget.ActivityChooserModel;
					public getItem(param0: number): any;
					public getHistorySize(): number;
					public setDataModel(param0: androidx.appcompat.widget.ActivityChooserModel): void;
					public getItemViewType(param0: number): number;
					public setShowDefaultActivity(param0: boolean, param1: boolean): void;
					public getItemId(param0: number): number;
				}
				export class Callbacks {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserView.Callbacks>;
					public onItemClick(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
					public onClick(param0: globalAndroid.view.View): void;
					public onLongClick(param0: globalAndroid.view.View): boolean;
					public onDismiss(): void;
				}
				export class InnerLayout {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserView.InnerLayout>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AlertDialogLayout extends androidx.appcompat.widget.LinearLayoutCompat {
				public static class: java.lang.Class<androidx.appcompat.widget.AlertDialogLayout>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onMeasure(param0: number, param1: number): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatAutoCompleteTextView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatAutoCompleteTextView>;
				public drawableStateChanged(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setDropDownBackgroundResource(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				public constructor(param0: globalAndroid.content.Context);
				public setCustomSelectionActionModeCallback(param0: globalAndroid.view.ActionMode.Callback): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
				public setBackgroundResource(param0: number): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatBackgroundHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatBackgroundHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatButton {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatButton>;
				public drawableStateChanged(): void;
				public setAutoSizeTextTypeWithDefaults(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setTextSize(param0: number, param1: number): void;
				public setAutoSizeTextTypeUniformWithPresetSizes(param0: native.Array<number>, param1: number): void;
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public getAutoSizeStepGranularity(): number;
				public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				public onInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
				public setSupportAllCaps(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context);
				public getAutoSizeTextAvailableSizes(): native.Array<number>;
				public setCustomSelectionActionModeCallback(param0: globalAndroid.view.ActionMode.Callback): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getAutoSizeTextType(): number;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public getAutoSizeMinTextSize(): number;
				public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
				public getAutoSizeMaxTextSize(): number;
				public setBackgroundResource(param0: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatCheckBox {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatCheckBox>;
				public setButtonDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getCompoundPaddingLeft(): number;
				public getSupportButtonTintList(): globalAndroid.content.res.ColorStateList;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setSupportButtonTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public getSupportButtonTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setButtonDrawable(param0: number): void;
				public setSupportButtonTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatCheckedTextView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatCheckedTextView>;
				public drawableStateChanged(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setCustomSelectionActionModeCallback(param0: globalAndroid.view.ActionMode.Callback): void;
				public setTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
				public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				public setCheckMarkDrawable(param0: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatCompoundButtonHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatCompoundButtonHelper>;
			}
			export module AppCompatCompoundButtonHelper {
				export class DirectSetButtonDrawableInterface {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatCompoundButtonHelper.DirectSetButtonDrawableInterface>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.AppCompatCompoundButtonHelper$DirectSetButtonDrawableInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setButtonDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					});
					public constructor();
					public setButtonDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatDrawableManager {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatDrawableManager>;
				public getDrawable(param0: globalAndroid.content.Context, param1: number): globalAndroid.graphics.drawable.Drawable;
				public static get(): androidx.appcompat.widget.AppCompatDrawableManager;
				public onConfigurationChanged(param0: globalAndroid.content.Context): void;
				public constructor();
				public static getPorterDuffColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.graphics.PorterDuffColorFilter;
			}
			export module AppCompatDrawableManager {
				export class AsldcInflateDelegate extends androidx.appcompat.widget.AppCompatDrawableManager.InflateDelegate {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatDrawableManager.AsldcInflateDelegate>;
					public createFromXmlInner(param0: globalAndroid.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: globalAndroid.util.AttributeSet, param3: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
				}
				export class AvdcInflateDelegate extends androidx.appcompat.widget.AppCompatDrawableManager.InflateDelegate {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatDrawableManager.AvdcInflateDelegate>;
					public createFromXmlInner(param0: globalAndroid.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: globalAndroid.util.AttributeSet, param3: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
				}
				export class ColorFilterLruCache extends androidx.collection.LruCache<java.lang.Integer,globalAndroid.graphics.PorterDuffColorFilter> {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatDrawableManager.ColorFilterLruCache>;
					public constructor(param0: number);
				}
				export class InflateDelegate {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatDrawableManager.InflateDelegate>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.AppCompatDrawableManager$InflateDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createFromXmlInner(param0: globalAndroid.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: globalAndroid.util.AttributeSet, param3: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
					});
					public constructor();
					public createFromXmlInner(param0: globalAndroid.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: globalAndroid.util.AttributeSet, param3: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
				}
				export class VdcInflateDelegate extends androidx.appcompat.widget.AppCompatDrawableManager.InflateDelegate {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatDrawableManager.VdcInflateDelegate>;
					public createFromXmlInner(param0: globalAndroid.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: globalAndroid.util.AttributeSet, param3: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatEditText {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatEditText>;
				public drawableStateChanged(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public getText(): globalAndroid.text.Editable;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				public constructor(param0: globalAndroid.content.Context);
				public setCustomSelectionActionModeCallback(param0: globalAndroid.view.ActionMode.Callback): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
				public setBackgroundResource(param0: number): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatHintHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatHintHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatImageButton {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatImageButton>;
				public drawableStateChanged(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public setImageBitmap(param0: globalAndroid.graphics.Bitmap): void;
				public getSupportImageTintList(): globalAndroid.content.res.ColorStateList;
				public setImageURI(param0: globalAndroid.net.Uri): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public getSupportImageTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public constructor(param0: globalAndroid.content.Context);
				public setImageResource(param0: number): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setBackgroundResource(param0: number): void;
				public setSupportImageTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setSupportImageTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public hasOverlappingRendering(): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatImageHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatImageHelper>;
				public constructor(param0: globalAndroid.widget.ImageView);
				public setImageResource(param0: number): void;
				public loadFromAttributes(param0: globalAndroid.util.AttributeSet, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatImageView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatImageView>;
				public drawableStateChanged(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public setImageBitmap(param0: globalAndroid.graphics.Bitmap): void;
				public getSupportImageTintList(): globalAndroid.content.res.ColorStateList;
				public setImageURI(param0: globalAndroid.net.Uri): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public getSupportImageTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public constructor(param0: globalAndroid.content.Context);
				public setImageResource(param0: number): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setBackgroundResource(param0: number): void;
				public setSupportImageTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setSupportImageTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public hasOverlappingRendering(): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatMultiAutoCompleteTextView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatMultiAutoCompleteTextView>;
				public drawableStateChanged(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setDropDownBackgroundResource(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				public constructor(param0: globalAndroid.content.Context);
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
				public setBackgroundResource(param0: number): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatPopupWindow {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatPopupWindow>;
				public showAsDropDown(param0: globalAndroid.view.View, param1: number, param2: number, param3: number): void;
				public update(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public showAsDropDown(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatProgressBarHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatProgressBarHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatRadioButton {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatRadioButton>;
				public setButtonDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getCompoundPaddingLeft(): number;
				public getSupportButtonTintList(): globalAndroid.content.res.ColorStateList;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setSupportButtonTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public getSupportButtonTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setButtonDrawable(param0: number): void;
				public setSupportButtonTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatRatingBar {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatRatingBar>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onMeasure(param0: number, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatSeekBar {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSeekBar>;
				public drawableStateChanged(): void;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public jumpDrawablesToCurrentState(): void;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatSeekBarHelper extends androidx.appcompat.widget.AppCompatProgressBarHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSeekBarHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatSpinner {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner>;
				public drawableStateChanged(): void;
				public getDropDownHorizontalOffset(): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setPopupBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public setAdapter(param0: globalAndroid.widget.SpinnerAdapter): void;
				public performClick(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setDropDownVerticalOffset(param0: number): void;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public getPopupContext(): globalAndroid.content.Context;
				public getPrompt(): string;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: globalAndroid.content.res.Resources.Theme);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setDropDownHorizontalOffset(param0: number): void;
				public setPrompt(param0: string): void;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public setDropDownWidth(param0: number): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public getPopupBackground(): globalAndroid.graphics.drawable.Drawable;
				public getDropDownWidth(): number;
				public getDropDownVerticalOffset(): number;
				public onMeasure(param0: number, param1: number): void;
				public setPopupBackgroundResource(param0: number): void;
				public onDetachedFromWindow(): void;
				public setBackgroundResource(param0: number): void;
			}
			export module AppCompatSpinner {
				export class DropDownAdapter {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.DropDownAdapter>;
					public registerDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
					public isEmpty(): boolean;
					public getCount(): number;
					public areAllItemsEnabled(): boolean;
					public getViewTypeCount(): number;
					public getDropDownView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public getItem(param0: number): any;
					public hasStableIds(): boolean;
					public constructor(param0: globalAndroid.widget.SpinnerAdapter, param1: globalAndroid.content.res.Resources.Theme);
					public unregisterDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
					public isEnabled(param0: number): boolean;
					public getItemViewType(param0: number): number;
					public getItemId(param0: number): number;
				}
				export class DropdownPopup extends androidx.appcompat.widget.ListPopupWindow {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.DropdownPopup>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public show(): void;
					public setPromptText(param0: string): void;
					public isShowing(): boolean;
					public getHintText(): string;
					public getListView(): globalAndroid.widget.ListView;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public constructor(param0: androidx.appcompat.widget.AppCompatSpinner, param1: globalAndroid.content.Context, param2: globalAndroid.util.AttributeSet, param3: number);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setAdapter(param0: globalAndroid.widget.ListAdapter): void;
					public dismiss(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatTextHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatTextView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextView>;
				public drawableStateChanged(): void;
				public setAutoSizeTextTypeWithDefaults(param0: number): void;
				public getTextMetricsParamsCompat(): androidx.core.text.PrecomputedTextCompat.Params;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setTextSize(param0: number, param1: number): void;
				public setAutoSizeTextTypeUniformWithPresetSizes(param0: native.Array<number>, param1: number): void;
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public getAutoSizeStepGranularity(): number;
				public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				public getLastBaselineToBottomHeight(): number;
				public setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
				public getFirstBaselineToTopHeight(): number;
				public setTextMetricsParamsCompat(param0: androidx.core.text.PrecomputedTextCompat.Params): void;
				public constructor(param0: globalAndroid.content.Context);
				public getAutoSizeTextAvailableSizes(): native.Array<number>;
				public setCustomSelectionActionModeCallback(param0: globalAndroid.view.ActionMode.Callback): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public setFirstBaselineToTopHeight(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getAutoSizeTextType(): number;
				public setPrecomputedText(param0: androidx.core.text.PrecomputedTextCompat): void;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public setTextFuture(param0: java.util.concurrent.Future<androidx.core.text.PrecomputedTextCompat>): void;
				public getAutoSizeMinTextSize(): number;
				public getText(): string;
				public onMeasure(param0: number, param1: number): void;
				public getAutoSizeMaxTextSize(): number;
				public setLineHeight(param0: number): void;
				public setLastBaselineToBottomHeight(param0: number): void;
				public setBackgroundResource(param0: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatTextViewAutoSizeHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextViewAutoSizeHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ButtonBarLayout {
				public static class: java.lang.Class<androidx.appcompat.widget.ButtonBarLayout>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onMeasure(param0: number, param1: number): void;
				public getMinimumHeight(): number;
				public setAllowStacking(param0: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ContentFrameLayout {
				public static class: java.lang.Class<androidx.appcompat.widget.ContentFrameLayout>;
				public dispatchFitSystemWindows(param0: globalAndroid.graphics.Rect): void;
				public getFixedWidthMinor(): globalAndroid.util.TypedValue;
				public getFixedHeightMinor(): globalAndroid.util.TypedValue;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getMinWidthMinor(): globalAndroid.util.TypedValue;
				public constructor(param0: globalAndroid.content.Context);
				public setAttachListener(param0: androidx.appcompat.widget.ContentFrameLayout.OnAttachListener): void;
				public onMeasure(param0: number, param1: number): void;
				public getMinWidthMajor(): globalAndroid.util.TypedValue;
				public getFixedWidthMajor(): globalAndroid.util.TypedValue;
				public onDetachedFromWindow(): void;
				public getFixedHeightMajor(): globalAndroid.util.TypedValue;
				public onAttachedToWindow(): void;
				public setDecorPadding(param0: number, param1: number, param2: number, param3: number): void;
			}
			export module ContentFrameLayout {
				export class OnAttachListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ContentFrameLayout.OnAttachListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ContentFrameLayout$OnAttachListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDetachedFromWindow(): void;
						onAttachedFromWindow(): void;
					});
					public constructor();
					public onDetachedFromWindow(): void;
					public onAttachedFromWindow(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DecorContentParent {
				public static class: java.lang.Class<androidx.appcompat.widget.DecorContentParent>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.DecorContentParent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setWindowCallback(param0: globalAndroid.view.Window.Callback): void;
					setWindowTitle(param0: string): void;
					getTitle(): string;
					initFeature(param0: number): void;
					setUiOptions(param0: number): void;
					hasIcon(): boolean;
					hasLogo(): boolean;
					setIcon(param0: number): void;
					setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
					setLogo(param0: number): void;
					canShowOverflowMenu(): boolean;
					isOverflowMenuShowing(): boolean;
					isOverflowMenuShowPending(): boolean;
					showOverflowMenu(): boolean;
					hideOverflowMenu(): boolean;
					setMenuPrepared(): void;
					setMenu(param0: globalAndroid.view.Menu, param1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					saveToolbarHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
					restoreToolbarHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
					dismissPopups(): void;
				});
				public constructor();
				public hasLogo(): boolean;
				public saveToolbarHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public showOverflowMenu(): boolean;
				public setMenu(param0: globalAndroid.view.Menu, param1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public dismissPopups(): void;
				public initFeature(param0: number): void;
				public canShowOverflowMenu(): boolean;
				public setIcon(param0: number): void;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public restoreToolbarHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public getTitle(): string;
				public hasIcon(): boolean;
				public isOverflowMenuShowing(): boolean;
				public setWindowCallback(param0: globalAndroid.view.Window.Callback): void;
				public hideOverflowMenu(): boolean;
				public isOverflowMenuShowPending(): boolean;
				public setLogo(param0: number): void;
				public setMenuPrepared(): void;
				public setWindowTitle(param0: string): void;
				public setUiOptions(param0: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DecorToolbar {
				public static class: java.lang.Class<androidx.appcompat.widget.DecorToolbar>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.DecorToolbar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getViewGroup(): globalAndroid.view.ViewGroup;
					getContext(): globalAndroid.content.Context;
					hasExpandedActionView(): boolean;
					collapseActionView(): void;
					setWindowCallback(param0: globalAndroid.view.Window.Callback): void;
					setWindowTitle(param0: string): void;
					getTitle(): string;
					setTitle(param0: string): void;
					getSubtitle(): string;
					setSubtitle(param0: string): void;
					initProgress(): void;
					initIndeterminateProgress(): void;
					hasIcon(): boolean;
					hasLogo(): boolean;
					setIcon(param0: number): void;
					setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
					setLogo(param0: number): void;
					setLogo(param0: globalAndroid.graphics.drawable.Drawable): void;
					canShowOverflowMenu(): boolean;
					isOverflowMenuShowing(): boolean;
					isOverflowMenuShowPending(): boolean;
					showOverflowMenu(): boolean;
					hideOverflowMenu(): boolean;
					setMenuPrepared(): void;
					setMenu(param0: globalAndroid.view.Menu, param1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					dismissPopupMenus(): void;
					getDisplayOptions(): number;
					setDisplayOptions(param0: number): void;
					setEmbeddedTabView(param0: androidx.appcompat.widget.ScrollingTabContainerView): void;
					hasEmbeddedTabs(): boolean;
					isTitleTruncated(): boolean;
					setCollapsible(param0: boolean): void;
					setHomeButtonEnabled(param0: boolean): void;
					getNavigationMode(): number;
					setNavigationMode(param0: number): void;
					setDropdownParams(param0: globalAndroid.widget.SpinnerAdapter, param1: globalAndroid.widget.AdapterView.OnItemSelectedListener): void;
					setDropdownSelectedPosition(param0: number): void;
					getDropdownSelectedPosition(): number;
					getDropdownItemCount(): number;
					setCustomView(param0: globalAndroid.view.View): void;
					getCustomView(): globalAndroid.view.View;
					animateToVisibility(param0: number): void;
					setupAnimatorToVisibility(param0: number, param1: number): androidx.core.view.ViewPropertyAnimatorCompat;
					setNavigationIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
					setNavigationIcon(param0: number): void;
					setNavigationContentDescription(param0: string): void;
					setNavigationContentDescription(param0: number): void;
					setDefaultNavigationContentDescription(param0: number): void;
					setDefaultNavigationIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
					saveHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
					restoreHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
					setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					getHeight(): number;
					setVisibility(param0: number): void;
					getVisibility(): number;
					setMenuCallbacks(param0: androidx.appcompat.view.menu.MenuPresenter.Callback, param1: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
					getMenu(): globalAndroid.view.Menu;
				});
				public constructor();
				public getHeight(): number;
				public hasLogo(): boolean;
				public showOverflowMenu(): boolean;
				public setIcon(param0: number): void;
				public setTitle(param0: string): void;
				public setDefaultNavigationContentDescription(param0: number): void;
				public setNavigationIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getDropdownSelectedPosition(): number;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setWindowTitle(param0: string): void;
				public setCustomView(param0: globalAndroid.view.View): void;
				public setDisplayOptions(param0: number): void;
				public collapseActionView(): void;
				public getContext(): globalAndroid.content.Context;
				public setDefaultNavigationIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public restoreHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public getMenu(): globalAndroid.view.Menu;
				public setupAnimatorToVisibility(param0: number, param1: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public setNavigationContentDescription(param0: number): void;
				public setVisibility(param0: number): void;
				public hideOverflowMenu(): boolean;
				public setEmbeddedTabView(param0: androidx.appcompat.widget.ScrollingTabContainerView): void;
				public setSubtitle(param0: string): void;
				public initIndeterminateProgress(): void;
				public hasEmbeddedTabs(): boolean;
				public getVisibility(): number;
				public setNavigationContentDescription(param0: string): void;
				public saveHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public setLogo(param0: number): void;
				public getSubtitle(): string;
				public setMenuPrepared(): void;
				public setHomeButtonEnabled(param0: boolean): void;
				public initProgress(): void;
				public setCollapsible(param0: boolean): void;
				public getNavigationMode(): number;
				public animateToVisibility(param0: number): void;
				public getCustomView(): globalAndroid.view.View;
				public setWindowCallback(param0: globalAndroid.view.Window.Callback): void;
				public getDisplayOptions(): number;
				public dismissPopupMenus(): void;
				public setDropdownParams(param0: globalAndroid.widget.SpinnerAdapter, param1: globalAndroid.widget.AdapterView.OnItemSelectedListener): void;
				public setMenu(param0: globalAndroid.view.Menu, param1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public isTitleTruncated(): boolean;
				public getDropdownItemCount(): number;
				public setNavigationIcon(param0: number): void;
				public canShowOverflowMenu(): boolean;
				public setLogo(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public hasExpandedActionView(): boolean;
				public getTitle(): string;
				public hasIcon(): boolean;
				public isOverflowMenuShowing(): boolean;
				public setMenuCallbacks(param0: androidx.appcompat.view.menu.MenuPresenter.Callback, param1: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				public setNavigationMode(param0: number): void;
				public setDropdownSelectedPosition(param0: number): void;
				public isOverflowMenuShowPending(): boolean;
				public getViewGroup(): globalAndroid.view.ViewGroup;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DialogTitle {
				public static class: java.lang.Class<androidx.appcompat.widget.DialogTitle>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public constructor(param0: globalAndroid.content.Context);
				public onMeasure(param0: number, param1: number): void;
				public setCustomSelectionActionModeCallback(param0: globalAndroid.view.ActionMode.Callback): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DrawableUtils {
				public static class: java.lang.Class<androidx.appcompat.widget.DrawableUtils>;
				public static INSETS_NONE: globalAndroid.graphics.Rect;
				public static canSafelyMutateDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
				public static getOpticalBounds(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.Rect;
				public static parseTintMode(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.graphics.PorterDuff.Mode;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DropDownListView {
				public static class: java.lang.Class<androidx.appcompat.widget.DropDownListView>;
				public static INVALID_POSITION: number;
				public static NO_POSITION: number;
				public drawableStateChanged(): void;
				public hasFocus(): boolean;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
				public isInTouchMode(): boolean;
				public onForwardedEvent(param0: globalAndroid.view.MotionEvent, param1: number): boolean;
				public setSelector(param0: globalAndroid.graphics.drawable.Drawable): void;
				public isFocused(): boolean;
				public hasWindowFocus(): boolean;
				public onDetachedFromWindow(): void;
				public lookForSelectablePosition(param0: number, param1: boolean): number;
				public onHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public measureHeightOfChildrenCompat(param0: number, param1: number, param2: number, param3: number, param4: number): number;
			}
			export module DropDownListView {
				export class GateKeeperDrawable extends androidx.appcompat.graphics.drawable.DrawableWrapper {
					public static class: java.lang.Class<androidx.appcompat.widget.DropDownListView.GateKeeperDrawable>;
					public setHotspot(param0: number, param1: number): void;
					public setState(param0: native.Array<number>): boolean;
					public setVisible(param0: boolean, param1: boolean): boolean;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;
				}
				export class ResolveHoverRunnable {
					public static class: java.lang.Class<androidx.appcompat.widget.DropDownListView.ResolveHoverRunnable>;
					public run(): void;
					public cancel(): void;
					public post(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class FitWindowsFrameLayout implements androidx.appcompat.widget.FitWindowsViewGroup {
				public static class: java.lang.Class<androidx.appcompat.widget.FitWindowsFrameLayout>;
				public setOnFitSystemWindowsListener(param0: androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public fitSystemWindows(param0: globalAndroid.graphics.Rect): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class FitWindowsLinearLayout implements androidx.appcompat.widget.FitWindowsViewGroup {
				public static class: java.lang.Class<androidx.appcompat.widget.FitWindowsLinearLayout>;
				public setOnFitSystemWindowsListener(param0: androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public fitSystemWindows(param0: globalAndroid.graphics.Rect): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class FitWindowsViewGroup {
				public static class: java.lang.Class<androidx.appcompat.widget.FitWindowsViewGroup>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.FitWindowsViewGroup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setOnFitSystemWindowsListener(param0: androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
				});
				public constructor();
				public setOnFitSystemWindowsListener(param0: androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
			}
			export module FitWindowsViewGroup {
				export class OnFitSystemWindowsListener {
					public static class: java.lang.Class<androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.FitWindowsViewGroup$OnFitSystemWindowsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFitSystemWindows(param0: globalAndroid.graphics.Rect): void;
					});
					public constructor();
					public onFitSystemWindows(param0: globalAndroid.graphics.Rect): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export abstract class ForwardingListener {
				public static class: java.lang.Class<androidx.appcompat.widget.ForwardingListener>;
				public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
				public getPopup(): androidx.appcompat.view.menu.ShowableListMenu;
				public onViewAttachedToWindow(param0: globalAndroid.view.View): void;
				public onForwardingStopped(): boolean;
				public onViewDetachedFromWindow(param0: globalAndroid.view.View): void;
				public onForwardingStarted(): boolean;
				public constructor(param0: globalAndroid.view.View);
			}
			export module ForwardingListener {
				export class DisallowIntercept {
					public static class: java.lang.Class<androidx.appcompat.widget.ForwardingListener.DisallowIntercept>;
					public run(): void;
				}
				export class TriggerLongPress {
					public static class: java.lang.Class<androidx.appcompat.widget.ForwardingListener.TriggerLongPress>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class LinearLayoutCompat extends android.view.ViewGroup {
				public static class: java.lang.Class<androidx.appcompat.widget.LinearLayoutCompat>;
				public static HORIZONTAL: number;
				public static VERTICAL: number;
				public static SHOW_DIVIDER_NONE: number;
				public static SHOW_DIVIDER_BEGINNING: number;
				public static SHOW_DIVIDER_MIDDLE: number;
				public static SHOW_DIVIDER_END: number;
				public generateDefaultLayoutParams(): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getDividerDrawable(): globalAndroid.graphics.drawable.Drawable;
				public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public onInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public getOrientation(): number;
				public isBaselineAligned(): boolean;
				public isMeasureWithLargestChildEnabled(): boolean;
				public getGravity(): number;
				public setVerticalGravity(param0: number): void;
				public constructor(param0: globalAndroid.content.Context);
				public getShowDividers(): number;
				public setBaselineAlignedChildIndex(param0: number): void;
				public setBaselineAligned(param0: boolean): void;
				public setGravity(param0: number): void;
				public setHorizontalGravity(param0: number): void;
				public setWeightSum(param0: number): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public getDividerWidth(): number;
				public getDividerPadding(): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setDividerPadding(param0: number): void;
				public getBaselineAlignedChildIndex(): number;
				public setOrientation(param0: number): void;
				public setMeasureWithLargestChildEnabled(param0: boolean): void;
				public generateLayoutParams(param0: globalAndroid.util.AttributeSet): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public onMeasure(param0: number, param1: number): void;
				public getWeightSum(): number;
				public setShowDividers(param0: number): void;
				public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public setDividerDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public shouldDelayChildPressedState(): boolean;
				public getBaseline(): number;
				public hasDividerBeforeChildAt(param0: number): boolean;
			}
			export module LinearLayoutCompat {
				export class DividerMode {
					public static class: java.lang.Class<androidx.appcompat.widget.LinearLayoutCompat.DividerMode>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.LinearLayoutCompat$DividerMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class LayoutParams extends android.view.ViewGroup.MarginLayoutParams {
					public static class: java.lang.Class<androidx.appcompat.widget.LinearLayoutCompat.LayoutParams>;
					public weight: number;
					public gravity: number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: androidx.appcompat.widget.LinearLayoutCompat.LayoutParams);
					public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(param0: number, param1: number, param2: number);
					public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
					public constructor(param0: number, param1: number);
				}
				export class OrientationMode {
					public static class: java.lang.Class<androidx.appcompat.widget.LinearLayoutCompat.OrientationMode>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.LinearLayoutCompat$OrientationMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ListPopupWindow extends androidx.appcompat.view.menu.ShowableListMenu {
				public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow>;
				public static POSITION_PROMPT_ABOVE: number;
				public static POSITION_PROMPT_BELOW: number;
				public static MATCH_PARENT: number;
				public static WRAP_CONTENT: number;
				public static INPUT_METHOD_FROM_FOCUSABLE: number;
				public static INPUT_METHOD_NEEDED: number;
				public static INPUT_METHOD_NOT_NEEDED: number;
				public setListSelector(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setHeight(param0: number): void;
				public setDropDownAlwaysVisible(param0: boolean): void;
				public getHeight(): number;
				public getSelectedItem(): any;
				public setOnDismissListener(param0: globalAndroid.widget.PopupWindow.OnDismissListener): void;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public createDragToOpenListener(param0: globalAndroid.view.View): globalAndroid.view.View.OnTouchListener;
				public setOnItemClickListener(param0: globalAndroid.widget.AdapterView.OnItemClickListener): void;
				public getListView(): globalAndroid.widget.ListView;
				public setOverlapAnchor(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public show(): void;
				public isShowing(): boolean;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public getBackground(): globalAndroid.graphics.drawable.Drawable;
				public setInputMethodMode(param0: number): void;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setOnItemSelectedListener(param0: globalAndroid.widget.AdapterView.OnItemSelectedListener): void;
				public setModal(param0: boolean): void;
				public setForceIgnoreOutsideTouch(param0: boolean): void;
				public setSelection(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getSoftInputMode(): number;
				public postShow(): void;
				public getVerticalOffset(): number;
				public clearListSelection(): void;
				public setAdapter(param0: globalAndroid.widget.ListAdapter): void;
				public setWidth(param0: number): void;
				public isDropDownAlwaysVisible(): boolean;
				public getSelectedItemPosition(): number;
				public setAnimationStyle(param0: number): void;
				public setEpicenterBounds(param0: globalAndroid.graphics.Rect): void;
				public setVerticalOffset(param0: number): void;
				public getInputMethodMode(): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public dismiss(): void;
				public setHorizontalOffset(param0: number): void;
				public isModal(): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public getSelectedView(): globalAndroid.view.View;
				public getHorizontalOffset(): number;
				public setPromptView(param0: globalAndroid.view.View): void;
				public isInputMethodNotNeeded(): boolean;
				public setDropDownGravity(param0: number): void;
				public setWindowLayoutType(param0: number): void;
				public onKeyPreIme(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public getAnimationStyle(): number;
				public setContentWidth(param0: number): void;
				public getPromptPosition(): number;
				public getAnchorView(): globalAndroid.view.View;
				public setAnchorView(param0: globalAndroid.view.View): void;
				public getWidth(): number;
				public setSoftInputMode(param0: number): void;
				public performItemClick(param0: number): boolean;
				public setPromptPosition(param0: number): void;
				public getSelectedItemId(): number;
			}
			export module ListPopupWindow {
				export class ListSelectorHider {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.ListSelectorHider>;
					public run(): void;
				}
				export class PopupDataSetObserver {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.PopupDataSetObserver>;
					public onChanged(): void;
					public onInvalidated(): void;
				}
				export class PopupScrollListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.PopupScrollListener>;
					public onScrollStateChanged(param0: globalAndroid.widget.AbsListView, param1: number): void;
					public onScroll(param0: globalAndroid.widget.AbsListView, param1: number, param2: number, param3: number): void;
				}
				export class PopupTouchInterceptor {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.PopupTouchInterceptor>;
					public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
				}
				export class ResizePopupRunnable {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.ResizePopupRunnable>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class MenuItemHoverListener {
				public static class: java.lang.Class<androidx.appcompat.widget.MenuItemHoverListener>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.MenuItemHoverListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onItemHoverExit(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): void;
					onItemHoverEnter(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): void;
				});
				public constructor();
				public onItemHoverExit(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): void;
				public onItemHoverEnter(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class MenuPopupWindow extends androidx.appcompat.widget.ListPopupWindow implements androidx.appcompat.widget.MenuItemHoverListener {
				public static class: java.lang.Class<androidx.appcompat.widget.MenuPopupWindow>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setEnterTransition(param0: any): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onItemHoverExit(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): void;
				public getListView(): globalAndroid.widget.ListView;
				public onItemHoverEnter(param0: androidx.appcompat.view.menu.MenuBuilder, param1: globalAndroid.view.MenuItem): void;
				public setTouchModal(param0: boolean): void;
				public dismiss(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public show(): void;
				public setExitTransition(param0: any): void;
				public setHoverListener(param0: androidx.appcompat.widget.MenuItemHoverListener): void;
				public isShowing(): boolean;
				public constructor(param0: globalAndroid.content.Context);
			}
			export module MenuPopupWindow {
				export class MenuDropDownListView extends androidx.appcompat.widget.DropDownListView {
					public static class: java.lang.Class<androidx.appcompat.widget.MenuPopupWindow.MenuDropDownListView>;
					public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public onHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: boolean);
					public setHoverListener(param0: androidx.appcompat.widget.MenuItemHoverListener): void;
					public clearSelection(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class PopupMenu {
				public static class: java.lang.Class<androidx.appcompat.widget.PopupMenu>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.View, param2: number, param3: number, param4: number);
				public inflate(param0: number): void;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public getDragToOpenListener(): globalAndroid.view.View.OnTouchListener;
				public dismiss(): void;
				public getMenu(): globalAndroid.view.Menu;
				public show(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.View, param2: number);
				public getGravity(): number;
				public setOnDismissListener(param0: androidx.appcompat.widget.PopupMenu.OnDismissListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.View);
				public setOnMenuItemClickListener(param0: androidx.appcompat.widget.PopupMenu.OnMenuItemClickListener): void;
				public setGravity(param0: number): void;
			}
			export module PopupMenu {
				export class OnDismissListener {
					public static class: java.lang.Class<androidx.appcompat.widget.PopupMenu.OnDismissListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.PopupMenu$OnDismissListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDismiss(param0: androidx.appcompat.widget.PopupMenu): void;
					});
					public constructor();
					public onDismiss(param0: androidx.appcompat.widget.PopupMenu): void;
				}
				export class OnMenuItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.widget.PopupMenu.OnMenuItemClickListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.PopupMenu$OnMenuItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
					});
					public constructor();
					public onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ResourcesWrapper {
				public static class: java.lang.Class<androidx.appcompat.widget.ResourcesWrapper>;
				public getDimensionPixelSize(param0: number): number;
				public openRawResourceFd(param0: number): globalAndroid.content.res.AssetFileDescriptor;
				public getDrawableForDensity(param0: number, param1: number): globalAndroid.graphics.drawable.Drawable;
				public getString(param0: number): string;
				public getInteger(param0: number): number;
				public getLayout(param0: number): globalAndroid.content.res.XmlResourceParser;
				public getConfiguration(): globalAndroid.content.res.Configuration;
				public getAnimation(param0: number): globalAndroid.content.res.XmlResourceParser;
				public getDisplayMetrics(): globalAndroid.util.DisplayMetrics;
				public getDrawableForDensity(param0: number, param1: number, param2: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
				public getResourceEntryName(param0: number): string;
				public parseBundleExtra(param0: string, param1: globalAndroid.util.AttributeSet, param2: globalAndroid.os.Bundle): void;
				public getDrawable(param0: number, param1: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
				public getString(param0: number, param1: native.Array<any>): string;
				public parseBundleExtras(param0: globalAndroid.content.res.XmlResourceParser, param1: globalAndroid.os.Bundle): void;
				public updateConfiguration(param0: globalAndroid.content.res.Configuration, param1: globalAndroid.util.DisplayMetrics): void;
				public openRawResource(param0: number, param1: globalAndroid.util.TypedValue): java.io.InputStream;
				public getTextArray(param0: number): native.Array<string>;
				public obtainTypedArray(param0: number): globalAndroid.content.res.TypedArray;
				public getDimension(param0: number): number;
				public getResourceTypeName(param0: number): string;
				public getQuantityText(param0: number, param1: number): string;
				public getMovie(param0: number): globalAndroid.graphics.Movie;
				public openRawResource(param0: number): java.io.InputStream;
				public getValueForDensity(param0: number, param1: number, param2: globalAndroid.util.TypedValue, param3: boolean): void;
				public getText(param0: number): string;
				public getIntArray(param0: number): native.Array<number>;
				public getValue(param0: number, param1: globalAndroid.util.TypedValue, param2: boolean): void;
				public obtainAttributes(param0: globalAndroid.util.AttributeSet, param1: native.Array<number>): globalAndroid.content.res.TypedArray;
				public getColor(param0: number): number;
				public constructor(param0: globalAndroid.content.res.Resources);
				public getStringArray(param0: number): native.Array<string>;
				public getFraction(param0: number, param1: number, param2: number): number;
				public getQuantityString(param0: number, param1: number, param2: native.Array<any>): string;
				public getDrawable(param0: number): globalAndroid.graphics.drawable.Drawable;
				public getText(param0: number, param1: string): string;
				public getDimensionPixelOffset(param0: number): number;
				public getXml(param0: number): globalAndroid.content.res.XmlResourceParser;
				public getResourcePackageName(param0: number): string;
				public getColorStateList(param0: number): globalAndroid.content.res.ColorStateList;
				public getBoolean(param0: number): boolean;
				public getIdentifier(param0: string, param1: string, param2: string): number;
				public getResourceName(param0: number): string;
				public getQuantityString(param0: number, param1: number): string;
				public getValue(param0: string, param1: globalAndroid.util.TypedValue, param2: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class RtlSpacingHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.RtlSpacingHelper>;
				public static UNDEFINED: number;
				public getEnd(): number;
				public setDirection(param0: boolean): void;
				public getLeft(): number;
				public getStart(): number;
				public setAbsolute(param0: number, param1: number): void;
				public getRight(): number;
				public setRelative(param0: number, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ScrollingTabContainerView {
				public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView>;
				public mVisibilityAnim: globalAndroid.view.ViewPropertyAnimator;
				public mVisAnimListener: androidx.appcompat.widget.ScrollingTabContainerView.VisibilityAnimListener;
				public animateToVisibility(param0: number): void;
				public updateTab(param0: number): void;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number, param2: boolean): void;
				public setContentHeight(param0: number): void;
				public onNothingSelected(param0: globalAndroid.widget.AdapterView<any>): void;
				public setTabSelected(param0: number): void;
				public onItemSelected(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
				public constructor(param0: globalAndroid.content.Context);
				public onMeasure(param0: number, param1: number): void;
				public onDetachedFromWindow(): void;
				public setAllowCollapse(param0: boolean): void;
				public animateToTab(param0: number): void;
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: boolean): void;
				public removeTabAt(param0: number): void;
				public removeAllTabs(): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public onAttachedToWindow(): void;
			}
			export module ScrollingTabContainerView {
				export class TabAdapter {
					public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView.TabAdapter>;
					public getItem(param0: number): any;
					public getCount(): number;
					public getItemId(param0: number): number;
					public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
				export class TabClickListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView.TabClickListener>;
					public onClick(param0: globalAndroid.view.View): void;
				}
				export class TabView {
					public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView.TabView>;
					public constructor(param0: androidx.appcompat.widget.ScrollingTabContainerView, param1: globalAndroid.content.Context, param2: androidx.appcompat.app.ActionBar.Tab, param3: boolean);
					public onMeasure(param0: number, param1: number): void;
					public setSelected(param0: boolean): void;
					public update(): void;
					public onInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public getTab(): androidx.appcompat.app.ActionBar.Tab;
					public bindTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
					public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
				}
				export class VisibilityAnimListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView.VisibilityAnimListener>;
					public withFinalVisibility(param0: globalAndroid.view.ViewPropertyAnimator, param1: number): androidx.appcompat.widget.ScrollingTabContainerView.VisibilityAnimListener;
					public constructor(param0: androidx.appcompat.widget.ScrollingTabContainerView);
					public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
					public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
					public onAnimationStart(param0: globalAndroid.animation.Animator): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class SearchView extends androidx.appcompat.widget.LinearLayoutCompat implements androidx.appcompat.view.CollapsibleActionView {
				public static class: java.lang.Class<androidx.appcompat.widget.SearchView>;
				public isIconified(): boolean;
				public setMaxWidth(param0: number): void;
				public setIconified(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setAppSearchData(param0: globalAndroid.os.Bundle): void;
				public setIconifiedByDefault(param0: boolean): void;
				public setOnSearchClickListener(param0: globalAndroid.view.View.OnClickListener): void;
				public getMaxWidth(): number;
				public isQueryRefinementEnabled(): boolean;
				public setQuery(param0: string, param1: boolean): void;
				public setInputType(param0: number): void;
				public setQueryHint(param0: string): void;
				public getInputType(): number;
				public constructor(param0: globalAndroid.content.Context);
				public isSubmitButtonEnabled(): boolean;
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public setSubmitButtonEnabled(param0: boolean): void;
				public setOnSuggestionListener(param0: androidx.appcompat.widget.SearchView.OnSuggestionListener): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public setQueryRefinementEnabled(param0: boolean): void;
				public getQueryHint(): string;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setOnCloseListener(param0: androidx.appcompat.widget.SearchView.OnCloseListener): void;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public onActionViewExpanded(): void;
				public setOnQueryTextListener(param0: androidx.appcompat.widget.SearchView.OnQueryTextListener): void;
				public setSuggestionsAdapter(param0: androidx.cursoradapter.widget.CursorAdapter): void;
				public getSuggestionsAdapter(): androidx.cursoradapter.widget.CursorAdapter;
				public setSearchableInfo(param0: globalAndroid.app.SearchableInfo): void;
				public getImeOptions(): number;
				public clearFocus(): void;
				public getQuery(): string;
				public onMeasure(param0: number, param1: number): void;
				public onDetachedFromWindow(): void;
				public isIconfiedByDefault(): boolean;
				public setOnQueryTextFocusChangeListener(param0: globalAndroid.view.View.OnFocusChangeListener): void;
				public onWindowFocusChanged(param0: boolean): void;
				public onActionViewCollapsed(): void;
				public setImeOptions(param0: number): void;
			}
			export module SearchView {
				export class AutoCompleteTextViewReflector {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.AutoCompleteTextViewReflector>;
				}
				export class OnCloseListener {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.OnCloseListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.SearchView$OnCloseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onClose(): boolean;
					});
					public constructor();
					public onClose(): boolean;
				}
				export class OnQueryTextListener {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.OnQueryTextListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.SearchView$OnQueryTextListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onQueryTextSubmit(param0: string): boolean;
						onQueryTextChange(param0: string): boolean;
					});
					public constructor();
					public onQueryTextSubmit(param0: string): boolean;
					public onQueryTextChange(param0: string): boolean;
				}
				export class OnSuggestionListener {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.OnSuggestionListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.SearchView$OnSuggestionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuggestionSelect(param0: number): boolean;
						onSuggestionClick(param0: number): boolean;
					});
					public constructor();
					public onSuggestionClick(param0: number): boolean;
					public onSuggestionSelect(param0: number): boolean;
				}
				export class SavedState {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.appcompat.widget.SearchView.SavedState>;
					public toString(): string;
					public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export class SearchAutoComplete extends androidx.appcompat.widget.AppCompatAutoCompleteTextView {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.SearchAutoComplete>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public enoughToFilter(): boolean;
					public performCompletion(): void;
					public replaceText(param0: string): void;
					public onKeyPreIme(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public onFinishInflate(): void;
					public setThreshold(param0: number): void;
					public onWindowFocusChanged(param0: boolean): void;
					public onFocusChanged(param0: boolean, param1: number, param2: globalAndroid.graphics.Rect): void;
					public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				}
				export class UpdatableTouchDelegate {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.UpdatableTouchDelegate>;
					public setBounds(param0: globalAndroid.graphics.Rect, param1: globalAndroid.graphics.Rect): void;
					public constructor(param0: globalAndroid.graphics.Rect, param1: globalAndroid.graphics.Rect, param2: globalAndroid.view.View);
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ShareActionProvider {
				public static class: java.lang.Class<androidx.appcompat.widget.ShareActionProvider>;
				public static DEFAULT_SHARE_HISTORY_FILE_NAME: string;
				public setOnShareTargetSelectedListener(param0: androidx.appcompat.widget.ShareActionProvider.OnShareTargetSelectedListener): void;
				public constructor(param0: globalAndroid.content.Context);
				public onCreateActionView(): globalAndroid.view.View;
				public hasSubMenu(): boolean;
				public setShareIntent(param0: globalAndroid.content.Intent): void;
				public setShareHistoryFileName(param0: string): void;
				public onPrepareSubMenu(param0: globalAndroid.view.SubMenu): void;
			}
			export module ShareActionProvider {
				export class OnShareTargetSelectedListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ShareActionProvider.OnShareTargetSelectedListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ShareActionProvider$OnShareTargetSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onShareTargetSelected(param0: androidx.appcompat.widget.ShareActionProvider, param1: globalAndroid.content.Intent): boolean;
					});
					public constructor();
					public onShareTargetSelected(param0: androidx.appcompat.widget.ShareActionProvider, param1: globalAndroid.content.Intent): boolean;
				}
				export class ShareActivityChooserModelPolicy extends androidx.appcompat.widget.ActivityChooserModel.OnChooseActivityListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ShareActionProvider.ShareActivityChooserModelPolicy>;
					public onChooseActivity(param0: androidx.appcompat.widget.ActivityChooserModel, param1: globalAndroid.content.Intent): boolean;
				}
				export class ShareMenuItemOnMenuItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ShareActionProvider.ShareMenuItemOnMenuItemClickListener>;
					public onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class SuggestionsAdapter {
				public static class: java.lang.Class<androidx.appcompat.widget.SuggestionsAdapter>;
				public setQueryRefinement(param0: number): void;
				public close(): void;
				public notifyDataSetChanged(): void;
				public changeCursor(param0: globalAndroid.database.Cursor): void;
				public convertToString(param0: globalAndroid.database.Cursor): string;
				public onClick(param0: globalAndroid.view.View): void;
				public getDropDownView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public hasStableIds(): boolean;
				public newView(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public static getColumnString(param0: globalAndroid.database.Cursor, param1: string): string;
				public getQueryRefinement(): number;
				public bindView(param0: globalAndroid.view.View, param1: globalAndroid.content.Context, param2: globalAndroid.database.Cursor): void;
				public notifyDataSetInvalidated(): void;
				public constructor(param0: globalAndroid.content.Context, param1: androidx.appcompat.widget.SearchView, param2: globalAndroid.app.SearchableInfo, param3: java.util.WeakHashMap<string,globalAndroid.graphics.drawable.Drawable.ConstantState>);
				public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public runQueryOnBackgroundThread(param0: string): globalAndroid.database.Cursor;
			}
			export module SuggestionsAdapter {
				export class ChildViewCache {
					public static class: java.lang.Class<androidx.appcompat.widget.SuggestionsAdapter.ChildViewCache>;
					public mText1: globalAndroid.widget.TextView;
					public mText2: globalAndroid.widget.TextView;
					public mIcon1: globalAndroid.widget.ImageView;
					public mIcon2: globalAndroid.widget.ImageView;
					public mIconRefine: globalAndroid.widget.ImageView;
					public constructor(param0: globalAndroid.view.View);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class SwitchCompat {
				public static class: java.lang.Class<androidx.appcompat.widget.SwitchCompat>;
				public setChecked(param0: boolean): void;
				public setTrackTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public drawableHotspotChanged(param0: number, param1: number): void;
				public setTrackDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getTextOff(): string;
				public setThumbTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public setTextOn(param0: string): void;
				public getTrackTintList(): globalAndroid.content.res.ColorStateList;
				public onCreateDrawableState(param0: number): native.Array<number>;
				public setSwitchTypeface(param0: globalAndroid.graphics.Typeface, param1: number): void;
				public setThumbTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public setThumbResource(param0: number): void;
				public getTextOn(): string;
				public setThumbTextPadding(param0: number): void;
				public getThumbTintList(): globalAndroid.content.res.ColorStateList;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getSplitTrack(): boolean;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public getTrackTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setTextOff(param0: string): void;
				public setSwitchMinWidth(param0: number): void;
				public onPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public drawableStateChanged(): void;
				public setShowText(param0: boolean): void;
				public jumpDrawablesToCurrentState(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getThumbTextPadding(): number;
				public draw(param0: globalAndroid.graphics.Canvas): void;
				public onInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setSwitchTypeface(param0: globalAndroid.graphics.Typeface): void;
				public setSplitTrack(param0: boolean): void;
				public setSwitchTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
				public toggle(): void;
				public getSwitchMinWidth(): number;
				public setSwitchPadding(param0: number): void;
				public getThumbTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public getSwitchPadding(): number;
				public constructor(param0: globalAndroid.content.Context);
				public getTrackDrawable(): globalAndroid.graphics.drawable.Drawable;
				public setCustomSelectionActionModeCallback(param0: globalAndroid.view.ActionMode.Callback): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public getCompoundPaddingLeft(): number;
				public getThumbDrawable(): globalAndroid.graphics.drawable.Drawable;
				public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
				public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
				public setThumbDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public setTrackTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public getShowText(): boolean;
				public onMeasure(param0: number, param1: number): void;
				public getCompoundPaddingRight(): number;
				public setTrackResource(param0: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ThemeUtils {
				public static class: java.lang.Class<androidx.appcompat.widget.ThemeUtils>;
				public static createDisabledStateList(param0: number, param1: number): globalAndroid.content.res.ColorStateList;
				public static getThemeAttrColor(param0: globalAndroid.content.Context, param1: number): number;
				public static getThemeAttrColorStateList(param0: globalAndroid.content.Context, param1: number): globalAndroid.content.res.ColorStateList;
				public static getDisabledThemeAttrColor(param0: globalAndroid.content.Context, param1: number): number;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ThemedSpinnerAdapter {
				public static class: java.lang.Class<androidx.appcompat.widget.ThemedSpinnerAdapter>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.ThemedSpinnerAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setDropDownViewTheme(param0: globalAndroid.content.res.Resources.Theme): void;
					getDropDownViewTheme(): globalAndroid.content.res.Resources.Theme;
				});
				public constructor();
				public setDropDownViewTheme(param0: globalAndroid.content.res.Resources.Theme): void;
				public getDropDownViewTheme(): globalAndroid.content.res.Resources.Theme;
			}
			export module ThemedSpinnerAdapter {
				export class Helper {
					public static class: java.lang.Class<androidx.appcompat.widget.ThemedSpinnerAdapter.Helper>;
					public constructor(param0: globalAndroid.content.Context);
					public setDropDownViewTheme(param0: globalAndroid.content.res.Resources.Theme): void;
					public getDropDownViewInflater(): globalAndroid.view.LayoutInflater;
					public getDropDownViewTheme(): globalAndroid.content.res.Resources.Theme;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TintContextWrapper {
				public static class: java.lang.Class<androidx.appcompat.widget.TintContextWrapper>;
				public setTheme(param0: number): void;
				public getResources(): globalAndroid.content.res.Resources;
				public getTheme(): globalAndroid.content.res.Resources.Theme;
				public getAssets(): globalAndroid.content.res.AssetManager;
				public static wrap(param0: globalAndroid.content.Context): globalAndroid.content.Context;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TintInfo {
				public static class: java.lang.Class<androidx.appcompat.widget.TintInfo>;
				public mTintList: globalAndroid.content.res.ColorStateList;
				public mTintMode: globalAndroid.graphics.PorterDuff.Mode;
				public mHasTintMode: boolean;
				public mHasTintList: boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TintResources extends androidx.appcompat.widget.ResourcesWrapper {
				public static class: java.lang.Class<androidx.appcompat.widget.TintResources>;
				public getDrawable(param0: number, param1: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
				public constructor(param0: globalAndroid.content.res.Resources);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.Resources);
				public getDrawable(param0: number): globalAndroid.graphics.drawable.Drawable;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TintTypedArray {
				public static class: java.lang.Class<androidx.appcompat.widget.TintTypedArray>;
				public static obtainStyledAttributes(param0: globalAndroid.content.Context, param1: number, param2: native.Array<number>): androidx.appcompat.widget.TintTypedArray;
				public recycle(): void;
				public getString(param0: number): string;
				public peekValue(param0: number): globalAndroid.util.TypedValue;
				public getFraction(param0: number, param1: number, param2: number, param3: number): number;
				public getFloat(param0: number, param1: number): number;
				public static obtainStyledAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: native.Array<number>): androidx.appcompat.widget.TintTypedArray;
				public getPositionDescription(): string;
				public hasValue(param0: number): boolean;
				public getNonResourceString(param0: number): string;
				public getInt(param0: number, param1: number): number;
				public getTextArray(param0: number): native.Array<string>;
				public getIndex(param0: number): number;
				public getInteger(param0: number, param1: number): number;
				public getText(param0: number): string;
				public getIndexCount(): number;
				public getDimensionPixelSize(param0: number, param1: number): number;
				public static obtainStyledAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: native.Array<number>, param3: number, param4: number): androidx.appcompat.widget.TintTypedArray;
				public getFont(param0: number, param1: number, param2: androidx.core.content.res.ResourcesCompat.FontCallback): globalAndroid.graphics.Typeface;
				public getLayoutDimension(param0: number, param1: number): number;
				public getResources(): globalAndroid.content.res.Resources;
				public length(): number;
				public getChangingConfigurations(): number;
				public getDrawable(param0: number): globalAndroid.graphics.drawable.Drawable;
				public getColor(param0: number, param1: number): number;
				public getColorStateList(param0: number): globalAndroid.content.res.ColorStateList;
				public getBoolean(param0: number, param1: boolean): boolean;
				public getResourceId(param0: number, param1: number): number;
				public getDimension(param0: number, param1: number): number;
				public getLayoutDimension(param0: number, param1: string): number;
				public getType(param0: number): number;
				public getDrawableIfKnown(param0: number): globalAndroid.graphics.drawable.Drawable;
				public getValue(param0: number, param1: globalAndroid.util.TypedValue): boolean;
				public getDimensionPixelOffset(param0: number, param1: number): number;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class Toolbar extends android.view.ViewGroup {
				public static class: java.lang.Class<androidx.appcompat.widget.Toolbar>;
				public setLogoDescription(param0: number): void;
				public setOnMenuItemClickListener(param0: androidx.appcompat.widget.Toolbar.OnMenuItemClickListener): void;
				public setPopupTheme(param0: number): void;
				public showOverflowMenu(): boolean;
				public getContentInsetLeft(): number;
				public getTitleMarginBottom(): number;
				public getOverflowIcon(): globalAndroid.graphics.drawable.Drawable;
				public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
				public setTitleMarginStart(param0: number): void;
				public setTitle(param0: string): void;
				public setNavigationIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setTitle(param0: number): void;
				public setTitleMarginBottom(param0: number): void;
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public getNavigationContentDescription(): string;
				public getContentInsetStartWithNavigation(): number;
				public getLogo(): globalAndroid.graphics.drawable.Drawable;
				public getContentInsetEndWithActions(): number;
				public setContentInsetsRelative(param0: number, param1: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public collapseActionView(): void;
				public setTitleMargin(param0: number, param1: number, param2: number, param3: number): void;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public getTitleMarginStart(): number;
				public getMenu(): globalAndroid.view.Menu;
				public setLogoDescription(param0: string): void;
				public setNavigationContentDescription(param0: number): void;
				public getContentInsetEnd(): number;
				public hideOverflowMenu(): boolean;
				public setSubtitle(param0: string): void;
				public setNavigationContentDescription(param0: string): void;
				public setLogo(param0: number): void;
				public onDetachedFromWindow(): void;
				public getSubtitle(): string;
				public setSubtitle(param0: number): void;
				public setOverflowIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getCurrentContentInsetRight(): number;
				public setTitleMarginEnd(param0: number): void;
				public onRtlPropertiesChanged(param0: number): void;
				public setSubtitleTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
				public getTitleMarginTop(): number;
				public getContentInsetRight(): number;
				public getCurrentContentInsetEnd(): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public inflateMenu(param0: number): void;
				public setCollapsible(param0: boolean): void;
				public generateLayoutParams(param0: globalAndroid.util.AttributeSet): androidx.appcompat.widget.Toolbar.LayoutParams;
				public getNavigationIcon(): globalAndroid.graphics.drawable.Drawable;
				public setMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.widget.ActionMenuPresenter): void;
				public getTitleMarginEnd(): number;
				public setNavigationOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
				public constructor(param0: globalAndroid.content.Context);
				public onHoverEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public getCurrentContentInsetStart(): number;
				public dismissPopupMenus(): void;
				public getLogoDescription(): string;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public setSubtitleTextColor(param0: number): void;
				public setContentInsetStartWithNavigation(param0: number): void;
				public generateDefaultLayoutParams(): androidx.appcompat.widget.Toolbar.LayoutParams;
				public setContentInsetsAbsolute(param0: number, param1: number): void;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): androidx.appcompat.widget.Toolbar.LayoutParams;
				public isTitleTruncated(): boolean;
				public setNavigationIcon(param0: number): void;
				public canShowOverflowMenu(): boolean;
				public setLogo(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setTitleTextAppearance(param0: globalAndroid.content.Context, param1: number): void;
				public setContentInsetEndWithActions(param0: number): void;
				public hasExpandedActionView(): boolean;
				public getTitle(): string;
				public setTitleTextColor(param0: number): void;
				public isOverflowMenuShowing(): boolean;
				public setTitleMarginTop(param0: number): void;
				public setMenuCallbacks(param0: androidx.appcompat.view.menu.MenuPresenter.Callback, param1: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				public getCurrentContentInsetLeft(): number;
				public onMeasure(param0: number, param1: number): void;
				public isOverflowMenuShowPending(): boolean;
				public getContentInsetStart(): number;
				public getPopupTheme(): number;
				public getWrapper(): androidx.appcompat.widget.DecorToolbar;
			}
			export module Toolbar {
				export class ExpandedActionViewMenuPresenter extends androidx.appcompat.view.menu.MenuPresenter {
					public static class: java.lang.Class<androidx.appcompat.widget.Toolbar.ExpandedActionViewMenuPresenter>;
					public getMenuView(param0: globalAndroid.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getId(): number;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public initForMenu(param0: globalAndroid.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public updateMenuView(param0: boolean): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public flagActionItems(): boolean;
				}
				export class LayoutParams extends androidx.appcompat.app.ActionBar.LayoutParams {
					public static class: java.lang.Class<androidx.appcompat.widget.Toolbar.LayoutParams>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: androidx.appcompat.app.ActionBar.LayoutParams);
					public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
					public constructor(param0: number, param1: number, param2: number);
					public constructor(param0: androidx.appcompat.widget.Toolbar.LayoutParams);
					public constructor(param0: globalAndroid.view.ViewGroup.MarginLayoutParams);
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
				}
				export class OnMenuItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.widget.Toolbar.OnMenuItemClickListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.Toolbar$OnMenuItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
					});
					public constructor();
					public onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
				}
				export class SavedState {
					public static class: java.lang.Class<androidx.appcompat.widget.Toolbar.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.appcompat.widget.Toolbar.SavedState>;
					public constructor(param0: globalAndroid.os.Parcel);
					public constructor(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public constructor(param0: globalAndroid.os.Parcelable);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ToolbarWidgetWrapper extends androidx.appcompat.widget.DecorToolbar {
				public static class: java.lang.Class<androidx.appcompat.widget.ToolbarWidgetWrapper>;
				public getHeight(): number;
				public hasLogo(): boolean;
				public showOverflowMenu(): boolean;
				public setIcon(param0: number): void;
				public constructor(param0: androidx.appcompat.widget.Toolbar, param1: boolean);
				public setTitle(param0: string): void;
				public setDefaultNavigationContentDescription(param0: number): void;
				public setNavigationIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getDropdownSelectedPosition(): number;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setWindowTitle(param0: string): void;
				public setCustomView(param0: globalAndroid.view.View): void;
				public setDisplayOptions(param0: number): void;
				public collapseActionView(): void;
				public getContext(): globalAndroid.content.Context;
				public setDefaultNavigationIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public restoreHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public getMenu(): globalAndroid.view.Menu;
				public setupAnimatorToVisibility(param0: number, param1: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public setNavigationContentDescription(param0: number): void;
				public setVisibility(param0: number): void;
				public hideOverflowMenu(): boolean;
				public setEmbeddedTabView(param0: androidx.appcompat.widget.ScrollingTabContainerView): void;
				public setSubtitle(param0: string): void;
				public initIndeterminateProgress(): void;
				public hasEmbeddedTabs(): boolean;
				public getVisibility(): number;
				public setNavigationContentDescription(param0: string): void;
				public saveHierarchyState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
				public constructor(param0: androidx.appcompat.widget.Toolbar, param1: boolean, param2: number, param3: number);
				public setLogo(param0: number): void;
				public getSubtitle(): string;
				public setMenuPrepared(): void;
				public setHomeButtonEnabled(param0: boolean): void;
				public initProgress(): void;
				public setCollapsible(param0: boolean): void;
				public getNavigationMode(): number;
				public animateToVisibility(param0: number): void;
				public getCustomView(): globalAndroid.view.View;
				public setWindowCallback(param0: globalAndroid.view.Window.Callback): void;
				public getDisplayOptions(): number;
				public dismissPopupMenus(): void;
				public setDropdownParams(param0: globalAndroid.widget.SpinnerAdapter, param1: globalAndroid.widget.AdapterView.OnItemSelectedListener): void;
				public setMenu(param0: globalAndroid.view.Menu, param1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public isTitleTruncated(): boolean;
				public getDropdownItemCount(): number;
				public setNavigationIcon(param0: number): void;
				public canShowOverflowMenu(): boolean;
				public setLogo(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public hasExpandedActionView(): boolean;
				public getTitle(): string;
				public hasIcon(): boolean;
				public isOverflowMenuShowing(): boolean;
				public setMenuCallbacks(param0: androidx.appcompat.view.menu.MenuPresenter.Callback, param1: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				public setNavigationMode(param0: number): void;
				public setDropdownSelectedPosition(param0: number): void;
				public isOverflowMenuShowPending(): boolean;
				public getViewGroup(): globalAndroid.view.ViewGroup;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TooltipCompat {
				public static class: java.lang.Class<androidx.appcompat.widget.TooltipCompat>;
				public static setTooltipText(param0: globalAndroid.view.View, param1: string): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TooltipCompatHandler {
				public static class: java.lang.Class<androidx.appcompat.widget.TooltipCompatHandler>;
				public onLongClick(param0: globalAndroid.view.View): boolean;
				public onHover(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
				public onViewAttachedToWindow(param0: globalAndroid.view.View): void;
				public onViewDetachedFromWindow(param0: globalAndroid.view.View): void;
				public static setTooltipText(param0: globalAndroid.view.View, param1: string): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TooltipPopup {
				public static class: java.lang.Class<androidx.appcompat.widget.TooltipPopup>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class VectorEnabledTintResources {
				public static class: java.lang.Class<androidx.appcompat.widget.VectorEnabledTintResources>;
				public static MAX_SDK_WHERE_REQUIRED: number;
				public static shouldBeUsed(): boolean;
				public static setCompatVectorFromResourcesEnabled(param0: boolean): void;
				public static isCompatVectorFromResourcesEnabled(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.Resources);
				public getDrawable(param0: number): globalAndroid.graphics.drawable.Drawable;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ViewStubCompat {
				public static class: java.lang.Class<androidx.appcompat.widget.ViewStubCompat>;
				public setLayoutInflater(param0: globalAndroid.view.LayoutInflater): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getInflatedId(): number;
				public draw(param0: globalAndroid.graphics.Canvas): void;
				public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
				public setInflatedId(param0: number): void;
				public setVisibility(param0: number): void;
				public setOnInflateListener(param0: androidx.appcompat.widget.ViewStubCompat.OnInflateListener): void;
				public setLayoutResource(param0: number): void;
				public getLayoutResource(): number;
				public onMeasure(param0: number, param1: number): void;
				public inflate(): globalAndroid.view.View;
				public getLayoutInflater(): globalAndroid.view.LayoutInflater;
			}
			export module ViewStubCompat {
				export class OnInflateListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ViewStubCompat.OnInflateListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ViewStubCompat$OnInflateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onInflate(param0: androidx.appcompat.widget.ViewStubCompat, param1: globalAndroid.view.View): void;
					});
					public constructor();
					public onInflate(param0: androidx.appcompat.widget.ViewStubCompat, param1: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ViewUtils {
				public static class: java.lang.Class<androidx.appcompat.widget.ViewUtils>;
				public static isLayoutRtl(param0: globalAndroid.view.View): boolean;
				public static makeOptionalFitsSystemWindows(param0: globalAndroid.view.View): void;
				public static computeFitSystemWindows(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Rect): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class WithHint {
				public static class: java.lang.Class<androidx.appcompat.widget.WithHint>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.WithHint interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getHint(): string;
				});
				public constructor();
				public getHint(): string;
			}
		}
	}
}

//Generics information:
//androidx.appcompat.view.menu.BaseMenuWrapper:1
//androidx.appcompat.view.menu.BaseWrapper:1

