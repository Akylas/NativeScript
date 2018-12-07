declare module androidx {
	export module lifecycle {
		export class AndroidViewModel extends androidx.lifecycle.ViewModel {
			public static class: java.lang.Class<androidx.lifecycle.AndroidViewModel>;
			public constructor();
			public constructor(param0: globalAndroid.app.Application);
			public getApplication(): globalAndroid.app.Application;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export abstract class ViewModel {
			public static class: java.lang.Class<androidx.lifecycle.ViewModel>;
			public onCleared(): void;
			public constructor();
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ViewModelProvider {
			public static class: java.lang.Class<androidx.lifecycle.ViewModelProvider>;
			public get(param0: string, param1: java.lang.Class<any>): androidx.lifecycle.ViewModel;
			public constructor(param0: androidx.lifecycle.ViewModelStoreOwner, param1: androidx.lifecycle.ViewModelProvider.Factory);
			public constructor(param0: androidx.lifecycle.ViewModelStore, param1: androidx.lifecycle.ViewModelProvider.Factory);
			public get(param0: java.lang.Class<any>): androidx.lifecycle.ViewModel;
		}
		export module ViewModelProvider {
			export class AndroidViewModelFactory extends androidx.lifecycle.ViewModelProvider.NewInstanceFactory {
				public static class: java.lang.Class<androidx.lifecycle.ViewModelProvider.AndroidViewModelFactory>;
				public constructor(param0: globalAndroid.app.Application);
				public static getInstance(param0: globalAndroid.app.Application): androidx.lifecycle.ViewModelProvider.AndroidViewModelFactory;
				public create(param0: java.lang.Class<any>): androidx.lifecycle.ViewModel;
				public constructor();
			}
			export class Factory {
				public static class: java.lang.Class<androidx.lifecycle.ViewModelProvider.Factory>;
				/**
				 * Constructs a new instance of the androidx.lifecycle.ViewModelProvider$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(param0: java.lang.Class<any>): androidx.lifecycle.ViewModel;
				});
				public constructor();
				public create(param0: java.lang.Class<any>): androidx.lifecycle.ViewModel;
			}
			export class NewInstanceFactory extends androidx.lifecycle.ViewModelProvider.Factory {
				public static class: java.lang.Class<androidx.lifecycle.ViewModelProvider.NewInstanceFactory>;
				public create(param0: java.lang.Class<any>): androidx.lifecycle.ViewModel;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ViewModelStore {
			public static class: java.lang.Class<androidx.lifecycle.ViewModelStore>;
			public clear(): void;
			public constructor();
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ViewModelStoreOwner {
			public static class: java.lang.Class<androidx.lifecycle.ViewModelStoreOwner>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.ViewModelStoreOwner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getViewModelStore(): androidx.lifecycle.ViewModelStore;
			});
			public constructor();
			public getViewModelStore(): androidx.lifecycle.ViewModelStore;
		}
	}
}

//Generics information:

