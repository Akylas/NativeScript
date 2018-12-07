
declare module androidx {
	export module fragment {
		export module app {
			export class BackStackRecord extends androidx.fragment.app.FragmentTransaction implements androidx.fragment.app.FragmentManager.BackStackEntry, androidx.fragment.app.FragmentManagerImpl.OpGenerator {
				public static class: java.lang.Class<androidx.fragment.app.BackStackRecord>;
				public add(param0: androidx.fragment.app.Fragment, param1: string): androidx.fragment.app.FragmentTransaction;
				public show(param0: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public commitAllowingStateLoss(): number;
				public commitNowAllowingStateLoss(): void;
				public replace(param0: number, param1: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public setTransition(param0: number): androidx.fragment.app.FragmentTransaction;
				public isAddToBackStackAllowed(): boolean;
				public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				public getTransition(): number;
				public hide(param0: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public setTransitionStyle(param0: number): androidx.fragment.app.FragmentTransaction;
				public setReorderingAllowed(param0: boolean): androidx.fragment.app.FragmentTransaction;
				public generateOps(param0: java.util.ArrayList<androidx.fragment.app.BackStackRecord>, param1: java.util.ArrayList<java.lang.Boolean>): boolean;
				public replace(param0: number, param1: androidx.fragment.app.Fragment, param2: string): androidx.fragment.app.FragmentTransaction;
				public constructor();
				public add(param0: number, param1: androidx.fragment.app.Fragment, param2: string): androidx.fragment.app.FragmentTransaction;
				public addSharedElement(param0: globalAndroid.view.View, param1: string): androidx.fragment.app.FragmentTransaction;
				public remove(param0: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public runOnCommit(param0: java.lang.Runnable): androidx.fragment.app.FragmentTransaction;
				public runOnCommitRunnables(): void;
				public setBreadCrumbShortTitle(param0: string): androidx.fragment.app.FragmentTransaction;
				public setCustomAnimations(param0: number, param1: number, param2: number, param3: number): androidx.fragment.app.FragmentTransaction;
				public setBreadCrumbTitle(param0: number): androidx.fragment.app.FragmentTransaction;
				public addToBackStack(param0: string): androidx.fragment.app.FragmentTransaction;
				public disallowAddToBackStack(): androidx.fragment.app.FragmentTransaction;
				public isEmpty(): boolean;
				public dump(param0: string, param1: java.io.PrintWriter, param2: boolean): void;
				public constructor(param0: androidx.fragment.app.FragmentManagerImpl);
				public commitNow(): void;
				public setPrimaryNavigationFragment(param0: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public detach(param0: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public getId(): number;
				public getName(): string;
				public getBreadCrumbTitle(): string;
				public toString(): string;
				public setCustomAnimations(param0: number, param1: number): androidx.fragment.app.FragmentTransaction;
				public setBreadCrumbTitle(param0: string): androidx.fragment.app.FragmentTransaction;
				public commit(): number;
				public add(param0: number, param1: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public attach(param0: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public getBreadCrumbShortTitleRes(): number;
				public getTransitionStyle(): number;
				public getBreadCrumbShortTitle(): string;
				public setAllowOptimization(param0: boolean): androidx.fragment.app.FragmentTransaction;
				public getBreadCrumbTitleRes(): number;
				public setBreadCrumbShortTitle(param0: number): androidx.fragment.app.FragmentTransaction;
			}
			export module BackStackRecord {
				export class Op {
					public static class: java.lang.Class<androidx.fragment.app.BackStackRecord.Op>;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class BackStackState {
				public static class: java.lang.Class<androidx.fragment.app.BackStackState>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.fragment.app.BackStackState>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public constructor(param0: androidx.fragment.app.BackStackRecord);
				public describeContents(): number;
				public constructor(param0: globalAndroid.os.Parcel);
				public instantiate(param0: androidx.fragment.app.FragmentManagerImpl): androidx.fragment.app.BackStackRecord;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class DialogFragment extends androidx.fragment.app.Fragment {
				public static class: java.lang.Class<androidx.fragment.app.DialogFragment>;
				public static STYLE_NORMAL: number;
				public static STYLE_NO_TITLE: number;
				public static STYLE_NO_FRAME: number;
				public static STYLE_NO_INPUT: number;
				public getDialog(): globalAndroid.app.Dialog;
				public onActivityCreated(param0: globalAndroid.os.Bundle): void;
				public dismiss(): void;
				public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
				public constructor();
				public show(param0: androidx.fragment.app.FragmentTransaction, param1: string): number;
				public show(param0: androidx.fragment.app.FragmentManager, param1: string): void;
				public onStop(): void;
				public dismissAllowingStateLoss(): void;
				public onCancel(param0: globalAndroid.content.DialogInterface): void;
				public setStyle(param0: number, param1: number): void;
				public showNow(param0: androidx.fragment.app.FragmentManager, param1: string): void;
				public getShowsDialog(): boolean;
				public setupDialog(param0: globalAndroid.app.Dialog, param1: number): void;
				public onAttach(param0: globalAndroid.app.Activity): void;
				public setCancelable(param0: boolean): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public onGetLayoutInflater(param0: globalAndroid.os.Bundle): globalAndroid.view.LayoutInflater;
				public setShowsDialog(param0: boolean): void;
				public onAttach(param0: globalAndroid.content.Context): void;
				public onDismiss(param0: globalAndroid.content.DialogInterface): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onStart(): void;
				public getTheme(): number;
				public isCancelable(): boolean;
				public onDestroyView(): void;
				public onDetach(): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class Fragment extends java.lang.Object  {
				public static class: java.lang.Class<androidx.fragment.app.Fragment>;
				public onDestroyOptionsMenu(): void;
				public isStateSaved(): boolean;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public setSharedElementEnterTransition(param0: any): void;
				public setUserVisibleHint(param0: boolean): void;
				public hasOptionsMenu(): boolean;
				public isInLayout(): boolean;
				public getEnterTransition(): any;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public setInitialSavedState(param0: androidx.fragment.app.Fragment.SavedState): void;
				public onGetLayoutInflater(param0: globalAndroid.os.Bundle): globalAndroid.view.LayoutInflater;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
				public setEnterSharedElementCallback(param0: androidx.core.app.SharedElementCallback): void;
				public onStart(): void;
				public getSharedElementReturnTransition(): any;
				public onMultiWindowModeChanged(param0: boolean): void;
				public getRetainInstance(): boolean;
				public setReturnTransition(param0: any): void;
				public setReenterTransition(param0: any): void;
				public startPostponedEnterTransition(): void;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public getString(param0: number): string;
				public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				public startActivityForResult(param0: globalAndroid.content.Intent, param1: number, param2: globalAndroid.os.Bundle): void;
				public isHidden(): boolean;
				public setArguments(param0: globalAndroid.os.Bundle): void;
				public onViewStateRestored(param0: globalAndroid.os.Bundle): void;
				public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
				public getActivity(): androidx.fragment.app.FragmentActivity;
				public setRetainInstance(param0: boolean): void;
				public onPictureInPictureModeChanged(param0: boolean): void;
				public requestPermissions(param0: native.Array<string>, param1: number): void;
				public getText(param0: number): string;
				public registerForContextMenu(param0: globalAndroid.view.View): void;
				public getResources(): globalAndroid.content.res.Resources;
				public startActivity(param0: globalAndroid.content.Intent): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public getExitTransition(): any;
				public getReenterTransition(): any;
				public setAllowReturnTransitionOverlap(param0: boolean): void;
				public onCreateAnimation(param0: number, param1: boolean, param2: number): globalAndroid.view.animation.Animation;
				public onAttach(param0: globalAndroid.content.Context): void;
				public setExitSharedElementCallback(param0: androidx.core.app.SharedElementCallback): void;
				public requireHost(): any;
				public requireContext(): globalAndroid.content.Context;
				public onHiddenChanged(param0: boolean): void;
				public isRemoving(): boolean;
				public static instantiate(param0: globalAndroid.content.Context, param1: string): androidx.fragment.app.Fragment;
				public getView(): globalAndroid.view.View;
				public setTargetFragment(param0: androidx.fragment.app.Fragment, param1: number): void;
				public setMenuVisibility(param0: boolean): void;
				public constructor();
				public getAllowReturnTransitionOverlap(): boolean;
				public getTargetRequestCode(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getFragmentManager(): androidx.fragment.app.FragmentManager;
				public onAttachFragment(param0: androidx.fragment.app.Fragment): void;
				public getLayoutInflater(param0: globalAndroid.os.Bundle): globalAndroid.view.LayoutInflater;
				public getSharedElementEnterTransition(): any;
				public shouldShowRequestPermissionRationale(param0: string): boolean;
				public getUserVisibleHint(): boolean;
				public setSharedElementReturnTransition(param0: any): void;
				public onPrepareOptionsMenu(param0: globalAndroid.view.Menu): void;
				public startActivity(param0: globalAndroid.content.Intent, param1: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public getContext(): globalAndroid.content.Context;
				public setEnterTransition(param0: any): void;
				public getViewLifecycleOwner(): androidx.lifecycle.LifecycleOwner;
				public getTag(): string;
				public toString(): string;
				public onCreateOptionsMenu(param0: globalAndroid.view.Menu, param1: globalAndroid.view.MenuInflater): void;
				public unregisterForContextMenu(param0: globalAndroid.view.View): void;
				public setExitTransition(param0: any): void;
				public getHost(): any;
				public isResumed(): boolean;
				public onOptionsMenuClosed(param0: globalAndroid.view.Menu): void;
				public getAllowEnterTransitionOverlap(): boolean;
				public onDestroyView(): void;
				public requireActivity(): androidx.fragment.app.FragmentActivity;
				public onDetach(): void;
				public postponeEnterTransition(): void;
				public isVisible(): boolean;
				public getChildFragmentManager(): androidx.fragment.app.FragmentManager;
				public onActivityCreated(param0: globalAndroid.os.Bundle): void;
				public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.util.AttributeSet, param2: globalAndroid.os.Bundle): void;
				public setAllowEnterTransitionOverlap(param0: boolean): void;
				public onPause(): void;
				public getString(param0: number, param1: native.Array<any>): string;
				public onCreateAnimator(param0: number, param1: boolean, param2: number): globalAndroid.animation.Animator;
				public isMenuVisible(): boolean;
				public onStop(): void;
				public static instantiate(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle): androidx.fragment.app.Fragment;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public getTargetFragment(): androidx.fragment.app.Fragment;
				public getLayoutInflater(): globalAndroid.view.LayoutInflater;
				public getArguments(): globalAndroid.os.Bundle;
				public getViewLifecycleOwnerLiveData(): androidx.lifecycle.LiveData<androidx.lifecycle.LifecycleOwner>;
				public onLowMemory(): void;
				public getId(): number;
				public onInflate(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: globalAndroid.os.Bundle): void;
				public getLoaderManager(): androidx.loader.app.LoaderManager;
				public onAttach(param0: globalAndroid.app.Activity): void;
				public setHasOptionsMenu(param0: boolean): void;
				public startIntentSenderForResult(param0: globalAndroid.content.IntentSender, param1: number, param2: globalAndroid.content.Intent, param3: number, param4: number, param5: number, param6: globalAndroid.os.Bundle): void;
				public requireFragmentManager(): androidx.fragment.app.FragmentManager;
				public getReturnTransition(): any;
				public onCreateContextMenu(param0: globalAndroid.view.ContextMenu, param1: globalAndroid.view.View, param2: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public isAdded(): boolean;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public getParentFragment(): androidx.fragment.app.Fragment;
				public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
				public isDetached(): boolean;
				public onDestroy(): void;
				public onContextItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
			}
			export module Fragment {
				export class AnimationInfo {
					public static class: java.lang.Class<androidx.fragment.app.Fragment.AnimationInfo>;
				}
				export class InstantiationException {
					public static class: java.lang.Class<androidx.fragment.app.Fragment.InstantiationException>;
					public constructor(param0: string, param1: java.lang.Exception);
				}
				export class OnStartEnterTransitionListener {
					public static class: java.lang.Class<androidx.fragment.app.Fragment.OnStartEnterTransitionListener>;
					/**
					 * Constructs a new instance of the androidx.fragment.app.Fragment$OnStartEnterTransitionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onStartEnterTransition(): void;
						startListening(): void;
					});
					public constructor();
					public onStartEnterTransition(): void;
					public startListening(): void;
				}
				export class SavedState {
					public static class: java.lang.Class<androidx.fragment.app.Fragment.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.fragment.app.Fragment.SavedState>;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentActivity extends androidx.core.app.ComponentActivity {
				public static class: java.lang.Class<androidx.fragment.app.FragmentActivity>;
				public supportPostponeEnterTransition(): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public getSupportFragmentManager(): androidx.fragment.app.FragmentManager;
				public constructor();
				public onCreateView(param0: string, param1: globalAndroid.content.Context, param2: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				// public onAttachFragment(param0: androidx.fragment.app.Fragment): void;
				public supportFinishAfterTransition(): void;
				public onPreparePanel(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.Menu): boolean;
				public getLastCustomNonConfigurationInstance(): any;
				public onResume(): void;
				public supportInvalidateOptionsMenu(): void;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
				public setEnterSharedElementCallback(param0: androidx.core.app.SharedElementCallback): void;
				// public startActivityFromFragment(param0: androidx.fragment.app.Fragment, param1: globalAndroid.content.Intent, param2: number): void;
				public validateRequestPermissionsRequestCode(param0: number): void;
				public onPanelClosed(param0: number, param1: globalAndroid.view.Menu): void;
				public onPostResume(): void;
				public onStart(): void;
				public onMultiWindowModeChanged(param0: boolean): void;
				public onBackPressed(): void;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public onMenuItemSelected(param0: number, param1: globalAndroid.view.MenuItem): boolean;
				public onCreatePanelMenu(param0: number, param1: globalAndroid.view.Menu): boolean;
				public onPause(): void;
				public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				public onResumeFragments(): void;
				public onCreateView(param0: globalAndroid.view.View, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public startActivityForResult(param0: globalAndroid.content.Intent, param1: number, param2: globalAndroid.os.Bundle): void;
				public startIntentSenderForResult(param0: globalAndroid.content.IntentSender, param1: number, param2: globalAndroid.content.Intent, param3: number, param4: number, param5: number): void;
				public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
				public onPictureInPictureModeChanged(param0: boolean): void;
				public onStop(): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public startIntentSenderFromFragment(param0: androidx.fragment.app.Fragment, param1: globalAndroid.content.IntentSender, param2: number, param3: globalAndroid.content.Intent, param4: number, param5: number, param6: number, param7: globalAndroid.os.Bundle): void;
				public onLowMemory(): void;
				// public startActivityFromFragment(param0: androidx.fragment.app.Fragment, param1: globalAndroid.content.Intent, param2: number, param3: globalAndroid.os.Bundle): void;
				public onStateNotSaved(): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public startIntentSenderForResult(param0: globalAndroid.content.IntentSender, param1: number, param2: globalAndroid.content.Intent, param3: number, param4: number, param5: number, param6: globalAndroid.os.Bundle): void;
				public getSupportLoaderManager(): androidx.loader.app.LoaderManager;
				public onPrepareOptionsPanel(param0: globalAndroid.view.View, param1: globalAndroid.view.Menu): boolean;
				public onRetainCustomNonConfigurationInstance(): any;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public setExitSharedElementCallback(param0: androidx.core.app.SharedElementCallback): void;
				public onNewIntent(param0: globalAndroid.content.Intent): void;
				public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
				public onDestroy(): void;
				public supportStartPostponedEnterTransition(): void;
				public onRetainNonConfigurationInstance(): any;
			}
			export module FragmentActivity {
				export class HostCallbacks extends androidx.fragment.app.FragmentHostCallback<androidx.fragment.app.FragmentActivity> {
					public static class: java.lang.Class<androidx.fragment.app.FragmentActivity.HostCallbacks>;
					public onStartActivityFromFragment(param0: androidx.fragment.app.Fragment, param1: globalAndroid.content.Intent, param2: number): void;
					public onShouldShowRequestPermissionRationale(param0: string): boolean;
					public onGetLayoutInflater(): globalAndroid.view.LayoutInflater;
					public onGetWindowAnimations(): number;
					public constructor(param0: androidx.fragment.app.FragmentActivity);
					public onShouldSaveFragmentState(param0: androidx.fragment.app.Fragment): boolean;
					public onRequestPermissionsFromFragment(param0: androidx.fragment.app.Fragment, param1: native.Array<string>, param2: number): void;
					public onHasWindowAnimations(): boolean;
					public onGetHost(): androidx.fragment.app.FragmentActivity;
					public onHasView(): boolean;
					public onStartActivityFromFragment(param0: androidx.fragment.app.Fragment, param1: globalAndroid.content.Intent, param2: number, param3: globalAndroid.os.Bundle): void;
					public onAttachFragment(param0: androidx.fragment.app.Fragment): void;
					public onGetHost(): any;
					public onFindViewById(param0: number): globalAndroid.view.View;
					public constructor();
					public onSupportInvalidateOptionsMenu(): void;
					public onStartIntentSenderFromFragment(param0: androidx.fragment.app.Fragment, param1: globalAndroid.content.IntentSender, param2: number, param3: globalAndroid.content.Intent, param4: number, param5: number, param6: number, param7: globalAndroid.os.Bundle): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number);
					public onDump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				}
				export class NonConfigurationInstances {
					public static class: java.lang.Class<androidx.fragment.app.FragmentActivity.NonConfigurationInstances>;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentContainer {
				public static class: java.lang.Class<androidx.fragment.app.FragmentContainer>;
				public onFindViewById(param0: number): globalAndroid.view.View;
				public instantiate(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle): androidx.fragment.app.Fragment;
				public onHasView(): boolean;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentController {
				public static class: java.lang.Class<androidx.fragment.app.FragmentController>;
				public getActiveFragments(param0: java.util.List<androidx.fragment.app.Fragment>): java.util.List<androidx.fragment.app.Fragment>;
				public doLoaderDestroy(): void;
				public reportLoaderStart(): void;
				public retainLoaderNonConfig(): androidx.collection.SimpleArrayMap<string,androidx.loader.app.LoaderManager>;
				public saveAllState(): globalAndroid.os.Parcelable;
				public dispatchMultiWindowModeChanged(param0: boolean): void;
				public dispatchLowMemory(): void;
				public onCreateView(param0: globalAndroid.view.View, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public retainNonConfig(): java.util.List<androidx.fragment.app.Fragment>;
				public dispatchContextItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public getActiveFragmentsCount(): number;
				public dispatchPictureInPictureModeChanged(param0: boolean): void;
				public dumpLoaders(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				public getSupportFragmentManager(): androidx.fragment.app.FragmentManager;
				public dispatchStop(): void;
				public restoreAllState(param0: globalAndroid.os.Parcelable, param1: java.util.List<androidx.fragment.app.Fragment>): void;
				public dispatchOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public noteStateNotSaved(): void;
				public dispatchConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public doLoaderStart(): void;
				public dispatchPrepareOptionsMenu(param0: globalAndroid.view.Menu): boolean;
				public static createController(param0: androidx.fragment.app.FragmentHostCallback<any>): androidx.fragment.app.FragmentController;
				public dispatchResume(): void;
				public dispatchDestroy(): void;
				public restoreAllState(param0: globalAndroid.os.Parcelable, param1: androidx.fragment.app.FragmentManagerNonConfig): void;
				public restoreLoaderNonConfig(param0: androidx.collection.SimpleArrayMap<string,androidx.loader.app.LoaderManager>): void;
				public retainNestedNonConfig(): androidx.fragment.app.FragmentManagerNonConfig;
				public dispatchStart(): void;
				public findFragmentByWho(param0: string): androidx.fragment.app.Fragment;
				public dispatchPause(): void;
				public dispatchCreate(): void;
				public getSupportLoaderManager(): androidx.loader.app.LoaderManager;
				public dispatchReallyStop(): void;
				public attachHost(param0: androidx.fragment.app.Fragment): void;
				public dispatchActivityCreated(): void;
				public dispatchDestroyView(): void;
				public doLoaderRetain(): void;
				public dispatchCreateOptionsMenu(param0: globalAndroid.view.Menu, param1: globalAndroid.view.MenuInflater): boolean;
				public execPendingActions(): boolean;
				public doLoaderStop(param0: boolean): void;
				public dispatchOptionsMenuClosed(param0: globalAndroid.view.Menu): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentHostCallback<E>  extends androidx.fragment.app.FragmentContainer {
				public static class: java.lang.Class<androidx.fragment.app.FragmentHostCallback<any>>;
				public onShouldSaveFragmentState(param0: androidx.fragment.app.Fragment): boolean;
				public onSupportInvalidateOptionsMenu(): void;
				public onStartIntentSenderFromFragment(param0: androidx.fragment.app.Fragment, param1: globalAndroid.content.IntentSender, param2: number, param3: globalAndroid.content.Intent, param4: number, param5: number, param6: number, param7: globalAndroid.os.Bundle): void;
				public onStartActivityFromFragment(param0: androidx.fragment.app.Fragment, param1: globalAndroid.content.Intent, param2: number, param3: globalAndroid.os.Bundle): void;
				public onHasView(): boolean;
				public onHasWindowAnimations(): boolean;
				public onDump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				public constructor();
				public onFindViewById(param0: number): globalAndroid.view.View;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: number);
				public onRequestPermissionsFromFragment(param0: androidx.fragment.app.Fragment, param1: native.Array<string>, param2: number): void;
				public onGetWindowAnimations(): number;
				public onGetHost(): any;
				public onStartActivityFromFragment(param0: androidx.fragment.app.Fragment, param1: globalAndroid.content.Intent, param2: number): void;
				public onGetLayoutInflater(): globalAndroid.view.LayoutInflater;
				public onShouldShowRequestPermissionRationale(param0: string): boolean;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentManager {
				public static class: java.lang.Class<androidx.fragment.app.FragmentManager>;
				public static POP_BACK_STACK_INCLUSIVE: number;
				public openTransaction(): androidx.fragment.app.FragmentTransaction;
				public isDestroyed(): boolean;
				public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				public executePendingTransactions(): boolean;
				public removeOnBackStackChangedListener(param0: androidx.fragment.app.FragmentManager.OnBackStackChangedListener): void;
				public isStateSaved(): boolean;
				public constructor();
				public popBackStackImmediate(param0: number, param1: number): boolean;
				public popBackStack(): void;
				public popBackStack(param0: string, param1: number): void;
				public saveFragmentInstanceState(param0: androidx.fragment.app.Fragment): androidx.fragment.app.Fragment.SavedState;
				public getFragment(param0: globalAndroid.os.Bundle, param1: string): androidx.fragment.app.Fragment;
				public static enableDebugLogging(param0: boolean): void;
				public getPrimaryNavigationFragment(): androidx.fragment.app.Fragment;
				public putFragment(param0: globalAndroid.os.Bundle, param1: string, param2: androidx.fragment.app.Fragment): void;
				public popBackStackImmediate(param0: string, param1: number): boolean;
				public getBackStackEntryCount(): number;
				public findFragmentByTag(param0: string): androidx.fragment.app.Fragment;
				public findFragmentById(param0: number): androidx.fragment.app.Fragment;
				public beginTransaction(): androidx.fragment.app.FragmentTransaction;
				public addOnBackStackChangedListener(param0: androidx.fragment.app.FragmentManager.OnBackStackChangedListener): void;
				public popBackStack(param0: number, param1: number): void;
				public getBackStackEntryAt(param0: number): androidx.fragment.app.FragmentManager.BackStackEntry;
				public getFragments(): java.util.List<androidx.fragment.app.Fragment>;
				public popBackStackImmediate(): boolean;
				public registerFragmentLifecycleCallbacks(param0: androidx.fragment.app.FragmentManager.FragmentLifecycleCallbacks, param1: boolean): void;
				public unregisterFragmentLifecycleCallbacks(param0: androidx.fragment.app.FragmentManager.FragmentLifecycleCallbacks): void;
			}
			export module FragmentManager {
				export class BackStackEntry {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManager.BackStackEntry>;
					/**
					 * Constructs a new instance of the androidx.fragment.app.FragmentManager$BackStackEntry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getId(): number;
						getName(): string;
						getBreadCrumbTitleRes(): number;
						getBreadCrumbShortTitleRes(): number;
						getBreadCrumbTitle(): string;
						getBreadCrumbShortTitle(): string;
					});
					public constructor();
					public getBreadCrumbTitle(): string;
					public getName(): string;
					public getBreadCrumbTitleRes(): number;
					public getBreadCrumbShortTitleRes(): number;
					public getId(): number;
					public getBreadCrumbShortTitle(): string;
				}
				export abstract class FragmentLifecycleCallbacks {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManager.FragmentLifecycleCallbacks>;
					public onFragmentActivityCreated(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment, param2: globalAndroid.os.Bundle): void;
					public onFragmentViewCreated(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment, param2: globalAndroid.view.View, param3: globalAndroid.os.Bundle): void;
					public onFragmentDetached(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment): void;
					public onFragmentPaused(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment): void;
					public onFragmentPreCreated(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment, param2: globalAndroid.os.Bundle): void;
					public onFragmentCreated(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment, param2: globalAndroid.os.Bundle): void;
					public onFragmentStarted(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment): void;
					public onFragmentStopped(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment): void;
					public constructor();
					public onFragmentSaveInstanceState(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment, param2: globalAndroid.os.Bundle): void;
					public onFragmentViewDestroyed(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment): void;
					public onFragmentResumed(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment): void;
					public onFragmentDestroyed(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment): void;
					public onFragmentPreAttached(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment, param2: globalAndroid.content.Context): void;
					public onFragmentAttached(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment, param2: globalAndroid.content.Context): void;
				}
				export class OnBackStackChangedListener {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManager.OnBackStackChangedListener>;
					/**
					 * Constructs a new instance of the androidx.fragment.app.FragmentManager$OnBackStackChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onBackStackChanged(): void;
					});
					public constructor();
					public onBackStackChanged(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentManagerImpl extends androidx.fragment.app.FragmentManager {
				public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl>;
				public static ANIM_STYLE_OPEN_ENTER: number;
				public static ANIM_STYLE_OPEN_EXIT: number;
				public static ANIM_STYLE_CLOSE_ENTER: number;
				public static ANIM_STYLE_CLOSE_EXIT: number;
				public static ANIM_STYLE_FADE_ENTER: number;
				public static ANIM_STYLE_FADE_EXIT: number;
				public dispatchLowMemory(): void;
				public executePendingTransactions(): boolean;
				public removeOnBackStackChangedListener(param0: androidx.fragment.app.FragmentManager.OnBackStackChangedListener): void;
				public isStateSaved(): boolean;
				public dispatchContextItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public dispatchPictureInPictureModeChanged(param0: boolean): void;
				public dispatchStop(): void;
				public popBackStackImmediate(param0: number, param1: number): boolean;
				public allocBackStackIndex(param0: androidx.fragment.app.BackStackRecord): number;
				public onCreateView(param0: string, param1: globalAndroid.content.Context, param2: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public saveFragmentInstanceState(param0: androidx.fragment.app.Fragment): androidx.fragment.app.Fragment.SavedState;
				public dispatchPrepareOptionsMenu(param0: globalAndroid.view.Menu): boolean;
				public removeFragment(param0: androidx.fragment.app.Fragment): void;
				public showFragment(param0: androidx.fragment.app.Fragment): void;
				public getPrimaryNavigationFragment(): androidx.fragment.app.Fragment;
				public getBackStackEntryCount(): number;
				public dispatchStart(): void;
				public attachFragment(param0: androidx.fragment.app.Fragment): void;
				public dispatchPause(): void;
				public toString(): string;
				public beginTransaction(): androidx.fragment.app.FragmentTransaction;
				public static reverseTransit(param0: number): number;
				public addOnBackStackChangedListener(param0: androidx.fragment.app.FragmentManager.OnBackStackChangedListener): void;
				public popBackStackImmediate(): boolean;
				public registerFragmentLifecycleCallbacks(param0: androidx.fragment.app.FragmentManager.FragmentLifecycleCallbacks, param1: boolean): void;
				public dispatchActivityCreated(): void;
				public dispatchDestroyView(): void;
				public performPendingDeferredStart(param0: androidx.fragment.app.Fragment): void;
				public execPendingActions(): boolean;
				public dispatchCreateOptionsMenu(param0: globalAndroid.view.Menu, param1: globalAndroid.view.MenuInflater): boolean;
				public hideFragment(param0: androidx.fragment.app.Fragment): void;
				public isDestroyed(): boolean;
				public dispatchMultiWindowModeChanged(param0: boolean): void;
				public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				public onCreateView(param0: globalAndroid.view.View, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				public addFragment(param0: androidx.fragment.app.Fragment, param1: boolean): void;
				public setBackStackIndex(param0: number, param1: androidx.fragment.app.BackStackRecord): void;
				public dispatchOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public noteStateNotSaved(): void;
				public dispatchConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public popBackStack(): void;
				public popBackStack(param0: string, param1: number): void;
				public setPrimaryNavigationFragment(param0: androidx.fragment.app.Fragment): void;
				public getFragment(param0: globalAndroid.os.Bundle, param1: string): androidx.fragment.app.Fragment;
				public freeBackStackIndex(param0: number): void;
				public dispatchResume(): void;
				public dispatchDestroy(): void;
				public putFragment(param0: globalAndroid.os.Bundle, param1: string, param2: androidx.fragment.app.Fragment): void;
				public popBackStackImmediate(param0: string, param1: number): boolean;
				public findFragmentByTag(param0: string): androidx.fragment.app.Fragment;
				public detachFragment(param0: androidx.fragment.app.Fragment): void;
				public static transitToStyleIndex(param0: number, param1: boolean): number;
				public execSingleAction(param0: androidx.fragment.app.FragmentManagerImpl.OpGenerator, param1: boolean): void;
				public findFragmentByWho(param0: string): androidx.fragment.app.Fragment;
				public attachController(param0: androidx.fragment.app.FragmentHostCallback<any>, param1: androidx.fragment.app.FragmentContainer, param2: androidx.fragment.app.Fragment): void;
				public dispatchCreate(): void;
				public findFragmentById(param0: number): androidx.fragment.app.Fragment;
				public enqueueAction(param0: androidx.fragment.app.FragmentManagerImpl.OpGenerator, param1: boolean): void;
				public popBackStack(param0: number, param1: number): void;
				public getBackStackEntryAt(param0: number): androidx.fragment.app.FragmentManager.BackStackEntry;
				public getFragments(): java.util.List<androidx.fragment.app.Fragment>;
				public unregisterFragmentLifecycleCallbacks(param0: androidx.fragment.app.FragmentManager.FragmentLifecycleCallbacks): void;
				public dispatchOptionsMenuClosed(param0: globalAndroid.view.Menu): void;
			}
			export module FragmentManagerImpl {
				export class AnimateOnHWLayerIfNeededListener extends androidx.fragment.app.FragmentManagerImpl.AnimationListenerWrapper {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl.AnimateOnHWLayerIfNeededListener>;
					public onAnimationEnd(param0: globalAndroid.view.animation.Animation): void;
				}
				export class AnimationListenerWrapper {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl.AnimationListenerWrapper>;
					public onAnimationRepeat(param0: globalAndroid.view.animation.Animation): void;
					public onAnimationEnd(param0: globalAndroid.view.animation.Animation): void;
					public onAnimationStart(param0: globalAndroid.view.animation.Animation): void;
				}
				export class AnimationOrAnimator {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl.AnimationOrAnimator>;
					public animation: globalAndroid.view.animation.Animation;
					public animator: globalAndroid.animation.Animator;
				}
				export class AnimatorOnHWLayerIfNeededListener {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl.AnimatorOnHWLayerIfNeededListener>;
					public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
					public onAnimationStart(param0: globalAndroid.animation.Animator): void;
				}
				export class EndViewTransitionAnimator {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl.EndViewTransitionAnimator>;
					public getTransformation(param0: number, param1: globalAndroid.view.animation.Transformation): boolean;
					public getTransformation(param0: number, param1: globalAndroid.view.animation.Transformation, param2: number): boolean;
					public run(): void;
				}
				export class FragmentLifecycleCallbacksHolder {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl.FragmentLifecycleCallbacksHolder>;
				}
				export class FragmentTag {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl.FragmentTag>;
					public static Fragment: native.Array<number>;
					public static Fragment_id: number;
					public static Fragment_name: number;
					public static Fragment_tag: number;
				}
				export class OpGenerator {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl.OpGenerator>;
					/**
					 * Constructs a new instance of the androidx.fragment.app.FragmentManagerImpl$OpGenerator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						generateOps(param0: java.util.ArrayList<androidx.fragment.app.BackStackRecord>, param1: java.util.ArrayList<java.lang.Boolean>): boolean;
					});
					public constructor();
					public generateOps(param0: java.util.ArrayList<androidx.fragment.app.BackStackRecord>, param1: java.util.ArrayList<java.lang.Boolean>): boolean;
				}
				export class PopBackStackState extends androidx.fragment.app.FragmentManagerImpl.OpGenerator {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl.PopBackStackState>;
					public generateOps(param0: java.util.ArrayList<androidx.fragment.app.BackStackRecord>, param1: java.util.ArrayList<java.lang.Boolean>): boolean;
				}
				export class StartEnterTransitionListener extends androidx.fragment.app.Fragment.OnStartEnterTransitionListener {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl.StartEnterTransitionListener>;
					public isReady(): boolean;
					public cancelTransaction(): void;
					public onStartEnterTransition(): void;
					public startListening(): void;
					public completeTransaction(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentManagerNonConfig {
				public static class: java.lang.Class<androidx.fragment.app.FragmentManagerNonConfig>;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentManagerState {
				public static class: java.lang.Class<androidx.fragment.app.FragmentManagerState>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.fragment.app.FragmentManagerState>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public describeContents(): number;
				public constructor(param0: globalAndroid.os.Parcel);
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentPagerAdapter {
				public static class: java.lang.Class<androidx.fragment.app.FragmentPagerAdapter>;
				public saveState(): globalAndroid.os.Parcelable;
				public restoreState(param0: globalAndroid.os.Parcelable, param1: java.lang.ClassLoader): void;
				public getItemId(param0: number): number;
				public startUpdate(param0: globalAndroid.view.ViewGroup): void;
				public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): any;
				public constructor(param0: androidx.fragment.app.FragmentManager);
				public finishUpdate(param0: globalAndroid.view.ViewGroup): void;
				public getItem(param0: number): androidx.fragment.app.Fragment;
				public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
				public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
				public setPrimaryItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentState {
				public static class: java.lang.Class<androidx.fragment.app.FragmentState>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.fragment.app.FragmentState>;
				public instantiate(param0: androidx.fragment.app.FragmentHostCallback<any>, param1: androidx.fragment.app.FragmentContainer, param2: androidx.fragment.app.Fragment, param3: androidx.fragment.app.FragmentManagerNonConfig, param4: androidx.lifecycle.ViewModelStore): androidx.fragment.app.Fragment;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public describeContents(): number;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentStatePagerAdapter {
				public static class: java.lang.Class<androidx.fragment.app.FragmentStatePagerAdapter>;
				public saveState(): globalAndroid.os.Parcelable;
				public restoreState(param0: globalAndroid.os.Parcelable, param1: java.lang.ClassLoader): void;
				public startUpdate(param0: globalAndroid.view.ViewGroup): void;
				public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): any;
				public constructor(param0: androidx.fragment.app.FragmentManager);
				public finishUpdate(param0: globalAndroid.view.ViewGroup): void;
				public getItem(param0: number): androidx.fragment.app.Fragment;
				public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
				public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
				public setPrimaryItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentTabHost {
				public static class: java.lang.Class<androidx.fragment.app.FragmentTabHost>;
				public setOnTabChangedListener(param0: globalAndroid.widget.TabHost.OnTabChangeListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setup(): void;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public setup(param0: globalAndroid.content.Context, param1: androidx.fragment.app.FragmentManager): void;
				public constructor(param0: globalAndroid.content.Context);
				public addTab(param0: globalAndroid.widget.TabHost.TabSpec, param1: java.lang.Class<any>, param2: globalAndroid.os.Bundle): void;
				public onDetachedFromWindow(): void;
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public onAttachedToWindow(): void;
				public setup(param0: globalAndroid.content.Context, param1: androidx.fragment.app.FragmentManager, param2: number): void;
				public onTabChanged(param0: string): void;
			}
			export module FragmentTabHost {
				export class DummyTabFactory {
					public static class: java.lang.Class<androidx.fragment.app.FragmentTabHost.DummyTabFactory>;
					public constructor(param0: globalAndroid.content.Context);
					public createTabContent(param0: string): globalAndroid.view.View;
				}
				export class SavedState {
					public static class: java.lang.Class<androidx.fragment.app.FragmentTabHost.SavedState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.fragment.app.FragmentTabHost.SavedState>;
					public toString(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export class TabInfo {
					public static class: java.lang.Class<androidx.fragment.app.FragmentTabHost.TabInfo>;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentTransaction {
				public static class: java.lang.Class<androidx.fragment.app.FragmentTransaction>;
				public static TRANSIT_ENTER_MASK: number;
				public static TRANSIT_EXIT_MASK: number;
				public static TRANSIT_UNSET: number;
				public static TRANSIT_NONE: number;
				public static TRANSIT_FRAGMENT_OPEN: number;
				public static TRANSIT_FRAGMENT_CLOSE: number;
				public static TRANSIT_FRAGMENT_FADE: number;
				public add(param0: androidx.fragment.app.Fragment, param1: string): androidx.fragment.app.FragmentTransaction;
				public show(param0: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public commitAllowingStateLoss(): number;
				public commitNowAllowingStateLoss(): void;
				public replace(param0: number, param1: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public setTransition(param0: number): androidx.fragment.app.FragmentTransaction;
				public isAddToBackStackAllowed(): boolean;
				public hide(param0: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public setTransitionStyle(param0: number): androidx.fragment.app.FragmentTransaction;
				public setReorderingAllowed(param0: boolean): androidx.fragment.app.FragmentTransaction;
				public replace(param0: number, param1: androidx.fragment.app.Fragment, param2: string): androidx.fragment.app.FragmentTransaction;
				public constructor();
				public add(param0: number, param1: androidx.fragment.app.Fragment, param2: string): androidx.fragment.app.FragmentTransaction;
				public addSharedElement(param0: globalAndroid.view.View, param1: string): androidx.fragment.app.FragmentTransaction;
				public remove(param0: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public runOnCommit(param0: java.lang.Runnable): androidx.fragment.app.FragmentTransaction;
				public setBreadCrumbShortTitle(param0: string): androidx.fragment.app.FragmentTransaction;
				public setCustomAnimations(param0: number, param1: number, param2: number, param3: number): androidx.fragment.app.FragmentTransaction;
				public setBreadCrumbTitle(param0: number): androidx.fragment.app.FragmentTransaction;
				public addToBackStack(param0: string): androidx.fragment.app.FragmentTransaction;
				public disallowAddToBackStack(): androidx.fragment.app.FragmentTransaction;
				public isEmpty(): boolean;
				public commitNow(): void;
				public setPrimaryNavigationFragment(param0: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public detach(param0: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public setCustomAnimations(param0: number, param1: number): androidx.fragment.app.FragmentTransaction;
				public setBreadCrumbTitle(param0: string): androidx.fragment.app.FragmentTransaction;
				public commit(): number;
				public add(param0: number, param1: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public attach(param0: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public setAllowOptimization(param0: boolean): androidx.fragment.app.FragmentTransaction;
				public setBreadCrumbShortTitle(param0: number): androidx.fragment.app.FragmentTransaction;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentTransition {
				public static class: java.lang.Class<androidx.fragment.app.FragmentTransition>;
				public static calculateFragments(param0: androidx.fragment.app.BackStackRecord, param1: globalAndroid.util.SparseArray<androidx.fragment.app.FragmentTransition.FragmentContainerTransition>, param2: boolean): void;
				public static calculatePopFragments(param0: androidx.fragment.app.BackStackRecord, param1: globalAndroid.util.SparseArray<androidx.fragment.app.FragmentTransition.FragmentContainerTransition>, param2: boolean): void;
			}
			export module FragmentTransition {
				export class FragmentContainerTransition {
					public static class: java.lang.Class<androidx.fragment.app.FragmentTransition.FragmentContainerTransition>;
					public lastIn: androidx.fragment.app.Fragment;
					public lastInIsPop: boolean;
					public lastInTransaction: androidx.fragment.app.BackStackRecord;
					public firstOut: androidx.fragment.app.Fragment;
					public firstOutIsPop: boolean;
					public firstOutTransaction: androidx.fragment.app.BackStackRecord;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentTransitionCompat21 extends androidx.fragment.app.FragmentTransitionImpl {
				public static class: java.lang.Class<androidx.fragment.app.FragmentTransitionCompat21>;
				public addTargets(param0: any, param1: java.util.ArrayList<globalAndroid.view.View>): void;
				public replaceTargets(param0: any, param1: java.util.ArrayList<globalAndroid.view.View>, param2: java.util.ArrayList<globalAndroid.view.View>): void;
				public addTarget(param0: any, param1: globalAndroid.view.View): void;
				public swapSharedElementTargets(param0: any, param1: java.util.ArrayList<globalAndroid.view.View>, param2: java.util.ArrayList<globalAndroid.view.View>): void;
				public beginDelayedTransition(param0: globalAndroid.view.ViewGroup, param1: any): void;
				public mergeTransitionsTogether(param0: any, param1: any, param2: any): any;
				public wrapTransitionInSet(param0: any): any;
				public cloneTransition(param0: any): any;
				public setEpicenter(param0: any, param1: globalAndroid.graphics.Rect): void;
				public canHandle(param0: any): boolean;
				public setSharedElementTargets(param0: any, param1: globalAndroid.view.View, param2: java.util.ArrayList<globalAndroid.view.View>): void;
				public removeTarget(param0: any, param1: globalAndroid.view.View): void;
				public mergeTransitionsInSequence(param0: any, param1: any, param2: any): any;
				public scheduleHideFragmentView(param0: any, param1: globalAndroid.view.View, param2: java.util.ArrayList<globalAndroid.view.View>): void;
				public scheduleRemoveTargets(param0: any, param1: any, param2: java.util.ArrayList<globalAndroid.view.View>, param3: any, param4: java.util.ArrayList<globalAndroid.view.View>, param5: any, param6: java.util.ArrayList<globalAndroid.view.View>): void;
				public setEpicenter(param0: any, param1: globalAndroid.view.View): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentTransitionImpl {
				public static class: java.lang.Class<androidx.fragment.app.FragmentTransitionImpl>;
				public addTargets(param0: any, param1: java.util.ArrayList<globalAndroid.view.View>): void;
				public replaceTargets(param0: any, param1: java.util.ArrayList<globalAndroid.view.View>, param2: java.util.ArrayList<globalAndroid.view.View>): void;
				public addTarget(param0: any, param1: globalAndroid.view.View): void;
				public swapSharedElementTargets(param0: any, param1: java.util.ArrayList<globalAndroid.view.View>, param2: java.util.ArrayList<globalAndroid.view.View>): void;
				public beginDelayedTransition(param0: globalAndroid.view.ViewGroup, param1: any): void;
				public mergeTransitionsTogether(param0: any, param1: any, param2: any): any;
				public wrapTransitionInSet(param0: any): any;
				public cloneTransition(param0: any): any;
				public constructor();
				public setEpicenter(param0: any, param1: globalAndroid.graphics.Rect): void;
				public canHandle(param0: any): boolean;
				public setSharedElementTargets(param0: any, param1: globalAndroid.view.View, param2: java.util.ArrayList<globalAndroid.view.View>): void;
				public removeTarget(param0: any, param1: globalAndroid.view.View): void;
				public mergeTransitionsInSequence(param0: any, param1: any, param2: any): any;
				public scheduleHideFragmentView(param0: any, param1: globalAndroid.view.View, param2: java.util.ArrayList<globalAndroid.view.View>): void;
				public static isNullOrEmpty(param0: java.util.List<any>): boolean;
				public scheduleRemoveTargets(param0: any, param1: any, param2: java.util.ArrayList<globalAndroid.view.View>, param3: any, param4: java.util.ArrayList<globalAndroid.view.View>, param5: any, param6: java.util.ArrayList<globalAndroid.view.View>): void;
				public static bfsAddViewChildren(param0: java.util.List<globalAndroid.view.View>, param1: globalAndroid.view.View): void;
				public setEpicenter(param0: any, param1: globalAndroid.view.View): void;
				public getBoundsOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class ListFragment extends androidx.fragment.app.Fragment {
				public static class: java.lang.Class<androidx.fragment.app.ListFragment>;
				public setListAdapter(param0: globalAndroid.widget.ListAdapter): void;
				public setSelection(param0: number): void;
				public setListShownNoAnimation(param0: boolean): void;
				public getListAdapter(): globalAndroid.widget.ListAdapter;
				public getListView(): globalAndroid.widget.ListView;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public constructor();
				public onListItemClick(param0: globalAndroid.widget.ListView, param1: globalAndroid.view.View, param2: number, param3: number): void;
				public setListShown(param0: boolean): void;
				public getSelectedItemPosition(): number;
				public setEmptyText(param0: string): void;
				public onDestroyView(): void;
				public getSelectedItemId(): number;
				public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class OneShotPreDrawListener {
				public static class: java.lang.Class<androidx.fragment.app.OneShotPreDrawListener>;
				public onPreDraw(): boolean;
				public onViewAttachedToWindow(param0: globalAndroid.view.View): void;
				public removeListener(): void;
				public onViewDetachedFromWindow(param0: globalAndroid.view.View): void;
				public static add(param0: globalAndroid.view.View, param1: java.lang.Runnable): androidx.fragment.app.OneShotPreDrawListener;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class SuperNotCalledException {
				public static class: java.lang.Class<androidx.fragment.app.SuperNotCalledException>;
				public constructor(param0: string);
			}
		}
	}
}

//Generics information:
//androidx.fragment.app.FragmentHostCallback:1

