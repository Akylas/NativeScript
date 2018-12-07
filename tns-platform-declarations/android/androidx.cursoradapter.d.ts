declare module androidx {
	export module cursoradapter {
		export module widget {
			export abstract class CursorAdapter implements androidx.cursoradapter.widget.CursorFilter.CursorFilterClient {
				public static class: java.lang.Class<androidx.cursoradapter.widget.CursorAdapter>;
				public mDataValid: boolean;
				public mAutoRequery: boolean;
				public mCursor: globalAndroid.database.Cursor;
				public mContext: globalAndroid.content.Context;
				public mRowIDColumn: number;
				public mChangeObserver: androidx.cursoradapter.widget.CursorAdapter.ChangeObserver;
				public mDataSetObserver: globalAndroid.database.DataSetObserver;
				public mCursorFilter: androidx.cursoradapter.widget.CursorFilter;
				public mFilterQueryProvider: globalAndroid.widget.FilterQueryProvider;
				public static FLAG_AUTO_REQUERY: number;
				public static FLAG_REGISTER_CONTENT_OBSERVER: number;
				public init(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor, param2: boolean): void;
				public getFilterQueryProvider(): globalAndroid.widget.FilterQueryProvider;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor, param2: boolean);
				public getCursor(): globalAndroid.database.Cursor;
				public getFilter(): globalAndroid.widget.Filter;
				public getCount(): number;
				public changeCursor(param0: globalAndroid.database.Cursor): void;
				public convertToString(param0: globalAndroid.database.Cursor): string;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor);
				public onContentChanged(): void;
				public getDropDownView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public hasStableIds(): boolean;
				public newView(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor, param2: number);
				public bindView(param0: globalAndroid.view.View, param1: globalAndroid.content.Context, param2: globalAndroid.database.Cursor): void;
				public swapCursor(param0: globalAndroid.database.Cursor): globalAndroid.database.Cursor;
				public getItemId(param0: number): number;
				public setFilterQueryProvider(param0: globalAndroid.widget.FilterQueryProvider): void;
				public getItem(param0: number): any;
				public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public newDropDownView(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public runQueryOnBackgroundThread(param0: string): globalAndroid.database.Cursor;
			}
			export module CursorAdapter {
				export class ChangeObserver {
					public static class: java.lang.Class<androidx.cursoradapter.widget.CursorAdapter.ChangeObserver>;
					public onChange(param0: boolean): void;
					public deliverSelfNotifications(): boolean;
				}
				export class MyDataSetObserver {
					public static class: java.lang.Class<androidx.cursoradapter.widget.CursorAdapter.MyDataSetObserver>;
					public onChanged(): void;
					public onInvalidated(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module cursoradapter {
		export module widget {
			export class CursorFilter {
				public static class: java.lang.Class<androidx.cursoradapter.widget.CursorFilter>;
				public convertResultToString(param0: any): string;
				public performFiltering(param0: string): globalAndroid.widget.Filter.FilterResults;
				public publishResults(param0: string, param1: globalAndroid.widget.Filter.FilterResults): void;
			}
			export module CursorFilter {
				export class CursorFilterClient {
					public static class: java.lang.Class<androidx.cursoradapter.widget.CursorFilter.CursorFilterClient>;
					/**
					 * Constructs a new instance of the androidx.cursoradapter.widget.CursorFilter$CursorFilterClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						convertToString(param0: globalAndroid.database.Cursor): string;
						runQueryOnBackgroundThread(param0: string): globalAndroid.database.Cursor;
						getCursor(): globalAndroid.database.Cursor;
						changeCursor(param0: globalAndroid.database.Cursor): void;
					});
					public constructor();
					public changeCursor(param0: globalAndroid.database.Cursor): void;
					public convertToString(param0: globalAndroid.database.Cursor): string;
					public getCursor(): globalAndroid.database.Cursor;
					public runQueryOnBackgroundThread(param0: string): globalAndroid.database.Cursor;
				}
			}
		}
	}
}

declare module androidx {
	export module cursoradapter {
		export module widget {
			export abstract class ResourceCursorAdapter extends androidx.cursoradapter.widget.CursorAdapter {
				public static class: java.lang.Class<androidx.cursoradapter.widget.ResourceCursorAdapter>;
				public constructor(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.database.Cursor);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor, param2: boolean);
				public getCursor(): globalAndroid.database.Cursor;
				public changeCursor(param0: globalAndroid.database.Cursor): void;
				public constructor(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.database.Cursor, param3: number);
				public convertToString(param0: globalAndroid.database.Cursor): string;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor);
				public newView(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public setDropDownViewResource(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor, param2: number);
				public newDropDownView(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public setViewResource(param0: number): void;
				public runQueryOnBackgroundThread(param0: string): globalAndroid.database.Cursor;
				public constructor(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.database.Cursor, param3: boolean);
			}
		}
	}
}

declare module androidx {
	export module cursoradapter {
		export module widget {
			export class SimpleCursorAdapter extends androidx.cursoradapter.widget.ResourceCursorAdapter {
				public static class: java.lang.Class<androidx.cursoradapter.widget.SimpleCursorAdapter>;
				public mFrom: native.Array<number>;
				public mTo: native.Array<number>;
				public setStringConversionColumn(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.database.Cursor);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor, param2: boolean);
				public getCursorToStringConverter(): androidx.cursoradapter.widget.SimpleCursorAdapter.CursorToStringConverter;
				public getStringConversionColumn(): number;
				public getCursor(): globalAndroid.database.Cursor;
				public setCursorToStringConverter(param0: androidx.cursoradapter.widget.SimpleCursorAdapter.CursorToStringConverter): void;
				public changeCursor(param0: globalAndroid.database.Cursor): void;
				public constructor(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.database.Cursor, param3: number);
				public convertToString(param0: globalAndroid.database.Cursor): string;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor);
				public constructor(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.database.Cursor, param3: native.Array<string>, param4: native.Array<number>, param5: number);
				public getViewBinder(): androidx.cursoradapter.widget.SimpleCursorAdapter.ViewBinder;
				public setViewImage(param0: globalAndroid.widget.ImageView, param1: string): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor, param2: number);
				public bindView(param0: globalAndroid.view.View, param1: globalAndroid.content.Context, param2: globalAndroid.database.Cursor): void;
				public swapCursor(param0: globalAndroid.database.Cursor): globalAndroid.database.Cursor;
				public setViewText(param0: globalAndroid.widget.TextView, param1: string): void;
				public constructor(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.database.Cursor, param3: native.Array<string>, param4: native.Array<number>);
				public setViewBinder(param0: androidx.cursoradapter.widget.SimpleCursorAdapter.ViewBinder): void;
				public runQueryOnBackgroundThread(param0: string): globalAndroid.database.Cursor;
				public constructor(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.database.Cursor, param3: boolean);
				public changeCursorAndColumns(param0: globalAndroid.database.Cursor, param1: native.Array<string>, param2: native.Array<number>): void;
			}
			export module SimpleCursorAdapter {
				export class CursorToStringConverter {
					public static class: java.lang.Class<androidx.cursoradapter.widget.SimpleCursorAdapter.CursorToStringConverter>;
					/**
					 * Constructs a new instance of the androidx.cursoradapter.widget.SimpleCursorAdapter$CursorToStringConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						convertToString(param0: globalAndroid.database.Cursor): string;
					});
					public constructor();
					public convertToString(param0: globalAndroid.database.Cursor): string;
				}
				export class ViewBinder {
					public static class: java.lang.Class<androidx.cursoradapter.widget.SimpleCursorAdapter.ViewBinder>;
					/**
					 * Constructs a new instance of the androidx.cursoradapter.widget.SimpleCursorAdapter$ViewBinder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setViewValue(param0: globalAndroid.view.View, param1: globalAndroid.database.Cursor, param2: number): boolean;
					});
					public constructor();
					public setViewValue(param0: globalAndroid.view.View, param1: globalAndroid.database.Cursor, param2: number): boolean;
				}
			}
		}
	}
}

//Generics information:

