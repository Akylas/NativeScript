declare module androidx {
	export module lifecycle {
		export class ClassesInfoCache {
			public static class: java.lang.Class<androidx.lifecycle.ClassesInfoCache>;
		}
		export module ClassesInfoCache {
			export class CallbackInfo {
				public static class: java.lang.Class<androidx.lifecycle.ClassesInfoCache.CallbackInfo>;
			}
			export class MethodReference {
				public static class: java.lang.Class<androidx.lifecycle.ClassesInfoCache.MethodReference>;
				public hashCode(): number;
				public equals(param0: any): boolean;
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class CompositeGeneratedAdaptersObserver extends androidx.lifecycle.GenericLifecycleObserver {
			public static class: java.lang.Class<androidx.lifecycle.CompositeGeneratedAdaptersObserver>;
			public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class FullLifecycleObserver extends androidx.lifecycle.LifecycleObserver {
			public static class: java.lang.Class<androidx.lifecycle.FullLifecycleObserver>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.FullLifecycleObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onCreate(param0: androidx.lifecycle.LifecycleOwner): void;
				onStart(param0: androidx.lifecycle.LifecycleOwner): void;
				onResume(param0: androidx.lifecycle.LifecycleOwner): void;
				onPause(param0: androidx.lifecycle.LifecycleOwner): void;
				onStop(param0: androidx.lifecycle.LifecycleOwner): void;
				onDestroy(param0: androidx.lifecycle.LifecycleOwner): void;
			});
			public constructor();
			public onDestroy(param0: androidx.lifecycle.LifecycleOwner): void;
			public onStop(param0: androidx.lifecycle.LifecycleOwner): void;
			public onPause(param0: androidx.lifecycle.LifecycleOwner): void;
			public onCreate(param0: androidx.lifecycle.LifecycleOwner): void;
			public onStart(param0: androidx.lifecycle.LifecycleOwner): void;
			public onResume(param0: androidx.lifecycle.LifecycleOwner): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class FullLifecycleObserverAdapter extends androidx.lifecycle.GenericLifecycleObserver {
			public static class: java.lang.Class<androidx.lifecycle.FullLifecycleObserverAdapter>;
			public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class GeneratedAdapter {
			public static class: java.lang.Class<androidx.lifecycle.GeneratedAdapter>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.GeneratedAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				callMethods(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event, param2: boolean, param3: androidx.lifecycle.MethodCallsLogger): void;
			});
			public constructor();
			public callMethods(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event, param2: boolean, param3: androidx.lifecycle.MethodCallsLogger): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class GenericLifecycleObserver extends androidx.lifecycle.LifecycleObserver {
			public static class: java.lang.Class<androidx.lifecycle.GenericLifecycleObserver>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.GenericLifecycleObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
			});
			public constructor();
			public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export abstract class Lifecycle {
			public static class: java.lang.Class<androidx.lifecycle.Lifecycle>;
			public addObserver(param0: androidx.lifecycle.LifecycleObserver): void;
			public constructor();
			public getCurrentState(): androidx.lifecycle.Lifecycle.State;
			public removeObserver(param0: androidx.lifecycle.LifecycleObserver): void;
		}
		export module Lifecycle {
			export class Event {
				public static class: java.lang.Class<androidx.lifecycle.Lifecycle.Event>;
				public static ON_CREATE: androidx.lifecycle.Lifecycle.Event;
				public static ON_START: androidx.lifecycle.Lifecycle.Event;
				public static ON_RESUME: androidx.lifecycle.Lifecycle.Event;
				public static ON_PAUSE: androidx.lifecycle.Lifecycle.Event;
				public static ON_STOP: androidx.lifecycle.Lifecycle.Event;
				public static ON_DESTROY: androidx.lifecycle.Lifecycle.Event;
				public static ON_ANY: androidx.lifecycle.Lifecycle.Event;
				public static values(): native.Array<androidx.lifecycle.Lifecycle.Event>;
				public static valueOf(param0: string): androidx.lifecycle.Lifecycle.Event;
			}
			export class State {
				public static class: java.lang.Class<androidx.lifecycle.Lifecycle.State>;
				public static DESTROYED: androidx.lifecycle.Lifecycle.State;
				public static INITIALIZED: androidx.lifecycle.Lifecycle.State;
				public static CREATED: androidx.lifecycle.Lifecycle.State;
				public static STARTED: androidx.lifecycle.Lifecycle.State;
				public static RESUMED: androidx.lifecycle.Lifecycle.State;
				public isAtLeast(param0: androidx.lifecycle.Lifecycle.State): boolean;
				public static values(): native.Array<androidx.lifecycle.Lifecycle.State>;
				public static valueOf(param0: string): androidx.lifecycle.Lifecycle.State;
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleObserver {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleObserver>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.LifecycleObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleOwner {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleOwner>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.LifecycleOwner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getLifecycle(): androidx.lifecycle.Lifecycle;
			});
			public constructor();
			public getLifecycle(): androidx.lifecycle.Lifecycle;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class Lifecycling {
			public static class: java.lang.Class<androidx.lifecycle.Lifecycling>;
			public static getAdapterName(param0: string): string;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class MethodCallsLogger {
			public static class: java.lang.Class<androidx.lifecycle.MethodCallsLogger>;
			public constructor();
			public approveCall(param0: string, param1: number): boolean;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class OnLifecycleEvent {
			public static class: java.lang.Class<androidx.lifecycle.OnLifecycleEvent>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.OnLifecycleEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): androidx.lifecycle.Lifecycle.Event;
			});
			public constructor();
			public value(): androidx.lifecycle.Lifecycle.Event;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ReflectiveGenericLifecycleObserver extends androidx.lifecycle.GenericLifecycleObserver {
			public static class: java.lang.Class<androidx.lifecycle.ReflectiveGenericLifecycleObserver>;
			public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class SingleGeneratedAdapterObserver extends androidx.lifecycle.GenericLifecycleObserver {
			public static class: java.lang.Class<androidx.lifecycle.SingleGeneratedAdapterObserver>;
			public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
		}
	}
}

//Generics information:

