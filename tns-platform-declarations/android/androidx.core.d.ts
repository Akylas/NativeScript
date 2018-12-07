

declare module androidx {
	export module core {
		export module accessibilityservice {
			export class AccessibilityServiceInfoCompat {
				public static class: java.lang.Class<androidx.core.accessibilityservice.AccessibilityServiceInfoCompat>;
				public static CAPABILITY_CAN_RETRIEVE_WINDOW_CONTENT: number;
				public static CAPABILITY_CAN_REQUEST_TOUCH_EXPLORATION: number;
				public static CAPABILITY_CAN_REQUEST_ENHANCED_WEB_ACCESSIBILITY: number;
				public static CAPABILITY_CAN_FILTER_KEY_EVENTS: number;
				public static FEEDBACK_BRAILLE: number;
				public static FEEDBACK_ALL_MASK: number;
				public static FLAG_INCLUDE_NOT_IMPORTANT_VIEWS: number;
				public static FLAG_REQUEST_TOUCH_EXPLORATION_MODE: number;
				public static FLAG_REQUEST_ENHANCED_WEB_ACCESSIBILITY: number;
				public static FLAG_REPORT_VIEW_IDS: number;
				public static FLAG_REQUEST_FILTER_KEY_EVENTS: number;
				public static loadDescription(param0: globalAndroid.accessibilityservice.AccessibilityServiceInfo, param1: globalAndroid.content.pm.PackageManager): string;
				public static capabilityToString(param0: number): string;
				public static flagToString(param0: number): string;
				public static getCapabilities(param0: globalAndroid.accessibilityservice.AccessibilityServiceInfo): number;
				public static feedbackTypeToString(param0: number): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class ActivityCompat extends androidx.core.content.ContextCompat {
				public static class: java.lang.Class<androidx.core.app.ActivityCompat>;
				public static setEnterSharedElementCallback(param0: globalAndroid.app.Activity, param1: androidx.core.app.SharedElementCallback): void;
				public static setExitSharedElementCallback(param0: globalAndroid.app.Activity, param1: androidx.core.app.SharedElementCallback): void;
				public static getPermissionCompatDelegate(): androidx.core.app.ActivityCompat.PermissionCompatDelegate;
				public static requireViewById(param0: globalAndroid.app.Activity, param1: number): globalAndroid.view.View;
				public static finishAfterTransition(param0: globalAndroid.app.Activity): void;
				public static postponeEnterTransition(param0: globalAndroid.app.Activity): void;
				public static invalidateOptionsMenu(param0: globalAndroid.app.Activity): boolean;
				public constructor();
				public static startPostponedEnterTransition(param0: globalAndroid.app.Activity): void;
				public static finishAffinity(param0: globalAndroid.app.Activity): void;
				public static startActivityForResult(param0: globalAndroid.app.Activity, param1: globalAndroid.content.Intent, param2: number, param3: globalAndroid.os.Bundle): void;
				public static requestPermissions(param0: globalAndroid.app.Activity, param1: native.Array<string>, param2: number): void;
				public static shouldShowRequestPermissionRationale(param0: globalAndroid.app.Activity, param1: string): boolean;
				public static startIntentSenderForResult(param0: globalAndroid.app.Activity, param1: globalAndroid.content.IntentSender, param2: number, param3: globalAndroid.content.Intent, param4: number, param5: number, param6: number, param7: globalAndroid.os.Bundle): void;
				public static setPermissionCompatDelegate(param0: androidx.core.app.ActivityCompat.PermissionCompatDelegate): void;
				public static requestDragAndDropPermissions(param0: globalAndroid.app.Activity, param1: globalAndroid.view.DragEvent): androidx.core.view.DragAndDropPermissionsCompat;
				public static getReferrer(param0: globalAndroid.app.Activity): globalAndroid.net.Uri;
			}
			export module ActivityCompat {
				export class OnRequestPermissionsResultCallback {
					public static class: java.lang.Class<androidx.core.app.ActivityCompat.OnRequestPermissionsResultCallback>;
					/**
					 * Constructs a new instance of the androidx.core.app.ActivityCompat$OnRequestPermissionsResultCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
					});
					public constructor();
					public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
				}
				export class PermissionCompatDelegate {
					public static class: java.lang.Class<androidx.core.app.ActivityCompat.PermissionCompatDelegate>;
					/**
					 * Constructs a new instance of the androidx.core.app.ActivityCompat$PermissionCompatDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						requestPermissions(param0: globalAndroid.app.Activity, param1: native.Array<string>, param2: number): boolean;
						onActivityResult(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.Intent): boolean;
					});
					public constructor();
					public requestPermissions(param0: globalAndroid.app.Activity, param1: native.Array<string>, param2: number): boolean;
					public onActivityResult(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.Intent): boolean;
				}
				export class RequestPermissionsRequestCodeValidator {
					public static class: java.lang.Class<androidx.core.app.ActivityCompat.RequestPermissionsRequestCodeValidator>;
					/**
					 * Constructs a new instance of the androidx.core.app.ActivityCompat$RequestPermissionsRequestCodeValidator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						validateRequestPermissionsRequestCode(param0: number): void;
					});
					public constructor();
					public validateRequestPermissionsRequestCode(param0: number): void;
				}
				export class SharedElementCallback21Impl {
					public static class: java.lang.Class<androidx.core.app.ActivityCompat.SharedElementCallback21Impl>;
					public onMapSharedElements(param0: java.util.List<string>, param1: java.util.Map<string,globalAndroid.view.View>): void;
					public onSharedElementStart(param0: java.util.List<string>, param1: java.util.List<globalAndroid.view.View>, param2: java.util.List<globalAndroid.view.View>): void;
					public onCaptureSharedElementSnapshot(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Matrix, param2: globalAndroid.graphics.RectF): globalAndroid.os.Parcelable;
					public onRejectSharedElements(param0: java.util.List<globalAndroid.view.View>): void;
					public onCreateSnapshotView(param0: globalAndroid.content.Context, param1: globalAndroid.os.Parcelable): globalAndroid.view.View;
					public onSharedElementsArrived(param0: java.util.List<string>, param1: java.util.List<globalAndroid.view.View>, param2: any): void;
					public onSharedElementEnd(param0: java.util.List<string>, param1: java.util.List<globalAndroid.view.View>, param2: java.util.List<globalAndroid.view.View>): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class ActivityManagerCompat {
				public static class: java.lang.Class<androidx.core.app.ActivityManagerCompat>;
				public static isLowRamDevice(param0: globalAndroid.app.ActivityManager): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class ActivityOptionsCompat {
				public static class: java.lang.Class<androidx.core.app.ActivityOptionsCompat>;
				public static EXTRA_USAGE_TIME_REPORT: string;
				public static EXTRA_USAGE_TIME_REPORT_PACKAGES: string;
				public static makeThumbnailScaleUpAnimation(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number): androidx.core.app.ActivityOptionsCompat;
				public setLaunchBounds(param0: globalAndroid.graphics.Rect): androidx.core.app.ActivityOptionsCompat;
				public toBundle(): globalAndroid.os.Bundle;
				public static makeSceneTransitionAnimation(param0: globalAndroid.app.Activity, param1: globalAndroid.view.View, param2: string): androidx.core.app.ActivityOptionsCompat;
				public update(param0: androidx.core.app.ActivityOptionsCompat): void;
				public constructor();
				public static makeClipRevealAnimation(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): androidx.core.app.ActivityOptionsCompat;
				public static makeBasic(): androidx.core.app.ActivityOptionsCompat;
				public getLaunchBounds(): globalAndroid.graphics.Rect;
				public static makeCustomAnimation(param0: globalAndroid.content.Context, param1: number, param2: number): androidx.core.app.ActivityOptionsCompat;
				public requestUsageTimeReport(param0: globalAndroid.app.PendingIntent): void;
				public static makeTaskLaunchBehind(): androidx.core.app.ActivityOptionsCompat;
				public static makeSceneTransitionAnimation(param0: globalAndroid.app.Activity, param1: native.Array<androidx.core.util.Pair<globalAndroid.view.View,string>>): androidx.core.app.ActivityOptionsCompat;
				public static makeScaleUpAnimation(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): androidx.core.app.ActivityOptionsCompat;
			}
			export module ActivityOptionsCompat {
				export class ActivityOptionsCompatImpl extends androidx.core.app.ActivityOptionsCompat {
					public static class: java.lang.Class<androidx.core.app.ActivityOptionsCompat.ActivityOptionsCompatImpl>;
					public requestUsageTimeReport(param0: globalAndroid.app.PendingIntent): void;
					public getLaunchBounds(): globalAndroid.graphics.Rect;
					public toBundle(): globalAndroid.os.Bundle;
					public update(param0: androidx.core.app.ActivityOptionsCompat): void;
					public setLaunchBounds(param0: globalAndroid.graphics.Rect): androidx.core.app.ActivityOptionsCompat;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class AlarmManagerCompat {
				public static class: java.lang.Class<androidx.core.app.AlarmManagerCompat>;
				public static setAndAllowWhileIdle(param0: globalAndroid.app.AlarmManager, param1: number, param2: number, param3: globalAndroid.app.PendingIntent): void;
				public static setExact(param0: globalAndroid.app.AlarmManager, param1: number, param2: number, param3: globalAndroid.app.PendingIntent): void;
				public static setExactAndAllowWhileIdle(param0: globalAndroid.app.AlarmManager, param1: number, param2: number, param3: globalAndroid.app.PendingIntent): void;
				public static setAlarmClock(param0: globalAndroid.app.AlarmManager, param1: number, param2: globalAndroid.app.PendingIntent, param3: globalAndroid.app.PendingIntent): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class AppComponentFactory {
				public static class: java.lang.Class<androidx.core.app.AppComponentFactory>;
				public instantiateReceiverCompat(param0: java.lang.ClassLoader, param1: string, param2: globalAndroid.content.Intent): globalAndroid.content.BroadcastReceiver;
				public instantiateApplication(param0: java.lang.ClassLoader, param1: string): globalAndroid.app.Application;
				public instantiateActivityCompat(param0: java.lang.ClassLoader, param1: string, param2: globalAndroid.content.Intent): globalAndroid.app.Activity;
				public instantiateProviderCompat(param0: java.lang.ClassLoader, param1: string): globalAndroid.content.ContentProvider;
				public instantiateActivity(param0: java.lang.ClassLoader, param1: string, param2: globalAndroid.content.Intent): globalAndroid.app.Activity;
				public instantiateApplicationCompat(param0: java.lang.ClassLoader, param1: string): globalAndroid.app.Application;
				public instantiateService(param0: java.lang.ClassLoader, param1: string, param2: globalAndroid.content.Intent): globalAndroid.app.Service;
				public instantiateServiceCompat(param0: java.lang.ClassLoader, param1: string, param2: globalAndroid.content.Intent): globalAndroid.app.Service;
				public instantiateReceiver(param0: java.lang.ClassLoader, param1: string, param2: globalAndroid.content.Intent): globalAndroid.content.BroadcastReceiver;
				public instantiateProvider(param0: java.lang.ClassLoader, param1: string): globalAndroid.content.ContentProvider;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class AppLaunchChecker {
				public static class: java.lang.Class<androidx.core.app.AppLaunchChecker>;
				public static onActivityCreate(param0: globalAndroid.app.Activity): void;
				public static hasStartedFromLauncher(param0: globalAndroid.content.Context): boolean;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class AppOpsManagerCompat {
				public static class: java.lang.Class<androidx.core.app.AppOpsManagerCompat>;
				public static MODE_ALLOWED: number;
				public static MODE_IGNORED: number;
				public static MODE_ERRORED: number;
				public static MODE_DEFAULT: number;
				public static noteOp(param0: globalAndroid.content.Context, param1: string, param2: number, param3: string): number;
				public static noteOpNoThrow(param0: globalAndroid.content.Context, param1: string, param2: number, param3: string): number;
				public static noteProxyOpNoThrow(param0: globalAndroid.content.Context, param1: string, param2: string): number;
				public static permissionToOp(param0: string): string;
				public static noteProxyOp(param0: globalAndroid.content.Context, param1: string, param2: string): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class BundleCompat {
				public static class: java.lang.Class<androidx.core.app.BundleCompat>;
				public static getBinder(param0: globalAndroid.os.Bundle, param1: string): globalAndroid.os.IBinder;
				public static putBinder(param0: globalAndroid.os.Bundle, param1: string, param2: globalAndroid.os.IBinder): void;
			}
			export module BundleCompat {
				export class BundleCompatBaseImpl {
					public static class: java.lang.Class<androidx.core.app.BundleCompat.BundleCompatBaseImpl>;
					public static putBinder(param0: globalAndroid.os.Bundle, param1: string, param2: globalAndroid.os.IBinder): void;
					public static getBinder(param0: globalAndroid.os.Bundle, param1: string): globalAndroid.os.IBinder;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class ComponentActivity extends android.app.Activity implements androidx.core.view.KeyEventDispatcher.Component {
				public static class: java.lang.Class<androidx.core.app.ComponentActivity>;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public superDispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public putExtraData(param0: androidx.core.app.ComponentActivity.ExtraData): void;
				public getExtraData(param0: java.lang.Class<any>): androidx.core.app.ComponentActivity.ExtraData;
				public dispatchKeyShortcutEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
			}
			export module ComponentActivity {
				export class ExtraData {
					public static class: java.lang.Class<androidx.core.app.ComponentActivity.ExtraData>;
					public constructor();
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class CoreComponentFactory {
				public static class: java.lang.Class<androidx.core.app.CoreComponentFactory>;
				public instantiateApplication(param0: java.lang.ClassLoader, param1: string): globalAndroid.app.Application;
				public instantiateActivity(param0: java.lang.ClassLoader, param1: string, param2: globalAndroid.content.Intent): globalAndroid.app.Activity;
				public instantiateService(param0: java.lang.ClassLoader, param1: string, param2: globalAndroid.content.Intent): globalAndroid.app.Service;
				public instantiateReceiver(param0: java.lang.ClassLoader, param1: string, param2: globalAndroid.content.Intent): globalAndroid.content.BroadcastReceiver;
				public instantiateProvider(param0: java.lang.ClassLoader, param1: string): globalAndroid.content.ContentProvider;
				public constructor();
			}
			export module CoreComponentFactory {
				export class CompatWrapped {
					public static class: java.lang.Class<androidx.core.app.CoreComponentFactory.CompatWrapped>;
					/**
					 * Constructs a new instance of the androidx.core.app.CoreComponentFactory$CompatWrapped interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getWrapper(): any;
					});
					public constructor();
					public getWrapper(): any;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class FrameMetricsAggregator {
				public static class: java.lang.Class<androidx.core.app.FrameMetricsAggregator>;
				public static TOTAL_INDEX: number;
				public static INPUT_INDEX: number;
				public static LAYOUT_MEASURE_INDEX: number;
				public static DRAW_INDEX: number;
				public static SYNC_INDEX: number;
				public static COMMAND_INDEX: number;
				public static SWAP_INDEX: number;
				public static DELAY_INDEX: number;
				public static ANIMATION_INDEX: number;
				public static TOTAL_DURATION: number;
				public static INPUT_DURATION: number;
				public static LAYOUT_MEASURE_DURATION: number;
				public static DRAW_DURATION: number;
				public static SYNC_DURATION: number;
				public static COMMAND_DURATION: number;
				public static SWAP_DURATION: number;
				public static DELAY_DURATION: number;
				public static ANIMATION_DURATION: number;
				public static EVERY_DURATION: number;
				public stop(): native.Array<globalAndroid.util.SparseIntArray>;
				public getMetrics(): native.Array<globalAndroid.util.SparseIntArray>;
				public remove(param0: globalAndroid.app.Activity): native.Array<globalAndroid.util.SparseIntArray>;
				public constructor(param0: number);
				public add(param0: globalAndroid.app.Activity): void;
				public reset(): native.Array<globalAndroid.util.SparseIntArray>;
				public constructor();
			}
			export module FrameMetricsAggregator {
				export class FrameMetricsApi24Impl extends androidx.core.app.FrameMetricsAggregator.FrameMetricsBaseImpl {
					public static class: java.lang.Class<androidx.core.app.FrameMetricsAggregator.FrameMetricsApi24Impl>;
					public add(param0: globalAndroid.app.Activity): void;
					public getMetrics(): native.Array<globalAndroid.util.SparseIntArray>;
					public reset(): native.Array<globalAndroid.util.SparseIntArray>;
					public remove(param0: globalAndroid.app.Activity): native.Array<globalAndroid.util.SparseIntArray>;
					public stop(): native.Array<globalAndroid.util.SparseIntArray>;
				}
				export class FrameMetricsBaseImpl {
					public static class: java.lang.Class<androidx.core.app.FrameMetricsAggregator.FrameMetricsBaseImpl>;
					public add(param0: globalAndroid.app.Activity): void;
					public getMetrics(): native.Array<globalAndroid.util.SparseIntArray>;
					public reset(): native.Array<globalAndroid.util.SparseIntArray>;
					public remove(param0: globalAndroid.app.Activity): native.Array<globalAndroid.util.SparseIntArray>;
					public stop(): native.Array<globalAndroid.util.SparseIntArray>;
				}
				export class MetricType {
					public static class: java.lang.Class<androidx.core.app.FrameMetricsAggregator.MetricType>;
					/**
					 * Constructs a new instance of the androidx.core.app.FrameMetricsAggregator$MetricType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module core {
		export module app {
			export abstract class JobIntentService {
				public static class: java.lang.Class<androidx.core.app.JobIntentService>;
				public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
				public setInterruptIfStopped(param0: boolean): void;
				public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
				public isStopped(): boolean;
				public onCreate(): void;
				public static enqueueWork(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName, param2: number, param3: globalAndroid.content.Intent): void;
				public onDestroy(): void;
				public static enqueueWork(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: number, param3: globalAndroid.content.Intent): void;
				public onHandleWork(param0: globalAndroid.content.Intent): void;
				public onStopCurrentWork(): boolean;
				public constructor();
			}
			export module JobIntentService {
				export class CommandProcessor extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.lang.Void> {
					public static class: java.lang.Class<androidx.core.app.JobIntentService.CommandProcessor>;
					public doInBackground(param0: native.Array<java.lang.Void>): java.lang.Void;
					// public onCancelled(param0: java.lang.Void): void;
					public onPostExecute(param0: java.lang.Void): void;
				}
				export class CompatJobEngine {
					public static class: java.lang.Class<androidx.core.app.JobIntentService.CompatJobEngine>;
					/**
					 * Constructs a new instance of the androidx.core.app.JobIntentService$CompatJobEngine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						compatGetBinder(): globalAndroid.os.IBinder;
						dequeueWork(): androidx.core.app.JobIntentService.GenericWorkItem;
					});
					public constructor();
					public compatGetBinder(): globalAndroid.os.IBinder;
					public dequeueWork(): androidx.core.app.JobIntentService.GenericWorkItem;
				}
				export class CompatWorkEnqueuer extends androidx.core.app.JobIntentService.WorkEnqueuer {
					public static class: java.lang.Class<androidx.core.app.JobIntentService.CompatWorkEnqueuer>;
					public serviceStartReceived(): void;
					public serviceProcessingFinished(): void;
					public serviceProcessingStarted(): void;
				}
				export class CompatWorkItem extends androidx.core.app.JobIntentService.GenericWorkItem {
					public static class: java.lang.Class<androidx.core.app.JobIntentService.CompatWorkItem>;
					public getIntent(): globalAndroid.content.Intent;
					public complete(): void;
				}
				export class GenericWorkItem {
					public static class: java.lang.Class<androidx.core.app.JobIntentService.GenericWorkItem>;
					/**
					 * Constructs a new instance of the androidx.core.app.JobIntentService$GenericWorkItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getIntent(): globalAndroid.content.Intent;
						complete(): void;
					});
					public constructor();
					public getIntent(): globalAndroid.content.Intent;
					public complete(): void;
				}
				export class JobServiceEngineImpl implements androidx.core.app.JobIntentService.CompatJobEngine {
					public static class: java.lang.Class<androidx.core.app.JobIntentService.JobServiceEngineImpl>;
					public onStopJob(param0: any): boolean;
					public onStartJob(param0: any): boolean;
					public compatGetBinder(): globalAndroid.os.IBinder;
					public dequeueWork(): androidx.core.app.JobIntentService.GenericWorkItem;
				}
				export module JobServiceEngineImpl {
					export class WrapperWorkItem extends androidx.core.app.JobIntentService.GenericWorkItem {
						public static class: java.lang.Class<androidx.core.app.JobIntentService.JobServiceEngineImpl.WrapperWorkItem>;
						public complete(): void;
						public getIntent(): globalAndroid.content.Intent;
					}
				}
				export class JobWorkEnqueuer extends androidx.core.app.JobIntentService.WorkEnqueuer {
					public static class: java.lang.Class<androidx.core.app.JobIntentService.JobWorkEnqueuer>;
				}
				export abstract class WorkEnqueuer {
					public static class: java.lang.Class<androidx.core.app.JobIntentService.WorkEnqueuer>;
					public serviceStartReceived(): void;
					public serviceProcessingFinished(): void;
					public serviceProcessingStarted(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class NavUtils {
				public static class: java.lang.Class<androidx.core.app.NavUtils>;
				public static PARENT_ACTIVITY: string;
				public static getParentActivityIntent(param0: globalAndroid.content.Context, param1: java.lang.Class<any>): globalAndroid.content.Intent;
				public static getParentActivityName(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName): string;
				public static navigateUpTo(param0: globalAndroid.app.Activity, param1: globalAndroid.content.Intent): void;
				public static getParentActivityIntent(param0: globalAndroid.app.Activity): globalAndroid.content.Intent;
				public static getParentActivityName(param0: globalAndroid.app.Activity): string;
				public static shouldUpRecreateTask(param0: globalAndroid.app.Activity, param1: globalAndroid.content.Intent): boolean;
				public static navigateUpFromSameTask(param0: globalAndroid.app.Activity): void;
				public static getParentActivityIntent(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName): globalAndroid.content.Intent;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class NotificationBuilderWithBuilderAccessor {
				public static class: java.lang.Class<androidx.core.app.NotificationBuilderWithBuilderAccessor>;
				/**
				 * Constructs a new instance of the androidx.core.app.NotificationBuilderWithBuilderAccessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getBuilder(): globalAndroid.app.Notification.Builder;
				});
				public constructor();
				public getBuilder(): globalAndroid.app.Notification.Builder;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class NotificationCompat {
				public static class: java.lang.Class<androidx.core.app.NotificationCompat>;
				public static DEFAULT_ALL: number;
				public static DEFAULT_SOUND: number;
				public static DEFAULT_VIBRATE: number;
				public static DEFAULT_LIGHTS: number;
				public static STREAM_DEFAULT: number;
				public static FLAG_SHOW_LIGHTS: number;
				public static FLAG_ONGOING_EVENT: number;
				public static FLAG_INSISTENT: number;
				public static FLAG_ONLY_ALERT_ONCE: number;
				public static FLAG_AUTO_CANCEL: number;
				public static FLAG_NO_CLEAR: number;
				public static FLAG_FOREGROUND_SERVICE: number;
				public static FLAG_HIGH_PRIORITY: number;
				public static FLAG_LOCAL_ONLY: number;
				public static FLAG_GROUP_SUMMARY: number;
				public static PRIORITY_DEFAULT: number;
				public static PRIORITY_LOW: number;
				public static PRIORITY_MIN: number;
				public static PRIORITY_HIGH: number;
				public static PRIORITY_MAX: number;
				public static EXTRA_TITLE: string;
				public static EXTRA_TITLE_BIG: string;
				public static EXTRA_TEXT: string;
				public static EXTRA_SUB_TEXT: string;
				public static EXTRA_REMOTE_INPUT_HISTORY: string;
				public static EXTRA_INFO_TEXT: string;
				public static EXTRA_SUMMARY_TEXT: string;
				public static EXTRA_BIG_TEXT: string;
				public static EXTRA_SMALL_ICON: string;
				public static EXTRA_LARGE_ICON: string;
				public static EXTRA_LARGE_ICON_BIG: string;
				public static EXTRA_PROGRESS: string;
				public static EXTRA_PROGRESS_MAX: string;
				public static EXTRA_PROGRESS_INDETERMINATE: string;
				public static EXTRA_SHOW_CHRONOMETER: string;
				public static EXTRA_SHOW_WHEN: string;
				public static EXTRA_PICTURE: string;
				public static EXTRA_TEXT_LINES: string;
				public static EXTRA_TEMPLATE: string;
				public static EXTRA_PEOPLE: string;
				public static EXTRA_BACKGROUND_IMAGE_URI: string;
				public static EXTRA_MEDIA_SESSION: string;
				public static EXTRA_COMPACT_ACTIONS: string;
				public static EXTRA_SELF_DISPLAY_NAME: string;
				public static EXTRA_MESSAGING_STYLE_USER: string;
				public static EXTRA_CONVERSATION_TITLE: string;
				public static EXTRA_MESSAGES: string;
				public static EXTRA_IS_GROUP_CONVERSATION: string;
				public static EXTRA_HIDDEN_CONVERSATION_TITLE: string;
				public static EXTRA_AUDIO_CONTENTS_URI: string;
				public static COLOR_DEFAULT: number;
				public static VISIBILITY_PUBLIC: number;
				public static VISIBILITY_PRIVATE: number;
				public static VISIBILITY_SECRET: number;
				public static CATEGORY_CALL: string;
				public static CATEGORY_MESSAGE: string;
				public static CATEGORY_EMAIL: string;
				public static CATEGORY_EVENT: string;
				public static CATEGORY_PROMO: string;
				public static CATEGORY_ALARM: string;
				public static CATEGORY_PROGRESS: string;
				public static CATEGORY_SOCIAL: string;
				public static CATEGORY_ERROR: string;
				public static CATEGORY_TRANSPORT: string;
				public static CATEGORY_SYSTEM: string;
				public static CATEGORY_SERVICE: string;
				public static CATEGORY_REMINDER: string;
				public static CATEGORY_RECOMMENDATION: string;
				public static CATEGORY_STATUS: string;
				public static BADGE_ICON_NONE: number;
				public static BADGE_ICON_SMALL: number;
				public static BADGE_ICON_LARGE: number;
				public static GROUP_ALERT_ALL: number;
				public static GROUP_ALERT_SUMMARY: number;
				public static GROUP_ALERT_CHILDREN: number;
				public static getAction(param0: globalAndroid.app.Notification, param1: number): androidx.core.app.NotificationCompat.Action;
				public static getContentTitle(param0: globalAndroid.app.Notification): string;
				public static getLocalOnly(param0: globalAndroid.app.Notification): boolean;
				public static getChannelId(param0: globalAndroid.app.Notification): string;
				public static getGroupAlertBehavior(param0: globalAndroid.app.Notification): number;
				public static getInvisibleActions(param0: globalAndroid.app.Notification): java.util.List<androidx.core.app.NotificationCompat.Action>;
				public constructor();
				public static getCategory(param0: globalAndroid.app.Notification): string;
				public static getShortcutId(param0: globalAndroid.app.Notification): string;
				public static getExtras(param0: globalAndroid.app.Notification): globalAndroid.os.Bundle;
				public static getTimeoutAfter(param0: globalAndroid.app.Notification): number;
				public static getActionCount(param0: globalAndroid.app.Notification): number;
				public static getGroup(param0: globalAndroid.app.Notification): string;
				public static isGroupSummary(param0: globalAndroid.app.Notification): boolean;
				public static getSortKey(param0: globalAndroid.app.Notification): string;
				public static getBadgeIconType(param0: globalAndroid.app.Notification): number;
			}
			export module NotificationCompat {
				export class Action {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.Action>;
					public static SEMANTIC_ACTION_NONE: number;
					public static SEMANTIC_ACTION_REPLY: number;
					public static SEMANTIC_ACTION_MARK_AS_READ: number;
					public static SEMANTIC_ACTION_MARK_AS_UNREAD: number;
					public static SEMANTIC_ACTION_DELETE: number;
					public static SEMANTIC_ACTION_ARCHIVE: number;
					public static SEMANTIC_ACTION_MUTE: number;
					public static SEMANTIC_ACTION_UNMUTE: number;
					public static SEMANTIC_ACTION_THUMBS_UP: number;
					public static SEMANTIC_ACTION_THUMBS_DOWN: number;
					public static SEMANTIC_ACTION_CALL: number;
					public icon: number;
					public title: string;
					public actionIntent: globalAndroid.app.PendingIntent;
					public getTitle(): string;
					public getRemoteInputs(): native.Array<androidx.core.app.RemoteInput>;
					public getIcon(): number;
					public getExtras(): globalAndroid.os.Bundle;
					public getShowsUserInterface(): boolean;
					public constructor(param0: number, param1: string, param2: globalAndroid.app.PendingIntent);
					public getAllowGeneratedReplies(): boolean;
					public getDataOnlyRemoteInputs(): native.Array<androidx.core.app.RemoteInput>;
					public getSemanticAction(): number;
					public getActionIntent(): globalAndroid.app.PendingIntent;
				}
				export module Action {
					export class Builder {
						public static class: java.lang.Class<androidx.core.app.NotificationCompat.Action.Builder>;
						public constructor(param0: androidx.core.app.NotificationCompat.Action);
						public addExtras(param0: globalAndroid.os.Bundle): androidx.core.app.NotificationCompat.Action.Builder;
						public addRemoteInput(param0: androidx.core.app.RemoteInput): androidx.core.app.NotificationCompat.Action.Builder;
						public constructor(param0: number, param1: string, param2: globalAndroid.app.PendingIntent);
						public build(): androidx.core.app.NotificationCompat.Action;
						public setShowsUserInterface(param0: boolean): androidx.core.app.NotificationCompat.Action.Builder;
						public getExtras(): globalAndroid.os.Bundle;
						public setAllowGeneratedReplies(param0: boolean): androidx.core.app.NotificationCompat.Action.Builder;
						public setSemanticAction(param0: number): androidx.core.app.NotificationCompat.Action.Builder;
						public extend(param0: androidx.core.app.NotificationCompat.Action.Extender): androidx.core.app.NotificationCompat.Action.Builder;
					}
					export class Extender {
						public static class: java.lang.Class<androidx.core.app.NotificationCompat.Action.Extender>;
						/**
						 * Constructs a new instance of the androidx.core.app.NotificationCompat$Action$Extender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							extend(param0: androidx.core.app.NotificationCompat.Action.Builder): androidx.core.app.NotificationCompat.Action.Builder;
						});
						public constructor();
						public extend(param0: androidx.core.app.NotificationCompat.Action.Builder): androidx.core.app.NotificationCompat.Action.Builder;
					}
					export class SemanticAction {
						public static class: java.lang.Class<androidx.core.app.NotificationCompat.Action.SemanticAction>;
						/**
						 * Constructs a new instance of the androidx.core.app.NotificationCompat$Action$SemanticAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class WearableExtender extends androidx.core.app.NotificationCompat.Action.Extender {
						public static class: java.lang.Class<androidx.core.app.NotificationCompat.Action.WearableExtender>;
						public getConfirmLabel(): string;
						public constructor();
						public getHintDisplayActionInline(): boolean;
						public getInProgressLabel(): string;
						public setConfirmLabel(param0: string): androidx.core.app.NotificationCompat.Action.WearableExtender;
						public setHintLaunchesActivity(param0: boolean): androidx.core.app.NotificationCompat.Action.WearableExtender;
						public setAvailableOffline(param0: boolean): androidx.core.app.NotificationCompat.Action.WearableExtender;
						public setCancelLabel(param0: string): androidx.core.app.NotificationCompat.Action.WearableExtender;
						public extend(param0: androidx.core.app.NotificationCompat.Action.Builder): androidx.core.app.NotificationCompat.Action.Builder;
						public getHintLaunchesActivity(): boolean;
						public constructor(param0: androidx.core.app.NotificationCompat.Action);
						public clone(): androidx.core.app.NotificationCompat.Action.WearableExtender;
						public setInProgressLabel(param0: string): androidx.core.app.NotificationCompat.Action.WearableExtender;
						public setHintDisplayActionInline(param0: boolean): androidx.core.app.NotificationCompat.Action.WearableExtender;
						public getCancelLabel(): string;
						public isAvailableOffline(): boolean;
					}
				}
				export class BadgeIconType {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.BadgeIconType>;
					/**
					 * Constructs a new instance of the androidx.core.app.NotificationCompat$BadgeIconType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class BigPictureStyle extends androidx.core.app.NotificationCompat.Style {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.BigPictureStyle>;
					public setSummaryText(param0: string): androidx.core.app.NotificationCompat.BigPictureStyle;
					public constructor();
					public bigPicture(param0: globalAndroid.graphics.Bitmap): androidx.core.app.NotificationCompat.BigPictureStyle;
					public constructor(param0: androidx.core.app.NotificationCompat.Builder);
					public setBigContentTitle(param0: string): androidx.core.app.NotificationCompat.BigPictureStyle;
					public bigLargeIcon(param0: globalAndroid.graphics.Bitmap): androidx.core.app.NotificationCompat.BigPictureStyle;
					public apply(param0: androidx.core.app.NotificationBuilderWithBuilderAccessor): void;
				}
				export class BigTextStyle extends androidx.core.app.NotificationCompat.Style {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.BigTextStyle>;
					public constructor();
					public constructor(param0: androidx.core.app.NotificationCompat.Builder);
					public setSummaryText(param0: string): androidx.core.app.NotificationCompat.BigTextStyle;
					public apply(param0: androidx.core.app.NotificationBuilderWithBuilderAccessor): void;
					public setBigContentTitle(param0: string): androidx.core.app.NotificationCompat.BigTextStyle;
					public bigText(param0: string): androidx.core.app.NotificationCompat.BigTextStyle;
				}
				export class Builder {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.Builder>;
					public mContext: globalAndroid.content.Context;
					public mActions: java.util.ArrayList<androidx.core.app.NotificationCompat.Action>;
					public mPeople: java.util.ArrayList<string>;
					public setContentText(param0: string): androidx.core.app.NotificationCompat.Builder;
					public setSubText(param0: string): androidx.core.app.NotificationCompat.Builder;
					public getHeadsUpContentView(): globalAndroid.widget.RemoteViews;
					public setExtras(param0: globalAndroid.os.Bundle): androidx.core.app.NotificationCompat.Builder;
					public setGroupSummary(param0: boolean): androidx.core.app.NotificationCompat.Builder;
					public setChannelId(param0: string): androidx.core.app.NotificationCompat.Builder;
					public setBadgeIconType(param0: number): androidx.core.app.NotificationCompat.Builder;
					public setGroupAlertBehavior(param0: number): androidx.core.app.NotificationCompat.Builder;
					public setSmallIcon(param0: number, param1: number): androidx.core.app.NotificationCompat.Builder;
					public addAction(param0: androidx.core.app.NotificationCompat.Action): androidx.core.app.NotificationCompat.Builder;
					public setOnlyAlertOnce(param0: boolean): androidx.core.app.NotificationCompat.Builder;
					public setDeleteIntent(param0: globalAndroid.app.PendingIntent): androidx.core.app.NotificationCompat.Builder;
					public setSound(param0: globalAndroid.net.Uri, param1: number): androidx.core.app.NotificationCompat.Builder;
					public build(): globalAndroid.app.Notification;
					public setSound(param0: globalAndroid.net.Uri): androidx.core.app.NotificationCompat.Builder;
					public setCustomHeadsUpContentView(param0: globalAndroid.widget.RemoteViews): androidx.core.app.NotificationCompat.Builder;
					public setLocalOnly(param0: boolean): androidx.core.app.NotificationCompat.Builder;
					public addInvisibleAction(param0: number, param1: string, param2: globalAndroid.app.PendingIntent): androidx.core.app.NotificationCompat.Builder;
					public getPriority(): number;
					public getColor(): number;
					public setNumber(param0: number): androidx.core.app.NotificationCompat.Builder;
					public constructor(param0: globalAndroid.content.Context, param1: string);
					public addPerson(param0: string): androidx.core.app.NotificationCompat.Builder;
					public setWhen(param0: number): androidx.core.app.NotificationCompat.Builder;
					public setShowWhen(param0: boolean): androidx.core.app.NotificationCompat.Builder;
					public setVisibility(param0: number): androidx.core.app.NotificationCompat.Builder;
					public setGroup(param0: string): androidx.core.app.NotificationCompat.Builder;
					public setTimeoutAfter(param0: number): androidx.core.app.NotificationCompat.Builder;
					public setProgress(param0: number, param1: number, param2: boolean): androidx.core.app.NotificationCompat.Builder;
					public setColorized(param0: boolean): androidx.core.app.NotificationCompat.Builder;
					public setCustomBigContentView(param0: globalAndroid.widget.RemoteViews): androidx.core.app.NotificationCompat.Builder;
					public setUsesChronometer(param0: boolean): androidx.core.app.NotificationCompat.Builder;
					public setShortcutId(param0: string): androidx.core.app.NotificationCompat.Builder;
					public setTicker(param0: string, param1: globalAndroid.widget.RemoteViews): androidx.core.app.NotificationCompat.Builder;
					public setAutoCancel(param0: boolean): androidx.core.app.NotificationCompat.Builder;
					public setPriority(param0: number): androidx.core.app.NotificationCompat.Builder;
					public getExtras(): globalAndroid.os.Bundle;
					public getWhenIfShowing(): number;
					public addAction(param0: number, param1: string, param2: globalAndroid.app.PendingIntent): androidx.core.app.NotificationCompat.Builder;
					public static limitCharSequenceLength(param0: string): string;
					public addInvisibleAction(param0: androidx.core.app.NotificationCompat.Action): androidx.core.app.NotificationCompat.Builder;
					public setRemoteInputHistory(param0: native.Array<string>): androidx.core.app.NotificationCompat.Builder;
					public setPublicVersion(param0: globalAndroid.app.Notification): androidx.core.app.NotificationCompat.Builder;
					public setCategory(param0: string): androidx.core.app.NotificationCompat.Builder;
					public setLargeIcon(param0: globalAndroid.graphics.Bitmap): androidx.core.app.NotificationCompat.Builder;
					public setDefaults(param0: number): androidx.core.app.NotificationCompat.Builder;
					public extend(param0: androidx.core.app.NotificationCompat.Extender): androidx.core.app.NotificationCompat.Builder;
					public setLights(param0: number, param1: number, param2: number): androidx.core.app.NotificationCompat.Builder;
					public addExtras(param0: globalAndroid.os.Bundle): androidx.core.app.NotificationCompat.Builder;
					public setContentTitle(param0: string): androidx.core.app.NotificationCompat.Builder;
					public setContentInfo(param0: string): androidx.core.app.NotificationCompat.Builder;
					public setStyle(param0: androidx.core.app.NotificationCompat.Style): androidx.core.app.NotificationCompat.Builder;
					public setVibrate(param0: native.Array<number>): androidx.core.app.NotificationCompat.Builder;
					public setColor(param0: number): androidx.core.app.NotificationCompat.Builder;
					public getBigContentView(): globalAndroid.widget.RemoteViews;
					public setContentIntent(param0: globalAndroid.app.PendingIntent): androidx.core.app.NotificationCompat.Builder;
					public setCustomContentView(param0: globalAndroid.widget.RemoteViews): androidx.core.app.NotificationCompat.Builder;
					public setOngoing(param0: boolean): androidx.core.app.NotificationCompat.Builder;
					public constructor(param0: globalAndroid.content.Context);
					public setSmallIcon(param0: number): androidx.core.app.NotificationCompat.Builder;
					public setContent(param0: globalAndroid.widget.RemoteViews): androidx.core.app.NotificationCompat.Builder;
					public getContentView(): globalAndroid.widget.RemoteViews;
					public setFullScreenIntent(param0: globalAndroid.app.PendingIntent, param1: boolean): androidx.core.app.NotificationCompat.Builder;
					public setSortKey(param0: string): androidx.core.app.NotificationCompat.Builder;
					public getNotification(): globalAndroid.app.Notification;
					public setTicker(param0: string): androidx.core.app.NotificationCompat.Builder;
				}
				export class CarExtender extends androidx.core.app.NotificationCompat.Extender {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.CarExtender>;
					public getLargeIcon(): globalAndroid.graphics.Bitmap;
					public getColor(): number;
					public setUnreadConversation(param0: androidx.core.app.NotificationCompat.CarExtender.UnreadConversation): androidx.core.app.NotificationCompat.CarExtender;
					public constructor();
					public setColor(param0: number): androidx.core.app.NotificationCompat.CarExtender;
					public setLargeIcon(param0: globalAndroid.graphics.Bitmap): androidx.core.app.NotificationCompat.CarExtender;
					public constructor(param0: globalAndroid.app.Notification);
					public getUnreadConversation(): androidx.core.app.NotificationCompat.CarExtender.UnreadConversation;
					public extend(param0: androidx.core.app.NotificationCompat.Builder): androidx.core.app.NotificationCompat.Builder;
				}
				export module CarExtender {
					export class UnreadConversation {
						public static class: java.lang.Class<androidx.core.app.NotificationCompat.CarExtender.UnreadConversation>;
						public getParticipant(): string;
						public getRemoteInput(): androidx.core.app.RemoteInput;
						public getReplyPendingIntent(): globalAndroid.app.PendingIntent;
						public getParticipants(): native.Array<string>;
						public getMessages(): native.Array<string>;
						public getReadPendingIntent(): globalAndroid.app.PendingIntent;
						public getLatestTimestamp(): number;
					}
					export module UnreadConversation {
						export class Builder {
							public static class: java.lang.Class<androidx.core.app.NotificationCompat.CarExtender.UnreadConversation.Builder>;
							public addMessage(param0: string): androidx.core.app.NotificationCompat.CarExtender.UnreadConversation.Builder;
							public setReadPendingIntent(param0: globalAndroid.app.PendingIntent): androidx.core.app.NotificationCompat.CarExtender.UnreadConversation.Builder;
							public constructor(param0: string);
							public setLatestTimestamp(param0: number): androidx.core.app.NotificationCompat.CarExtender.UnreadConversation.Builder;
							public setReplyAction(param0: globalAndroid.app.PendingIntent, param1: androidx.core.app.RemoteInput): androidx.core.app.NotificationCompat.CarExtender.UnreadConversation.Builder;
							public build(): androidx.core.app.NotificationCompat.CarExtender.UnreadConversation;
						}
					}
				}
				export class DecoratedCustomViewStyle extends androidx.core.app.NotificationCompat.Style {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.DecoratedCustomViewStyle>;
					public makeContentView(param0: androidx.core.app.NotificationBuilderWithBuilderAccessor): globalAndroid.widget.RemoteViews;
					public constructor();
					public makeHeadsUpContentView(param0: androidx.core.app.NotificationBuilderWithBuilderAccessor): globalAndroid.widget.RemoteViews;
					public makeBigContentView(param0: androidx.core.app.NotificationBuilderWithBuilderAccessor): globalAndroid.widget.RemoteViews;
					public apply(param0: androidx.core.app.NotificationBuilderWithBuilderAccessor): void;
				}
				export class Extender {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.Extender>;
					/**
					 * Constructs a new instance of the androidx.core.app.NotificationCompat$Extender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						extend(param0: androidx.core.app.NotificationCompat.Builder): androidx.core.app.NotificationCompat.Builder;
					});
					public constructor();
					public extend(param0: androidx.core.app.NotificationCompat.Builder): androidx.core.app.NotificationCompat.Builder;
				}
				export class GroupAlertBehavior {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.GroupAlertBehavior>;
					/**
					 * Constructs a new instance of the androidx.core.app.NotificationCompat$GroupAlertBehavior interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class InboxStyle extends androidx.core.app.NotificationCompat.Style {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.InboxStyle>;
					public addLine(param0: string): androidx.core.app.NotificationCompat.InboxStyle;
					public constructor();
					public setBigContentTitle(param0: string): androidx.core.app.NotificationCompat.InboxStyle;
					public constructor(param0: androidx.core.app.NotificationCompat.Builder);
					public setSummaryText(param0: string): androidx.core.app.NotificationCompat.InboxStyle;
					public apply(param0: androidx.core.app.NotificationBuilderWithBuilderAccessor): void;
				}
				export class MessagingStyle extends androidx.core.app.NotificationCompat.Style {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.MessagingStyle>;
					public static MAXIMUM_RETAINED_MESSAGES: number;
					public isGroupConversation(): boolean;
					public constructor(param0: string);
					public setGroupConversation(param0: boolean): androidx.core.app.NotificationCompat.MessagingStyle;
					public setConversationTitle(param0: string): androidx.core.app.NotificationCompat.MessagingStyle;
					public addMessage(param0: androidx.core.app.NotificationCompat.MessagingStyle.Message): androidx.core.app.NotificationCompat.MessagingStyle;
					public restoreFromCompatExtras(param0: globalAndroid.os.Bundle): void;
					public addCompatExtras(param0: globalAndroid.os.Bundle): void;
					public addMessage(param0: string, param1: number, param2: string): androidx.core.app.NotificationCompat.MessagingStyle;
					public constructor();
					public constructor(param0: androidx.core.app.Person);
					public getUserDisplayName(): string;
					public getConversationTitle(): string;
					public getUser(): androidx.core.app.Person;
					public getMessages(): java.util.List<androidx.core.app.NotificationCompat.MessagingStyle.Message>;
					public addMessage(param0: string, param1: number, param2: androidx.core.app.Person): androidx.core.app.NotificationCompat.MessagingStyle;
					public apply(param0: androidx.core.app.NotificationBuilderWithBuilderAccessor): void;
					public static extractMessagingStyleFromNotification(param0: globalAndroid.app.Notification): androidx.core.app.NotificationCompat.MessagingStyle;
				}
				export module MessagingStyle {
					export class Message {
						public static class: java.lang.Class<androidx.core.app.NotificationCompat.MessagingStyle.Message>;
						public getDataMimeType(): string;
						public getTimestamp(): number;
						public getPerson(): androidx.core.app.Person;
						public getDataUri(): globalAndroid.net.Uri;
						public setData(param0: string, param1: globalAndroid.net.Uri): androidx.core.app.NotificationCompat.MessagingStyle.Message;
						public constructor(param0: string, param1: number, param2: androidx.core.app.Person);
						public constructor(param0: string, param1: number, param2: string);
						public getText(): string;
						public getExtras(): globalAndroid.os.Bundle;
						public getSender(): string;
					}
				}
				export class NotificationVisibility {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.NotificationVisibility>;
					/**
					 * Constructs a new instance of the androidx.core.app.NotificationCompat$NotificationVisibility interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class StreamType {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.StreamType>;
					/**
					 * Constructs a new instance of the androidx.core.app.NotificationCompat$StreamType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export abstract class Style {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.Style>;
					public mBuilder: androidx.core.app.NotificationCompat.Builder;
					public restoreFromCompatExtras(param0: globalAndroid.os.Bundle): void;
					public addCompatExtras(param0: globalAndroid.os.Bundle): void;
					public makeContentView(param0: androidx.core.app.NotificationBuilderWithBuilderAccessor): globalAndroid.widget.RemoteViews;
					public applyStandardTemplate(param0: boolean, param1: number, param2: boolean): globalAndroid.widget.RemoteViews;
					public constructor();
					public build(): globalAndroid.app.Notification;
					public makeHeadsUpContentView(param0: androidx.core.app.NotificationBuilderWithBuilderAccessor): globalAndroid.widget.RemoteViews;
					public makeBigContentView(param0: androidx.core.app.NotificationBuilderWithBuilderAccessor): globalAndroid.widget.RemoteViews;
					public setBuilder(param0: androidx.core.app.NotificationCompat.Builder): void;
					public createColoredBitmap(param0: number, param1: number): globalAndroid.graphics.Bitmap;
					public buildIntoRemoteViews(param0: globalAndroid.widget.RemoteViews, param1: globalAndroid.widget.RemoteViews): void;
					public apply(param0: androidx.core.app.NotificationBuilderWithBuilderAccessor): void;
				}
				export class WearableExtender extends androidx.core.app.NotificationCompat.Extender {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.WearableExtender>;
					public static UNSET_ACTION_INDEX: number;
					public static SIZE_DEFAULT: number;
					public static SIZE_XSMALL: number;
					public static SIZE_SMALL: number;
					public static SIZE_MEDIUM: number;
					public static SIZE_LARGE: number;
					public static SIZE_FULL_SCREEN: number;
					public static SCREEN_TIMEOUT_SHORT: number;
					public static SCREEN_TIMEOUT_LONG: number;
					public addActions(param0: java.util.List<androidx.core.app.NotificationCompat.Action>): androidx.core.app.NotificationCompat.WearableExtender;
					public getGravity(): number;
					public clone(): androidx.core.app.NotificationCompat.WearableExtender;
					public setDismissalId(param0: string): androidx.core.app.NotificationCompat.WearableExtender;
					public setDisplayIntent(param0: globalAndroid.app.PendingIntent): androidx.core.app.NotificationCompat.WearableExtender;
					public setCustomSizePreset(param0: number): androidx.core.app.NotificationCompat.WearableExtender;
					public setHintAvoidBackgroundClipping(param0: boolean): androidx.core.app.NotificationCompat.WearableExtender;
					public getHintAmbientBigPicture(): boolean;
					public getBackground(): globalAndroid.graphics.Bitmap;
					public clearActions(): androidx.core.app.NotificationCompat.WearableExtender;
					public getContentIntentAvailableOffline(): boolean;
					public setHintShowBackgroundOnly(param0: boolean): androidx.core.app.NotificationCompat.WearableExtender;
					public getHintAvoidBackgroundClipping(): boolean;
					public setBridgeTag(param0: string): androidx.core.app.NotificationCompat.WearableExtender;
					public setGravity(param0: number): androidx.core.app.NotificationCompat.WearableExtender;
					public setCustomContentHeight(param0: number): androidx.core.app.NotificationCompat.WearableExtender;
					public constructor();
					public getPages(): java.util.List<globalAndroid.app.Notification>;
					public getCustomSizePreset(): number;
					public getHintContentIntentLaunchesActivity(): boolean;
					public getContentIcon(): number;
					public clearPages(): androidx.core.app.NotificationCompat.WearableExtender;
					public setContentIntentAvailableOffline(param0: boolean): androidx.core.app.NotificationCompat.WearableExtender;
					public setBackground(param0: globalAndroid.graphics.Bitmap): androidx.core.app.NotificationCompat.WearableExtender;
					public getContentAction(): number;
					public setStartScrollBottom(param0: boolean): androidx.core.app.NotificationCompat.WearableExtender;
					public getHintScreenTimeout(): number;
					public getActions(): java.util.List<androidx.core.app.NotificationCompat.Action>;
					public setHintHideIcon(param0: boolean): androidx.core.app.NotificationCompat.WearableExtender;
					public setContentAction(param0: number): androidx.core.app.NotificationCompat.WearableExtender;
					public setContentIconGravity(param0: number): androidx.core.app.NotificationCompat.WearableExtender;
					public getHintShowBackgroundOnly(): boolean;
					public addPages(param0: java.util.List<globalAndroid.app.Notification>): androidx.core.app.NotificationCompat.WearableExtender;
					public addAction(param0: androidx.core.app.NotificationCompat.Action): androidx.core.app.NotificationCompat.WearableExtender;
					public getContentIconGravity(): number;
					public extend(param0: androidx.core.app.NotificationCompat.Builder): androidx.core.app.NotificationCompat.Builder;
					public addPage(param0: globalAndroid.app.Notification): androidx.core.app.NotificationCompat.WearableExtender;
					public setHintScreenTimeout(param0: number): androidx.core.app.NotificationCompat.WearableExtender;
					public getHintHideIcon(): boolean;
					public getBridgeTag(): string;
					public setHintAmbientBigPicture(param0: boolean): androidx.core.app.NotificationCompat.WearableExtender;
					public getDismissalId(): string;
					public getDisplayIntent(): globalAndroid.app.PendingIntent;
					public setContentIcon(param0: number): androidx.core.app.NotificationCompat.WearableExtender;
					public getCustomContentHeight(): number;
					public getStartScrollBottom(): boolean;
					public constructor(param0: globalAndroid.app.Notification);
					public setHintContentIntentLaunchesActivity(param0: boolean): androidx.core.app.NotificationCompat.WearableExtender;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class NotificationCompatBuilder extends androidx.core.app.NotificationBuilderWithBuilderAccessor {
				public static class: java.lang.Class<androidx.core.app.NotificationCompatBuilder>;
				public build(): globalAndroid.app.Notification;
				public buildInternal(): globalAndroid.app.Notification;
				public getBuilder(): globalAndroid.app.Notification.Builder;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class NotificationCompatExtras {
				public static class: java.lang.Class<androidx.core.app.NotificationCompatExtras>;
				public static EXTRA_LOCAL_ONLY: string;
				public static EXTRA_GROUP_KEY: string;
				public static EXTRA_GROUP_SUMMARY: string;
				public static EXTRA_SORT_KEY: string;
				public static EXTRA_ACTION_EXTRAS: string;
				public static EXTRA_REMOTE_INPUTS: string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class NotificationCompatJellybean {
				public static class: java.lang.Class<androidx.core.app.NotificationCompatJellybean>;
				public static TAG: string;
				public static getAction(param0: globalAndroid.app.Notification, param1: number): androidx.core.app.NotificationCompat.Action;
				public static readAction(param0: number, param1: string, param2: globalAndroid.app.PendingIntent, param3: globalAndroid.os.Bundle): androidx.core.app.NotificationCompat.Action;
				public static getExtras(param0: globalAndroid.app.Notification): globalAndroid.os.Bundle;
				public static buildActionExtrasMap(param0: java.util.List<globalAndroid.os.Bundle>): globalAndroid.util.SparseArray<globalAndroid.os.Bundle>;
				public static writeActionAndGetExtras(param0: globalAndroid.app.Notification.Builder, param1: androidx.core.app.NotificationCompat.Action): globalAndroid.os.Bundle;
				public static getActionCount(param0: globalAndroid.app.Notification): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export abstract class NotificationCompatSideChannelService {
				public static class: java.lang.Class<androidx.core.app.NotificationCompatSideChannelService>;
				public notify(param0: string, param1: number, param2: string, param3: globalAndroid.app.Notification): void;
				public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
				public cancelAll(param0: string): void;
				public cancel(param0: string, param1: number, param2: string): void;
				public constructor();
			}
			export module NotificationCompatSideChannelService {
				export class NotificationSideChannelStub extends globalAndroid.support.v4.app.INotificationSideChannel.Stub {
					public static class: java.lang.Class<androidx.core.app.NotificationCompatSideChannelService.NotificationSideChannelStub>;
					public cancelAll(param0: string): void;
					// public notify(param0: string, param1: number, param2: string, param3: globalAndroid.app.Notification): void;
					public cancel(param0: string, param1: number, param2: string): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class NotificationManagerCompat {
				public static class: java.lang.Class<androidx.core.app.NotificationManagerCompat>;
				public static EXTRA_USE_SIDE_CHANNEL: string;
				public static ACTION_BIND_SIDE_CHANNEL: string;
				public static IMPORTANCE_UNSPECIFIED: number;
				public static IMPORTANCE_NONE: number;
				public static IMPORTANCE_MIN: number;
				public static IMPORTANCE_LOW: number;
				public static IMPORTANCE_DEFAULT: number;
				public static IMPORTANCE_HIGH: number;
				public static IMPORTANCE_MAX: number;
				public static from(param0: globalAndroid.content.Context): androidx.core.app.NotificationManagerCompat;
				public cancel(param0: string, param1: number): void;
				public areNotificationsEnabled(): boolean;
				public cancelAll(): void;
				public static getEnabledListenerPackages(param0: globalAndroid.content.Context): java.util.Set<string>;
				public notify(param0: number, param1: globalAndroid.app.Notification): void;
				public notify(param0: string, param1: number, param2: globalAndroid.app.Notification): void;
				public getImportance(): number;
				public cancel(param0: number): void;
			}
			export module NotificationManagerCompat {
				export class CancelTask extends androidx.core.app.NotificationManagerCompat.Task {
					public static class: java.lang.Class<androidx.core.app.NotificationManagerCompat.CancelTask>;
					public send(param0: globalAndroid.support.v4.app.INotificationSideChannel): void;
					public toString(): string;
				}
				export class NotifyTask extends androidx.core.app.NotificationManagerCompat.Task {
					public static class: java.lang.Class<androidx.core.app.NotificationManagerCompat.NotifyTask>;
					public send(param0: globalAndroid.support.v4.app.INotificationSideChannel): void;
					public toString(): string;
				}
				export class ServiceConnectedEvent {
					public static class: java.lang.Class<androidx.core.app.NotificationManagerCompat.ServiceConnectedEvent>;
				}
				export class SideChannelManager {
					public static class: java.lang.Class<androidx.core.app.NotificationManagerCompat.SideChannelManager>;
					public queueTask(param0: androidx.core.app.NotificationManagerCompat.Task): void;
					public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
					public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
					public handleMessage(param0: globalAndroid.os.Message): boolean;
				}
				export module SideChannelManager {
					export class ListenerRecord {
						public static class: java.lang.Class<androidx.core.app.NotificationManagerCompat.SideChannelManager.ListenerRecord>;
					}
				}
				export class Task {
					public static class: java.lang.Class<androidx.core.app.NotificationManagerCompat.Task>;
					/**
					 * Constructs a new instance of the androidx.core.app.NotificationManagerCompat$Task interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						send(param0: globalAndroid.support.v4.app.INotificationSideChannel): void;
					});
					public constructor();
					public send(param0: globalAndroid.support.v4.app.INotificationSideChannel): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class Person {
				public static class: java.lang.Class<androidx.core.app.Person>;
				public isBot(): boolean;
				public toAndroidPerson(): any;
				public getUri(): string;
				public getIcon(): androidx.core.graphics.drawable.IconCompat;
				public isImportant(): boolean;
				public toBundle(): globalAndroid.os.Bundle;
				public toBuilder(): androidx.core.app.Person.Builder;
				public getName(): string;
				public static fromAndroidPerson(param0: any): androidx.core.app.Person;
				public static fromBundle(param0: globalAndroid.os.Bundle): androidx.core.app.Person;
				public getKey(): string;
			}
			export module Person {
				export class Builder {
					public static class: java.lang.Class<androidx.core.app.Person.Builder>;
					public constructor();
					public setUri(param0: string): androidx.core.app.Person.Builder;
					public setBot(param0: boolean): androidx.core.app.Person.Builder;
					public setIcon(param0: androidx.core.graphics.drawable.IconCompat): androidx.core.app.Person.Builder;
					public setImportant(param0: boolean): androidx.core.app.Person.Builder;
					public setKey(param0: string): androidx.core.app.Person.Builder;
					public setName(param0: string): androidx.core.app.Person.Builder;
					public build(): androidx.core.app.Person;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class RemoteInput {
				public static class: java.lang.Class<androidx.core.app.RemoteInput>;
				public static RESULTS_CLIP_LABEL: string;
				public static EXTRA_RESULTS_DATA: string;
				public getChoices(): native.Array<string>;
				public getResultKey(): string;
				public getAllowFreeFormInput(): boolean;
				public getExtras(): globalAndroid.os.Bundle;
				public getLabel(): string;
				public static addResultsToIntent(param0: native.Array<androidx.core.app.RemoteInput>, param1: globalAndroid.content.Intent, param2: globalAndroid.os.Bundle): void;
				public static getDataResultsFromIntent(param0: globalAndroid.content.Intent, param1: string): java.util.Map<string,globalAndroid.net.Uri>;
				public static getResultsFromIntent(param0: globalAndroid.content.Intent): globalAndroid.os.Bundle;
				public isDataOnly(): boolean;
				public static addDataResultToIntent(param0: androidx.core.app.RemoteInput, param1: globalAndroid.content.Intent, param2: java.util.Map<string,globalAndroid.net.Uri>): void;
				public getAllowedDataTypes(): java.util.Set<string>;
			}
			export module RemoteInput {
				export class Builder {
					public static class: java.lang.Class<androidx.core.app.RemoteInput.Builder>;
					public setAllowDataType(param0: string, param1: boolean): androidx.core.app.RemoteInput.Builder;
					public getExtras(): globalAndroid.os.Bundle;
					public constructor(param0: string);
					public setLabel(param0: string): androidx.core.app.RemoteInput.Builder;
					public setChoices(param0: native.Array<string>): androidx.core.app.RemoteInput.Builder;
					public addExtras(param0: globalAndroid.os.Bundle): androidx.core.app.RemoteInput.Builder;
					public build(): androidx.core.app.RemoteInput;
					public setAllowFreeFormInput(param0: boolean): androidx.core.app.RemoteInput.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class ServiceCompat {
				public static class: java.lang.Class<androidx.core.app.ServiceCompat>;
				public static START_STICKY: number;
				public static STOP_FOREGROUND_REMOVE: number;
				public static STOP_FOREGROUND_DETACH: number;
				public static stopForeground(param0: globalAndroid.app.Service, param1: number): void;
			}
			export module ServiceCompat {
				export class StopForegroundFlags {
					public static class: java.lang.Class<androidx.core.app.ServiceCompat.StopForegroundFlags>;
					/**
					 * Constructs a new instance of the androidx.core.app.ServiceCompat$StopForegroundFlags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module core {
		export module app {
			export class ShareCompat {
				public static class: java.lang.Class<androidx.core.app.ShareCompat>;
				public static EXTRA_CALLING_PACKAGE: string;
				public static EXTRA_CALLING_ACTIVITY: string;
				public static getCallingActivity(param0: globalAndroid.app.Activity): globalAndroid.content.ComponentName;
				public static configureMenuItem(param0: globalAndroid.view.MenuItem, param1: androidx.core.app.ShareCompat.IntentBuilder): void;
				public static getCallingPackage(param0: globalAndroid.app.Activity): string;
				public static configureMenuItem(param0: globalAndroid.view.Menu, param1: number, param2: androidx.core.app.ShareCompat.IntentBuilder): void;
			}
			export module ShareCompat {
				export class IntentBuilder {
					public static class: java.lang.Class<androidx.core.app.ShareCompat.IntentBuilder>;
					public addEmailBcc(param0: native.Array<string>): androidx.core.app.ShareCompat.IntentBuilder;
					public setType(param0: string): androidx.core.app.ShareCompat.IntentBuilder;
					public addEmailCc(param0: string): androidx.core.app.ShareCompat.IntentBuilder;
					public setEmailTo(param0: native.Array<string>): androidx.core.app.ShareCompat.IntentBuilder;
					public addEmailCc(param0: native.Array<string>): androidx.core.app.ShareCompat.IntentBuilder;
					public startChooser(): void;
					public setStream(param0: globalAndroid.net.Uri): androidx.core.app.ShareCompat.IntentBuilder;
					public getIntent(): globalAndroid.content.Intent;
					public addStream(param0: globalAndroid.net.Uri): androidx.core.app.ShareCompat.IntentBuilder;
					public addEmailBcc(param0: string): androidx.core.app.ShareCompat.IntentBuilder;
					public setChooserTitle(param0: number): androidx.core.app.ShareCompat.IntentBuilder;
					public setSubject(param0: string): androidx.core.app.ShareCompat.IntentBuilder;
					public setChooserTitle(param0: string): androidx.core.app.ShareCompat.IntentBuilder;
					public setEmailBcc(param0: native.Array<string>): androidx.core.app.ShareCompat.IntentBuilder;
					public static from(param0: globalAndroid.app.Activity): androidx.core.app.ShareCompat.IntentBuilder;
					public addEmailTo(param0: string): androidx.core.app.ShareCompat.IntentBuilder;
					public createChooserIntent(): globalAndroid.content.Intent;
					public setEmailCc(param0: native.Array<string>): androidx.core.app.ShareCompat.IntentBuilder;
					public setText(param0: string): androidx.core.app.ShareCompat.IntentBuilder;
					public addEmailTo(param0: native.Array<string>): androidx.core.app.ShareCompat.IntentBuilder;
					public setHtmlText(param0: string): androidx.core.app.ShareCompat.IntentBuilder;
				}
				export class IntentReader {
					public static class: java.lang.Class<androidx.core.app.ShareCompat.IntentReader>;
					public getText(): string;
					public static from(param0: globalAndroid.app.Activity): androidx.core.app.ShareCompat.IntentReader;
					public isShareIntent(): boolean;
					public getCallingPackage(): string;
					public getSubject(): string;
					public getCallingApplicationLabel(): string;
					public getStream(param0: number): globalAndroid.net.Uri;
					public getStreamCount(): number;
					public isMultipleShare(): boolean;
					public getCallingActivityIcon(): globalAndroid.graphics.drawable.Drawable;
					public isSingleShare(): boolean;
					public getCallingApplicationIcon(): globalAndroid.graphics.drawable.Drawable;
					public getEmailTo(): native.Array<string>;
					public getCallingActivity(): globalAndroid.content.ComponentName;
					public getType(): string;
					public getStream(): globalAndroid.net.Uri;
					public getEmailBcc(): native.Array<string>;
					public getEmailCc(): native.Array<string>;
					public getHtmlText(): string;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export abstract class SharedElementCallback {
				public static class: java.lang.Class<androidx.core.app.SharedElementCallback>;
				public onCreateSnapshotView(param0: globalAndroid.content.Context, param1: globalAndroid.os.Parcelable): globalAndroid.view.View;
				public onSharedElementEnd(param0: java.util.List<string>, param1: java.util.List<globalAndroid.view.View>, param2: java.util.List<globalAndroid.view.View>): void;
				public onMapSharedElements(param0: java.util.List<string>, param1: java.util.Map<string,globalAndroid.view.View>): void;
				public onSharedElementsArrived(param0: java.util.List<string>, param1: java.util.List<globalAndroid.view.View>, param2: androidx.core.app.SharedElementCallback.OnSharedElementsReadyListener): void;
				public onCaptureSharedElementSnapshot(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Matrix, param2: globalAndroid.graphics.RectF): globalAndroid.os.Parcelable;
				public onSharedElementStart(param0: java.util.List<string>, param1: java.util.List<globalAndroid.view.View>, param2: java.util.List<globalAndroid.view.View>): void;
				public onRejectSharedElements(param0: java.util.List<globalAndroid.view.View>): void;
				public constructor();
			}
			export module SharedElementCallback {
				export class OnSharedElementsReadyListener {
					public static class: java.lang.Class<androidx.core.app.SharedElementCallback.OnSharedElementsReadyListener>;
					/**
					 * Constructs a new instance of the androidx.core.app.SharedElementCallback$OnSharedElementsReadyListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSharedElementsReady(): void;
					});
					public constructor();
					public onSharedElementsReady(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class TaskStackBuilder extends java.lang.Iterable<globalAndroid.content.Intent> {
				public static class: java.lang.Class<androidx.core.app.TaskStackBuilder>;
				public addParentStack(param0: globalAndroid.content.ComponentName): androidx.core.app.TaskStackBuilder;
				public startActivities(): void;
				public getIntents(): native.Array<globalAndroid.content.Intent>;
				public editIntentAt(param0: number): globalAndroid.content.Intent;
				public getIntentCount(): number;
				public addNextIntent(param0: globalAndroid.content.Intent): androidx.core.app.TaskStackBuilder;
				public startActivities(param0: globalAndroid.os.Bundle): void;
				public static create(param0: globalAndroid.content.Context): androidx.core.app.TaskStackBuilder;
				public getPendingIntent(param0: number, param1: number, param2: globalAndroid.os.Bundle): globalAndroid.app.PendingIntent;
				public getPendingIntent(param0: number, param1: number): globalAndroid.app.PendingIntent;
				public addNextIntentWithParentStack(param0: globalAndroid.content.Intent): androidx.core.app.TaskStackBuilder;
				public addParentStack(param0: globalAndroid.app.Activity): androidx.core.app.TaskStackBuilder;
				public static from(param0: globalAndroid.content.Context): androidx.core.app.TaskStackBuilder;
				public getIntent(param0: number): globalAndroid.content.Intent;
				public addParentStack(param0: java.lang.Class<any>): androidx.core.app.TaskStackBuilder;
				public iterator(): java.util.Iterator<globalAndroid.content.Intent>;
			}
			export module TaskStackBuilder {
				export class SupportParentable {
					public static class: java.lang.Class<androidx.core.app.TaskStackBuilder.SupportParentable>;
					/**
					 * Constructs a new instance of the androidx.core.app.TaskStackBuilder$SupportParentable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getSupportParentActivityIntent(): globalAndroid.content.Intent;
					});
					public constructor();
					public getSupportParentActivityIntent(): globalAndroid.content.Intent;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class ContentResolverCompat {
				public static class: java.lang.Class<androidx.core.content.ContentResolverCompat>;
				public static query(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string, param6: androidx.core.os.CancellationSignal): globalAndroid.database.Cursor;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class ContextCompat {
				public static class: java.lang.Class<androidx.core.content.ContextCompat>;
				public static getSystemService(param0: globalAndroid.content.Context, param1: java.lang.Class<any>): any;
				public static getExternalFilesDirs(param0: globalAndroid.content.Context, param1: string): native.Array<java.io.File>;
				public static startForegroundService(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				public static getDrawable(param0: globalAndroid.content.Context, param1: number): globalAndroid.graphics.drawable.Drawable;
				public static checkSelfPermission(param0: globalAndroid.content.Context, param1: string): number;
				public static getColor(param0: globalAndroid.content.Context, param1: number): number;
				public static getCodeCacheDir(param0: globalAndroid.content.Context): java.io.File;
				public static createDeviceProtectedStorageContext(param0: globalAndroid.content.Context): globalAndroid.content.Context;
				public constructor();
				public static startActivity(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent, param2: globalAndroid.os.Bundle): void;
				public static startActivities(param0: globalAndroid.content.Context, param1: native.Array<globalAndroid.content.Intent>, param2: globalAndroid.os.Bundle): boolean;
				public static getDataDir(param0: globalAndroid.content.Context): java.io.File;
				public static getObbDirs(param0: globalAndroid.content.Context): native.Array<java.io.File>;
				public static getExternalCacheDirs(param0: globalAndroid.content.Context): native.Array<java.io.File>;
				public static getColorStateList(param0: globalAndroid.content.Context, param1: number): globalAndroid.content.res.ColorStateList;
				public static getSystemServiceName(param0: globalAndroid.content.Context, param1: java.lang.Class<any>): string;
				public static isDeviceProtectedStorage(param0: globalAndroid.content.Context): boolean;
				public static startActivities(param0: globalAndroid.content.Context, param1: native.Array<globalAndroid.content.Intent>): boolean;
				public static getNoBackupFilesDir(param0: globalAndroid.content.Context): java.io.File;
			}
			export module ContextCompat {
				export class LegacyServiceMapHolder {
					public static class: java.lang.Class<androidx.core.content.ContextCompat.LegacyServiceMapHolder>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class FileProvider {
				public static class: java.lang.Class<androidx.core.content.FileProvider>;
				public static getUriForFile(param0: globalAndroid.content.Context, param1: string, param2: java.io.File): globalAndroid.net.Uri;
				public getType(param0: globalAndroid.net.Uri): string;
				public openFile(param0: globalAndroid.net.Uri, param1: string): globalAndroid.os.ParcelFileDescriptor;
				public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
				public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
				public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
				public attachInfo(param0: globalAndroid.content.Context, param1: globalAndroid.content.pm.ProviderInfo): void;
				public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
				public onCreate(): boolean;
				public constructor();
			}
			export module FileProvider {
				export class PathStrategy {
					public static class: java.lang.Class<androidx.core.content.FileProvider.PathStrategy>;
					/**
					 * Constructs a new instance of the androidx.core.content.FileProvider$PathStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getUriForFile(param0: java.io.File): globalAndroid.net.Uri;
						getFileForUri(param0: globalAndroid.net.Uri): java.io.File;
					});
					public constructor();
					public getUriForFile(param0: java.io.File): globalAndroid.net.Uri;
					public getFileForUri(param0: globalAndroid.net.Uri): java.io.File;
				}
				export class SimplePathStrategy extends androidx.core.content.FileProvider.PathStrategy {
					public static class: java.lang.Class<androidx.core.content.FileProvider.SimplePathStrategy>;
					public getUriForFile(param0: java.io.File): globalAndroid.net.Uri;
					public getFileForUri(param0: globalAndroid.net.Uri): java.io.File;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class IntentCompat {
				public static class: java.lang.Class<androidx.core.content.IntentCompat>;
				public static EXTRA_HTML_TEXT: string;
				public static EXTRA_START_PLAYBACK: string;
				public static CATEGORY_LEANBACK_LAUNCHER: string;
				public static makeMainSelectorActivity(param0: string, param1: string): globalAndroid.content.Intent;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class MimeTypeFilter {
				public static class: java.lang.Class<androidx.core.content.MimeTypeFilter>;
				public static matchesMany(param0: native.Array<string>, param1: string): native.Array<string>;
				public static matches(param0: string, param1: string): boolean;
				public static matches(param0: string, param1: native.Array<string>): string;
				public static matches(param0: native.Array<string>, param1: string): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class PermissionChecker {
				public static class: java.lang.Class<androidx.core.content.PermissionChecker>;
				public static PERMISSION_GRANTED: number;
				public static PERMISSION_DENIED: number;
				public static PERMISSION_DENIED_APP_OP: number;
				public static checkCallingPermission(param0: globalAndroid.content.Context, param1: string, param2: string): number;
				public static checkPermission(param0: globalAndroid.content.Context, param1: string, param2: number, param3: number, param4: string): number;
				public static checkSelfPermission(param0: globalAndroid.content.Context, param1: string): number;
				public static checkCallingOrSelfPermission(param0: globalAndroid.content.Context, param1: string): number;
			}
			export module PermissionChecker {
				export class PermissionResult {
					public static class: java.lang.Class<androidx.core.content.PermissionChecker.PermissionResult>;
					/**
					 * Constructs a new instance of the androidx.core.content.PermissionChecker$PermissionResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module core {
		export module content {
			export class SharedPreferencesCompat {
				public static class: java.lang.Class<androidx.core.content.SharedPreferencesCompat>;
			}
			export module SharedPreferencesCompat {
				export class EditorCompat {
					public static class: java.lang.Class<androidx.core.content.SharedPreferencesCompat.EditorCompat>;
					public apply(param0: globalAndroid.content.SharedPreferences.Editor): void;
					public static getInstance(): androidx.core.content.SharedPreferencesCompat.EditorCompat;
				}
				export module EditorCompat {
					export class Helper {
						public static class: java.lang.Class<androidx.core.content.SharedPreferencesCompat.EditorCompat.Helper>;
						public apply(param0: globalAndroid.content.SharedPreferences.Editor): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module pm {
				export class ActivityInfoCompat {
					public static class: java.lang.Class<androidx.core.content.pm.ActivityInfoCompat>;
					public static CONFIG_UI_MODE: number;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module pm {
				export class PackageInfoCompat {
					public static class: java.lang.Class<androidx.core.content.pm.PackageInfoCompat>;
					public static getLongVersionCode(param0: globalAndroid.content.pm.PackageInfo): number;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module pm {
				export class PermissionInfoCompat {
					public static class: java.lang.Class<androidx.core.content.pm.PermissionInfoCompat>;
					public static getProtectionFlags(param0: globalAndroid.content.pm.PermissionInfo): number;
					public static getProtection(param0: globalAndroid.content.pm.PermissionInfo): number;
				}
				export module PermissionInfoCompat {
					export class Protection {
						public static class: java.lang.Class<androidx.core.content.pm.PermissionInfoCompat.Protection>;
						/**
						 * Constructs a new instance of the androidx.core.content.pm.PermissionInfoCompat$Protection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class ProtectionFlags {
						public static class: java.lang.Class<androidx.core.content.pm.PermissionInfoCompat.ProtectionFlags>;
						/**
						 * Constructs a new instance of the androidx.core.content.pm.PermissionInfoCompat$ProtectionFlags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module core {
		export module content {
			export module pm {
				export class ShortcutInfoCompat {
					public static class: java.lang.Class<androidx.core.content.pm.ShortcutInfoCompat>;
					public getDisabledMessage(): string;
					public getShortLabel(): string;
					public getId(): string;
					public getIntent(): globalAndroid.content.Intent;
					public toShortcutInfo(): any;
					public getIntents(): native.Array<globalAndroid.content.Intent>;
					public getActivity(): globalAndroid.content.ComponentName;
					public getLongLabel(): string;
				}
				export module ShortcutInfoCompat {
					export class Builder {
						public static class: java.lang.Class<androidx.core.content.pm.ShortcutInfoCompat.Builder>;
						public setDisabledMessage(param0: string): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setAlwaysBadged(): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setShortLabel(param0: string): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setIcon(param0: androidx.core.graphics.drawable.IconCompat): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public build(): androidx.core.content.pm.ShortcutInfoCompat;
						public setActivity(param0: globalAndroid.content.ComponentName): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setLongLabel(param0: string): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setIntent(param0: globalAndroid.content.Intent): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setIntents(param0: native.Array<globalAndroid.content.Intent>): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public constructor(param0: globalAndroid.content.Context, param1: string);
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module pm {
				export class ShortcutManagerCompat {
					public static class: java.lang.Class<androidx.core.content.pm.ShortcutManagerCompat>;
					public static createShortcutResultIntent(param0: globalAndroid.content.Context, param1: androidx.core.content.pm.ShortcutInfoCompat): globalAndroid.content.Intent;
					public static isRequestPinShortcutSupported(param0: globalAndroid.content.Context): boolean;
					public static requestPinShortcut(param0: globalAndroid.content.Context, param1: androidx.core.content.pm.ShortcutInfoCompat, param2: globalAndroid.content.IntentSender): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class ColorStateListInflaterCompat {
					public static class: java.lang.Class<androidx.core.content.res.ColorStateListInflaterCompat>;
					public static createFromXml(param0: globalAndroid.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: globalAndroid.content.res.Resources.Theme): globalAndroid.content.res.ColorStateList;
					public static createFromXmlInner(param0: globalAndroid.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: globalAndroid.util.AttributeSet, param3: globalAndroid.content.res.Resources.Theme): globalAndroid.content.res.ColorStateList;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class ComplexColorCompat {
					public static class: java.lang.Class<androidx.core.content.res.ComplexColorCompat>;
					public setColor(param0: number): void;
					public isGradient(): boolean;
					public getColor(): number;
					public getShader(): globalAndroid.graphics.Shader;
					public isStateful(): boolean;
					public willDraw(): boolean;
					public onStateChanged(param0: native.Array<number>): boolean;
					public static inflate(param0: globalAndroid.content.res.Resources, param1: number, param2: globalAndroid.content.res.Resources.Theme): androidx.core.content.res.ComplexColorCompat;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class ConfigurationHelper {
					public static class: java.lang.Class<androidx.core.content.res.ConfigurationHelper>;
					public static getDensityDpi(param0: globalAndroid.content.res.Resources): number;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class FontResourcesParserCompat {
					public static class: java.lang.Class<androidx.core.content.res.FontResourcesParserCompat>;
					public static FETCH_STRATEGY_BLOCKING: number;
					public static FETCH_STRATEGY_ASYNC: number;
					public static INFINITE_TIMEOUT_VALUE: number;
					public static parse(param0: org.xmlpull.v1.XmlPullParser, param1: globalAndroid.content.res.Resources): androidx.core.content.res.FontResourcesParserCompat.FamilyResourceEntry;
					public static readCerts(param0: globalAndroid.content.res.Resources, param1: number): java.util.List<java.util.List<native.Array<number>>>;
				}
				export module FontResourcesParserCompat {
					export class FamilyResourceEntry {
						public static class: java.lang.Class<androidx.core.content.res.FontResourcesParserCompat.FamilyResourceEntry>;
						/**
						 * Constructs a new instance of the androidx.core.content.res.FontResourcesParserCompat$FamilyResourceEntry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class FetchStrategy {
						public static class: java.lang.Class<androidx.core.content.res.FontResourcesParserCompat.FetchStrategy>;
						/**
						 * Constructs a new instance of the androidx.core.content.res.FontResourcesParserCompat$FetchStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class FontFamilyFilesResourceEntry extends androidx.core.content.res.FontResourcesParserCompat.FamilyResourceEntry {
						public static class: java.lang.Class<androidx.core.content.res.FontResourcesParserCompat.FontFamilyFilesResourceEntry>;
						public constructor(param0: native.Array<androidx.core.content.res.FontResourcesParserCompat.FontFileResourceEntry>);
						public getEntries(): native.Array<androidx.core.content.res.FontResourcesParserCompat.FontFileResourceEntry>;
					}
					export class FontFileResourceEntry {
						public static class: java.lang.Class<androidx.core.content.res.FontResourcesParserCompat.FontFileResourceEntry>;
						public isItalic(): boolean;
						public getVariationSettings(): string;
						public getWeight(): number;
						public getFileName(): string;
						public getTtcIndex(): number;
						public getResourceId(): number;
						public constructor(param0: string, param1: number, param2: boolean, param3: string, param4: number, param5: number);
					}
					export class ProviderResourceEntry extends androidx.core.content.res.FontResourcesParserCompat.FamilyResourceEntry {
						public static class: java.lang.Class<androidx.core.content.res.FontResourcesParserCompat.ProviderResourceEntry>;
						public getRequest(): androidx.core.provider.FontRequest;
						public getFetchStrategy(): number;
						public constructor(param0: androidx.core.provider.FontRequest, param1: number, param2: number);
						public getTimeout(): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class GradientColorInflaterCompat {
					public static class: java.lang.Class<androidx.core.content.res.GradientColorInflaterCompat>;
				}
				export module GradientColorInflaterCompat {
					export class ColorStops {
						public static class: java.lang.Class<androidx.core.content.res.GradientColorInflaterCompat.ColorStops>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class GrowingArrayUtils {
					public static class: java.lang.Class<androidx.core.content.res.GrowingArrayUtils>;
					public static append(param0: native.Array<any>, param1: number, param2: any): native.Array<any>;
					public static append(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
					public static append(param0: native.Array<boolean>, param1: number, param2: boolean): native.Array<boolean>;
					public static growSize(param0: number): number;
					public static insert(param0: native.Array<boolean>, param1: number, param2: number, param3: boolean): native.Array<boolean>;
					public static insert(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;
					public static insert(param0: native.Array<any>, param1: number, param2: number, param3: any): native.Array<any>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class ResourcesCompat {
					public static class: java.lang.Class<androidx.core.content.res.ResourcesCompat>;
					public static getFont(param0: globalAndroid.content.Context, param1: number): globalAndroid.graphics.Typeface;
					public static getDrawableForDensity(param0: globalAndroid.content.res.Resources, param1: number, param2: number, param3: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
					public static getColorStateList(param0: globalAndroid.content.res.Resources, param1: number, param2: globalAndroid.content.res.Resources.Theme): globalAndroid.content.res.ColorStateList;
					public static getFont(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.util.TypedValue, param3: number, param4: androidx.core.content.res.ResourcesCompat.FontCallback): globalAndroid.graphics.Typeface;
					public static getFont(param0: globalAndroid.content.Context, param1: number, param2: androidx.core.content.res.ResourcesCompat.FontCallback, param3: globalAndroid.os.Handler): void;
					public static getDrawable(param0: globalAndroid.content.res.Resources, param1: number, param2: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
					public static getColor(param0: globalAndroid.content.res.Resources, param1: number, param2: globalAndroid.content.res.Resources.Theme): number;
				}
				export module ResourcesCompat {
					export abstract class FontCallback {
						public static class: java.lang.Class<androidx.core.content.res.ResourcesCompat.FontCallback>;
						public constructor();
						public onFontRetrievalFailed(param0: number): void;
						public callbackSuccessAsync(param0: globalAndroid.graphics.Typeface, param1: globalAndroid.os.Handler): void;
						public callbackFailAsync(param0: number, param1: globalAndroid.os.Handler): void;
						public onFontRetrieved(param0: globalAndroid.graphics.Typeface): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class TypedArrayUtils {
					public static class: java.lang.Class<androidx.core.content.res.TypedArrayUtils>;
					public static getNamedResourceId(param0: globalAndroid.content.res.TypedArray, param1: org.xmlpull.v1.XmlPullParser, param2: string, param3: number, param4: number): number;
					public static getNamedBoolean(param0: globalAndroid.content.res.TypedArray, param1: org.xmlpull.v1.XmlPullParser, param2: string, param3: number, param4: boolean): boolean;
					public static getDrawable(param0: globalAndroid.content.res.TypedArray, param1: number, param2: number): globalAndroid.graphics.drawable.Drawable;
					public static getString(param0: globalAndroid.content.res.TypedArray, param1: number, param2: number): string;
					public static peekNamedValue(param0: globalAndroid.content.res.TypedArray, param1: org.xmlpull.v1.XmlPullParser, param2: string, param3: number): globalAndroid.util.TypedValue;
					public static getNamedString(param0: globalAndroid.content.res.TypedArray, param1: org.xmlpull.v1.XmlPullParser, param2: string, param3: number): string;
					public static obtainAttributes(param0: globalAndroid.content.res.Resources, param1: globalAndroid.content.res.Resources.Theme, param2: globalAndroid.util.AttributeSet, param3: native.Array<number>): globalAndroid.content.res.TypedArray;
					public static getText(param0: globalAndroid.content.res.TypedArray, param1: number, param2: number): string;
					public static hasAttribute(param0: org.xmlpull.v1.XmlPullParser, param1: string): boolean;
					public static getNamedComplexColor(param0: globalAndroid.content.res.TypedArray, param1: org.xmlpull.v1.XmlPullParser, param2: globalAndroid.content.res.Resources.Theme, param3: string, param4: number, param5: number): androidx.core.content.res.ComplexColorCompat;
					public static getInt(param0: globalAndroid.content.res.TypedArray, param1: number, param2: number, param3: number): number;
					public static getBoolean(param0: globalAndroid.content.res.TypedArray, param1: number, param2: number, param3: boolean): boolean;
					public static getTextArray(param0: globalAndroid.content.res.TypedArray, param1: number, param2: number): native.Array<string>;
					public static getNamedColor(param0: globalAndroid.content.res.TypedArray, param1: org.xmlpull.v1.XmlPullParser, param2: string, param3: number, param4: number): number;
					public static getNamedFloat(param0: globalAndroid.content.res.TypedArray, param1: org.xmlpull.v1.XmlPullParser, param2: string, param3: number, param4: number): number;
					public static getResourceId(param0: globalAndroid.content.res.TypedArray, param1: number, param2: number, param3: number): number;
					public static getAttr(param0: globalAndroid.content.Context, param1: number, param2: number): number;
					public static getNamedInt(param0: globalAndroid.content.res.TypedArray, param1: org.xmlpull.v1.XmlPullParser, param2: string, param3: number, param4: number): number;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module database {
			export class CursorWindowCompat {
				public static class: java.lang.Class<androidx.core.database.CursorWindowCompat>;
				public static create(param0: string, param1: number): globalAndroid.database.CursorWindow;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module database {
			export class DatabaseUtilsCompat {
				public static class: java.lang.Class<androidx.core.database.DatabaseUtilsCompat>;
				public static appendSelectionArgs(param0: native.Array<string>, param1: native.Array<string>): native.Array<string>;
				public static concatenateWhere(param0: string, param1: string): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module database {
			export module sqlite {
				export class SQLiteCursorCompat {
					public static class: java.lang.Class<androidx.core.database.sqlite.SQLiteCursorCompat>;
					public static setFillWindowForwardOnly(param0: globalAndroid.database.sqlite.SQLiteCursor, param1: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class BitmapCompat {
				public static class: java.lang.Class<androidx.core.graphics.BitmapCompat>;
				public static getAllocationByteCount(param0: globalAndroid.graphics.Bitmap): number;
				public static setHasMipMap(param0: globalAndroid.graphics.Bitmap, param1: boolean): void;
				public static hasMipMap(param0: globalAndroid.graphics.Bitmap): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class ColorUtils {
				public static class: java.lang.Class<androidx.core.graphics.ColorUtils>;
				public static LABToColor(param0: number, param1: number, param2: number): number;
				public static calculateContrast(param0: number, param1: number): number;
				public static RGBToHSL(param0: number, param1: number, param2: number, param3: native.Array<number>): void;
				public static colorToLAB(param0: number, param1: native.Array<number>): void;
				public static blendARGB(param0: number, param1: number, param2: number): number;
				public static colorToHSL(param0: number, param1: native.Array<number>): void;
				public static RGBToXYZ(param0: number, param1: number, param2: number, param3: native.Array<number>): void;
				public static XYZToLAB(param0: number, param1: number, param2: number, param3: native.Array<number>): void;
				public static calculateLuminance(param0: number): number;
				public static setAlphaComponent(param0: number, param1: number): number;
				public static compositeColors(param0: number, param1: number): number;
				public static calculateMinimumAlpha(param0: number, param1: number, param2: number): number;
				public static HSLToColor(param0: native.Array<number>): number;
				public static blendHSL(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: native.Array<number>): void;
				public static XYZToColor(param0: number, param1: number, param2: number): number;
				public static RGBToLAB(param0: number, param1: number, param2: number, param3: native.Array<number>): void;
				public static compositeColors(param0: globalAndroid.graphics.Color, param1: globalAndroid.graphics.Color): globalAndroid.graphics.Color;
				public static distanceEuclidean(param0: native.Array<number>, param1: native.Array<number>): number;
				public static blendLAB(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: native.Array<number>): void;
				public static LABToXYZ(param0: number, param1: number, param2: number, param3: native.Array<number>): void;
				public static colorToXYZ(param0: number, param1: native.Array<number>): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class PaintCompat {
				public static class: java.lang.Class<androidx.core.graphics.PaintCompat>;
				public static hasGlyph(param0: globalAndroid.graphics.Paint, param1: string): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class PathParser {
				public static class: java.lang.Class<androidx.core.graphics.PathParser>;
				public static deepCopyNodes(param0: native.Array<androidx.core.graphics.PathParser.PathDataNode>): native.Array<androidx.core.graphics.PathParser.PathDataNode>;
				public static canMorph(param0: native.Array<androidx.core.graphics.PathParser.PathDataNode>, param1: native.Array<androidx.core.graphics.PathParser.PathDataNode>): boolean;
				public static createPathFromPathData(param0: string): globalAndroid.graphics.Path;
				public static createNodesFromPathData(param0: string): native.Array<androidx.core.graphics.PathParser.PathDataNode>;
				public static updateNodes(param0: native.Array<androidx.core.graphics.PathParser.PathDataNode>, param1: native.Array<androidx.core.graphics.PathParser.PathDataNode>): void;
			}
			export module PathParser {
				export class ExtractFloatResult {
					public static class: java.lang.Class<androidx.core.graphics.PathParser.ExtractFloatResult>;
				}
				export class PathDataNode {
					public static class: java.lang.Class<androidx.core.graphics.PathParser.PathDataNode>;
					public mType: string;
					public mParams: native.Array<number>;
					public static nodesToPath(param0: native.Array<androidx.core.graphics.PathParser.PathDataNode>, param1: globalAndroid.graphics.Path): void;
					public interpolatePathDataNode(param0: androidx.core.graphics.PathParser.PathDataNode, param1: androidx.core.graphics.PathParser.PathDataNode, param2: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class PathSegment {
				public static class: java.lang.Class<androidx.core.graphics.PathSegment>;
				public getStart(): globalAndroid.graphics.PointF;
				public getEndFraction(): number;
				public getStartFraction(): number;
				public getEnd(): globalAndroid.graphics.PointF;
				public constructor(param0: globalAndroid.graphics.PointF, param1: number, param2: globalAndroid.graphics.PointF, param3: number);
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class PathUtils {
				public static class: java.lang.Class<androidx.core.graphics.PathUtils>;
				public static flatten(param0: globalAndroid.graphics.Path, param1: number): java.util.Collection<androidx.core.graphics.PathSegment>;
				public static flatten(param0: globalAndroid.graphics.Path): java.util.Collection<androidx.core.graphics.PathSegment>;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class TypefaceCompat {
				public static class: java.lang.Class<androidx.core.graphics.TypefaceCompat>;
				public static createFromFontInfo(param0: globalAndroid.content.Context, param1: globalAndroid.os.CancellationSignal, param2: native.Array<androidx.core.provider.FontsContractCompat.FontInfo>, param3: number): globalAndroid.graphics.Typeface;
				public static createFromResourcesFamilyXml(param0: globalAndroid.content.Context, param1: androidx.core.content.res.FontResourcesParserCompat.FamilyResourceEntry, param2: globalAndroid.content.res.Resources, param3: number, param4: number, param5: androidx.core.content.res.ResourcesCompat.FontCallback, param6: globalAndroid.os.Handler, param7: boolean): globalAndroid.graphics.Typeface;
				public static findFromCache(param0: globalAndroid.content.res.Resources, param1: number, param2: number): globalAndroid.graphics.Typeface;
				public static createFromResourcesFontFile(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.Resources, param2: number, param3: string, param4: number): globalAndroid.graphics.Typeface;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class TypefaceCompatApi21Impl extends androidx.core.graphics.TypefaceCompatBaseImpl {
				public static class: java.lang.Class<androidx.core.graphics.TypefaceCompatApi21Impl>;
				public createFromFontInfo(param0: globalAndroid.content.Context, param1: globalAndroid.os.CancellationSignal, param2: native.Array<androidx.core.provider.FontsContractCompat.FontInfo>, param3: number): globalAndroid.graphics.Typeface;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class TypefaceCompatApi24Impl extends androidx.core.graphics.TypefaceCompatBaseImpl {
				public static class: java.lang.Class<androidx.core.graphics.TypefaceCompatApi24Impl>;
				public static isUsable(): boolean;
				public createFromFontFamilyFilesResourceEntry(param0: globalAndroid.content.Context, param1: androidx.core.content.res.FontResourcesParserCompat.FontFamilyFilesResourceEntry, param2: globalAndroid.content.res.Resources, param3: number): globalAndroid.graphics.Typeface;
				public createFromFontInfo(param0: globalAndroid.content.Context, param1: globalAndroid.os.CancellationSignal, param2: native.Array<androidx.core.provider.FontsContractCompat.FontInfo>, param3: number): globalAndroid.graphics.Typeface;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class TypefaceCompatApi26Impl extends androidx.core.graphics.TypefaceCompatApi21Impl {
				public static class: java.lang.Class<androidx.core.graphics.TypefaceCompatApi26Impl>;
				public mFontFamily: java.lang.Class<any>;
				public mFontFamilyCtor: java.lang.reflect.Constructor<any>;
				public mAddFontFromAssetManager: java.lang.reflect.Method;
				public mAddFontFromBuffer: java.lang.reflect.Method;
				public mFreeze: java.lang.reflect.Method;
				public mAbortCreation: java.lang.reflect.Method;
				public mCreateFromFamiliesWithDefault: java.lang.reflect.Method;
				public createFromResourcesFontFile(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.Resources, param2: number, param3: string, param4: number): globalAndroid.graphics.Typeface;
				public obtainFreezeMethod(param0: java.lang.Class<any>): java.lang.reflect.Method;
				public createFromFontFamilyFilesResourceEntry(param0: globalAndroid.content.Context, param1: androidx.core.content.res.FontResourcesParserCompat.FontFamilyFilesResourceEntry, param2: globalAndroid.content.res.Resources, param3: number): globalAndroid.graphics.Typeface;
				public obtainFontFamilyCtor(param0: java.lang.Class<any>): java.lang.reflect.Constructor<any>;
				public obtainAddFontFromAssetManagerMethod(param0: java.lang.Class<any>): java.lang.reflect.Method;
				public obtainAbortCreationMethod(param0: java.lang.Class<any>): java.lang.reflect.Method;
				public createFromFamiliesWithDefault(param0: any): globalAndroid.graphics.Typeface;
				public obtainFontFamily(): java.lang.Class<any>;
				public createFromFontInfo(param0: globalAndroid.content.Context, param1: globalAndroid.os.CancellationSignal, param2: native.Array<androidx.core.provider.FontsContractCompat.FontInfo>, param3: number): globalAndroid.graphics.Typeface;
				public obtainAddFontFromBufferMethod(param0: java.lang.Class<any>): java.lang.reflect.Method;
				public obtainCreateFromFamiliesWithDefaultMethod(param0: java.lang.Class<any>): java.lang.reflect.Method;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class TypefaceCompatApi28Impl extends androidx.core.graphics.TypefaceCompatApi26Impl {
				public static class: java.lang.Class<androidx.core.graphics.TypefaceCompatApi28Impl>;
				public createFromFamiliesWithDefault(param0: any): globalAndroid.graphics.Typeface;
				public obtainCreateFromFamiliesWithDefaultMethod(param0: java.lang.Class<any>): java.lang.reflect.Method;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class TypefaceCompatBaseImpl {
				public static class: java.lang.Class<androidx.core.graphics.TypefaceCompatBaseImpl>;
				public createFromResourcesFontFile(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.Resources, param2: number, param3: string, param4: number): globalAndroid.graphics.Typeface;
				public findBestInfo(param0: native.Array<androidx.core.provider.FontsContractCompat.FontInfo>, param1: number): androidx.core.provider.FontsContractCompat.FontInfo;
				public createFromFontFamilyFilesResourceEntry(param0: globalAndroid.content.Context, param1: androidx.core.content.res.FontResourcesParserCompat.FontFamilyFilesResourceEntry, param2: globalAndroid.content.res.Resources, param3: number): globalAndroid.graphics.Typeface;
				public createFromInputStream(param0: globalAndroid.content.Context, param1: java.io.InputStream): globalAndroid.graphics.Typeface;
				public createFromFontInfo(param0: globalAndroid.content.Context, param1: globalAndroid.os.CancellationSignal, param2: native.Array<androidx.core.provider.FontsContractCompat.FontInfo>, param3: number): globalAndroid.graphics.Typeface;
			}
			export module TypefaceCompatBaseImpl {
				export class StyleExtractor<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.graphics.TypefaceCompatBaseImpl.StyleExtractor<any>>;
					/**
					 * Constructs a new instance of the androidx.core.graphics.TypefaceCompatBaseImpl$StyleExtractor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getWeight(param0: T): number;
						isItalic(param0: T): boolean;
					});
					public constructor();
					public getWeight(param0: T): number;
					public isItalic(param0: T): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class TypefaceCompatUtil {
				public static class: java.lang.Class<androidx.core.graphics.TypefaceCompatUtil>;
				public static copyToFile(param0: java.io.File, param1: java.io.InputStream): boolean;
				public static copyToFile(param0: java.io.File, param1: globalAndroid.content.res.Resources, param2: number): boolean;
				public static copyToDirectBuffer(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.Resources, param2: number): java.nio.ByteBuffer;
				public static closeQuietly(param0: java.io.Closeable): void;
				public static mmap(param0: globalAndroid.content.Context, param1: globalAndroid.os.CancellationSignal, param2: globalAndroid.net.Uri): java.nio.ByteBuffer;
				public static getTempFile(param0: globalAndroid.content.Context): java.io.File;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class DrawableCompat {
					public static class: java.lang.Class<androidx.core.graphics.drawable.DrawableCompat>;
					public static getColorFilter(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.ColorFilter;
					public static setAutoMirrored(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean): void;
					public static jumpToCurrentState(param0: globalAndroid.graphics.drawable.Drawable): void;
					public static applyTheme(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.content.res.Resources.Theme): void;
					public static clearColorFilter(param0: globalAndroid.graphics.drawable.Drawable): void;
					public static setTint(param0: globalAndroid.graphics.drawable.Drawable, param1: number): void;
					public static wrap(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public static unwrap(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public static setLayoutDirection(param0: globalAndroid.graphics.drawable.Drawable, param1: number): boolean;
					public static setHotspotBounds(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: number, param3: number, param4: number): void;
					public static setTintList(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.content.res.ColorStateList): void;
					public static setTintMode(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.PorterDuff.Mode): void;
					public static getLayoutDirection(param0: globalAndroid.graphics.drawable.Drawable): number;
					public static inflate(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.content.res.Resources, param2: org.xmlpull.v1.XmlPullParser, param3: globalAndroid.util.AttributeSet, param4: globalAndroid.content.res.Resources.Theme): void;
					public static getAlpha(param0: globalAndroid.graphics.drawable.Drawable): number;
					public static setHotspot(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: number): void;
					public static canApplyTheme(param0: globalAndroid.graphics.drawable.Drawable): boolean;
					public static isAutoMirrored(param0: globalAndroid.graphics.drawable.Drawable): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class IconCompat {
					public static class: java.lang.Class<androidx.core.graphics.drawable.IconCompat>;
					public static TYPE_UNKNOWN: number;
					public mType: number;
					public mData: native.Array<number>;
					public mParcelable: globalAndroid.os.Parcelable;
					public mInt1: number;
					public mInt2: number;
					public mTintList: globalAndroid.content.res.ColorStateList;
					public mTintModeStr: string;
					public getType(): number;
					public setTint(param0: number): androidx.core.graphics.drawable.IconCompat;
					public static createWithResource(param0: globalAndroid.content.Context, param1: number): androidx.core.graphics.drawable.IconCompat;
					public static createFromIcon(param0: any): androidx.core.graphics.drawable.IconCompat;
					public getResId(): number;
					public static createFromIcon(param0: globalAndroid.content.Context, param1: any): androidx.core.graphics.drawable.IconCompat;
					public static createWithBitmap(param0: globalAndroid.graphics.Bitmap): androidx.core.graphics.drawable.IconCompat;
					public static createWithContentUri(param0: globalAndroid.net.Uri): androidx.core.graphics.drawable.IconCompat;
					public checkResource(param0: globalAndroid.content.Context): void;
					public static createWithAdaptiveBitmap(param0: globalAndroid.graphics.Bitmap): androidx.core.graphics.drawable.IconCompat;
					public toString(): string;
					public addToShortcutIntent(param0: globalAndroid.content.Intent, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.content.Context): void;
					public constructor();
					public setTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): androidx.core.graphics.drawable.IconCompat;
					public static createWithData(param0: native.Array<number>, param1: number, param2: number): androidx.core.graphics.drawable.IconCompat;
					public onPreParceling(param0: boolean): void;
					public getResPackage(): string;
					public static createWithContentUri(param0: string): androidx.core.graphics.drawable.IconCompat;
					public static createWithResource(param0: globalAndroid.content.res.Resources, param1: string, param2: number): androidx.core.graphics.drawable.IconCompat;
					public toBundle(): globalAndroid.os.Bundle;
					public toIcon(): any;
					public setTintList(param0: globalAndroid.content.res.ColorStateList): androidx.core.graphics.drawable.IconCompat;
					public loadDrawable(param0: globalAndroid.content.Context): globalAndroid.graphics.drawable.Drawable;
					public getUri(): globalAndroid.net.Uri;
					public static createFromBundle(param0: globalAndroid.os.Bundle): androidx.core.graphics.drawable.IconCompat;
					public onPostParceling(): void;
				}
				export module IconCompat {
					export class IconType {
						public static class: java.lang.Class<androidx.core.graphics.drawable.IconCompat.IconType>;
						/**
						 * Constructs a new instance of the androidx.core.graphics.drawable.IconCompat$IconType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module core {
		export module graphics {
			export module drawable {
				export class IconCompatParcelizer {
					public static class: java.lang.Class<androidx.core.graphics.drawable.IconCompatParcelizer>;
					public static read(param0: androidx.versionedparcelable.VersionedParcel): androidx.core.graphics.drawable.IconCompat;
					public constructor();
					public static write(param0: androidx.core.graphics.drawable.IconCompat, param1: androidx.versionedparcelable.VersionedParcel): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export abstract class RoundedBitmapDrawable {
					public static class: java.lang.Class<androidx.core.graphics.drawable.RoundedBitmapDrawable>;
					public getGravity(): number;
					public setMipMap(param0: boolean): void;
					public hasAntiAlias(): boolean;
					public setDither(param0: boolean): void;
					public getCornerRadius(): number;
					public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
					public getIntrinsicWidth(): number;
					public setTargetDensity(param0: globalAndroid.util.DisplayMetrics): void;
					public setFilterBitmap(param0: boolean): void;
					public getColorFilter(): globalAndroid.graphics.ColorFilter;
					public setAntiAlias(param0: boolean): void;
					public getOpacity(): number;
					public getAlpha(): number;
					public setCircular(param0: boolean): void;
					public setGravity(param0: number): void;
					public setCornerRadius(param0: number): void;
					public getIntrinsicHeight(): number;
					public setAlpha(param0: number): void;
					public getBitmap(): globalAndroid.graphics.Bitmap;
					public getPaint(): globalAndroid.graphics.Paint;
					public setTargetDensity(param0: globalAndroid.graphics.Canvas): void;
					public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
					public setTargetDensity(param0: number): void;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public hasMipMap(): boolean;
					public isCircular(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class RoundedBitmapDrawable21 extends androidx.core.graphics.drawable.RoundedBitmapDrawable {
					public static class: java.lang.Class<androidx.core.graphics.drawable.RoundedBitmapDrawable21>;
					public setMipMap(param0: boolean): void;
					public getOutline(param0: any): void;
					public constructor(param0: globalAndroid.content.res.Resources, param1: globalAndroid.graphics.Bitmap);
					public hasMipMap(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class RoundedBitmapDrawableFactory {
					public static class: java.lang.Class<androidx.core.graphics.drawable.RoundedBitmapDrawableFactory>;
					public static create(param0: globalAndroid.content.res.Resources, param1: string): androidx.core.graphics.drawable.RoundedBitmapDrawable;
					public static create(param0: globalAndroid.content.res.Resources, param1: globalAndroid.graphics.Bitmap): androidx.core.graphics.drawable.RoundedBitmapDrawable;
					public static create(param0: globalAndroid.content.res.Resources, param1: java.io.InputStream): androidx.core.graphics.drawable.RoundedBitmapDrawable;
				}
				export module RoundedBitmapDrawableFactory {
					export class DefaultRoundedBitmapDrawable extends androidx.core.graphics.drawable.RoundedBitmapDrawable {
						public static class: java.lang.Class<androidx.core.graphics.drawable.RoundedBitmapDrawableFactory.DefaultRoundedBitmapDrawable>;
						public hasMipMap(): boolean;
						public setMipMap(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class TintAwareDrawable {
					public static class: java.lang.Class<androidx.core.graphics.drawable.TintAwareDrawable>;
					/**
					 * Constructs a new instance of the androidx.core.graphics.drawable.TintAwareDrawable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setTint(param0: number): void;
						setTintList(param0: globalAndroid.content.res.ColorStateList): void;
						setTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
					});
					public constructor();
					public setTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
					public setTintList(param0: globalAndroid.content.res.ColorStateList): void;
					public setTint(param0: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class WrappedDrawable {
					public static class: java.lang.Class<androidx.core.graphics.drawable.WrappedDrawable>;
					/**
					 * Constructs a new instance of the androidx.core.graphics.drawable.WrappedDrawable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getWrappedDrawable(): globalAndroid.graphics.drawable.Drawable;
						setWrappedDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					});
					public constructor();
					public getWrappedDrawable(): globalAndroid.graphics.drawable.Drawable;
					public setWrappedDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class WrappedDrawableApi14 implements androidx.core.graphics.drawable.WrappedDrawable, androidx.core.graphics.drawable.TintAwareDrawable {
					public static class: java.lang.Class<androidx.core.graphics.drawable.WrappedDrawableApi14>;
					public getMinimumWidth(): number;
					public setDither(param0: boolean): void;
					public setTintList(param0: globalAndroid.content.res.ColorStateList): void;
					public isCompatTintEnabled(): boolean;
					public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
					public isStateful(): boolean;
					public onLevelChange(param0: number): boolean;
					public getIntrinsicWidth(): number;
					public setWrappedDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
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
					public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
					public getCurrent(): globalAndroid.graphics.drawable.Drawable;
					public setAlpha(param0: number): void;
					public mutate(): globalAndroid.graphics.drawable.Drawable;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
					public setState(param0: native.Array<number>): boolean;
					public setVisible(param0: boolean, param1: boolean): boolean;
					public isAutoMirrored(): boolean;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				}
				export module WrappedDrawableApi14 {
					export abstract class DrawableWrapperState {
						public static class: java.lang.Class<androidx.core.graphics.drawable.WrappedDrawableApi14.DrawableWrapperState>;
						public getChangingConfigurations(): number;
						public newDrawable(): globalAndroid.graphics.drawable.Drawable;
						public newDrawable(param0: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
					}
					export class DrawableWrapperStateBase extends androidx.core.graphics.drawable.WrappedDrawableApi14.DrawableWrapperState {
						public static class: java.lang.Class<androidx.core.graphics.drawable.WrappedDrawableApi14.DrawableWrapperStateBase>;
						public newDrawable(): globalAndroid.graphics.drawable.Drawable;
						public newDrawable(param0: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class WrappedDrawableApi21 extends androidx.core.graphics.drawable.WrappedDrawableApi14 {
					public static class: java.lang.Class<androidx.core.graphics.drawable.WrappedDrawableApi21>;
					public setHotspot(param0: number, param1: number): void;
					public setTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
					public getDirtyBounds(): globalAndroid.graphics.Rect;
					public setTintList(param0: globalAndroid.content.res.ColorStateList): void;
					public setState(param0: native.Array<number>): boolean;
					public isProjected(): boolean;
					public isCompatTintEnabled(): boolean;
					public getOutline(param0: any): void;
					public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;
					public getWrappedDrawable(): globalAndroid.graphics.drawable.Drawable;
					public setTint(param0: number): void;
					public setWrappedDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				}
				export module WrappedDrawableApi21 {
					export class DrawableWrapperStateLollipop extends androidx.core.graphics.drawable.WrappedDrawableApi14.DrawableWrapperState {
						public static class: java.lang.Class<androidx.core.graphics.drawable.WrappedDrawableApi21.DrawableWrapperStateLollipop>;
						public newDrawable(): globalAndroid.graphics.drawable.Drawable;
						public newDrawable(param0: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module hardware {
			export module display {
				export class DisplayManagerCompat {
					public static class: java.lang.Class<androidx.core.hardware.display.DisplayManagerCompat>;
					public static DISPLAY_CATEGORY_PRESENTATION: string;
					public static getInstance(param0: globalAndroid.content.Context): androidx.core.hardware.display.DisplayManagerCompat;
					public getDisplay(param0: number): globalAndroid.view.Display;
					public getDisplays(): native.Array<globalAndroid.view.Display>;
					public getDisplays(param0: string): native.Array<globalAndroid.view.Display>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module hardware {
			export module fingerprint {
				export class FingerprintManagerCompat {
					public static class: java.lang.Class<androidx.core.hardware.fingerprint.FingerprintManagerCompat>;
					public static from(param0: globalAndroid.content.Context): androidx.core.hardware.fingerprint.FingerprintManagerCompat;
					public authenticate(param0: androidx.core.hardware.fingerprint.FingerprintManagerCompat.CryptoObject, param1: number, param2: androidx.core.os.CancellationSignal, param3: androidx.core.hardware.fingerprint.FingerprintManagerCompat.AuthenticationCallback, param4: globalAndroid.os.Handler): void;
					public hasEnrolledFingerprints(): boolean;
					public isHardwareDetected(): boolean;
				}
				export module FingerprintManagerCompat {
					export abstract class AuthenticationCallback {
						public static class: java.lang.Class<androidx.core.hardware.fingerprint.FingerprintManagerCompat.AuthenticationCallback>;
						public onAuthenticationHelp(param0: number, param1: string): void;
						public onAuthenticationFailed(): void;
						public constructor();
						public onAuthenticationSucceeded(param0: androidx.core.hardware.fingerprint.FingerprintManagerCompat.AuthenticationResult): void;
						public onAuthenticationError(param0: number, param1: string): void;
					}
					export class AuthenticationResult {
						public static class: java.lang.Class<androidx.core.hardware.fingerprint.FingerprintManagerCompat.AuthenticationResult>;
						public getCryptoObject(): androidx.core.hardware.fingerprint.FingerprintManagerCompat.CryptoObject;
						public constructor(param0: androidx.core.hardware.fingerprint.FingerprintManagerCompat.CryptoObject);
					}
					export class CryptoObject {
						public static class: java.lang.Class<androidx.core.hardware.fingerprint.FingerprintManagerCompat.CryptoObject>;
						public getMac(): javax.crypto.Mac;
						public constructor(param0: javax.crypto.Cipher);
						public getSignature(): java.security.Signature;
						public getCipher(): javax.crypto.Cipher;
						public constructor(param0: javax.crypto.Mac);
						public constructor(param0: java.security.Signature);
					}
				}
			}
		}
	}
}


declare module androidx {
	export module core {
		export module internal {
			export module view {
				export class SupportMenu {
					public static class: java.lang.Class<androidx.core.internal.view.SupportMenu>;
					/**
					 * Constructs a new instance of the androidx.core.internal.view.SupportMenu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setGroupDividerEnabled(param0: boolean): void;
					});
					public constructor();
					public static FLAG_KEEP_OPEN_ON_SUBMENU_OPENED: number;
					public static CATEGORY_MASK: number;
					public static USER_SHIFT: number;
					public static SUPPORTED_MODIFIERS_MASK: number;
					public static USER_MASK: number;
					public static CATEGORY_SHIFT: number;
					public setGroupDividerEnabled(param0: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module internal {
			export module view {
				export class SupportMenuItem {
					public static class: java.lang.Class<androidx.core.internal.view.SupportMenuItem>;
					/**
					 * Constructs a new instance of the androidx.core.internal.view.SupportMenuItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setShowAsAction(param0: number): void;
						setShowAsActionFlags(param0: number): globalAndroid.view.MenuItem;
						setActionView(param0: globalAndroid.view.View): globalAndroid.view.MenuItem;
						setActionView(param0: number): globalAndroid.view.MenuItem;
						getActionView(): globalAndroid.view.View;
						setSupportActionProvider(param0: androidx.core.view.ActionProvider): androidx.core.internal.view.SupportMenuItem;
						getSupportActionProvider(): androidx.core.view.ActionProvider;
						expandActionView(): boolean;
						collapseActionView(): boolean;
						isActionViewExpanded(): boolean;
						setContentDescription(param0: string): androidx.core.internal.view.SupportMenuItem;
						getContentDescription(): string;
						setTooltipText(param0: string): androidx.core.internal.view.SupportMenuItem;
						getTooltipText(): string;
						setShortcut(param0: string, param1: string, param2: number, param3: number): globalAndroid.view.MenuItem;
						setNumericShortcut(param0: string, param1: number): globalAndroid.view.MenuItem;
						getNumericModifiers(): number;
						setAlphabeticShortcut(param0: string, param1: number): globalAndroid.view.MenuItem;
						getAlphabeticModifiers(): number;
						setIconTintList(param0: globalAndroid.content.res.ColorStateList): globalAndroid.view.MenuItem;
						getIconTintList(): globalAndroid.content.res.ColorStateList;
						setIconTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.view.MenuItem;
						getIconTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					});
					public constructor();
					public static SHOW_AS_ACTION_WITH_TEXT: number;
					public static SHOW_AS_ACTION_ALWAYS: number;
					public static SHOW_AS_ACTION_NEVER: number;
					public static SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW: number;
					public static SHOW_AS_ACTION_IF_ROOM: number;
					public setActionView(param0: number): globalAndroid.view.MenuItem;
					public getSupportActionProvider(): androidx.core.view.ActionProvider;
					public isActionViewExpanded(): boolean;
					public setIconTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): globalAndroid.view.MenuItem;
					public setShortcut(param0: string, param1: string, param2: number, param3: number): globalAndroid.view.MenuItem;
					public getContentDescription(): string;
					public getIconTintList(): globalAndroid.content.res.ColorStateList;
					public setShowAsAction(param0: number): void;
					public getIconTintMode(): globalAndroid.graphics.PorterDuff.Mode;
					public getActionView(): globalAndroid.view.View;
					public setAlphabeticShortcut(param0: string, param1: number): globalAndroid.view.MenuItem;
					public setSupportActionProvider(param0: androidx.core.view.ActionProvider): androidx.core.internal.view.SupportMenuItem;
					public setTooltipText(param0: string): androidx.core.internal.view.SupportMenuItem;
					public setNumericShortcut(param0: string, param1: number): globalAndroid.view.MenuItem;
					public getNumericModifiers(): number;
					public getAlphabeticModifiers(): number;
					public collapseActionView(): boolean;
					public getTooltipText(): string;
					public setContentDescription(param0: string): androidx.core.internal.view.SupportMenuItem;
					public setActionView(param0: globalAndroid.view.View): globalAndroid.view.MenuItem;
					public setShowAsActionFlags(param0: number): globalAndroid.view.MenuItem;
					public expandActionView(): boolean;
					public setIconTintList(param0: globalAndroid.content.res.ColorStateList): globalAndroid.view.MenuItem;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module internal {
			export module view {
				export class SupportSubMenu extends androidx.core.internal.view.SupportMenu {
					public static class: java.lang.Class<androidx.core.internal.view.SupportSubMenu>;
					/**
					 * Constructs a new instance of the androidx.core.internal.view.SupportSubMenu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setGroupDividerEnabled(param0: boolean): void;
					});
					public constructor();
					public static FLAG_KEEP_OPEN_ON_SUBMENU_OPENED: number;
					public static CATEGORY_MASK: number;
					public static USER_SHIFT: number;
					public static SUPPORTED_MODIFIERS_MASK: number;
					public static USER_MASK: number;
					public static CATEGORY_SHIFT: number;
					public setGroupDividerEnabled(param0: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module math {
			export class MathUtils {
				public static class: java.lang.Class<androidx.core.math.MathUtils>;
				public static clamp(param0: number, param1: number, param2: number): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module net {
			export class ConnectivityManagerCompat {
				public static class: java.lang.Class<androidx.core.net.ConnectivityManagerCompat>;
				public static RESTRICT_BACKGROUND_STATUS_DISABLED: number;
				public static RESTRICT_BACKGROUND_STATUS_WHITELISTED: number;
				public static RESTRICT_BACKGROUND_STATUS_ENABLED: number;
				public static isActiveNetworkMetered(param0: globalAndroid.net.ConnectivityManager): boolean;
				public static getNetworkInfoFromBroadcast(param0: globalAndroid.net.ConnectivityManager, param1: globalAndroid.content.Intent): globalAndroid.net.NetworkInfo;
				public static getRestrictBackgroundStatus(param0: globalAndroid.net.ConnectivityManager): number;
			}
			export module ConnectivityManagerCompat {
				export class RestrictBackgroundStatus {
					public static class: java.lang.Class<androidx.core.net.ConnectivityManagerCompat.RestrictBackgroundStatus>;
					/**
					 * Constructs a new instance of the androidx.core.net.ConnectivityManagerCompat$RestrictBackgroundStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module core {
		export module net {
			export class DatagramSocketWrapper {
				public static class: java.lang.Class<androidx.core.net.DatagramSocketWrapper>;
			}
			export module DatagramSocketWrapper {
				export class DatagramSocketImplWrapper {
					public static class: java.lang.Class<androidx.core.net.DatagramSocketWrapper.DatagramSocketImplWrapper>;
					public listen(param0: number): void;
					public connect(param0: java.net.InetAddress, param1: number): void;
					public bind(param0: java.net.InetAddress, param1: number): void;
					public connect(param0: java.net.SocketAddress, param1: number): void;
					public available(): number;
					public accept(param0: java.net.SocketImpl): void;
					public close(): void;
					public getOption(param0: number): any;
					public connect(param0: string, param1: number): void;
					public create(param0: boolean): void;
					public getOutputStream(): java.io.OutputStream;
					public getInputStream(): java.io.InputStream;
					public sendUrgentData(param0: number): void;
					public setOption(param0: number, param1: any): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module net {
			export class TrafficStatsCompat {
				public static class: java.lang.Class<androidx.core.net.TrafficStatsCompat>;
				public static getThreadStatsTag(): number;
				public static clearThreadStatsTag(): void;
				public static tagDatagramSocket(param0: java.net.DatagramSocket): void;
				public static untagDatagramSocket(param0: java.net.DatagramSocket): void;
				public static incrementOperationCount(param0: number): void;
				public static untagSocket(param0: java.net.Socket): void;
				public static setThreadStatsTag(param0: number): void;
				public static tagSocket(param0: java.net.Socket): void;
				public static incrementOperationCount(param0: number, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class BuildCompat {
				public static class: java.lang.Class<androidx.core.os.BuildCompat>;
				public static isAtLeastNMR1(): boolean;
				public static isAtLeastOMR1(): boolean;
				public static isAtLeastO(): boolean;
				public static isAtLeastN(): boolean;
				public static isAtLeastP(): boolean;
				public static isAtLeastQ(): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class CancellationSignal {
				public static class: java.lang.Class<androidx.core.os.CancellationSignal>;
				public isCanceled(): boolean;
				public throwIfCanceled(): void;
				public setOnCancelListener(param0: androidx.core.os.CancellationSignal.OnCancelListener): void;
				public getCancellationSignalObject(): any;
				public cancel(): void;
				public constructor();
			}
			export module CancellationSignal {
				export class OnCancelListener {
					public static class: java.lang.Class<androidx.core.os.CancellationSignal.OnCancelListener>;
					/**
					 * Constructs a new instance of the androidx.core.os.CancellationSignal$OnCancelListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCancel(): void;
					});
					public constructor();
					public onCancel(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class ConfigurationCompat {
				public static class: java.lang.Class<androidx.core.os.ConfigurationCompat>;
				public static getLocales(param0: globalAndroid.content.res.Configuration): androidx.core.os.LocaleListCompat;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class EnvironmentCompat {
				public static class: java.lang.Class<androidx.core.os.EnvironmentCompat>;
				public static MEDIA_UNKNOWN: string;
				public static getStorageState(param0: java.io.File): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class HandlerCompat {
				public static class: java.lang.Class<androidx.core.os.HandlerCompat>;
				public static postDelayed(param0: globalAndroid.os.Handler, param1: java.lang.Runnable, param2: any, param3: number): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class LocaleHelper {
				public static class: java.lang.Class<androidx.core.os.LocaleHelper>;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class LocaleListCompat {
				public static class: java.lang.Class<androidx.core.os.LocaleListCompat>;
				public static wrap(param0: any): androidx.core.os.LocaleListCompat;
				public indexOf(param0: java.util.Locale): number;
				public getFirstMatch(param0: native.Array<string>): java.util.Locale;
				public toString(): string;
				public size(): number;
				public static getDefault(): androidx.core.os.LocaleListCompat;
				public get(param0: number): java.util.Locale;
				public static create(param0: native.Array<java.util.Locale>): androidx.core.os.LocaleListCompat;
				public static forLanguageTags(param0: string): androidx.core.os.LocaleListCompat;
				public hashCode(): number;
				public toLanguageTags(): string;
				public static getEmptyLocaleList(): androidx.core.os.LocaleListCompat;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public static getAdjustedDefault(): androidx.core.os.LocaleListCompat;
				public unwrap(): any;
			}
			export module LocaleListCompat {
				export class LocaleListCompatApi24Impl extends androidx.core.os.LocaleListInterface {
					public static class: java.lang.Class<androidx.core.os.LocaleListCompat.LocaleListCompatApi24Impl>;
					public equals(param0: any): boolean;
					public indexOf(param0: java.util.Locale): number;
					public toString(): string;
					public isEmpty(): boolean;
					public getLocaleList(): any;
					public get(param0: number): java.util.Locale;
					public toLanguageTags(): string;
					public getFirstMatch(param0: native.Array<string>): java.util.Locale;
					public size(): number;
					public setLocaleList(param0: native.Array<java.util.Locale>): void;
					public hashCode(): number;
				}
				export class LocaleListCompatBaseImpl extends androidx.core.os.LocaleListInterface {
					public static class: java.lang.Class<androidx.core.os.LocaleListCompat.LocaleListCompatBaseImpl>;
					public equals(param0: any): boolean;
					public indexOf(param0: java.util.Locale): number;
					public toString(): string;
					public isEmpty(): boolean;
					public getLocaleList(): any;
					public get(param0: number): java.util.Locale;
					public toLanguageTags(): string;
					public getFirstMatch(param0: native.Array<string>): java.util.Locale;
					public size(): number;
					public setLocaleList(param0: native.Array<java.util.Locale>): void;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class LocaleListHelper {
				public static class: java.lang.Class<androidx.core.os.LocaleListHelper>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class LocaleListInterface {
				public static class: java.lang.Class<androidx.core.os.LocaleListInterface>;
				/**
				 * Constructs a new instance of the androidx.core.os.LocaleListInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setLocaleList(param0: native.Array<java.util.Locale>): void;
					getLocaleList(): any;
					get(param0: number): java.util.Locale;
					isEmpty(): boolean;
					size(): number;
					indexOf(param0: java.util.Locale): number;
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					toLanguageTags(): string;
					getFirstMatch(param0: native.Array<string>): java.util.Locale;
				});
				public constructor();
				public get(param0: number): java.util.Locale;
				public getLocaleList(): any;
				public indexOf(param0: java.util.Locale): number;
				public hashCode(): number;
				public getFirstMatch(param0: native.Array<string>): java.util.Locale;
				public equals(param0: any): boolean;
				public toLanguageTags(): string;
				public setLocaleList(param0: native.Array<java.util.Locale>): void;
				public isEmpty(): boolean;
				public toString(): string;
				public size(): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class OperationCanceledException {
				public static class: java.lang.Class<androidx.core.os.OperationCanceledException>;
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class ParcelCompat {
				public static class: java.lang.Class<androidx.core.os.ParcelCompat>;
				public static writeBoolean(param0: globalAndroid.os.Parcel, param1: boolean): void;
				public static readBoolean(param0: globalAndroid.os.Parcel): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class ParcelableCompat {
				public static class: java.lang.Class<androidx.core.os.ParcelableCompat>;
				public static newCreator(param0: androidx.core.os.ParcelableCompatCreatorCallbacks<any>): globalAndroid.os.Parcelable.Creator<any>;
			}
			export module ParcelableCompat {
				export class ParcelableCompatCreatorHoneycombMR2<T>  extends globalAndroid.os.Parcelable.ClassLoaderCreator<any> {
					public static class: java.lang.Class<androidx.core.os.ParcelableCompat.ParcelableCompatCreatorHoneycombMR2<any>>;
					public createFromParcel(param0: globalAndroid.os.Parcel): any;
					public createFromParcel(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader): any;
					public newArray(param0: number): native.Array<any>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class ParcelableCompatCreatorCallbacks<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.ParcelableCompatCreatorCallbacks<any>>;
				/**
				 * Constructs a new instance of the androidx.core.os.ParcelableCompatCreatorCallbacks<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createFromParcel(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader): T;
					newArray(param0: number): native.Array<T>;
				});
				public constructor();
				public createFromParcel(param0: globalAndroid.os.Parcel, param1: java.lang.ClassLoader): T;
				public newArray(param0: number): native.Array<T>;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class TraceCompat {
				public static class: java.lang.Class<androidx.core.os.TraceCompat>;
				public static endSection(): void;
				public static beginSection(param0: string): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class UserManagerCompat {
				public static class: java.lang.Class<androidx.core.os.UserManagerCompat>;
				public static isUserUnlocked(param0: globalAndroid.content.Context): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module provider {
			export class FontRequest {
				public static class: java.lang.Class<androidx.core.provider.FontRequest>;
				public constructor(param0: string, param1: string, param2: string, param3: number);
				public getQuery(): string;
				public getCertificatesArrayResId(): number;
				public getProviderPackage(): string;
				public getIdentifier(): string;
				public getProviderAuthority(): string;
				public toString(): string;
				public constructor(param0: string, param1: string, param2: string, param3: java.util.List<java.util.List<native.Array<number>>>);
				public getCertificates(): java.util.List<java.util.List<native.Array<number>>>;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module provider {
			export class FontsContractCompat {
				public static class: java.lang.Class<androidx.core.provider.FontsContractCompat>;
				public static PARCEL_FONT_RESULTS: string;
				public static prepareFontData(param0: globalAndroid.content.Context, param1: native.Array<androidx.core.provider.FontsContractCompat.FontInfo>, param2: globalAndroid.os.CancellationSignal): java.util.Map<globalAndroid.net.Uri,java.nio.ByteBuffer>;
				public static getProvider(param0: globalAndroid.content.pm.PackageManager, param1: androidx.core.provider.FontRequest, param2: globalAndroid.content.res.Resources): globalAndroid.content.pm.ProviderInfo;
				public static resetCache(): void;
				public static buildTypeface(param0: globalAndroid.content.Context, param1: globalAndroid.os.CancellationSignal, param2: native.Array<androidx.core.provider.FontsContractCompat.FontInfo>): globalAndroid.graphics.Typeface;
				public static getFontSync(param0: globalAndroid.content.Context, param1: androidx.core.provider.FontRequest, param2: androidx.core.content.res.ResourcesCompat.FontCallback, param3: globalAndroid.os.Handler, param4: boolean, param5: number, param6: number): globalAndroid.graphics.Typeface;
				public static requestFont(param0: globalAndroid.content.Context, param1: androidx.core.provider.FontRequest, param2: androidx.core.provider.FontsContractCompat.FontRequestCallback, param3: globalAndroid.os.Handler): void;
				public static fetchFonts(param0: globalAndroid.content.Context, param1: globalAndroid.os.CancellationSignal, param2: androidx.core.provider.FontRequest): androidx.core.provider.FontsContractCompat.FontFamilyResult;
			}
			export module FontsContractCompat {
				export class Columns {
					public static class: java.lang.Class<androidx.core.provider.FontsContractCompat.Columns>;
					public static FILE_ID: string;
					public static TTC_INDEX: string;
					public static VARIATION_SETTINGS: string;
					public static WEIGHT: string;
					public static ITALIC: string;
					public static RESULT_CODE: string;
					public static RESULT_CODE_OK: number;
					public static RESULT_CODE_FONT_NOT_FOUND: number;
					public static RESULT_CODE_FONT_UNAVAILABLE: number;
					public static RESULT_CODE_MALFORMED_QUERY: number;
					public constructor();
				}
				export class FontFamilyResult {
					public static class: java.lang.Class<androidx.core.provider.FontsContractCompat.FontFamilyResult>;
					public static STATUS_OK: number;
					public static STATUS_WRONG_CERTIFICATES: number;
					public static STATUS_UNEXPECTED_DATA_PROVIDED: number;
					public getFonts(): native.Array<androidx.core.provider.FontsContractCompat.FontInfo>;
					public constructor(param0: number, param1: native.Array<androidx.core.provider.FontsContractCompat.FontInfo>);
					public getStatusCode(): number;
				}
				export class FontInfo {
					public static class: java.lang.Class<androidx.core.provider.FontsContractCompat.FontInfo>;
					public getResultCode(): number;
					public constructor(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: boolean, param4: number);
					public getWeight(): number;
					public isItalic(): boolean;
					public getUri(): globalAndroid.net.Uri;
					public getTtcIndex(): number;
				}
				export class FontRequestCallback {
					public static class: java.lang.Class<androidx.core.provider.FontsContractCompat.FontRequestCallback>;
					public static RESULT_OK: number;
					public static FAIL_REASON_PROVIDER_NOT_FOUND: number;
					public static FAIL_REASON_WRONG_CERTIFICATES: number;
					public static FAIL_REASON_FONT_LOAD_ERROR: number;
					public static FAIL_REASON_SECURITY_VIOLATION: number;
					public static FAIL_REASON_FONT_NOT_FOUND: number;
					public static FAIL_REASON_FONT_UNAVAILABLE: number;
					public static FAIL_REASON_MALFORMED_QUERY: number;
					public onTypefaceRetrieved(param0: globalAndroid.graphics.Typeface): void;
					public onTypefaceRequestFailed(param0: number): void;
					public constructor();
				}
				export module FontRequestCallback {
					export class FontRequestFailReason {
						public static class: java.lang.Class<androidx.core.provider.FontsContractCompat.FontRequestCallback.FontRequestFailReason>;
						/**
						 * Constructs a new instance of the androidx.core.provider.FontsContractCompat$FontRequestCallback$FontRequestFailReason interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
				export class TypefaceResult {
					public static class: java.lang.Class<androidx.core.provider.FontsContractCompat.TypefaceResult>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module provider {
			export class SelfDestructiveThread {
				public static class: java.lang.Class<androidx.core.provider.SelfDestructiveThread>;
				public postAndWait(param0: java.util.concurrent.Callable<any>, param1: number): any;
				public isRunning(): boolean;
				public postAndReply(param0: java.util.concurrent.Callable<any>, param1: androidx.core.provider.SelfDestructiveThread.ReplyCallback<any>): void;
				public constructor(param0: string, param1: number, param2: number);
				public getGeneration(): number;
			}
			export module SelfDestructiveThread {
				export class ReplyCallback<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.provider.SelfDestructiveThread.ReplyCallback<any>>;
					/**
					 * Constructs a new instance of the androidx.core.provider.SelfDestructiveThread$ReplyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReply(param0: T): void;
					});
					public constructor();
					public onReply(param0: T): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class BidiFormatter {
				public static class: java.lang.Class<androidx.core.text.BidiFormatter>;
				public isRtlContext(): boolean;
				public unicodeWrap(param0: string, param1: boolean): string;
				public isRtl(param0: string): boolean;
				public static getInstance(param0: boolean): androidx.core.text.BidiFormatter;
				public static getInstance(): androidx.core.text.BidiFormatter;
				public static getInstance(param0: java.util.Locale): androidx.core.text.BidiFormatter;
				public unicodeWrap(param0: string, param1: androidx.core.text.TextDirectionHeuristicCompat): string;
				public unicodeWrap(param0: string, param1: androidx.core.text.TextDirectionHeuristicCompat, param2: boolean): string;
				public getStereoReset(): boolean;
				public unicodeWrap(param0: string): string;
			}
			export module BidiFormatter {
				export class Builder {
					public static class: java.lang.Class<androidx.core.text.BidiFormatter.Builder>;
					public build(): androidx.core.text.BidiFormatter;
					public stereoReset(param0: boolean): androidx.core.text.BidiFormatter.Builder;
					public constructor(param0: boolean);
					public constructor();
					public constructor(param0: java.util.Locale);
					public setTextDirectionHeuristic(param0: androidx.core.text.TextDirectionHeuristicCompat): androidx.core.text.BidiFormatter.Builder;
				}
				export class DirectionalityEstimator {
					public static class: java.lang.Class<androidx.core.text.BidiFormatter.DirectionalityEstimator>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class HtmlCompat {
				public static class: java.lang.Class<androidx.core.text.HtmlCompat>;
				public static TO_HTML_PARAGRAPH_LINES_CONSECUTIVE: number;
				public static TO_HTML_PARAGRAPH_LINES_INDIVIDUAL: number;
				public static FROM_HTML_SEPARATOR_LINE_BREAK_PARAGRAPH: number;
				public static FROM_HTML_SEPARATOR_LINE_BREAK_HEADING: number;
				public static FROM_HTML_SEPARATOR_LINE_BREAK_LIST_ITEM: number;
				public static FROM_HTML_SEPARATOR_LINE_BREAK_LIST: number;
				public static FROM_HTML_SEPARATOR_LINE_BREAK_DIV: number;
				public static FROM_HTML_SEPARATOR_LINE_BREAK_BLOCKQUOTE: number;
				public static FROM_HTML_OPTION_USE_CSS_COLORS: number;
				public static FROM_HTML_MODE_LEGACY: number;
				public static FROM_HTML_MODE_COMPACT: number;
				public static toHtml(param0: globalAndroid.text.Spanned, param1: number): string;
				public static fromHtml(param0: string, param1: number): globalAndroid.text.Spanned;
				public static fromHtml(param0: string, param1: number, param2: globalAndroid.text.Html.ImageGetter, param3: globalAndroid.text.Html.TagHandler): globalAndroid.text.Spanned;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class ICUCompat {
				public static class: java.lang.Class<androidx.core.text.ICUCompat>;
				public static maximizeAndGetScript(param0: java.util.Locale): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class PrecomputedTextCompat {
				public static class: java.lang.Class<androidx.core.text.PrecomputedTextCompat>;
				public getSpanEnd(param0: any): number;
				public getParagraphStart(param0: number): number;
				public static getTextFuture(param0: string, param1: androidx.core.text.PrecomputedTextCompat.Params, param2: java.util.concurrent.Executor): java.util.concurrent.Future<androidx.core.text.PrecomputedTextCompat>;
				public getSpanFlags(param0: any): number;
				public getSpans(param0: number, param1: number, param2: java.lang.Class<any>): native.Array<any>;
				public length(): number;
				public getPrecomputedText(): any;
				public setSpan(param0: any, param1: number, param2: number, param3: number): void;
				public removeSpan(param0: any): void;
				public toString(): string;
				public getParagraphEnd(param0: number): number;
				public charAt(param0: number): string;
				public getParams(): androidx.core.text.PrecomputedTextCompat.Params;
				public getParagraphCount(): number;
				public subSequence(param0: number, param1: number): string;
				public static create(param0: string, param1: androidx.core.text.PrecomputedTextCompat.Params): androidx.core.text.PrecomputedTextCompat;
				public nextSpanTransition(param0: number, param1: number, param2: java.lang.Class<any>): number;
				public getSpanStart(param0: any): number;
			}
			export module PrecomputedTextCompat {
				export class Params {
					public static class: java.lang.Class<androidx.core.text.PrecomputedTextCompat.Params>;
					public constructor(param0: androidx.core.text.PrecomputedTextCompat.Params);
					public equals(param0: any): boolean;
					public getBreakStrategy(): number;
					public toString(): string;
					public getTextDirection(): any
					public getHyphenationFrequency(): number;
					public getTextPaint(): globalAndroid.text.TextPaint;
					public hashCode(): number;
				}
				export module Params {
					export class Builder {
						public static class: java.lang.Class<androidx.core.text.PrecomputedTextCompat.Params.Builder>;
						public constructor(param0: globalAndroid.text.TextPaint);
						public setBreakStrategy(param0: number): androidx.core.text.PrecomputedTextCompat.Params.Builder;
						public setHyphenationFrequency(param0: number): androidx.core.text.PrecomputedTextCompat.Params.Builder;
						public build(): androidx.core.text.PrecomputedTextCompat.Params;
						public setTextDirection(param0: any): androidx.core.text.PrecomputedTextCompat.Params.Builder;
					}
				}
				export class PrecomputedTextFutureTask extends java.util.concurrent.FutureTask<androidx.core.text.PrecomputedTextCompat> {
					public static class: java.lang.Class<androidx.core.text.PrecomputedTextCompat.PrecomputedTextFutureTask>;
				}
				export module PrecomputedTextFutureTask {
					export class PrecomputedTextCallback extends java.util.concurrent.Callable<androidx.core.text.PrecomputedTextCompat> {
						public static class: java.lang.Class<androidx.core.text.PrecomputedTextCompat.PrecomputedTextFutureTask.PrecomputedTextCallback>;
						public call(): androidx.core.text.PrecomputedTextCompat;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class TextDirectionHeuristicCompat {
				public static class: java.lang.Class<androidx.core.text.TextDirectionHeuristicCompat>;
				/**
				 * Constructs a new instance of the androidx.core.text.TextDirectionHeuristicCompat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isRtl(param0: native.Array<string>, param1: number, param2: number): boolean;
					isRtl(param0: string, param1: number, param2: number): boolean;
				});
				public constructor();
				public isRtl(param0: native.Array<string>, param1: number, param2: number): boolean;
				public isRtl(param0: string, param1: number, param2: number): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class TextDirectionHeuristicsCompat {
				public static class: java.lang.Class<androidx.core.text.TextDirectionHeuristicsCompat>;
				public static LTR: androidx.core.text.TextDirectionHeuristicCompat;
				public static RTL: androidx.core.text.TextDirectionHeuristicCompat;
				public static FIRSTSTRONG_LTR: androidx.core.text.TextDirectionHeuristicCompat;
				public static FIRSTSTRONG_RTL: androidx.core.text.TextDirectionHeuristicCompat;
				public static ANYRTL_LTR: androidx.core.text.TextDirectionHeuristicCompat;
				public static LOCALE: androidx.core.text.TextDirectionHeuristicCompat;
			}
			export module TextDirectionHeuristicsCompat {
				export class AnyStrong extends androidx.core.text.TextDirectionHeuristicsCompat.TextDirectionAlgorithm {
					public static class: java.lang.Class<androidx.core.text.TextDirectionHeuristicsCompat.AnyStrong>;
					public checkRtl(param0: string, param1: number, param2: number): number;
				}
				export class FirstStrong extends androidx.core.text.TextDirectionHeuristicsCompat.TextDirectionAlgorithm {
					public static class: java.lang.Class<androidx.core.text.TextDirectionHeuristicsCompat.FirstStrong>;
					public checkRtl(param0: string, param1: number, param2: number): number;
				}
				export class TextDirectionAlgorithm {
					public static class: java.lang.Class<androidx.core.text.TextDirectionHeuristicsCompat.TextDirectionAlgorithm>;
					/**
					 * Constructs a new instance of the androidx.core.text.TextDirectionHeuristicsCompat$TextDirectionAlgorithm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						checkRtl(param0: string, param1: number, param2: number): number;
					});
					public constructor();
					public checkRtl(param0: string, param1: number, param2: number): number;
				}
				export abstract class TextDirectionHeuristicImpl extends androidx.core.text.TextDirectionHeuristicCompat {
					public static class: java.lang.Class<androidx.core.text.TextDirectionHeuristicsCompat.TextDirectionHeuristicImpl>;
					public defaultIsRtl(): boolean;
					public isRtl(param0: native.Array<string>, param1: number, param2: number): boolean;
					public isRtl(param0: string, param1: number, param2: number): boolean;
				}
				export class TextDirectionHeuristicInternal extends androidx.core.text.TextDirectionHeuristicsCompat.TextDirectionHeuristicImpl {
					public static class: java.lang.Class<androidx.core.text.TextDirectionHeuristicsCompat.TextDirectionHeuristicInternal>;
					public defaultIsRtl(): boolean;
					public isRtl(param0: native.Array<string>, param1: number, param2: number): boolean;
					public isRtl(param0: string, param1: number, param2: number): boolean;
				}
				export class TextDirectionHeuristicLocale extends androidx.core.text.TextDirectionHeuristicsCompat.TextDirectionHeuristicImpl {
					public static class: java.lang.Class<androidx.core.text.TextDirectionHeuristicsCompat.TextDirectionHeuristicLocale>;
					public defaultIsRtl(): boolean;
					public isRtl(param0: native.Array<string>, param1: number, param2: number): boolean;
					public isRtl(param0: string, param1: number, param2: number): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class TextUtilsCompat {
				public static class: java.lang.Class<androidx.core.text.TextUtilsCompat>;
				public static htmlEncode(param0: string): string;
				public static getLayoutDirectionFromLocale(param0: java.util.Locale): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export module util {
				export class FindAddress {
					public static class: java.lang.Class<androidx.core.text.util.FindAddress>;
					public static isValidZipCode(param0: string): boolean;
					public static isValidLocationName(param0: string): boolean;
					public static matchHouseNumber(param0: string, param1: number): java.util.regex.MatchResult;
					public static matchState(param0: string, param1: number): java.util.regex.MatchResult;
					public static isValidZipCode(param0: string, param1: string): boolean;
				}
				export module FindAddress {
					export class ZipRange {
						public static class: java.lang.Class<androidx.core.text.util.FindAddress.ZipRange>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export module util {
				export class LinkifyCompat {
					public static class: java.lang.Class<androidx.core.text.util.LinkifyCompat>;
					public static addLinks(param0: globalAndroid.widget.TextView, param1: java.util.regex.Pattern, param2: string): void;
					public static addLinks(param0: globalAndroid.text.Spannable, param1: java.util.regex.Pattern, param2: string): boolean;
					public static addLinks(param0: globalAndroid.text.Spannable, param1: java.util.regex.Pattern, param2: string, param3: native.Array<string>, param4: globalAndroid.text.util.Linkify.MatchFilter, param5: globalAndroid.text.util.Linkify.TransformFilter): boolean;
					public static addLinks(param0: globalAndroid.widget.TextView, param1: number): boolean;
					public static addLinks(param0: globalAndroid.text.Spannable, param1: java.util.regex.Pattern, param2: string, param3: globalAndroid.text.util.Linkify.MatchFilter, param4: globalAndroid.text.util.Linkify.TransformFilter): boolean;
					public static addLinks(param0: globalAndroid.widget.TextView, param1: java.util.regex.Pattern, param2: string, param3: native.Array<string>, param4: globalAndroid.text.util.Linkify.MatchFilter, param5: globalAndroid.text.util.Linkify.TransformFilter): void;
					public static addLinks(param0: globalAndroid.widget.TextView, param1: java.util.regex.Pattern, param2: string, param3: globalAndroid.text.util.Linkify.MatchFilter, param4: globalAndroid.text.util.Linkify.TransformFilter): void;
					public static addLinks(param0: globalAndroid.text.Spannable, param1: number): boolean;
				}
				export module LinkifyCompat {
					export class LinkSpec {
						public static class: java.lang.Class<androidx.core.text.util.LinkifyCompat.LinkSpec>;
					}
					export class LinkifyMask {
						public static class: java.lang.Class<androidx.core.text.util.LinkifyCompat.LinkifyMask>;
						/**
						 * Constructs a new instance of the androidx.core.text.util.LinkifyCompat$LinkifyMask interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module core {
		export module util {
			export class AtomicFile {
				public static class: java.lang.Class<androidx.core.util.AtomicFile>;
				public finishWrite(param0: java.io.FileOutputStream): void;
				public openRead(): java.io.FileInputStream;
				public constructor(param0: java.io.File);
				public delete(): void;
				public getBaseFile(): java.io.File;
				public startWrite(): java.io.FileOutputStream;
				public failWrite(param0: java.io.FileOutputStream): void;
				public readFully(): native.Array<number>;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class Consumer<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.Consumer<any>>;
				/**
				 * Constructs a new instance of the androidx.core.util.Consumer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					accept(param0: T): void;
				});
				public constructor();
				public accept(param0: T): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class DebugUtils {
				public static class: java.lang.Class<androidx.core.util.DebugUtils>;
				public static buildShortClassTag(param0: any, param1: java.lang.StringBuilder): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class LogWriter {
				public static class: java.lang.Class<androidx.core.util.LogWriter>;
				public write(param0: native.Array<string>, param1: number, param2: number): void;
				public close(): void;
				public constructor(param0: string);
				public flush(): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class ObjectsCompat {
				public static class: java.lang.Class<androidx.core.util.ObjectsCompat>;
				public static hash(param0: native.Array<any>): number;
				public static hashCode(param0: any): number;
				public static equals(param0: any, param1: any): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class Pair<F, S>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.Pair<any,any>>;
				public first: F;
				public second: S;
				public hashCode(): number;
				public constructor(param0: F, param1: S);
				public equals(param0: any): boolean;
				public static create(param0: any, param1: any): androidx.core.util.Pair<any,any>;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class PatternsCompat {
				public static class: java.lang.Class<androidx.core.util.PatternsCompat>;
				public static IP_ADDRESS: java.util.regex.Pattern;
				public static DOMAIN_NAME: java.util.regex.Pattern;
				public static WEB_URL: java.util.regex.Pattern;
				public static AUTOLINK_WEB_URL: java.util.regex.Pattern;
				public static AUTOLINK_EMAIL_ADDRESS: java.util.regex.Pattern;
				public static EMAIL_ADDRESS: java.util.regex.Pattern;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class Pools {
				public static class: java.lang.Class<androidx.core.util.Pools>;
			}
			export module Pools {
				export class Pool<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.util.Pools.Pool<any>>;
					/**
					 * Constructs a new instance of the androidx.core.util.Pools$Pool interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						acquire(): T;
						release(param0: T): boolean;
					});
					public constructor();
					public acquire(): T;
					public release(param0: T): boolean;
				}
				export class SimplePool<T>  extends androidx.core.util.Pools.Pool<any> {
					public static class: java.lang.Class<androidx.core.util.Pools.SimplePool<any>>;
					public acquire(): any;
					public release(param0: any): boolean;
					public constructor(param0: number);
				}
				export class SynchronizedPool<T>  extends androidx.core.util.Pools.SimplePool<any> {
					public static class: java.lang.Class<androidx.core.util.Pools.SynchronizedPool<any>>;
					public acquire(): any;
					public release(param0: any): boolean;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class Preconditions {
				public static class: java.lang.Class<androidx.core.util.Preconditions>;
				public static checkCollectionNotEmpty(param0: java.util.Collection<any>, param1: string): java.util.Collection<any>;
				public static checkArgument(param0: boolean, param1: any): void;
				public static checkState(param0: boolean): void;
				public static checkCollectionElementsNotNull(param0: java.util.Collection<any>, param1: string): java.util.Collection<any>;
				public static checkArrayElementsNotNull(param0: native.Array<any>, param1: string): native.Array<any>;
				public static checkArgumentNonnegative(param0: number): number;
				public static checkFlagsArgument(param0: number, param1: number): number;
				public static checkArrayElementsInRange(param0: native.Array<number>, param1: number, param2: number, param3: string): native.Array<number>;
				public static checkStringNotEmpty(param0: string): string;
				public static checkNotNull(param0: any, param1: any): any;
				public static checkState(param0: boolean, param1: string): void;
				public static checkArgumentNonnegative(param0: number, param1: string): number;
				public static checkArgumentPositive(param0: number, param1: string): number;
				public static checkArgumentInRange(param0: number, param1: number, param2: number, param3: string): number;
				public static checkArgument(param0: boolean): void;
				public static checkStringNotEmpty(param0: string, param1: any): string;
				public static checkNotNull(param0: any): any;
				public static checkArgumentFinite(param0: number, param1: string): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class TimeUtils {
				public static class: java.lang.Class<androidx.core.util.TimeUtils>;
				public static HUNDRED_DAY_FIELD_LEN: number;
				public static formatDuration(param0: number, param1: java.io.PrintWriter, param2: number): void;
				public static formatDuration(param0: number, param1: number, param2: java.io.PrintWriter): void;
				public static formatDuration(param0: number, param1: java.lang.StringBuilder): void;
				public static formatDuration(param0: number, param1: java.io.PrintWriter): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class AccessibilityDelegateCompat {
				public static class: java.lang.Class<androidx.core.view.AccessibilityDelegateCompat>;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onInitializeAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				public getAccessibilityNodeProvider(param0: globalAndroid.view.View): androidx.core.view.accessibility.AccessibilityNodeProviderCompat;
				public onPopulateAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onRequestSendAccessibilityEvent(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public sendAccessibilityEvent(param0: globalAndroid.view.View, param1: number): void;
				public performAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
				public constructor();
			}
			export module AccessibilityDelegateCompat {
				export class AccessibilityDelegateAdapter {
					public static class: java.lang.Class<androidx.core.view.AccessibilityDelegateCompat.AccessibilityDelegateAdapter>;
					public getAccessibilityNodeProvider(param0: globalAndroid.view.View): globalAndroid.view.accessibility.AccessibilityNodeProvider;
					public onPopulateAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public onInitializeAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public onRequestSendAccessibilityEvent(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
					public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
					public sendAccessibilityEventUnchecked(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public sendAccessibilityEvent(param0: globalAndroid.view.View, param1: number): void;
					public performAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export abstract class ActionProvider {
				public static class: java.lang.Class<androidx.core.view.ActionProvider>;
				public isVisible(): boolean;
				public getContext(): globalAndroid.content.Context;
				public onPerformDefaultAction(): boolean;
				public overridesItemVisibility(): boolean;
				public setSubUiVisibilityListener(param0: androidx.core.view.ActionProvider.SubUiVisibilityListener): void;
				public subUiVisibilityChanged(param0: boolean): void;
				public onPrepareSubMenu(param0: globalAndroid.view.SubMenu): void;
				public reset(): void;
				public onCreateActionView(param0: globalAndroid.view.MenuItem): globalAndroid.view.View;
				public refreshVisibility(): void;
				public constructor(param0: globalAndroid.content.Context);
				public onCreateActionView(): globalAndroid.view.View;
				public hasSubMenu(): boolean;
				public setVisibilityListener(param0: androidx.core.view.ActionProvider.VisibilityListener): void;
			}
			export module ActionProvider {
				export class SubUiVisibilityListener {
					public static class: java.lang.Class<androidx.core.view.ActionProvider.SubUiVisibilityListener>;
					/**
					 * Constructs a new instance of the androidx.core.view.ActionProvider$SubUiVisibilityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSubUiVisibilityChanged(param0: boolean): void;
					});
					public constructor();
					public onSubUiVisibilityChanged(param0: boolean): void;
				}
				export class VisibilityListener {
					public static class: java.lang.Class<androidx.core.view.ActionProvider.VisibilityListener>;
					/**
					 * Constructs a new instance of the androidx.core.view.ActionProvider$VisibilityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onActionProviderVisibilityChanged(param0: boolean): void;
					});
					public constructor();
					public onActionProviderVisibilityChanged(param0: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class DisplayCutoutCompat {
				public static class: java.lang.Class<androidx.core.view.DisplayCutoutCompat>;
				public getSafeInsetBottom(): number;
				public getSafeInsetLeft(): number;
				public constructor(param0: globalAndroid.graphics.Rect, param1: java.util.List<globalAndroid.graphics.Rect>);
				public hashCode(): number;
				public getSafeInsetTop(): number;
				public getBoundingRects(): java.util.List<globalAndroid.graphics.Rect>;
				public equals(param0: any): boolean;
				public getSafeInsetRight(): number;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class DragAndDropPermissionsCompat {
				public static class: java.lang.Class<androidx.core.view.DragAndDropPermissionsCompat>;
				public release(): void;
				public static request(param0: globalAndroid.app.Activity, param1: globalAndroid.view.DragEvent): androidx.core.view.DragAndDropPermissionsCompat;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class DragStartHelper {
				public static class: java.lang.Class<androidx.core.view.DragStartHelper>;
				public constructor(param0: globalAndroid.view.View, param1: androidx.core.view.DragStartHelper.OnDragStartListener);
				public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
				public attach(): void;
				public getTouchPosition(param0: globalAndroid.graphics.Point): void;
				public onLongClick(param0: globalAndroid.view.View): boolean;
				public detach(): void;
			}
			export module DragStartHelper {
				export class OnDragStartListener {
					public static class: java.lang.Class<androidx.core.view.DragStartHelper.OnDragStartListener>;
					/**
					 * Constructs a new instance of the androidx.core.view.DragStartHelper$OnDragStartListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDragStart(param0: globalAndroid.view.View, param1: androidx.core.view.DragStartHelper): boolean;
					});
					public constructor();
					public onDragStart(param0: globalAndroid.view.View, param1: androidx.core.view.DragStartHelper): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class GestureDetectorCompat extends java.lang.Object  {
				public static class: java.lang.Class<androidx.core.view.GestureDetectorCompat>;
				public isLongpressEnabled(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.GestureDetector.OnGestureListener, param2: globalAndroid.os.Handler);
				public setIsLongpressEnabled(param0: boolean): void;
				public setOnDoubleTapListener(param0: globalAndroid.view.GestureDetector.OnDoubleTapListener): void;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.GestureDetector.OnGestureListener);
			}
			export module GestureDetectorCompat {
				export class GestureDetectorCompatImpl {
					public static class: java.lang.Class<androidx.core.view.GestureDetectorCompat.GestureDetectorCompatImpl>;
					/**
					 * Constructs a new instance of the androidx.core.view.GestureDetectorCompat$GestureDetectorCompatImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isLongpressEnabled(): boolean;
						onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						setIsLongpressEnabled(param0: boolean): void;
						setOnDoubleTapListener(param0: globalAndroid.view.GestureDetector.OnDoubleTapListener): void;
					});
					public constructor();
					public isLongpressEnabled(): boolean;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public setIsLongpressEnabled(param0: boolean): void;
					public setOnDoubleTapListener(param0: globalAndroid.view.GestureDetector.OnDoubleTapListener): void;
				}
				export class GestureDetectorCompatImplBase extends androidx.core.view.GestureDetectorCompat.GestureDetectorCompatImpl {
					public static class: java.lang.Class<androidx.core.view.GestureDetectorCompat.GestureDetectorCompatImplBase>;
					public isLongpressEnabled(): boolean;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public setOnDoubleTapListener(param0: globalAndroid.view.GestureDetector.OnDoubleTapListener): void;
					public setIsLongpressEnabled(param0: boolean): void;
				}
				export module GestureDetectorCompatImplBase {
					export class GestureHandler {
						public static class: java.lang.Class<androidx.core.view.GestureDetectorCompat.GestureDetectorCompatImplBase.GestureHandler>;
						public handleMessage(param0: globalAndroid.os.Message): void;
					}
				}
				export class GestureDetectorCompatImplJellybeanMr2 extends androidx.core.view.GestureDetectorCompat.GestureDetectorCompatImpl {
					public static class: java.lang.Class<androidx.core.view.GestureDetectorCompat.GestureDetectorCompatImplJellybeanMr2>;
					public isLongpressEnabled(): boolean;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public setIsLongpressEnabled(param0: boolean): void;
					public setOnDoubleTapListener(param0: globalAndroid.view.GestureDetector.OnDoubleTapListener): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class GravityCompat {
				public static class: java.lang.Class<androidx.core.view.GravityCompat>;
				public static RELATIVE_LAYOUT_DIRECTION: number;
				public static START: number;
				public static END: number;
				public static RELATIVE_HORIZONTAL_GRAVITY_MASK: number;
				public static getAbsoluteGravity(param0: number, param1: number): number;
				public static applyDisplay(param0: number, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Rect, param3: number): void;
				public static apply(param0: number, param1: number, param2: number, param3: globalAndroid.graphics.Rect, param4: number, param5: number, param6: globalAndroid.graphics.Rect, param7: number): void;
				public static apply(param0: number, param1: number, param2: number, param3: globalAndroid.graphics.Rect, param4: globalAndroid.graphics.Rect, param5: number): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class InputDeviceCompat {
				public static class: java.lang.Class<androidx.core.view.InputDeviceCompat>;
				public static SOURCE_CLASS_MASK: number;
				public static SOURCE_CLASS_NONE: number;
				public static SOURCE_CLASS_BUTTON: number;
				public static SOURCE_CLASS_POINTER: number;
				public static SOURCE_CLASS_TRACKBALL: number;
				public static SOURCE_CLASS_POSITION: number;
				public static SOURCE_CLASS_JOYSTICK: number;
				public static SOURCE_UNKNOWN: number;
				public static SOURCE_KEYBOARD: number;
				public static SOURCE_DPAD: number;
				public static SOURCE_GAMEPAD: number;
				public static SOURCE_TOUCHSCREEN: number;
				public static SOURCE_MOUSE: number;
				public static SOURCE_STYLUS: number;
				public static SOURCE_TRACKBALL: number;
				public static SOURCE_TOUCHPAD: number;
				public static SOURCE_TOUCH_NAVIGATION: number;
				public static SOURCE_ROTARY_ENCODER: number;
				public static SOURCE_JOYSTICK: number;
				public static SOURCE_HDMI: number;
				public static SOURCE_ANY: number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class KeyEventDispatcher {
				public static class: java.lang.Class<androidx.core.view.KeyEventDispatcher>;
				public static dispatchKeyEvent(param0: androidx.core.view.KeyEventDispatcher.Component, param1: globalAndroid.view.View, param2: globalAndroid.view.Window.Callback, param3: globalAndroid.view.KeyEvent): boolean;
				public static dispatchBeforeHierarchy(param0: globalAndroid.view.View, param1: globalAndroid.view.KeyEvent): boolean;
			}
			export module KeyEventDispatcher {
				export class Component {
					public static class: java.lang.Class<androidx.core.view.KeyEventDispatcher.Component>;
					/**
					 * Constructs a new instance of the androidx.core.view.KeyEventDispatcher$Component interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						superDispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
					});
					public constructor();
					public superDispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class LayoutInflaterCompat {
				public static class: java.lang.Class<androidx.core.view.LayoutInflaterCompat>;
				public static setFactory2(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.LayoutInflater.Factory2): void;
				public static setFactory(param0: globalAndroid.view.LayoutInflater, param1: androidx.core.view.LayoutInflaterFactory): void;
				public static getFactory(param0: globalAndroid.view.LayoutInflater): androidx.core.view.LayoutInflaterFactory;
			}
			export module LayoutInflaterCompat {
				export class Factory2Wrapper {
					public static class: java.lang.Class<androidx.core.view.LayoutInflaterCompat.Factory2Wrapper>;
					public toString(): string;
					public onCreateView(param0: string, param1: globalAndroid.content.Context, param2: globalAndroid.util.AttributeSet): globalAndroid.view.View;
					public onCreateView(param0: globalAndroid.view.View, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class LayoutInflaterFactory {
				public static class: java.lang.Class<androidx.core.view.LayoutInflaterFactory>;
				/**
				 * Constructs a new instance of the androidx.core.view.LayoutInflaterFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCreateView(param0: globalAndroid.view.View, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
				});
				public constructor();
				public onCreateView(param0: globalAndroid.view.View, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class MarginLayoutParamsCompat {
				public static class: java.lang.Class<androidx.core.view.MarginLayoutParamsCompat>;
				public static setLayoutDirection(param0: globalAndroid.view.ViewGroup.MarginLayoutParams, param1: number): void;
				public static setMarginEnd(param0: globalAndroid.view.ViewGroup.MarginLayoutParams, param1: number): void;
				public static isMarginRelative(param0: globalAndroid.view.ViewGroup.MarginLayoutParams): boolean;
				public static getMarginEnd(param0: globalAndroid.view.ViewGroup.MarginLayoutParams): number;
				public static getLayoutDirection(param0: globalAndroid.view.ViewGroup.MarginLayoutParams): number;
				public static resolveLayoutDirection(param0: globalAndroid.view.ViewGroup.MarginLayoutParams, param1: number): void;
				public static setMarginStart(param0: globalAndroid.view.ViewGroup.MarginLayoutParams, param1: number): void;
				public static getMarginStart(param0: globalAndroid.view.ViewGroup.MarginLayoutParams): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class MenuCompat {
				public static class: java.lang.Class<androidx.core.view.MenuCompat>;
				public static setGroupDividerEnabled(param0: globalAndroid.view.Menu, param1: boolean): void;
				public static setShowAsAction(param0: globalAndroid.view.MenuItem, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class MenuItemCompat {
				public static class: java.lang.Class<androidx.core.view.MenuItemCompat>;
				public static SHOW_AS_ACTION_NEVER: number;
				public static SHOW_AS_ACTION_IF_ROOM: number;
				public static SHOW_AS_ACTION_ALWAYS: number;
				public static SHOW_AS_ACTION_WITH_TEXT: number;
				public static SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW: number;
				public static getAlphabeticModifiers(param0: globalAndroid.view.MenuItem): number;
				public static getActionProvider(param0: globalAndroid.view.MenuItem): androidx.core.view.ActionProvider;
				public static setIconTintMode(param0: globalAndroid.view.MenuItem, param1: globalAndroid.graphics.PorterDuff.Mode): void;
				public static expandActionView(param0: globalAndroid.view.MenuItem): boolean;
				public static setOnActionExpandListener(param0: globalAndroid.view.MenuItem, param1: androidx.core.view.MenuItemCompat.OnActionExpandListener): globalAndroid.view.MenuItem;
				public static setNumericShortcut(param0: globalAndroid.view.MenuItem, param1: string, param2: number): void;
				public static setShowAsAction(param0: globalAndroid.view.MenuItem, param1: number): void;
				public static getContentDescription(param0: globalAndroid.view.MenuItem): string;
				public static getActionView(param0: globalAndroid.view.MenuItem): globalAndroid.view.View;
				public static setActionProvider(param0: globalAndroid.view.MenuItem, param1: androidx.core.view.ActionProvider): globalAndroid.view.MenuItem;
				public static getIconTintMode(param0: globalAndroid.view.MenuItem): globalAndroid.graphics.PorterDuff.Mode;
				public static collapseActionView(param0: globalAndroid.view.MenuItem): boolean;
				public static setTooltipText(param0: globalAndroid.view.MenuItem, param1: string): void;
				public static setAlphabeticShortcut(param0: globalAndroid.view.MenuItem, param1: string, param2: number): void;
				public static getIconTintList(param0: globalAndroid.view.MenuItem): globalAndroid.content.res.ColorStateList;
				public static getTooltipText(param0: globalAndroid.view.MenuItem): string;
				public static setActionView(param0: globalAndroid.view.MenuItem, param1: globalAndroid.view.View): globalAndroid.view.MenuItem;
				public static setActionView(param0: globalAndroid.view.MenuItem, param1: number): globalAndroid.view.MenuItem;
				public static getNumericModifiers(param0: globalAndroid.view.MenuItem): number;
				public static setIconTintList(param0: globalAndroid.view.MenuItem, param1: globalAndroid.content.res.ColorStateList): void;
				public static isActionViewExpanded(param0: globalAndroid.view.MenuItem): boolean;
				public static setContentDescription(param0: globalAndroid.view.MenuItem, param1: string): void;
				public static setShortcut(param0: globalAndroid.view.MenuItem, param1: string, param2: string, param3: number, param4: number): void;
			}
			export module MenuItemCompat {
				export class OnActionExpandListener {
					public static class: java.lang.Class<androidx.core.view.MenuItemCompat.OnActionExpandListener>;
					/**
					 * Constructs a new instance of the androidx.core.view.MenuItemCompat$OnActionExpandListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuItemActionExpand(param0: globalAndroid.view.MenuItem): boolean;
						onMenuItemActionCollapse(param0: globalAndroid.view.MenuItem): boolean;
					});
					public constructor();
					public onMenuItemActionCollapse(param0: globalAndroid.view.MenuItem): boolean;
					public onMenuItemActionExpand(param0: globalAndroid.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class MotionEventCompat {
				public static class: java.lang.Class<androidx.core.view.MotionEventCompat>;
				public static ACTION_MASK: number;
				public static ACTION_POINTER_DOWN: number;
				public static ACTION_POINTER_UP: number;
				public static ACTION_HOVER_MOVE: number;
				public static ACTION_SCROLL: number;
				public static ACTION_POINTER_INDEX_MASK: number;
				public static ACTION_POINTER_INDEX_SHIFT: number;
				public static ACTION_HOVER_ENTER: number;
				public static ACTION_HOVER_EXIT: number;
				public static AXIS_X: number;
				public static AXIS_Y: number;
				public static AXIS_PRESSURE: number;
				public static AXIS_SIZE: number;
				public static AXIS_TOUCH_MAJOR: number;
				public static AXIS_TOUCH_MINOR: number;
				public static AXIS_TOOL_MAJOR: number;
				public static AXIS_TOOL_MINOR: number;
				public static AXIS_ORIENTATION: number;
				public static AXIS_VSCROLL: number;
				public static AXIS_HSCROLL: number;
				public static AXIS_Z: number;
				public static AXIS_RX: number;
				public static AXIS_RY: number;
				public static AXIS_RZ: number;
				public static AXIS_HAT_X: number;
				public static AXIS_HAT_Y: number;
				public static AXIS_LTRIGGER: number;
				public static AXIS_RTRIGGER: number;
				public static AXIS_THROTTLE: number;
				public static AXIS_RUDDER: number;
				public static AXIS_WHEEL: number;
				public static AXIS_GAS: number;
				public static AXIS_BRAKE: number;
				public static AXIS_DISTANCE: number;
				public static AXIS_TILT: number;
				public static AXIS_SCROLL: number;
				public static AXIS_RELATIVE_X: number;
				public static AXIS_RELATIVE_Y: number;
				public static AXIS_GENERIC_1: number;
				public static AXIS_GENERIC_2: number;
				public static AXIS_GENERIC_3: number;
				public static AXIS_GENERIC_4: number;
				public static AXIS_GENERIC_5: number;
				public static AXIS_GENERIC_6: number;
				public static AXIS_GENERIC_7: number;
				public static AXIS_GENERIC_8: number;
				public static AXIS_GENERIC_9: number;
				public static AXIS_GENERIC_10: number;
				public static AXIS_GENERIC_11: number;
				public static AXIS_GENERIC_12: number;
				public static AXIS_GENERIC_13: number;
				public static AXIS_GENERIC_14: number;
				public static AXIS_GENERIC_15: number;
				public static AXIS_GENERIC_16: number;
				public static BUTTON_PRIMARY: number;
				public static getPointerId(param0: globalAndroid.view.MotionEvent, param1: number): number;
				public static getPointerCount(param0: globalAndroid.view.MotionEvent): number;
				public static getActionMasked(param0: globalAndroid.view.MotionEvent): number;
				public static findPointerIndex(param0: globalAndroid.view.MotionEvent, param1: number): number;
				public static getSource(param0: globalAndroid.view.MotionEvent): number;
				public static isFromSource(param0: globalAndroid.view.MotionEvent, param1: number): boolean;
				public static getButtonState(param0: globalAndroid.view.MotionEvent): number;
				public static getActionIndex(param0: globalAndroid.view.MotionEvent): number;
				public static getY(param0: globalAndroid.view.MotionEvent, param1: number): number;
				public static getAxisValue(param0: globalAndroid.view.MotionEvent, param1: number, param2: number): number;
				public static getX(param0: globalAndroid.view.MotionEvent, param1: number): number;
				public static getAxisValue(param0: globalAndroid.view.MotionEvent, param1: number): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class NestedScrollingChild {
				public static class: java.lang.Class<androidx.core.view.NestedScrollingChild>;
				/**
				 * Constructs a new instance of the androidx.core.view.NestedScrollingChild interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setNestedScrollingEnabled(param0: boolean): void;
					isNestedScrollingEnabled(): boolean;
					startNestedScroll(param0: number): boolean;
					stopNestedScroll(): void;
					hasNestedScrollingParent(): boolean;
					dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;
					dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): boolean;
					dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
					dispatchNestedPreFling(param0: number, param1: number): boolean;
				});
				public constructor();
				public stopNestedScroll(): void;
				public setNestedScrollingEnabled(param0: boolean): void;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;
				public startNestedScroll(param0: number): boolean;
				public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
				public hasNestedScrollingParent(): boolean;
				public dispatchNestedPreFling(param0: number, param1: number): boolean;
				public dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): boolean;
				public isNestedScrollingEnabled(): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class NestedScrollingChild2 extends androidx.core.view.NestedScrollingChild {
				public static class: java.lang.Class<androidx.core.view.NestedScrollingChild2>;
				/**
				 * Constructs a new instance of the androidx.core.view.NestedScrollingChild2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					startNestedScroll(param0: number, param1: number): boolean;
					stopNestedScroll(param0: number): void;
					hasNestedScrollingParent(param0: number): boolean;
					dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number): boolean;
					dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>, param4: number): boolean;
					setNestedScrollingEnabled(param0: boolean): void;
					isNestedScrollingEnabled(): boolean;
					startNestedScroll(param0: number): boolean;
					stopNestedScroll(): void;
					hasNestedScrollingParent(): boolean;
					dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;
					dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): boolean;
					dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
					dispatchNestedPreFling(param0: number, param1: number): boolean;
				});
				public constructor();
				public stopNestedScroll(param0: number): void;
				public dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>, param4: number): boolean;
				public startNestedScroll(param0: number, param1: number): boolean;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number): boolean;
				public stopNestedScroll(): void;
				public setNestedScrollingEnabled(param0: boolean): void;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;
				public startNestedScroll(param0: number): boolean;
				public hasNestedScrollingParent(param0: number): boolean;
				public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
				public hasNestedScrollingParent(): boolean;
				public dispatchNestedPreFling(param0: number, param1: number): boolean;
				public dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): boolean;
				public isNestedScrollingEnabled(): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class NestedScrollingChildHelper {
				public static class: java.lang.Class<androidx.core.view.NestedScrollingChildHelper>;
				public stopNestedScroll(param0: number): void;
				public dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>, param4: number): boolean;
				public startNestedScroll(param0: number, param1: number): boolean;
				public stopNestedScroll(): void;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number): boolean;
				public setNestedScrollingEnabled(param0: boolean): void;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;
				public startNestedScroll(param0: number): boolean;
				public hasNestedScrollingParent(param0: number): boolean;
				public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
				public hasNestedScrollingParent(): boolean;
				public onDetachedFromWindow(): void;
				public onStopNestedScroll(param0: globalAndroid.view.View): void;
				public dispatchNestedPreFling(param0: number, param1: number): boolean;
				public dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): boolean;
				public constructor(param0: globalAndroid.view.View);
				public isNestedScrollingEnabled(): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class NestedScrollingParent {
				public static class: java.lang.Class<androidx.core.view.NestedScrollingParent>;
				/**
				 * Constructs a new instance of the androidx.core.view.NestedScrollingParent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
					onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
					onStopNestedScroll(param0: globalAndroid.view.View): void;
					onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
					onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
					onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
					onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
					getNestedScrollAxes(): number;
				});
				public constructor();
				public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
				public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
				public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
				public onStopNestedScroll(param0: globalAndroid.view.View): void;
				public getNestedScrollAxes(): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class NestedScrollingParent2 extends androidx.core.view.NestedScrollingParent {
				public static class: java.lang.Class<androidx.core.view.NestedScrollingParent2>;
				/**
				 * Constructs a new instance of the androidx.core.view.NestedScrollingParent2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number, param3: number): boolean;
					onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number, param3: number): void;
					onStopNestedScroll(param0: globalAndroid.view.View, param1: number): void;
					onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>, param4: number): void;
					onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
					onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
					onStopNestedScroll(param0: globalAndroid.view.View): void;
					onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
					onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
					onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
					onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
					getNestedScrollAxes(): number;
				});
				public constructor();
				public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
				public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number, param3: number): void;
				public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
				public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number, param3: number): boolean;
				public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public onStopNestedScroll(param0: globalAndroid.view.View, param1: number): void;
				public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
				public onStopNestedScroll(param0: globalAndroid.view.View): void;
				public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>, param4: number): void;
				public getNestedScrollAxes(): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class NestedScrollingParentHelper {
				public static class: java.lang.Class<androidx.core.view.NestedScrollingParentHelper>;
				public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number, param3: number): void;
				public constructor(param0: globalAndroid.view.ViewGroup);
				public onStopNestedScroll(param0: globalAndroid.view.View, param1: number): void;
				public onStopNestedScroll(param0: globalAndroid.view.View): void;
				public getNestedScrollAxes(): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class OnApplyWindowInsetsListener {
				public static class: java.lang.Class<androidx.core.view.OnApplyWindowInsetsListener>;
				/**
				 * Constructs a new instance of the androidx.core.view.OnApplyWindowInsetsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onApplyWindowInsets(param0: globalAndroid.view.View, param1: androidx.core.view.WindowInsetsCompat): androidx.core.view.WindowInsetsCompat;
				});
				public constructor();
				public onApplyWindowInsets(param0: globalAndroid.view.View, param1: androidx.core.view.WindowInsetsCompat): androidx.core.view.WindowInsetsCompat;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class PointerIconCompat {
				public static class: java.lang.Class<androidx.core.view.PointerIconCompat>;
				public static TYPE_NULL: number;
				public static TYPE_ARROW: number;
				public static TYPE_CONTEXT_MENU: number;
				public static TYPE_HAND: number;
				public static TYPE_HELP: number;
				public static TYPE_WAIT: number;
				public static TYPE_CELL: number;
				public static TYPE_CROSSHAIR: number;
				public static TYPE_TEXT: number;
				public static TYPE_VERTICAL_TEXT: number;
				public static TYPE_ALIAS: number;
				public static TYPE_COPY: number;
				public static TYPE_NO_DROP: number;
				public static TYPE_ALL_SCROLL: number;
				public static TYPE_HORIZONTAL_DOUBLE_ARROW: number;
				public static TYPE_VERTICAL_DOUBLE_ARROW: number;
				public static TYPE_TOP_RIGHT_DIAGONAL_DOUBLE_ARROW: number;
				public static TYPE_TOP_LEFT_DIAGONAL_DOUBLE_ARROW: number;
				public static TYPE_ZOOM_IN: number;
				public static TYPE_ZOOM_OUT: number;
				public static TYPE_GRAB: number;
				public static TYPE_GRABBING: number;
				public static TYPE_DEFAULT: number;
				public static getSystemIcon(param0: globalAndroid.content.Context, param1: number): androidx.core.view.PointerIconCompat;
				public static load(param0: globalAndroid.content.res.Resources, param1: number): androidx.core.view.PointerIconCompat;
				public getPointerIcon(): any;
				public static create(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number): androidx.core.view.PointerIconCompat;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ScaleGestureDetectorCompat {
				public static class: java.lang.Class<androidx.core.view.ScaleGestureDetectorCompat>;
				public static isQuickScaleEnabled(param0: globalAndroid.view.ScaleGestureDetector): boolean;
				public static setQuickScaleEnabled(param0: any, param1: boolean): void;
				public static setQuickScaleEnabled(param0: globalAndroid.view.ScaleGestureDetector, param1: boolean): void;
				public static isQuickScaleEnabled(param0: any): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ScrollingView {
				public static class: java.lang.Class<androidx.core.view.ScrollingView>;
				/**
				 * Constructs a new instance of the androidx.core.view.ScrollingView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					computeHorizontalScrollRange(): number;
					computeHorizontalScrollOffset(): number;
					computeHorizontalScrollExtent(): number;
					computeVerticalScrollRange(): number;
					computeVerticalScrollOffset(): number;
					computeVerticalScrollExtent(): number;
				});
				public constructor();
				public computeHorizontalScrollExtent(): number;
				public computeHorizontalScrollRange(): number;
				public computeVerticalScrollOffset(): number;
				public computeVerticalScrollExtent(): number;
				public computeVerticalScrollRange(): number;
				public computeHorizontalScrollOffset(): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class TintableBackgroundView {
				public static class: java.lang.Class<androidx.core.view.TintableBackgroundView>;
				/**
				 * Constructs a new instance of the androidx.core.view.TintableBackgroundView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
					getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
					setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
					getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				});
				public constructor();
				public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
				public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class VelocityTrackerCompat {
				public static class: java.lang.Class<androidx.core.view.VelocityTrackerCompat>;
				public static getXVelocity(param0: globalAndroid.view.VelocityTracker, param1: number): number;
				public static getYVelocity(param0: globalAndroid.view.VelocityTracker, param1: number): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ViewCompat {
				public static class: java.lang.Class<androidx.core.view.ViewCompat>;
				public static OVER_SCROLL_ALWAYS: number;
				public static OVER_SCROLL_IF_CONTENT_SCROLLS: number;
				public static OVER_SCROLL_NEVER: number;
				public static IMPORTANT_FOR_ACCESSIBILITY_AUTO: number;
				public static IMPORTANT_FOR_ACCESSIBILITY_YES: number;
				public static IMPORTANT_FOR_ACCESSIBILITY_NO: number;
				public static IMPORTANT_FOR_ACCESSIBILITY_NO_HIDE_DESCENDANTS: number;
				public static ACCESSIBILITY_LIVE_REGION_NONE: number;
				public static ACCESSIBILITY_LIVE_REGION_POLITE: number;
				public static ACCESSIBILITY_LIVE_REGION_ASSERTIVE: number;
				public static LAYER_TYPE_NONE: number;
				public static LAYER_TYPE_SOFTWARE: number;
				public static LAYER_TYPE_HARDWARE: number;
				public static LAYOUT_DIRECTION_LTR: number;
				public static LAYOUT_DIRECTION_RTL: number;
				public static LAYOUT_DIRECTION_INHERIT: number;
				public static LAYOUT_DIRECTION_LOCALE: number;
				public static MEASURED_SIZE_MASK: number;
				public static MEASURED_STATE_MASK: number;
				public static MEASURED_HEIGHT_STATE_SHIFT: number;
				public static MEASURED_STATE_TOO_SMALL: number;
				public static SCROLL_AXIS_NONE: number;
				public static SCROLL_AXIS_HORIZONTAL: number;
				public static SCROLL_AXIS_VERTICAL: number;
				public static TYPE_TOUCH: number;
				public static TYPE_NON_TOUCH: number;
				public static SCROLL_INDICATOR_TOP: number;
				public static SCROLL_INDICATOR_BOTTOM: number;
				public static SCROLL_INDICATOR_LEFT: number;
				public static SCROLL_INDICATOR_RIGHT: number;
				public static SCROLL_INDICATOR_START: number;
				public static SCROLL_INDICATOR_END: number;
				public static getMinimumWidth(param0: globalAndroid.view.View): number;
				public static setBackgroundTintList(param0: globalAndroid.view.View, param1: globalAndroid.content.res.ColorStateList): void;
				public static isKeyboardNavigationCluster(param0: globalAndroid.view.View): boolean;
				public static setLabelFor(param0: globalAndroid.view.View, param1: number): void;
				public static setBackgroundTintMode(param0: globalAndroid.view.View, param1: globalAndroid.graphics.PorterDuff.Mode): void;
				public static getScaleY(param0: globalAndroid.view.View): number;
				public static setImportantForAccessibility(param0: globalAndroid.view.View, param1: number): void;
				public static getPivotY(param0: globalAndroid.view.View): number;
				public static setScaleX(param0: globalAndroid.view.View, param1: number): void;
				public static hasNestedScrollingParent(param0: globalAndroid.view.View, param1: number): boolean;
				public static startNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public static hasOverlappingRendering(param0: globalAndroid.view.View): boolean;
				public static offsetLeftAndRight(param0: globalAndroid.view.View, param1: number): void;
				public static setPointerIcon(param0: globalAndroid.view.View, param1: androidx.core.view.PointerIconCompat): void;
				public static setHasTransientState(param0: globalAndroid.view.View, param1: boolean): void;
				public static getScrollIndicators(param0: globalAndroid.view.View): number;
				public static startDragAndDrop(param0: globalAndroid.view.View, param1: globalAndroid.content.ClipData, param2: globalAndroid.view.View.DragShadowBuilder, param3: any, param4: number): boolean;
				public static cancelDragAndDrop(param0: globalAndroid.view.View): void;
				public static setTranslationZ(param0: globalAndroid.view.View, param1: number): void;
				public static restoreDefaultFocus(param0: globalAndroid.view.View): boolean;
				public static getTranslationY(param0: globalAndroid.view.View): number;
				public static getImportantForAutofill(param0: globalAndroid.view.View): number;
				public static setTransitionName(param0: globalAndroid.view.View, param1: string): void;
				public static dispatchNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>, param4: native.Array<number>, param5: number): boolean;
				public static setTranslationX(param0: globalAndroid.view.View, param1: number): void;
				public static dispatchApplyWindowInsets(param0: globalAndroid.view.View, param1: androidx.core.view.WindowInsetsCompat): androidx.core.view.WindowInsetsCompat;
				public static setOverScrollMode(param0: globalAndroid.view.View, param1: number): void;
				public static updateDragShadow(param0: globalAndroid.view.View, param1: globalAndroid.view.View.DragShadowBuilder): void;
				public static getBackgroundTintList(param0: globalAndroid.view.View): globalAndroid.content.res.ColorStateList;
				public static getMeasuredWidthAndState(param0: globalAndroid.view.View): number;
				public static setPivotY(param0: globalAndroid.view.View, param1: number): void;
				public static getMinimumHeight(param0: globalAndroid.view.View): number;
				public static setElevation(param0: globalAndroid.view.View, param1: number): void;
				public static setTooltipText(param0: globalAndroid.view.View, param1: string): void;
				public static setZ(param0: globalAndroid.view.View, param1: number): void;
				public static setNextClusterForwardId(param0: globalAndroid.view.View, param1: number): void;
				public static setFitsSystemWindows(param0: globalAndroid.view.View, param1: boolean): void;
				public static getX(param0: globalAndroid.view.View): number;
				public static getLayerType(param0: globalAndroid.view.View): number;
				public static setRotation(param0: globalAndroid.view.View, param1: number): void;
				public static stopNestedScroll(param0: globalAndroid.view.View): void;
				public static stopNestedScroll(param0: globalAndroid.view.View, param1: number): void;
				public static getZ(param0: globalAndroid.view.View): number;
				public static canScrollVertically(param0: globalAndroid.view.View, param1: number): boolean;
				public static setAlpha(param0: globalAndroid.view.View, param1: number): void;
				public static isInLayout(param0: globalAndroid.view.View): boolean;
				public static setLayerPaint(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Paint): void;
				public static getImportantForAccessibility(param0: globalAndroid.view.View): number;
				public static removeOnUnhandledKeyEventListener(param0: globalAndroid.view.View, param1: androidx.core.view.ViewCompat.OnUnhandledKeyEventListenerCompat): void;
				public static postOnAnimationDelayed(param0: globalAndroid.view.View, param1: java.lang.Runnable, param2: number): void;
				public static generateViewId(): number;
				public static getLayoutDirection(param0: globalAndroid.view.View): number;
				public static setY(param0: globalAndroid.view.View, param1: number): void;
				public static setPivotX(param0: globalAndroid.view.View, param1: number): void;
				public static setClipBounds(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
				public static requestApplyInsets(param0: globalAndroid.view.View): void;
				public static dispatchFinishTemporaryDetach(param0: globalAndroid.view.View): void;
				public static onPopulateAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public static onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				public static setSaveFromParentEnabled(param0: globalAndroid.view.View, param1: boolean): void;
				public static setKeyboardNavigationCluster(param0: globalAndroid.view.View, param1: boolean): void;
				public static isOpaque(param0: globalAndroid.view.View): boolean;
				public static animate(param0: globalAndroid.view.View): androidx.core.view.ViewPropertyAnimatorCompat;
				public static setLayerType(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.graphics.Paint): void;
				public static postInvalidateOnAnimation(param0: globalAndroid.view.View): void;
				public static setRotationY(param0: globalAndroid.view.View, param1: number): void;
				public static dispatchNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
				public static hasExplicitFocusable(param0: globalAndroid.view.View): boolean;
				public static dispatchNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>, param4: native.Array<number>): boolean;
				public static offsetTopAndBottom(param0: globalAndroid.view.View, param1: number): void;
				public static getTransitionName(param0: globalAndroid.view.View): string;
				public static isLayoutDirectionResolved(param0: globalAndroid.view.View): boolean;
				public static getOverScrollMode(param0: globalAndroid.view.View): number;
				public static getAccessibilityNodeProvider(param0: globalAndroid.view.View): androidx.core.view.accessibility.AccessibilityNodeProviderCompat;
				public static getRotation(param0: globalAndroid.view.View): number;
				public static getPaddingEnd(param0: globalAndroid.view.View): number;
				public static dispatchNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public static setOnApplyWindowInsetsListener(param0: globalAndroid.view.View, param1: androidx.core.view.OnApplyWindowInsetsListener): void;
				public static setScrollIndicators(param0: globalAndroid.view.View, param1: number): void;
				public static onInitializeAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public static combineMeasuredStates(param0: number, param1: number): number;
				public static hasNestedScrollingParent(param0: globalAndroid.view.View): boolean;
				public static setScaleY(param0: globalAndroid.view.View, param1: number): void;
				public static setScrollIndicators(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public static hasTransientState(param0: globalAndroid.view.View): boolean;
				public static getScaleX(param0: globalAndroid.view.View): number;
				public static onApplyWindowInsets(param0: globalAndroid.view.View, param1: androidx.core.view.WindowInsetsCompat): androidx.core.view.WindowInsetsCompat;
				public static getPaddingStart(param0: globalAndroid.view.View): number;
				public static isLaidOut(param0: globalAndroid.view.View): boolean;
				public static addOnUnhandledKeyEventListener(param0: globalAndroid.view.View, param1: androidx.core.view.ViewCompat.OnUnhandledKeyEventListenerCompat): void;
				public constructor();
				public static setNestedScrollingEnabled(param0: globalAndroid.view.View, param1: boolean): void;
				public static getNextClusterForwardId(param0: globalAndroid.view.View): number;
				public static resolveSizeAndState(param0: number, param1: number, param2: number): number;
				public static getElevation(param0: globalAndroid.view.View): number;
				public static setImportantForAutofill(param0: globalAndroid.view.View, param1: number): void;
				public static setFocusedByDefault(param0: globalAndroid.view.View, param1: boolean): void;
				public static getPivotX(param0: globalAndroid.view.View): number;
				public static isImportantForAutofill(param0: globalAndroid.view.View): boolean;
				public static getTranslationX(param0: globalAndroid.view.View): number;
				public static isNestedScrollingEnabled(param0: globalAndroid.view.View): boolean;
				public static getTranslationZ(param0: globalAndroid.view.View): number;
				public static hasOnClickListeners(param0: globalAndroid.view.View): boolean;
				public static getWindowSystemUiVisibility(param0: globalAndroid.view.View): number;
				public static startNestedScroll(param0: globalAndroid.view.View, param1: number): boolean;
				public static getAlpha(param0: globalAndroid.view.View): number;
				public static isFocusedByDefault(param0: globalAndroid.view.View): boolean;
				public static setActivated(param0: globalAndroid.view.View, param1: boolean): void;
				public static setBackground(param0: globalAndroid.view.View, param1: globalAndroid.graphics.drawable.Drawable): void;
				public static getMeasuredState(param0: globalAndroid.view.View): number;
				public static postOnAnimation(param0: globalAndroid.view.View, param1: java.lang.Runnable): void;
				public static performAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
				public static canScrollHorizontally(param0: globalAndroid.view.View, param1: number): boolean;
				public static setTranslationY(param0: globalAndroid.view.View, param1: number): void;
				public static getY(param0: globalAndroid.view.View): number;
				public static dispatchNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>): boolean;
				public static isAttachedToWindow(param0: globalAndroid.view.View): boolean;
				public static setAccessibilityLiveRegion(param0: globalAndroid.view.View, param1: number): void;
				public static dispatchNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>, param6: number): boolean;
				public static setAccessibilityDelegate(param0: globalAndroid.view.View, param1: androidx.core.view.AccessibilityDelegateCompat): void;
				public static getClipBounds(param0: globalAndroid.view.View): globalAndroid.graphics.Rect;
				public static getParentForAccessibility(param0: globalAndroid.view.View): globalAndroid.view.ViewParent;
				public static getRotationY(param0: globalAndroid.view.View): number;
				public static addKeyboardNavigationClusters(param0: globalAndroid.view.View, param1: java.util.Collection<globalAndroid.view.View>, param2: number): void;
				public static getRotationX(param0: globalAndroid.view.View): number;
				public static getAccessibilityLiveRegion(param0: globalAndroid.view.View): number;
				public static getDisplay(param0: globalAndroid.view.View): globalAndroid.view.Display;
				public static postInvalidateOnAnimation(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public static getLabelFor(param0: globalAndroid.view.View): number;
				public static dispatchStartTemporaryDetach(param0: globalAndroid.view.View): void;
				public static keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): globalAndroid.view.View;
				public static getFitsSystemWindows(param0: globalAndroid.view.View): boolean;
				public static requireViewById(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
				public static setRotationX(param0: globalAndroid.view.View, param1: number): void;
				public static isPaddingRelative(param0: globalAndroid.view.View): boolean;
				public static hasAccessibilityDelegate(param0: globalAndroid.view.View): boolean;
				public static getBackgroundTintMode(param0: globalAndroid.view.View): globalAndroid.graphics.PorterDuff.Mode;
				public static isImportantForAccessibility(param0: globalAndroid.view.View): boolean;
				public static setX(param0: globalAndroid.view.View, param1: number): void;
				public static setPaddingRelative(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public static setLayoutDirection(param0: globalAndroid.view.View, param1: number): void;
				public static getMatrix(param0: globalAndroid.view.View): globalAndroid.graphics.Matrix;
				public static setAutofillHints(param0: globalAndroid.view.View, param1: native.Array<string>): void;
				public static getMeasuredHeightAndState(param0: globalAndroid.view.View): number;
				public static jumpDrawablesToCurrentState(param0: globalAndroid.view.View): void;
				public static setChildrenDrawingOrderEnabled(param0: globalAndroid.view.ViewGroup, param1: boolean): void;
			}
			export module ViewCompat {
				export class FocusDirection {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.FocusDirection>;
					/**
					 * Constructs a new instance of the androidx.core.view.ViewCompat$FocusDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class FocusRealDirection {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.FocusRealDirection>;
					/**
					 * Constructs a new instance of the androidx.core.view.ViewCompat$FocusRealDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class FocusRelativeDirection {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.FocusRelativeDirection>;
					/**
					 * Constructs a new instance of the androidx.core.view.ViewCompat$FocusRelativeDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class NestedScrollType {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.NestedScrollType>;
					/**
					 * Constructs a new instance of the androidx.core.view.ViewCompat$NestedScrollType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class OnUnhandledKeyEventListenerCompat {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.OnUnhandledKeyEventListenerCompat>;
					/**
					 * Constructs a new instance of the androidx.core.view.ViewCompat$OnUnhandledKeyEventListenerCompat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUnhandledKeyEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.KeyEvent): boolean;
					});
					public constructor();
					public onUnhandledKeyEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.KeyEvent): boolean;
				}
				export class OnUnhandledKeyEventListenerWrapper {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.OnUnhandledKeyEventListenerWrapper>;
					public onUnhandledKeyEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.KeyEvent): boolean;
				}
				export class ScrollAxis {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.ScrollAxis>;
					/**
					 * Constructs a new instance of the androidx.core.view.ViewCompat$ScrollAxis interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class ScrollIndicators {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.ScrollIndicators>;
					/**
					 * Constructs a new instance of the androidx.core.view.ViewCompat$ScrollIndicators interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class UnhandledKeyEventManager {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.UnhandledKeyEventManager>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ViewConfigurationCompat {
				public static class: java.lang.Class<androidx.core.view.ViewConfigurationCompat>;
				public static hasPermanentMenuKey(param0: globalAndroid.view.ViewConfiguration): boolean;
				public static shouldShowMenuShortcutsWhenKeyboardPresent(param0: globalAndroid.view.ViewConfiguration, param1: globalAndroid.content.Context): boolean;
				public static getScaledHorizontalScrollFactor(param0: globalAndroid.view.ViewConfiguration, param1: globalAndroid.content.Context): number;
				public static getScaledVerticalScrollFactor(param0: globalAndroid.view.ViewConfiguration, param1: globalAndroid.content.Context): number;
				public static getScaledPagingTouchSlop(param0: globalAndroid.view.ViewConfiguration): number;
				public static getScaledHoverSlop(param0: globalAndroid.view.ViewConfiguration): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ViewGroupCompat {
				public static class: java.lang.Class<androidx.core.view.ViewGroupCompat>;
				public static LAYOUT_MODE_CLIP_BOUNDS: number;
				public static LAYOUT_MODE_OPTICAL_BOUNDS: number;
				public static isTransitionGroup(param0: globalAndroid.view.ViewGroup): boolean;
				public static getNestedScrollAxes(param0: globalAndroid.view.ViewGroup): number;
				public static onRequestSendAccessibilityEvent(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public static getLayoutMode(param0: globalAndroid.view.ViewGroup): number;
				public static setMotionEventSplittingEnabled(param0: globalAndroid.view.ViewGroup, param1: boolean): void;
				public static setTransitionGroup(param0: globalAndroid.view.ViewGroup, param1: boolean): void;
				public static setLayoutMode(param0: globalAndroid.view.ViewGroup, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ViewParentCompat {
				public static class: java.lang.Class<androidx.core.view.ViewParentCompat>;
				public static requestSendAccessibilityEvent(param0: globalAndroid.view.ViewParent, param1: globalAndroid.view.View, param2: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public static onStopNestedScroll(param0: globalAndroid.view.ViewParent, param1: globalAndroid.view.View, param2: number): void;
				public static onStopNestedScroll(param0: globalAndroid.view.ViewParent, param1: globalAndroid.view.View): void;
				public static onNestedPreScroll(param0: globalAndroid.view.ViewParent, param1: globalAndroid.view.View, param2: number, param3: number, param4: native.Array<number>, param5: number): void;
				public static onNestedPreFling(param0: globalAndroid.view.ViewParent, param1: globalAndroid.view.View, param2: number, param3: number): boolean;
				public static onNestedScrollAccepted(param0: globalAndroid.view.ViewParent, param1: globalAndroid.view.View, param2: globalAndroid.view.View, param3: number): void;
				public static onNestedPreScroll(param0: globalAndroid.view.ViewParent, param1: globalAndroid.view.View, param2: number, param3: number, param4: native.Array<number>): void;
				public static onNestedScroll(param0: globalAndroid.view.ViewParent, param1: globalAndroid.view.View, param2: number, param3: number, param4: number, param5: number, param6: number): void;
				public static onStartNestedScroll(param0: globalAndroid.view.ViewParent, param1: globalAndroid.view.View, param2: globalAndroid.view.View, param3: number): boolean;
				public static onNestedScroll(param0: globalAndroid.view.ViewParent, param1: globalAndroid.view.View, param2: number, param3: number, param4: number, param5: number): void;
				public static onNestedScrollAccepted(param0: globalAndroid.view.ViewParent, param1: globalAndroid.view.View, param2: globalAndroid.view.View, param3: number, param4: number): void;
				public static onStartNestedScroll(param0: globalAndroid.view.ViewParent, param1: globalAndroid.view.View, param2: globalAndroid.view.View, param3: number, param4: number): boolean;
				public static notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.ViewParent, param1: globalAndroid.view.View, param2: globalAndroid.view.View, param3: number): void;
				public static onNestedFling(param0: globalAndroid.view.ViewParent, param1: globalAndroid.view.View, param2: number, param3: number, param4: boolean): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ViewPropertyAnimatorCompat {
				public static class: java.lang.Class<androidx.core.view.ViewPropertyAnimatorCompat>;
				public x(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public rotationY(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public setDuration(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public getDuration(): number;
				public rotationBy(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public xBy(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public translationYBy(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public translationZBy(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public setInterpolator(param0: globalAndroid.view.animation.Interpolator): androidx.core.view.ViewPropertyAnimatorCompat;
				public rotationX(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public translationXBy(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public setStartDelay(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public withLayer(): androidx.core.view.ViewPropertyAnimatorCompat;
				public start(): void;
				public yBy(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public setListener(param0: androidx.core.view.ViewPropertyAnimatorListener): androidx.core.view.ViewPropertyAnimatorCompat;
				public withEndAction(param0: java.lang.Runnable): androidx.core.view.ViewPropertyAnimatorCompat;
				public cancel(): void;
				public zBy(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public scaleX(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public scaleY(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public rotationXBy(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public rotationYBy(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public y(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public z(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public withStartAction(param0: java.lang.Runnable): androidx.core.view.ViewPropertyAnimatorCompat;
				public scaleYBy(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public translationZ(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public translationX(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public translationY(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public scaleXBy(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public alpha(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public getStartDelay(): number;
				public alphaBy(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public rotation(param0: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public getInterpolator(): globalAndroid.view.animation.Interpolator;
				public setUpdateListener(param0: androidx.core.view.ViewPropertyAnimatorUpdateListener): androidx.core.view.ViewPropertyAnimatorCompat;
			}
			export module ViewPropertyAnimatorCompat {
				export class ViewPropertyAnimatorListenerApi14 extends androidx.core.view.ViewPropertyAnimatorListener {
					public static class: java.lang.Class<androidx.core.view.ViewPropertyAnimatorCompat.ViewPropertyAnimatorListenerApi14>;
					public onAnimationCancel(param0: globalAndroid.view.View): void;
					public onAnimationStart(param0: globalAndroid.view.View): void;
					public onAnimationEnd(param0: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ViewPropertyAnimatorListener {
				public static class: java.lang.Class<androidx.core.view.ViewPropertyAnimatorListener>;
				/**
				 * Constructs a new instance of the androidx.core.view.ViewPropertyAnimatorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onAnimationStart(param0: globalAndroid.view.View): void;
					onAnimationEnd(param0: globalAndroid.view.View): void;
					onAnimationCancel(param0: globalAndroid.view.View): void;
				});
				public constructor();
				public onAnimationCancel(param0: globalAndroid.view.View): void;
				public onAnimationEnd(param0: globalAndroid.view.View): void;
				public onAnimationStart(param0: globalAndroid.view.View): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ViewPropertyAnimatorListenerAdapter extends androidx.core.view.ViewPropertyAnimatorListener {
				public static class: java.lang.Class<androidx.core.view.ViewPropertyAnimatorListenerAdapter>;
				public onAnimationCancel(param0: globalAndroid.view.View): void;
				public onAnimationEnd(param0: globalAndroid.view.View): void;
				public onAnimationStart(param0: globalAndroid.view.View): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ViewPropertyAnimatorUpdateListener {
				public static class: java.lang.Class<androidx.core.view.ViewPropertyAnimatorUpdateListener>;
				/**
				 * Constructs a new instance of the androidx.core.view.ViewPropertyAnimatorUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onAnimationUpdate(param0: globalAndroid.view.View): void;
				});
				public constructor();
				public onAnimationUpdate(param0: globalAndroid.view.View): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class WindowCompat {
				public static class: java.lang.Class<androidx.core.view.WindowCompat>;
				public static FEATURE_ACTION_BAR: number;
				public static FEATURE_ACTION_BAR_OVERLAY: number;
				public static FEATURE_ACTION_MODE_OVERLAY: number;
				public static requireViewById(param0: globalAndroid.view.Window, param1: number): globalAndroid.view.View;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class WindowInsetsCompat {
				public static class: java.lang.Class<androidx.core.view.WindowInsetsCompat>;
				public getSystemWindowInsetRight(): number;
				public replaceSystemWindowInsets(param0: number, param1: number, param2: number, param3: number): androidx.core.view.WindowInsetsCompat;
				public constructor(param0: androidx.core.view.WindowInsetsCompat);
				public hasStableInsets(): boolean;
				public consumeSystemWindowInsets(): androidx.core.view.WindowInsetsCompat;
				public isConsumed(): boolean;
				public isRound(): boolean;
				public consumeStableInsets(): androidx.core.view.WindowInsetsCompat;
				public getDisplayCutout(): androidx.core.view.DisplayCutoutCompat;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getStableInsetLeft(): number;
				public getSystemWindowInsetTop(): number;
				public getStableInsetTop(): number;
				public getStableInsetRight(): number;
				public getSystemWindowInsetLeft(): number;
				public getSystemWindowInsetBottom(): number;
				public hasSystemWindowInsets(): boolean;
				public replaceSystemWindowInsets(param0: globalAndroid.graphics.Rect): androidx.core.view.WindowInsetsCompat;
				public getStableInsetBottom(): number;
				public hasInsets(): boolean;
				public consumeDisplayCutout(): androidx.core.view.WindowInsetsCompat;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module accessibility {
				export class AccessibilityEventCompat {
					public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityEventCompat>;
					public static TYPE_VIEW_HOVER_ENTER: number;
					public static TYPE_VIEW_HOVER_EXIT: number;
					public static TYPE_TOUCH_EXPLORATION_GESTURE_START: number;
					public static TYPE_TOUCH_EXPLORATION_GESTURE_END: number;
					public static TYPE_WINDOW_CONTENT_CHANGED: number;
					public static TYPE_VIEW_SCROLLED: number;
					public static TYPE_VIEW_TEXT_SELECTION_CHANGED: number;
					public static TYPE_ANNOUNCEMENT: number;
					public static TYPE_VIEW_ACCESSIBILITY_FOCUSED: number;
					public static TYPE_VIEW_ACCESSIBILITY_FOCUS_CLEARED: number;
					public static TYPE_VIEW_TEXT_TRAVERSED_AT_MOVEMENT_GRANULARITY: number;
					public static TYPE_GESTURE_DETECTION_START: number;
					public static TYPE_GESTURE_DETECTION_END: number;
					public static TYPE_TOUCH_INTERACTION_START: number;
					public static TYPE_TOUCH_INTERACTION_END: number;
					public static TYPE_WINDOWS_CHANGED: number;
					public static TYPE_VIEW_CONTEXT_CLICKED: number;
					public static TYPE_ASSIST_READING_CONTEXT: number;
					public static CONTENT_CHANGE_TYPE_UNDEFINED: number;
					public static CONTENT_CHANGE_TYPE_SUBTREE: number;
					public static CONTENT_CHANGE_TYPE_TEXT: number;
					public static CONTENT_CHANGE_TYPE_CONTENT_DESCRIPTION: number;
					public static TYPES_ALL_MASK: number;
					public static getContentChangeTypes(param0: globalAndroid.view.accessibility.AccessibilityEvent): number;
					public static getAction(param0: globalAndroid.view.accessibility.AccessibilityEvent): number;
					public static setMovementGranularity(param0: globalAndroid.view.accessibility.AccessibilityEvent, param1: number): void;
					public static appendRecord(param0: globalAndroid.view.accessibility.AccessibilityEvent, param1: androidx.core.view.accessibility.AccessibilityRecordCompat): void;
					public static getRecord(param0: globalAndroid.view.accessibility.AccessibilityEvent, param1: number): androidx.core.view.accessibility.AccessibilityRecordCompat;
					public static setContentChangeTypes(param0: globalAndroid.view.accessibility.AccessibilityEvent, param1: number): void;
					public static getMovementGranularity(param0: globalAndroid.view.accessibility.AccessibilityEvent): number;
					public static asRecord(param0: globalAndroid.view.accessibility.AccessibilityEvent): androidx.core.view.accessibility.AccessibilityRecordCompat;
					public static getRecordCount(param0: globalAndroid.view.accessibility.AccessibilityEvent): number;
					public static setAction(param0: globalAndroid.view.accessibility.AccessibilityEvent, param1: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module accessibility {
				export class AccessibilityManagerCompat {
					public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityManagerCompat>;
					public static isTouchExplorationEnabled(param0: globalAndroid.view.accessibility.AccessibilityManager): boolean;
					public static removeTouchExplorationStateChangeListener(param0: globalAndroid.view.accessibility.AccessibilityManager, param1: androidx.core.view.accessibility.AccessibilityManagerCompat.TouchExplorationStateChangeListener): boolean;
					public static getInstalledAccessibilityServiceList(param0: globalAndroid.view.accessibility.AccessibilityManager): java.util.List<globalAndroid.accessibilityservice.AccessibilityServiceInfo>;
					public static addTouchExplorationStateChangeListener(param0: globalAndroid.view.accessibility.AccessibilityManager, param1: androidx.core.view.accessibility.AccessibilityManagerCompat.TouchExplorationStateChangeListener): boolean;
					public static getEnabledAccessibilityServiceList(param0: globalAndroid.view.accessibility.AccessibilityManager, param1: number): java.util.List<globalAndroid.accessibilityservice.AccessibilityServiceInfo>;
					public static addAccessibilityStateChangeListener(param0: globalAndroid.view.accessibility.AccessibilityManager, param1: androidx.core.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListener): boolean;
					public static removeAccessibilityStateChangeListener(param0: globalAndroid.view.accessibility.AccessibilityManager, param1: androidx.core.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListener): boolean;
				}
				export module AccessibilityManagerCompat {
					export class AccessibilityStateChangeListener {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListener>;
						/**
						 * Constructs a new instance of the androidx.core.view.accessibility.AccessibilityManagerCompat$AccessibilityStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAccessibilityStateChanged(param0: boolean): void;
						});
						public constructor();
						public onAccessibilityStateChanged(param0: boolean): void;
					}
					export abstract class AccessibilityStateChangeListenerCompat extends androidx.core.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListener {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListenerCompat>;
						public constructor();
						public onAccessibilityStateChanged(param0: boolean): void;
					}
					export class AccessibilityStateChangeListenerWrapper {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListenerWrapper>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public onAccessibilityStateChanged(param0: boolean): void;
					}
					export class TouchExplorationStateChangeListener {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityManagerCompat.TouchExplorationStateChangeListener>;
						/**
						 * Constructs a new instance of the androidx.core.view.accessibility.AccessibilityManagerCompat$TouchExplorationStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTouchExplorationStateChanged(param0: boolean): void;
						});
						public constructor();
						public onTouchExplorationStateChanged(param0: boolean): void;
					}
					export class TouchExplorationStateChangeListenerWrapper {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityManagerCompat.TouchExplorationStateChangeListenerWrapper>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public onTouchExplorationStateChanged(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module accessibility {
				export class AccessibilityNodeInfoCompat {
					public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityNodeInfoCompat>;
					public mParentVirtualDescendantId: number;
					public static ACTION_FOCUS: number;
					public static ACTION_CLEAR_FOCUS: number;
					public static ACTION_SELECT: number;
					public static ACTION_CLEAR_SELECTION: number;
					public static ACTION_CLICK: number;
					public static ACTION_LONG_CLICK: number;
					public static ACTION_ACCESSIBILITY_FOCUS: number;
					public static ACTION_CLEAR_ACCESSIBILITY_FOCUS: number;
					public static ACTION_NEXT_AT_MOVEMENT_GRANULARITY: number;
					public static ACTION_PREVIOUS_AT_MOVEMENT_GRANULARITY: number;
					public static ACTION_NEXT_HTML_ELEMENT: number;
					public static ACTION_PREVIOUS_HTML_ELEMENT: number;
					public static ACTION_SCROLL_FORWARD: number;
					public static ACTION_SCROLL_BACKWARD: number;
					public static ACTION_COPY: number;
					public static ACTION_PASTE: number;
					public static ACTION_CUT: number;
					public static ACTION_SET_SELECTION: number;
					public static ACTION_EXPAND: number;
					public static ACTION_COLLAPSE: number;
					public static ACTION_DISMISS: number;
					public static ACTION_SET_TEXT: number;
					public static ACTION_ARGUMENT_MOVEMENT_GRANULARITY_INT: string;
					public static ACTION_ARGUMENT_HTML_ELEMENT_STRING: string;
					public static ACTION_ARGUMENT_EXTEND_SELECTION_BOOLEAN: string;
					public static ACTION_ARGUMENT_SELECTION_START_INT: string;
					public static ACTION_ARGUMENT_SELECTION_END_INT: string;
					public static ACTION_ARGUMENT_SET_TEXT_CHARSEQUENCE: string;
					public static ACTION_ARGUMENT_ROW_INT: string;
					public static ACTION_ARGUMENT_COLUMN_INT: string;
					public static ACTION_ARGUMENT_PROGRESS_VALUE: string;
					public static ACTION_ARGUMENT_MOVE_WINDOW_X: string;
					public static ACTION_ARGUMENT_MOVE_WINDOW_Y: string;
					public static FOCUS_INPUT: number;
					public static FOCUS_ACCESSIBILITY: number;
					public static MOVEMENT_GRANULARITY_CHARACTER: number;
					public static MOVEMENT_GRANULARITY_WORD: number;
					public static MOVEMENT_GRANULARITY_LINE: number;
					public static MOVEMENT_GRANULARITY_PARAGRAPH: number;
					public static MOVEMENT_GRANULARITY_PAGE: number;
					public findFocus(param0: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public recycle(): void;
					public setHintText(param0: string): void;
					public isFocusable(): boolean;
					public setTraversalBefore(param0: globalAndroid.view.View): void;
					public getParent(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public isClickable(): boolean;
					public getContentDescription(): string;
					public setContentInvalid(param0: boolean): void;
					public setPaneTitle(param0: string): void;
					public setEditable(param0: boolean): void;
					public findAccessibilityNodeInfosByText(param0: string): java.util.List<androidx.core.view.accessibility.AccessibilityNodeInfoCompat>;
					public setSelected(param0: boolean): void;
					public setText(param0: string): void;
					public setCheckable(param0: boolean): void;
					public setLongClickable(param0: boolean): void;
					public static obtain(param0: globalAndroid.view.View): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public isVisibleToUser(): boolean;
					public isHeading(): boolean;
					public setBoundsInScreen(param0: globalAndroid.graphics.Rect): void;
					public setChecked(param0: boolean): void;
					public setParent(param0: globalAndroid.view.View): void;
					public setLiveRegion(param0: number): void;
					public setVisibleToUser(param0: boolean): void;
					public getLabeledBy(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public getLabelFor(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public setClickable(param0: boolean): void;
					public getTextSelectionStart(): number;
					public removeAction(param0: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat): boolean;
					public setCollectionInfo(param0: any): void;
					public getTraversalBefore(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public setSource(param0: globalAndroid.view.View): void;
					public isSelected(): boolean;
					public setBoundsInParent(param0: globalAndroid.graphics.Rect): void;
					public setContentDescription(param0: string): void;
					public getPackageName(): string;
					public setMovementGranularities(param0: number): void;
					public findAccessibilityNodeInfosByViewId(param0: string): java.util.List<androidx.core.view.accessibility.AccessibilityNodeInfoCompat>;
					public static obtain(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public getViewIdResourceName(): string;
					public setTraversalBefore(param0: globalAndroid.view.View, param1: number): void;
					public setDismissable(param0: boolean): void;
					public getDrawingOrder(): number;
					public getWindow(): androidx.core.view.accessibility.AccessibilityWindowInfoCompat;
					public setLabelFor(param0: globalAndroid.view.View, param1: number): void;
					public getInfo(): any;
					public addAction(param0: number): void;
					public isCheckable(): boolean;
					public removeChild(param0: globalAndroid.view.View, param1: number): boolean;
					public hashCode(): number;
					public isChecked(): boolean;
					public getActionList(): java.util.List<androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat>;
					public getBoundsInScreen(param0: globalAndroid.graphics.Rect): void;
					public isImportantForAccessibility(): boolean;
					public setClassName(param0: string): void;
					public refresh(): boolean;
					public getMaxTextLength(): number;
					public setShowingHintText(param0: boolean): void;
					public setContextClickable(param0: boolean): void;
					public addChild(param0: globalAndroid.view.View): void;
					public setCanOpenPopup(param0: boolean): void;
					public getPaneTitle(): string;
					public isMultiLine(): boolean;
					public setError(param0: string): void;
					public canOpenPopup(): boolean;
					public getActions(): number;
					public isScrollable(): boolean;
					public getCollectionItemInfo(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat.CollectionItemInfoCompat;
					public getTraversalAfter(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public setLabeledBy(param0: globalAndroid.view.View): void;
					public getChildCount(): number;
					public getLiveRegion(): number;
					public setRangeInfo(param0: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.RangeInfoCompat): void;
					public getMovementGranularities(): number;
					public getCollectionInfo(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat.CollectionInfoCompat;
					public isContextClickable(): boolean;
					public setHeading(param0: boolean): void;
					public isEnabled(): boolean;
					public isScreenReaderFocusable(): boolean;
					public setEnabled(param0: boolean): void;
					public setPackageName(param0: string): void;
					public setScrollable(param0: boolean): void;
					public getText(): string;
					public setScreenReaderFocusable(param0: boolean): void;
					public setPassword(param0: boolean): void;
					public setRoleDescription(param0: string): void;
					public setTextSelection(param0: number, param1: number): void;
					public isDismissable(): boolean;
					public setMultiLine(param0: boolean): void;
					public removeChild(param0: globalAndroid.view.View): boolean;
					public setInputType(param0: number): void;
					public getError(): string;
					public addChild(param0: globalAndroid.view.View, param1: number): void;
					public isContentInvalid(): boolean;
					public getTooltipText(): string;
					public setAccessibilityFocused(param0: boolean): void;
					public isEditable(): boolean;
					public getBoundsInParent(param0: globalAndroid.graphics.Rect): void;
					public getRoleDescription(): string;
					public static wrap(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public isFocused(): boolean;
					public isPassword(): boolean;
					public setTraversalAfter(param0: globalAndroid.view.View): void;
					public setTooltipText(param0: string): void;
					public constructor(param0: any);
					public getTextSelectionEnd(): number;
					public setImportantForAccessibility(param0: boolean): void;
					public setDrawingOrder(param0: number): void;
					public unwrap(): globalAndroid.view.accessibility.AccessibilityNodeInfo;
					public setParent(param0: globalAndroid.view.View, param1: number): void;
					public toString(): string;
					public getClassName(): string;
					public getExtras(): globalAndroid.os.Bundle;
					public setSource(param0: globalAndroid.view.View, param1: number): void;
					public setTraversalAfter(param0: globalAndroid.view.View, param1: number): void;
					public performAction(param0: number): boolean;
					public getHintText(): string;
					public setMaxTextLength(param0: number): void;
					public setFocusable(param0: boolean): void;
					public isAccessibilityFocused(): boolean;
					public static obtain(param0: globalAndroid.view.View, param1: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public performAction(param0: number, param1: globalAndroid.os.Bundle): boolean;
					public setLabeledBy(param0: globalAndroid.view.View, param1: number): void;
					public focusSearch(param0: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public getRangeInfo(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat.RangeInfoCompat;
					public static obtain(param0: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public setViewIdResourceName(param0: string): void;
					public setLabelFor(param0: globalAndroid.view.View): void;
					public equals(param0: any): boolean;
					public isLongClickable(): boolean;
					public getWindowId(): number;
					public getChild(param0: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public setCollectionItemInfo(param0: any): void;
					public isShowingHintText(): boolean;
					public setFocused(param0: boolean): void;
					public getInputType(): number;
					public addAction(param0: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat): void;
				}
				export module AccessibilityNodeInfoCompat {
					export class AccessibilityActionCompat {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat>;
						public static ACTION_FOCUS: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_CLEAR_FOCUS: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SELECT: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_CLEAR_SELECTION: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_CLICK: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_LONG_CLICK: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_ACCESSIBILITY_FOCUS: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_CLEAR_ACCESSIBILITY_FOCUS: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_NEXT_AT_MOVEMENT_GRANULARITY: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_PREVIOUS_AT_MOVEMENT_GRANULARITY: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_NEXT_HTML_ELEMENT: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_PREVIOUS_HTML_ELEMENT: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SCROLL_FORWARD: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SCROLL_BACKWARD: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_COPY: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_PASTE: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_CUT: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SET_SELECTION: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_EXPAND: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_COLLAPSE: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_DISMISS: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SET_TEXT: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SHOW_ON_SCREEN: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SCROLL_TO_POSITION: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SCROLL_UP: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SCROLL_LEFT: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SCROLL_DOWN: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SCROLL_RIGHT: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_CONTEXT_CLICK: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SET_PROGRESS: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_MOVE_WINDOW: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SHOW_TOOLTIP: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_HIDE_TOOLTIP: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public constructor(param0: number, param1: string);
						public getLabel(): string;
						public getId(): number;
					}
					export class CollectionInfoCompat {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityNodeInfoCompat.CollectionInfoCompat>;
						public static SELECTION_MODE_NONE: number;
						public static SELECTION_MODE_SINGLE: number;
						public static SELECTION_MODE_MULTIPLE: number;
						public static obtain(param0: number, param1: number, param2: boolean, param3: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat.CollectionInfoCompat;
						public static obtain(param0: number, param1: number, param2: boolean): androidx.core.view.accessibility.AccessibilityNodeInfoCompat.CollectionInfoCompat;
						public getRowCount(): number;
						public isHierarchical(): boolean;
						public getSelectionMode(): number;
						public getColumnCount(): number;
					}
					export class CollectionItemInfoCompat {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityNodeInfoCompat.CollectionItemInfoCompat>;
						public isHeading(): boolean;
						public static obtain(param0: number, param1: number, param2: number, param3: number, param4: boolean): androidx.core.view.accessibility.AccessibilityNodeInfoCompat.CollectionItemInfoCompat;
						public getColumnSpan(): number;
						public static obtain(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: boolean): androidx.core.view.accessibility.AccessibilityNodeInfoCompat.CollectionItemInfoCompat;
						public isSelected(): boolean;
						public getRowIndex(): number;
						public getColumnIndex(): number;
						public getRowSpan(): number;
					}
					export class RangeInfoCompat {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityNodeInfoCompat.RangeInfoCompat>;
						public static RANGE_TYPE_INT: number;
						public static RANGE_TYPE_FLOAT: number;
						public static RANGE_TYPE_PERCENT: number;
						public getMin(): number;
						public getCurrent(): number;
						public getType(): number;
						public static obtain(param0: number, param1: number, param2: number, param3: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat.RangeInfoCompat;
						public getMax(): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module accessibility {
				export class AccessibilityNodeProviderCompat {
					public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityNodeProviderCompat>;
					public static HOST_VIEW_ID: number;
					public performAction(param0: number, param1: number, param2: globalAndroid.os.Bundle): boolean;
					public findFocus(param0: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public constructor();
					public findAccessibilityNodeInfosByText(param0: string, param1: number): java.util.List<androidx.core.view.accessibility.AccessibilityNodeInfoCompat>;
					public getProvider(): any;
					public constructor(param0: any);
					public createAccessibilityNodeInfo(param0: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
				}
				export module AccessibilityNodeProviderCompat {
					export class AccessibilityNodeProviderApi16 {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityNodeProviderCompat.AccessibilityNodeProviderApi16>;
						public createAccessibilityNodeInfo(param0: number): globalAndroid.view.accessibility.AccessibilityNodeInfo;
						public performAction(param0: number, param1: number, param2: globalAndroid.os.Bundle): boolean;
						public findAccessibilityNodeInfosByText(param0: string, param1: number): java.util.List<globalAndroid.view.accessibility.AccessibilityNodeInfo>;
					}
					export class AccessibilityNodeProviderApi19 extends androidx.core.view.accessibility.AccessibilityNodeProviderCompat.AccessibilityNodeProviderApi16 {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityNodeProviderCompat.AccessibilityNodeProviderApi19>;
						public findFocus(param0: number): globalAndroid.view.accessibility.AccessibilityNodeInfo;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module accessibility {
				export class AccessibilityRecordCompat {
					public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityRecordCompat>;
					public isScrollable(): boolean;
					public setRemovedCount(param0: number): void;
					public recycle(): void;
					public getMaxScrollX(): number;
					public getBeforeText(): string;
					public static setMaxScrollX(param0: globalAndroid.view.accessibility.AccessibilityRecord, param1: number): void;
					public getContentDescription(): string;
					public setCurrentItemIndex(param0: number): void;
					public setScrollY(param0: number): void;
					public static setMaxScrollY(param0: globalAndroid.view.accessibility.AccessibilityRecord, param1: number): void;
					public getText(): java.util.List<string>;
					public isFullScreen(): boolean;
					public isEnabled(): boolean;
					public setChecked(param0: boolean): void;
					public setAddedCount(param0: number): void;
					public setEnabled(param0: boolean): void;
					public setScrollable(param0: boolean): void;
					public setBeforeText(param0: string): void;
					public setPassword(param0: boolean): void;
					public setFromIndex(param0: number): void;
					public setToIndex(param0: number): void;
					public getParcelableData(): globalAndroid.os.Parcelable;
					public getSource(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public getImpl(): any;
					public getCurrentItemIndex(): number;
					public setSource(param0: globalAndroid.view.View): void;
					public setContentDescription(param0: string): void;
					public getScrollY(): number;
					public static setSource(param0: globalAndroid.view.accessibility.AccessibilityRecord, param1: globalAndroid.view.View, param2: number): void;
					public isPassword(): boolean;
					public getRemovedCount(): number;
					public constructor(param0: any);
					public getFromIndex(): number;
					public getClassName(): string;
					public setSource(param0: globalAndroid.view.View, param1: number): void;
					public static getMaxScrollX(param0: globalAndroid.view.accessibility.AccessibilityRecord): number;
					public static obtain(): androidx.core.view.accessibility.AccessibilityRecordCompat;
					public hashCode(): number;
					public setMaxScrollX(param0: number): void;
					public isChecked(): boolean;
					public static getMaxScrollY(param0: globalAndroid.view.accessibility.AccessibilityRecord): number;
					public setClassName(param0: string): void;
					public getToIndex(): number;
					public equals(param0: any): boolean;
					public static obtain(param0: androidx.core.view.accessibility.AccessibilityRecordCompat): androidx.core.view.accessibility.AccessibilityRecordCompat;
					public setItemCount(param0: number): void;
					public getWindowId(): number;
					public getItemCount(): number;
					public getMaxScrollY(): number;
					public getScrollX(): number;
					public setFullScreen(param0: boolean): void;
					public setScrollX(param0: number): void;
					public setMaxScrollY(param0: number): void;
					public getAddedCount(): number;
					public setParcelableData(param0: globalAndroid.os.Parcelable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module accessibility {
				export class AccessibilityWindowInfoCompat {
					public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityWindowInfoCompat>;
					public static TYPE_APPLICATION: number;
					public static TYPE_INPUT_METHOD: number;
					public static TYPE_SYSTEM: number;
					public static TYPE_ACCESSIBILITY_OVERLAY: number;
					public static TYPE_SPLIT_SCREEN_DIVIDER: number;
					public getType(): number;
					public getBoundsInScreen(param0: globalAndroid.graphics.Rect): void;
					public getTitle(): string;
					public getChildCount(): number;
					public recycle(): void;
					public isFocused(): boolean;
					public getId(): number;
					public getRoot(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public getAnchor(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public equals(param0: any): boolean;
					public isActive(): boolean;
					public toString(): string;
					public static obtain(param0: androidx.core.view.accessibility.AccessibilityWindowInfoCompat): androidx.core.view.accessibility.AccessibilityWindowInfoCompat;
					public getLayer(): number;
					public hashCode(): number;
					public getParent(): androidx.core.view.accessibility.AccessibilityWindowInfoCompat;
					public isAccessibilityFocused(): boolean;
					public static obtain(): androidx.core.view.accessibility.AccessibilityWindowInfoCompat;
					public getChild(param0: number): androidx.core.view.accessibility.AccessibilityWindowInfoCompat;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module animation {
				export class PathInterpolatorApi14 {
					public static class: java.lang.Class<androidx.core.view.animation.PathInterpolatorApi14>;
					public getInterpolation(param0: number): number;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module animation {
				export class PathInterpolatorCompat {
					public static class: java.lang.Class<androidx.core.view.animation.PathInterpolatorCompat>;
					public static create(param0: number, param1: number, param2: number, param3: number): globalAndroid.view.animation.Interpolator;
					public static create(param0: number, param1: number): globalAndroid.view.animation.Interpolator;
					public static create(param0: globalAndroid.graphics.Path): globalAndroid.view.animation.Interpolator;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module inputmethod {
				export class EditorInfoCompat {
					public static class: java.lang.Class<androidx.core.view.inputmethod.EditorInfoCompat>;
					public static IME_FLAG_NO_PERSONALIZED_LEARNING: number;
					public static IME_FLAG_FORCE_ASCII: number;
					public static setContentMimeTypes(param0: globalAndroid.view.inputmethod.EditorInfo, param1: native.Array<string>): void;
					public constructor();
					public static getContentMimeTypes(param0: globalAndroid.view.inputmethod.EditorInfo): native.Array<string>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module inputmethod {
				export class InputConnectionCompat {
					public static class: java.lang.Class<androidx.core.view.inputmethod.InputConnectionCompat>;
					public static INPUT_CONTENT_GRANT_READ_URI_PERMISSION: number;
					public static commitContent(param0: globalAndroid.view.inputmethod.InputConnection, param1: globalAndroid.view.inputmethod.EditorInfo, param2: androidx.core.view.inputmethod.InputContentInfoCompat, param3: number, param4: globalAndroid.os.Bundle): boolean;
					public static createWrapper(param0: globalAndroid.view.inputmethod.InputConnection, param1: globalAndroid.view.inputmethod.EditorInfo, param2: androidx.core.view.inputmethod.InputConnectionCompat.OnCommitContentListener): globalAndroid.view.inputmethod.InputConnection;
					public constructor();
				}
				export module InputConnectionCompat {
					export class OnCommitContentListener {
						public static class: java.lang.Class<androidx.core.view.inputmethod.InputConnectionCompat.OnCommitContentListener>;
						/**
						 * Constructs a new instance of the androidx.core.view.inputmethod.InputConnectionCompat$OnCommitContentListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCommitContent(param0: androidx.core.view.inputmethod.InputContentInfoCompat, param1: number, param2: globalAndroid.os.Bundle): boolean;
						});
						public constructor();
						public onCommitContent(param0: androidx.core.view.inputmethod.InputContentInfoCompat, param1: number, param2: globalAndroid.os.Bundle): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module inputmethod {
				export class InputContentInfoCompat {
					public static class: java.lang.Class<androidx.core.view.inputmethod.InputContentInfoCompat>;
					public constructor(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ClipDescription, param2: globalAndroid.net.Uri);
					public unwrap(): any;
					public getDescription(): globalAndroid.content.ClipDescription;
					public getContentUri(): globalAndroid.net.Uri;
					public requestPermission(): void;
					public getLinkUri(): globalAndroid.net.Uri;
					public releasePermission(): void;
					public static wrap(param0: any): androidx.core.view.inputmethod.InputContentInfoCompat;
				}
				export module InputContentInfoCompat {
					export class InputContentInfoCompatApi25Impl extends androidx.core.view.inputmethod.InputContentInfoCompat.InputContentInfoCompatImpl {
						public static class: java.lang.Class<androidx.core.view.inputmethod.InputContentInfoCompat.InputContentInfoCompatApi25Impl>;
						public getLinkUri(): globalAndroid.net.Uri;
						public getContentUri(): globalAndroid.net.Uri;
						public requestPermission(): void;
						public getInputContentInfo(): any;
						public getDescription(): globalAndroid.content.ClipDescription;
						public releasePermission(): void;
					}
					export class InputContentInfoCompatBaseImpl extends androidx.core.view.inputmethod.InputContentInfoCompat.InputContentInfoCompatImpl {
						public static class: java.lang.Class<androidx.core.view.inputmethod.InputContentInfoCompat.InputContentInfoCompatBaseImpl>;
						public getLinkUri(): globalAndroid.net.Uri;
						public getContentUri(): globalAndroid.net.Uri;
						public requestPermission(): void;
						public getInputContentInfo(): any;
						public getDescription(): globalAndroid.content.ClipDescription;
						public releasePermission(): void;
					}
					export class InputContentInfoCompatImpl {
						public static class: java.lang.Class<androidx.core.view.inputmethod.InputContentInfoCompat.InputContentInfoCompatImpl>;
						/**
						 * Constructs a new instance of the androidx.core.view.inputmethod.InputContentInfoCompat$InputContentInfoCompatImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getContentUri(): globalAndroid.net.Uri;
							getDescription(): globalAndroid.content.ClipDescription;
							getLinkUri(): globalAndroid.net.Uri;
							getInputContentInfo(): any;
							requestPermission(): void;
							releasePermission(): void;
						});
						public constructor();
						public getLinkUri(): globalAndroid.net.Uri;
						public getContentUri(): globalAndroid.net.Uri;
						public requestPermission(): void;
						public getInputContentInfo(): any;
						public getDescription(): globalAndroid.content.ClipDescription;
						public releasePermission(): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export abstract class AutoScrollHelper {
				public static class: java.lang.Class<androidx.core.widget.AutoScrollHelper>;
				public static RELATIVE_UNSPECIFIED: number;
				public static NO_MAX: number;
				public static NO_MIN: number;
				public static EDGE_TYPE_INSIDE: number;
				public static EDGE_TYPE_INSIDE_EXTEND: number;
				public static EDGE_TYPE_OUTSIDE: number;
				public setEnabled(param0: boolean): androidx.core.widget.AutoScrollHelper;
				public setMaximumVelocity(param0: number, param1: number): androidx.core.widget.AutoScrollHelper;
				public setMinimumVelocity(param0: number, param1: number): androidx.core.widget.AutoScrollHelper;
				public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
				public setRelativeEdges(param0: number, param1: number): androidx.core.widget.AutoScrollHelper;
				public setRampUpDuration(param0: number): androidx.core.widget.AutoScrollHelper;
				public setEdgeType(param0: number): androidx.core.widget.AutoScrollHelper;
				public canTargetScrollHorizontally(param0: number): boolean;
				public canTargetScrollVertically(param0: number): boolean;
				public setMaximumEdges(param0: number, param1: number): androidx.core.widget.AutoScrollHelper;
				public setExclusive(param0: boolean): androidx.core.widget.AutoScrollHelper;
				public scrollTargetBy(param0: number, param1: number): void;
				public setActivationDelay(param0: number): androidx.core.widget.AutoScrollHelper;
				public setRelativeVelocity(param0: number, param1: number): androidx.core.widget.AutoScrollHelper;
				public isEnabled(): boolean;
				public setRampDownDuration(param0: number): androidx.core.widget.AutoScrollHelper;
				public constructor(param0: globalAndroid.view.View);
				public isExclusive(): boolean;
			}
			export module AutoScrollHelper {
				export class ClampedScroller {
					public static class: java.lang.Class<androidx.core.widget.AutoScrollHelper.ClampedScroller>;
					public isFinished(): boolean;
					public setTargetVelocity(param0: number, param1: number): void;
					public getHorizontalDirection(): number;
					public getDeltaX(): number;
					public getDeltaY(): number;
					public requestStop(): void;
					public setRampDownDuration(param0: number): void;
					public getVerticalDirection(): number;
					public start(): void;
					public computeScrollDelta(): void;
					public setRampUpDuration(param0: number): void;
				}
				export class ScrollAnimationRunnable {
					public static class: java.lang.Class<androidx.core.widget.AutoScrollHelper.ScrollAnimationRunnable>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class AutoSizeableTextView {
				public static class: java.lang.Class<androidx.core.widget.AutoSizeableTextView>;
				/**
				 * Constructs a new instance of the androidx.core.widget.AutoSizeableTextView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setAutoSizeTextTypeWithDefaults(param0: number): void;
					setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
					setAutoSizeTextTypeUniformWithPresetSizes(param0: native.Array<number>, param1: number): void;
					getAutoSizeTextType(): number;
					getAutoSizeStepGranularity(): number;
					getAutoSizeMinTextSize(): number;
					getAutoSizeMaxTextSize(): number;
					getAutoSizeTextAvailableSizes(): native.Array<number>;
					<clinit>(): void;
				});
				public constructor();
				public static PLATFORM_SUPPORTS_AUTOSIZE: boolean;
				public setAutoSizeTextTypeWithDefaults(param0: number): void;
				public setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
				public setAutoSizeTextTypeUniformWithPresetSizes(param0: native.Array<number>, param1: number): void;
				public getAutoSizeMaxTextSize(): number;
				public getAutoSizeTextAvailableSizes(): native.Array<number>;
				public getAutoSizeStepGranularity(): number;
				public getAutoSizeTextType(): number;
				public getAutoSizeMinTextSize(): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class CompoundButtonCompat {
				public static class: java.lang.Class<androidx.core.widget.CompoundButtonCompat>;
				public static setButtonTintList(param0: globalAndroid.widget.CompoundButton, param1: globalAndroid.content.res.ColorStateList): void;
				public static setButtonTintMode(param0: globalAndroid.widget.CompoundButton, param1: globalAndroid.graphics.PorterDuff.Mode): void;
				public static getButtonTintMode(param0: globalAndroid.widget.CompoundButton): globalAndroid.graphics.PorterDuff.Mode;
				public static getButtonDrawable(param0: globalAndroid.widget.CompoundButton): globalAndroid.graphics.drawable.Drawable;
				public static getButtonTintList(param0: globalAndroid.widget.CompoundButton): globalAndroid.content.res.ColorStateList;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class ContentLoadingProgressBar {
				public static class: java.lang.Class<androidx.core.widget.ContentLoadingProgressBar>;
				public hide(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public onDetachedFromWindow(): void;
				public onAttachedToWindow(): void;
				public show(): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class EdgeEffectCompat {
				public static class: java.lang.Class<androidx.core.widget.EdgeEffectCompat>;
				public onPull(param0: number): boolean;
				public onRelease(): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public static onPull(param0: globalAndroid.widget.EdgeEffect, param1: number, param2: number): void;
				public setSize(param0: number, param1: number): void;
				public onPull(param0: number, param1: number): boolean;
				public onAbsorb(param0: number): boolean;
				public isFinished(): boolean;
				public finish(): void;
				public draw(param0: globalAndroid.graphics.Canvas): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class ImageViewCompat {
				public static class: java.lang.Class<androidx.core.widget.ImageViewCompat>;
				public static getImageTintMode(param0: globalAndroid.widget.ImageView): globalAndroid.graphics.PorterDuff.Mode;
				public static setImageTintList(param0: globalAndroid.widget.ImageView, param1: globalAndroid.content.res.ColorStateList): void;
				public static getImageTintList(param0: globalAndroid.widget.ImageView): globalAndroid.content.res.ColorStateList;
				public static setImageTintMode(param0: globalAndroid.widget.ImageView, param1: globalAndroid.graphics.PorterDuff.Mode): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class ListPopupWindowCompat {
				public static class: java.lang.Class<androidx.core.widget.ListPopupWindowCompat>;
				public static createDragToOpenListener(param0: globalAndroid.widget.ListPopupWindow, param1: globalAndroid.view.View): globalAndroid.view.View.OnTouchListener;
				public static createDragToOpenListener(param0: any, param1: globalAndroid.view.View): globalAndroid.view.View.OnTouchListener;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class ListViewAutoScrollHelper extends androidx.core.widget.AutoScrollHelper {
				public static class: java.lang.Class<androidx.core.widget.ListViewAutoScrollHelper>;
				public constructor(param0: globalAndroid.widget.ListView);
				public canTargetScrollHorizontally(param0: number): boolean;
				public canTargetScrollVertically(param0: number): boolean;
				public scrollTargetBy(param0: number, param1: number): void;
				public constructor(param0: globalAndroid.view.View);
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class ListViewCompat {
				public static class: java.lang.Class<androidx.core.widget.ListViewCompat>;
				public static canScrollList(param0: globalAndroid.widget.ListView, param1: number): boolean;
				public static scrollListBy(param0: globalAndroid.widget.ListView, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class NestedScrollView implements androidx.core.view.NestedScrollingParent2, androidx.core.view.NestedScrollingChild2, androidx.core.view.ScrollingView {
				public static class: java.lang.Class<androidx.core.widget.NestedScrollView>;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public computeVerticalScrollOffset(): number;
				public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
				public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;
				public onGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public pageScroll(param0: number): boolean;
				public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
				public computeHorizontalScrollRange(): number;
				public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public getTopFadingEdgeStrength(): number;
				public onOverScrolled(param0: number, param1: number, param2: boolean, param3: boolean): void;
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public getNestedScrollAxes(): number;
				public fullScroll(param0: number): boolean;
				public computeScrollDeltaToGetChildRectOnScreen(param0: globalAndroid.graphics.Rect): number;
				public onRequestFocusInDescendants(param0: number, param1: globalAndroid.graphics.Rect): boolean;
				public stopNestedScroll(param0: number): void;
				public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
				public smoothScrollBy(param0: number, param1: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public smoothScrollTo(param0: number, param1: number): void;
				public setOnScrollChangeListener(param0: androidx.core.widget.NestedScrollView.OnScrollChangeListener): void;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public measureChildWithMargins(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public addView(param0: globalAndroid.view.View, param1: number): void;
				public getBottomFadingEdgeStrength(): number;
				public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
				public computeHorizontalScrollExtent(): number;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;
				public startNestedScroll(param0: number): boolean;
				public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
				public executeKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public computeVerticalScrollExtent(): number;
				public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public computeVerticalScrollRange(): number;
				public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
				public fling(param0: number): void;
				public dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): boolean;
				public getMaxScrollAmount(): number;
				public arrowScroll(param0: number): boolean;
				public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number, param3: number): void;
				public setFillViewport(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public startNestedScroll(param0: number, param1: number): boolean;
				public draw(param0: globalAndroid.graphics.Canvas): void;
				public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public computeHorizontalScrollOffset(): number;
				public setNestedScrollingEnabled(param0: boolean): void;
				public requestLayout(): void;
				public constructor(param0: globalAndroid.content.Context);
				public isSmoothScrollingEnabled(): boolean;
				public dispatchNestedPreFling(param0: number, param1: number): boolean;
				public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>, param4: number): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>, param4: number): boolean;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public computeScroll(): void;
				public addView(param0: globalAndroid.view.View): void;
				public isFillViewport(): boolean;
				public scrollTo(param0: number, param1: number): void;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number): boolean;
				public stopNestedScroll(): void;
				public hasNestedScrollingParent(param0: number): boolean;
				public setSmoothScrollingEnabled(param0: boolean): void;
				public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
				public hasNestedScrollingParent(): boolean;
				public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number, param3: number): boolean;
				public onMeasure(param0: number, param1: number): void;
				public onStopNestedScroll(param0: globalAndroid.view.View, param1: number): void;
				public onStopNestedScroll(param0: globalAndroid.view.View): void;
				public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
				public onAttachedToWindow(): void;
				public isNestedScrollingEnabled(): boolean;
				public shouldDelayChildPressedState(): boolean;
				public measureChild(param0: globalAndroid.view.View, param1: number, param2: number): void;
			}
			export module NestedScrollView {
				export class androidxcorewidgetNestedScrollViewAccessibilityDelegate extends androidx.core.view.AccessibilityDelegateCompat {
					public static class: java.lang.Class<androidx.core.widget.NestedScrollView.AccessibilityDelegate>;
					public onInitializeAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public performAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
				}
				export type AccessibilityDelegate = androidxcorewidgetNestedScrollViewAccessibilityDelegate
				export class OnScrollChangeListener {
					public static class: java.lang.Class<androidx.core.widget.NestedScrollView.OnScrollChangeListener>;
					/**
					 * Constructs a new instance of the androidx.core.widget.NestedScrollView$OnScrollChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onScrollChange(param0: androidx.core.widget.NestedScrollView, param1: number, param2: number, param3: number, param4: number): void;
					});
					public constructor();
					public onScrollChange(param0: androidx.core.widget.NestedScrollView, param1: number, param2: number, param3: number, param4: number): void;
				}
				export class SavedState {
					public static class: java.lang.Class<androidx.core.widget.NestedScrollView.SavedState>;
					public scrollPosition: number;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.core.widget.NestedScrollView.SavedState>;
					public toString(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class PopupMenuCompat {
				public static class: java.lang.Class<androidx.core.widget.PopupMenuCompat>;
				public static getDragToOpenListener(param0: any): globalAndroid.view.View.OnTouchListener;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class PopupWindowCompat {
				public static class: java.lang.Class<androidx.core.widget.PopupWindowCompat>;
				public static getWindowLayoutType(param0: globalAndroid.widget.PopupWindow): number;
				public static showAsDropDown(param0: globalAndroid.widget.PopupWindow, param1: globalAndroid.view.View, param2: number, param3: number, param4: number): void;
				public static getOverlapAnchor(param0: globalAndroid.widget.PopupWindow): boolean;
				public static setOverlapAnchor(param0: globalAndroid.widget.PopupWindow, param1: boolean): void;
				public static setWindowLayoutType(param0: globalAndroid.widget.PopupWindow, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class ScrollerCompat {
				public static class: java.lang.Class<androidx.core.widget.ScrollerCompat>;
				public getCurrVelocity(): number;
				public notifyHorizontalEdgeReached(param0: number, param1: number, param2: number): void;
				public startScroll(param0: number, param1: number, param2: number, param3: number): void;
				public getFinalX(): number;
				public abortAnimation(): void;
				public springBack(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
				public getFinalY(): number;
				public isFinished(): boolean;
				public fling(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): void;
				public getCurrY(): number;
				public fling(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				public isOverScrolled(): boolean;
				public notifyVerticalEdgeReached(param0: number, param1: number, param2: number): void;
				public computeScrollOffset(): boolean;
				public static create(param0: globalAndroid.content.Context, param1: globalAndroid.view.animation.Interpolator): androidx.core.widget.ScrollerCompat;
				public static create(param0: globalAndroid.content.Context): androidx.core.widget.ScrollerCompat;
				public startScroll(param0: number, param1: number, param2: number, param3: number, param4: number): void;
				public getCurrX(): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class TextViewCompat {
				public static class: java.lang.Class<androidx.core.widget.TextViewCompat>;
				public static AUTO_SIZE_TEXT_TYPE_NONE: number;
				public static AUTO_SIZE_TEXT_TYPE_UNIFORM: number;
				public static setAutoSizeTextTypeWithDefaults(param0: globalAndroid.widget.TextView, param1: number): void;
				public static setPrecomputedText(param0: globalAndroid.widget.TextView, param1: androidx.core.text.PrecomputedTextCompat): void;
				public static setAutoSizeTextTypeUniformWithConfiguration(param0: globalAndroid.widget.TextView, param1: number, param2: number, param3: number, param4: number): void;
				public static setTextMetricsParams(param0: globalAndroid.widget.TextView, param1: androidx.core.text.PrecomputedTextCompat.Params): void;
				public static getMaxLines(param0: globalAndroid.widget.TextView): number;
				public static getAutoSizeTextType(param0: globalAndroid.widget.TextView): number;
				public static setFirstBaselineToTopHeight(param0: globalAndroid.widget.TextView, param1: number): void;
				public static setCompoundDrawablesRelative(param0: globalAndroid.widget.TextView, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.graphics.drawable.Drawable, param4: globalAndroid.graphics.drawable.Drawable): void;
				public static getAutoSizeMinTextSize(param0: globalAndroid.widget.TextView): number;
				public static setLastBaselineToBottomHeight(param0: globalAndroid.widget.TextView, param1: number): void;
				public static setCompoundDrawablesRelativeWithIntrinsicBounds(param0: globalAndroid.widget.TextView, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.graphics.drawable.Drawable, param4: globalAndroid.graphics.drawable.Drawable): void;
				public static getAutoSizeStepGranularity(param0: globalAndroid.widget.TextView): number;
				public static getAutoSizeTextAvailableSizes(param0: globalAndroid.widget.TextView): native.Array<number>;
				public static setTextAppearance(param0: globalAndroid.widget.TextView, param1: number): void;
				public static setLineHeight(param0: globalAndroid.widget.TextView, param1: number): void;
				public static setCompoundDrawablesRelativeWithIntrinsicBounds(param0: globalAndroid.widget.TextView, param1: number, param2: number, param3: number, param4: number): void;
				public static getCompoundDrawablesRelative(param0: globalAndroid.widget.TextView): native.Array<globalAndroid.graphics.drawable.Drawable>;
				public static getFirstBaselineToTopHeight(param0: globalAndroid.widget.TextView): number;
				public static wrapCustomSelectionActionModeCallback(param0: globalAndroid.widget.TextView, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode.Callback;
				public static getAutoSizeMaxTextSize(param0: globalAndroid.widget.TextView): number;
				public static setAutoSizeTextTypeUniformWithPresetSizes(param0: globalAndroid.widget.TextView, param1: native.Array<number>, param2: number): void;
				public static getMinLines(param0: globalAndroid.widget.TextView): number;
				public static setCustomSelectionActionModeCallback(param0: globalAndroid.widget.TextView, param1: globalAndroid.view.ActionMode.Callback): void;
				public static getTextMetricsParams(param0: globalAndroid.widget.TextView): androidx.core.text.PrecomputedTextCompat.Params;
				public static getLastBaselineToBottomHeight(param0: globalAndroid.widget.TextView): number;
			}
			export module TextViewCompat {
				export class AutoSizeTextType {
					public static class: java.lang.Class<androidx.core.widget.TextViewCompat.AutoSizeTextType>;
					/**
					 * Constructs a new instance of the androidx.core.widget.TextViewCompat$AutoSizeTextType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class OreoCallback {
					public static class: java.lang.Class<androidx.core.widget.TextViewCompat.OreoCallback>;
					public onPrepareActionMode(param0: globalAndroid.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
					public onActionItemClicked(param0: globalAndroid.view.ActionMode, param1: globalAndroid.view.MenuItem): boolean;
					public onDestroyActionMode(param0: globalAndroid.view.ActionMode): void;
					public onCreateActionMode(param0: globalAndroid.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class TintableCompoundButton {
				public static class: java.lang.Class<androidx.core.widget.TintableCompoundButton>;
				/**
				 * Constructs a new instance of the androidx.core.widget.TintableCompoundButton interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setSupportButtonTintList(param0: globalAndroid.content.res.ColorStateList): void;
					getSupportButtonTintList(): globalAndroid.content.res.ColorStateList;
					setSupportButtonTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
					getSupportButtonTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				});
				public constructor();
				public getSupportButtonTintList(): globalAndroid.content.res.ColorStateList;
				public setSupportButtonTintList(param0: globalAndroid.content.res.ColorStateList): void;
				public getSupportButtonTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setSupportButtonTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class TintableImageSourceView {
				public static class: java.lang.Class<androidx.core.widget.TintableImageSourceView>;
				/**
				 * Constructs a new instance of the androidx.core.widget.TintableImageSourceView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setSupportImageTintList(param0: globalAndroid.content.res.ColorStateList): void;
					getSupportImageTintList(): globalAndroid.content.res.ColorStateList;
					setSupportImageTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
					getSupportImageTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				});
				public constructor();
				public getSupportImageTintMode(): globalAndroid.graphics.PorterDuff.Mode;
				public setSupportImageTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
				public getSupportImageTintList(): globalAndroid.content.res.ColorStateList;
				public setSupportImageTintList(param0: globalAndroid.content.res.ColorStateList): void;
			}
		}
	}
}

//Generics information:
//androidx.core.graphics.TypefaceCompatBaseImpl.StyleExtractor:1
//androidx.core.os.ParcelableCompat.ParcelableCompatCreatorHoneycombMR2:1
//androidx.core.os.ParcelableCompatCreatorCallbacks:1
//androidx.core.provider.SelfDestructiveThread.ReplyCallback:1
//androidx.core.util.Consumer:1
//androidx.core.util.Pair:2
//androidx.core.util.Pools.Pool:1
//androidx.core.util.Pools.SimplePool:1
//androidx.core.util.Pools.SynchronizedPool:1

