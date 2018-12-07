declare module androidx {
	export module loader {
		export module app {
			export abstract class LoaderManager {
				public static class: java.lang.Class<androidx.loader.app.LoaderManager>;
				public static getInstance(param0: androidx.lifecycle.LifecycleOwner): androidx.loader.app.LoaderManager;
				public markForRedelivery(): void;
				public restartLoader(param0: number, param1: globalAndroid.os.Bundle, param2: androidx.loader.app.LoaderManager.LoaderCallbacks<any>): androidx.loader.content.Loader<any>;
				public getLoader(param0: number): androidx.loader.content.Loader<any>;
				public initLoader(param0: number, param1: globalAndroid.os.Bundle, param2: androidx.loader.app.LoaderManager.LoaderCallbacks<any>): androidx.loader.content.Loader<any>;
				public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				public static enableDebugLogging(param0: boolean): void;
				public destroyLoader(param0: number): void;
				public hasRunningLoaders(): boolean;
				public constructor();
			}
			export module LoaderManager {
				export class LoaderCallbacks<D>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.loader.app.LoaderManager.LoaderCallbacks<any>>;
					/**
					 * Constructs a new instance of the androidx.loader.app.LoaderManager$LoaderCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCreateLoader(param0: number, param1: globalAndroid.os.Bundle): androidx.loader.content.Loader<D>;
						onLoadFinished(param0: androidx.loader.content.Loader<D>, param1: D): void;
						onLoaderReset(param0: androidx.loader.content.Loader<D>): void;
					});
					public constructor();
					public onLoadFinished(param0: androidx.loader.content.Loader<D>, param1: D): void;
					public onCreateLoader(param0: number, param1: globalAndroid.os.Bundle): androidx.loader.content.Loader<D>;
					public onLoaderReset(param0: androidx.loader.content.Loader<D>): void;
				}
			}
		}
	}
}

declare module androidx {
	export module loader {
		export module app {
			export class LoaderManagerImpl extends androidx.loader.app.LoaderManager {
				public static class: java.lang.Class<androidx.loader.app.LoaderManagerImpl>;
				public markForRedelivery(): void;
				public restartLoader(param0: number, param1: globalAndroid.os.Bundle, param2: androidx.loader.app.LoaderManager.LoaderCallbacks<any>): androidx.loader.content.Loader<any>;
				public getLoader(param0: number): androidx.loader.content.Loader<any>;
				public initLoader(param0: number, param1: globalAndroid.os.Bundle, param2: androidx.loader.app.LoaderManager.LoaderCallbacks<any>): androidx.loader.content.Loader<any>;
				public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				public destroyLoader(param0: number): void;
				public toString(): string;
				public hasRunningLoaders(): boolean;
			}
			export module LoaderManagerImpl {
				export class LoaderInfo<D>  extends androidx.lifecycle.MutableLiveData<any> implements androidx.loader.content.Loader.OnLoadCompleteListener<any>  {
					public static class: java.lang.Class<androidx.loader.app.LoaderManagerImpl.LoaderInfo<any>>;
					public onInactive(): void;
					public removeObserver(param0: androidx.lifecycle.Observer<any>): void;
					public toString(): string;
					public setValue(param0: any): void;
					public onActive(): void;
					public onLoadComplete(param0: androidx.loader.content.Loader<any>, param1: any): void;
					public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				}
				export class LoaderObserver<D>  extends androidx.lifecycle.Observer<any> {
					public static class: java.lang.Class<androidx.loader.app.LoaderManagerImpl.LoaderObserver<any>>;
					public toString(): string;
					public onChanged(param0: any): void;
					public dump(param0: string, param1: java.io.PrintWriter): void;
				}
				export class LoaderViewModel {
					public static class: java.lang.Class<androidx.loader.app.LoaderManagerImpl.LoaderViewModel>;
					public onCleared(): void;
					public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				}
			}
		}
	}
}

declare module androidx {
	export module loader {
		export module content {
			export abstract class AsyncTaskLoader<D>  extends androidx.loader.content.Loader<any> {
				public static class: java.lang.Class<androidx.loader.content.AsyncTaskLoader<any>>;
				public onLoadInBackground(): any;
				public onForceLoad(): void;
				public setUpdateThrottle(param0: number): void;
				public constructor(param0: globalAndroid.content.Context);
				public onCancelLoad(): boolean;
				public cancelLoadInBackground(): void;
				public onCanceled(param0: any): void;
				public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				public loadInBackground(): any;
				public isLoadInBackgroundCanceled(): boolean;
				public waitForLoader(): void;
			}
			export module AsyncTaskLoader {
				export class LoadTask extends androidx.loader.content.ModernAsyncTask<java.lang.Void,java.lang.Void,any> implements java.lang.Runnable  {
					public static class: java.lang.Class<androidx.loader.content.AsyncTaskLoader.LoadTask>;
					public onCancelled(param0: any): void;
					public run(): void;
					public doInBackground(param0: native.Array<java.lang.Void>): any;
					public onCancelled(): void;
					public doInBackground(param0: native.Array<any>): any;
					public onPostExecute(param0: any): void;
					public waitForLoader(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module loader {
		export module content {
			export class CursorLoader extends androidx.loader.content.AsyncTaskLoader<globalAndroid.database.Cursor> {
				public static class: java.lang.Class<androidx.loader.content.CursorLoader>;
				public onStartLoading(): void;
				public deliverResult(param0: any): void;
				public onStopLoading(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string);
				public setSelectionArgs(param0: native.Array<string>): void;
				public getSortOrder(): string;
				public getSelection(): string;
				public cancelLoadInBackground(): void;
				public getProjection(): native.Array<string>;
				public onCanceled(param0: any): void;
				public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				public loadInBackground(): any;
				public setUri(param0: globalAndroid.net.Uri): void;
				public loadInBackground(): globalAndroid.database.Cursor;
				public setProjection(param0: native.Array<string>): void;
				public onReset(): void;
				public getUri(): globalAndroid.net.Uri;
				public onCanceled(param0: globalAndroid.database.Cursor): void;
				public deliverResult(param0: globalAndroid.database.Cursor): void;
				public getSelectionArgs(): native.Array<string>;
				public constructor(param0: globalAndroid.content.Context);
				public setSortOrder(param0: string): void;
				public setSelection(param0: string): void;
			}
		}
	}
}

declare module androidx {
	export module loader {
		export module content {
			export class Loader<D>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.loader.content.Loader<any>>;
				public onStartLoading(): void;
				public rollbackContentChanged(): void;
				public onStopLoading(): void;
				public isStarted(): boolean;
				public takeContentChanged(): boolean;
				public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				public isAbandoned(): boolean;
				public stopLoading(): void;
				public reset(): void;
				public constructor(param0: globalAndroid.content.Context);
				public unregisterListener(param0: androidx.loader.content.Loader.OnLoadCompleteListener<D>): void;
				public onCancelLoad(): boolean;
				public onAbandon(): void;
				public startLoading(): void;
				public dataToString(param0: D): string;
				public onForceLoad(): void;
				public getContext(): globalAndroid.content.Context;
				public deliverResult(param0: D): void;
				public getId(): number;
				public cancelLoad(): boolean;
				public toString(): string;
				public onReset(): void;
				public onContentChanged(): void;
				public registerOnLoadCanceledListener(param0: androidx.loader.content.Loader.OnLoadCanceledListener<D>): void;
				public deliverCancellation(): void;
				public registerListener(param0: number, param1: androidx.loader.content.Loader.OnLoadCompleteListener<D>): void;
				public commitContentChanged(): void;
				public abandon(): void;
				public isReset(): boolean;
				public unregisterOnLoadCanceledListener(param0: androidx.loader.content.Loader.OnLoadCanceledListener<D>): void;
				public forceLoad(): void;
			}
			export module Loader {
				export class ForceLoadContentObserver {
					public static class: java.lang.Class<androidx.loader.content.Loader.ForceLoadContentObserver>;
					public onChange(param0: boolean): void;
					public deliverSelfNotifications(): boolean;
					public constructor(param0: androidx.loader.content.Loader<any>);
				}
				export class OnLoadCanceledListener<D>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.loader.content.Loader.OnLoadCanceledListener<any>>;
					/**
					 * Constructs a new instance of the androidx.loader.content.Loader$OnLoadCanceledListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onLoadCanceled(param0: androidx.loader.content.Loader<D>): void;
					});
					public constructor();
					public onLoadCanceled(param0: androidx.loader.content.Loader<D>): void;
				}
				export class OnLoadCompleteListener<D>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.loader.content.Loader.OnLoadCompleteListener<any>>;
					/**
					 * Constructs a new instance of the androidx.loader.content.Loader$OnLoadCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onLoadComplete(param0: androidx.loader.content.Loader<D>, param1: D): void;
					});
					public constructor();
					public onLoadComplete(param0: androidx.loader.content.Loader<D>, param1: D): void;
				}
			}
		}
	}
}

declare module androidx {
	export module loader {
		export module content {
			export abstract class ModernAsyncTask<Params, Progress, Result>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.loader.content.ModernAsyncTask<any,any,any>>;
				public static THREAD_POOL_EXECUTOR: java.util.concurrent.Executor;
				public onPostExecute(param0: Result): void;
				public getStatus(): androidx.loader.content.ModernAsyncTask.Status;
				public onProgressUpdate(param0: native.Array<Progress>): void;
				public get(): Result;
				public execute(param0: native.Array<Params>): androidx.loader.content.ModernAsyncTask<Params,Progress,Result>;
				public static setDefaultExecutor(param0: java.util.concurrent.Executor): void;
				public doInBackground(param0: native.Array<Params>): Result;
				public executeOnExecutor(param0: java.util.concurrent.Executor, param1: native.Array<Params>): androidx.loader.content.ModernAsyncTask<Params,Progress,Result>;
				public publishProgress(param0: native.Array<Progress>): void;
				public onPreExecute(): void;
				public static execute(param0: java.lang.Runnable): void;
				public onCancelled(param0: Result): void;
				public cancel(param0: boolean): boolean;
				public onCancelled(): void;
				public isCancelled(): boolean;
				public get(param0: number, param1: java.util.concurrent.TimeUnit): Result;
			}
			export module ModernAsyncTask {
				export class AsyncTaskResult<Data>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.loader.content.ModernAsyncTask.AsyncTaskResult<any>>;
				}
				export class InternalHandler {
					public static class: java.lang.Class<androidx.loader.content.ModernAsyncTask.InternalHandler>;
					public handleMessage(param0: globalAndroid.os.Message): void;
				}
				export class Status {
					public static class: java.lang.Class<androidx.loader.content.ModernAsyncTask.Status>;
					public static PENDING: androidx.loader.content.ModernAsyncTask.Status;
					public static RUNNING: androidx.loader.content.ModernAsyncTask.Status;
					public static FINISHED: androidx.loader.content.ModernAsyncTask.Status;
					public static values(): native.Array<androidx.loader.content.ModernAsyncTask.Status>;
					public static valueOf(param0: string): androidx.loader.content.ModernAsyncTask.Status;
				}
				export abstract class WorkerRunnable<Params, Result>  extends java.util.concurrent.Callable<any> {
					public static class: java.lang.Class<androidx.loader.content.ModernAsyncTask.WorkerRunnable<any,any>>;
				}
			}
		}
	}
}

//Generics information:
//androidx.loader.app.LoaderManager.LoaderCallbacks:1
//androidx.loader.app.LoaderManagerImpl.LoaderInfo:1
//androidx.loader.app.LoaderManagerImpl.LoaderObserver:1
//androidx.loader.content.AsyncTaskLoader:1
//androidx.loader.content.Loader:1
//androidx.loader.content.Loader.OnLoadCanceledListener:1
//androidx.loader.content.Loader.OnLoadCompleteListener:1
//androidx.loader.content.ModernAsyncTask:3
//androidx.loader.content.ModernAsyncTask.AsyncTaskResult:1
//androidx.loader.content.ModernAsyncTask.WorkerRunnable:2

