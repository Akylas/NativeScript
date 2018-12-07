declare module androidx {
	export module lifecycle {
		export abstract class LiveData<T>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.LiveData<any>>;
			public onInactive(): void;
			public onActive(): void;
			public postValue(param0: T): void;
			public setValue(param0: T): void;
			public hasObservers(): boolean;
			public observe(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Observer<any>): void;
			public hasActiveObservers(): boolean;
			public removeObserver(param0: androidx.lifecycle.Observer<any>): void;
			public constructor();
			public observeForever(param0: androidx.lifecycle.Observer<any>): void;
			public getValue(): T;
			public removeObservers(param0: androidx.lifecycle.LifecycleOwner): void;
		}
		export module LiveData {
			export class AlwaysActiveObserver extends androidx.lifecycle.LiveData.ObserverWrapper {
				public static class: java.lang.Class<androidx.lifecycle.LiveData.AlwaysActiveObserver>;
			}
			export class LifecycleBoundObserver extends androidx.lifecycle.LiveData.ObserverWrapper implements androidx.lifecycle.GenericLifecycleObserver  {
				public static class: java.lang.Class<androidx.lifecycle.LiveData.LifecycleBoundObserver>;
				public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
			}
			export abstract class ObserverWrapper {
				public static class: java.lang.Class<androidx.lifecycle.LiveData.ObserverWrapper>;
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class MutableLiveData<T>  extends androidx.lifecycle.LiveData<any> {
			public static class: java.lang.Class<androidx.lifecycle.MutableLiveData<any>>;
			public postValue(param0: any): void;
			public constructor();
			public setValue(param0: any): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class Observer<T>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.Observer<any>>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.Observer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onChanged(param0: T): void;
			});
			public constructor();
			public onChanged(param0: T): void;
		}
	}
}

//Generics information:
//androidx.lifecycle.LiveData:1
//androidx.lifecycle.MutableLiveData:1
//androidx.lifecycle.Observer:1

