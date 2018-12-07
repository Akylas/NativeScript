declare module androidx {
	export module collection {
		export class ArrayMap<K, V>  extends androidx.collection.SimpleArrayMap<any,any> implements java.util.Map<any,any>  {
			public static class: java.lang.Class<androidx.collection.ArrayMap<any,any>>;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public constructor(param0: androidx.collection.SimpleArrayMap<any,any>);
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public keySet(): java.util.Set<any>;
			public putAll(param0: java.util.Map<any,any>): void;
			public constructor(param0: number);
			public putAll(param0: androidx.collection.SimpleArrayMap<any,any>): void;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public constructor();
			public constructor(param0: androidx.collection.SimpleArrayMap<any,any>);
			public values(): java.util.Collection<any>;
			public retainAll(param0: java.util.Collection<any>): boolean;
		}
	}
}

declare module androidx {
	export module collection {
		export class ArraySet<E>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.collection.ArraySet<any>>;
			public removeAll(param0: androidx.collection.ArraySet<any>): boolean;
			public equals(param0: any): boolean;
			public toArray(): native.Array<any>;
			public iterator(): java.util.Iterator<E>;
			public removeAt(param0: number): E;
			public ensureCapacity(param0: number): void;
			public contains(param0: any): boolean;
			public append(param0: E): void;
			public clear(): void;
			public isEmpty(): boolean;
			public size(): number;
			public constructor(param0: number);
			public add(param0: E): boolean;
			public toArray(param0: native.Array<any>): native.Array<any>;
			public constructor();
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public addAll(param0: androidx.collection.ArraySet<any>): void;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public toString(): string;
			public valueAt(param0: number): E;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public constructor(param0: java.util.Collection<E>);
			public indexOf(param0: any): number;
			public constructor(param0: androidx.collection.ArraySet<E>);
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module collection {
		export class CircularArray<E>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.collection.CircularArray<any>>;
			public addFirst(param0: E): void;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public constructor(param0: number);
			public constructor();
			public get(param0: number): E;
			public getLast(): E;
			public removeFromEnd(param0: number): void;
			public popLast(): E;
			public getFirst(): E;
			public removeFromStart(param0: number): void;
			public popFirst(): E;
			public addLast(param0: E): void;
		}
	}
}

declare module androidx {
	export module collection {
		export class CircularIntArray {
			public static class: java.lang.Class<androidx.collection.CircularIntArray>;
			public clear(): void;
			public popLast(): number;
			public size(): number;
			public isEmpty(): boolean;
			public getFirst(): number;
			public constructor(param0: number);
			public constructor();
			public addLast(param0: number): void;
			public addFirst(param0: number): void;
			public popFirst(): number;
			public removeFromEnd(param0: number): void;
			public removeFromStart(param0: number): void;
			public getLast(): number;
			public get(param0: number): number;
		}
	}
}

declare module androidx {
	export module collection {
		export class ContainerHelpers {
			public static class: java.lang.Class<androidx.collection.ContainerHelpers>;
			public static idealLongArraySize(param0: number): number;
			public static idealByteArraySize(param0: number): number;
			public static equal(param0: any, param1: any): boolean;
			public static idealIntArraySize(param0: number): number;
		}
	}
}

declare module androidx {
	export module collection {
		export class LongSparseArray<E>  extends java.lang.Cloneable {
			public static class: java.lang.Class<androidx.collection.LongSparseArray<any>>;
			public containsKey(param0: number): boolean;
			public append(param0: number, param1: any): void;
			public clear(): void;
			public put(param0: number, param1: any): void;
			public size(): number;
			public isEmpty(): boolean;
			public containsValue(param0: any): boolean;
			public delete(param0: number): void;
			public indexOfValue(param0: any): number;
			public constructor(param0: number);
			public constructor();
			public remove(param0: number): void;
			public putAll(param0: androidx.collection.LongSparseArray<any>): void;
			public keyAt(param0: number): number;
			public valueAt(param0: number): any;
			public toString(): string;
			public clone(): androidx.collection.LongSparseArray<any>;
			public get(param0: number): any;
			public removeAt(param0: number): void;
			public get(param0: number, param1: any): any;
			public setValueAt(param0: number, param1: any): void;
			public indexOfKey(param0: number): number;
		}
	}
}

declare module androidx {
	export module collection {
		export class LruCache<K, V>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.collection.LruCache<any,any>>;
			public put(param0: K, param1: V): V;
			public size(): number;
			public putCount(): number;
			public createCount(): number;
			public constructor(param0: number);
			public evictAll(): void;
			public get(param0: K): V;
			public resize(param0: number): void;
			public maxSize(): number;
			public create(param0: K): V;
			public hitCount(): number;
			public snapshot(): java.util.Map<K,V>;
			public entryRemoved(param0: boolean, param1: K, param2: V, param3: V): void;
			public toString(): string;
			public sizeOf(param0: K, param1: V): number;
			public trimToSize(param0: number): void;
			public remove(param0: K): V;
			public evictionCount(): number;
			public missCount(): number;
		}
	}
}

declare module androidx {
	export module collection {
		export abstract class MapCollections<K, V>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.collection.MapCollections<any,any>>;
			public getEntrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
			public colGetEntry(param0: number, param1: number): any;
			public getKeySet(): java.util.Set<K>;
			public colIndexOfValue(param0: any): number;
			public colClear(): void;
			public static removeAllHelper(param0: java.util.Map<any, any>, param1: java.util.Collection<any>): boolean;
			public getValues(): java.util.Collection<V>;
			public toArrayHelper(param0: native.Array<any>, param1: number): native.Array<any>;
			public colGetMap(): java.util.Map<K,V>;
			public colPut(param0: K, param1: V): void;
			public static equalsSetHelper(param0: java.util.Set<any>, param1: any): boolean;
			public colRemoveAt(param0: number): void;
			public static containsAllHelper(param0: java.util.Map<any, any>, param1: java.util.Collection<any>): boolean;
			public colSetValue(param0: number, param1: V): V;
			public toArrayHelper(param0: number): native.Array<any>;
			public colGetSize(): number;
			public static retainAllHelper(param0: java.util.Map<any, any>, param1: java.util.Collection<any>): boolean;
			public colIndexOfKey(param0: any): number;
		}
		export module MapCollections {
			export class ArrayIterator<T>  extends java.util.Iterator<any> {
				public static class: java.lang.Class<androidx.collection.MapCollections.ArrayIterator<any>>;
				public remove(): void;
				public next(): any;
				public hasNext(): boolean;
			}
			export class EntrySet extends java.util.Set<java.util.Map.Entry<any,any>> {
				public static class: java.lang.Class<androidx.collection.MapCollections.EntrySet>;
				public add(param0: java.util.Map.Entry<any,any>): boolean;
				public addAll(param0: java.util.Collection<any>): boolean;
				public contains(param0: any): boolean;
				public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
				public toArray(param0: native.Array<any>): native.Array<any>;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public size(): number;
				public toArray(): native.Array<any>;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public hashCode(): number;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public clear(): void;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public remove(param0: any): boolean;
			}
			export class KeySet extends java.util.Set<any> {
				public static class: java.lang.Class<androidx.collection.MapCollections.KeySet>;
				public addAll(param0: java.util.Collection<any>): boolean;
				public contains(param0: any): boolean;
				public toArray(param0: native.Array<any>): native.Array<any>;
				public iterator(): java.util.Iterator<any>;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public size(): number;
				public toArray(): native.Array<any>;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public hashCode(): number;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public clear(): void;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public remove(param0: any): boolean;
			}
			export class MapIterator extends java.lang.Object {
				public static class: java.lang.Class<androidx.collection.MapCollections.MapIterator>;
				public remove(): void;
				public getKey(): any;
				public hashCode(): number;
				public hasNext(): boolean;
				public equals(param0: any): boolean;
				public next(): java.util.Map.Entry<any,any>;
				public getValue(): any;
				public toString(): string;
				public setValue(param0: any): any;
			}
			export class ValuesCollection extends java.util.Collection<any> {
				public static class: java.lang.Class<androidx.collection.MapCollections.ValuesCollection>;
				public addAll(param0: java.util.Collection<any>): boolean;
				public contains(param0: any): boolean;
				public toArray(param0: native.Array<any>): native.Array<any>;
				public iterator(): java.util.Iterator<any>;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public size(): number;
				public toArray(): native.Array<any>;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public clear(): void;
				public isEmpty(): boolean;
				public remove(param0: any): boolean;
			}
		}
	}
}

declare module androidx {
	export module collection {
		export class SimpleArrayMap<K, V>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.collection.SimpleArrayMap<any,any>>;
			public clear(): void;
			public equals(param0: any): boolean;
			public isEmpty(): boolean;
			public put(param0: K, param1: V): V;
			public size(): number;
			public containsValue(param0: any): boolean;
			public valueAt(param0: number): V;
			public constructor(param0: number);
			public removeAt(param0: number): V;
			public constructor(param0: androidx.collection.SimpleArrayMap<K,V>);
			public setValueAt(param0: number, param1: V): V;
			public constructor();
			public get(param0: any): V;
			public ensureCapacity(param0: number): void;
			public toString(): string;
			public indexOfKey(param0: any): number;
			public remove(param0: any): V;
			public containsKey(param0: any): boolean;
			public putAll(param0: androidx.collection.SimpleArrayMap<any,any>): void;
			public keyAt(param0: number): K;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module collection {
		export class SparseArrayCompat<E>  extends java.lang.Cloneable {
			public static class: java.lang.Class<androidx.collection.SparseArrayCompat<any>>;
			public containsKey(param0: number): boolean;
			public append(param0: number, param1: any): void;
			public clear(): void;
			public put(param0: number, param1: any): void;
			public size(): number;
			public isEmpty(): boolean;
			public containsValue(param0: any): boolean;
			public delete(param0: number): void;
			public indexOfValue(param0: any): number;
			public constructor(param0: number);
			public constructor();
			public remove(param0: number): void;
			public clone(): androidx.collection.SparseArrayCompat<any>;
			public keyAt(param0: number): number;
			public valueAt(param0: number): any;
			public toString(): string;
			public removeAtRange(param0: number, param1: number): void;
			public get(param0: number): any;
			public removeAt(param0: number): void;
			public putAll(param0: androidx.collection.SparseArrayCompat<any>): void;
			public get(param0: number, param1: any): any;
			public setValueAt(param0: number, param1: any): void;
			public indexOfKey(param0: number): number;
		}
	}
}

//Generics information:
//androidx.collection.ArrayMap:2
//androidx.collection.ArraySet:1
//androidx.collection.CircularArray:1
//androidx.collection.LongSparseArray:1
//androidx.collection.LruCache:2
//androidx.collection.MapCollections:2
//androidx.collection.MapCollections.ArrayIterator:1
//androidx.collection.SimpleArrayMap:2
//androidx.collection.SparseArrayCompat:1

