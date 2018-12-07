declare module androidx {
	export module versionedparcelable {
		export abstract class CustomVersionedParcelable extends androidx.versionedparcelable.VersionedParcelable {
			public static class: java.lang.Class<androidx.versionedparcelable.CustomVersionedParcelable>;
			public onPostParceling(): void;
			public constructor();
			public onPreParceling(param0: boolean): void;
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class NonParcelField {
			public static class: java.lang.Class<androidx.versionedparcelable.NonParcelField>;
			/**
			 * Constructs a new instance of the androidx.versionedparcelable.NonParcelField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class ParcelField {
			public static class: java.lang.Class<androidx.versionedparcelable.ParcelField>;
			/**
			 * Constructs a new instance of the androidx.versionedparcelable.ParcelField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): number;
			});
			public constructor();
			public value(): number;
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class ParcelImpl {
			public static class: java.lang.Class<androidx.versionedparcelable.ParcelImpl>;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<androidx.versionedparcelable.ParcelImpl>;
			public describeContents(): number;
			public constructor(param0: androidx.versionedparcelable.VersionedParcelable);
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public getVersionedParcel(): androidx.versionedparcelable.VersionedParcelable;
			public constructor(param0: globalAndroid.os.Parcel);
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class ParcelUtils {
			public static class: java.lang.Class<androidx.versionedparcelable.ParcelUtils>;
			public static fromParcelable(param0: globalAndroid.os.Parcelable): androidx.versionedparcelable.VersionedParcelable;
			public static toOutputStream(param0: androidx.versionedparcelable.VersionedParcelable, param1: java.io.OutputStream): void;
			public static toParcelable(param0: androidx.versionedparcelable.VersionedParcelable): globalAndroid.os.Parcelable;
			public static fromInputStream(param0: java.io.InputStream): androidx.versionedparcelable.VersionedParcelable;
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export abstract class VersionedParcel {
			public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcel>;
			public readList(param0: java.util.List<any>, param1: number): java.util.List<any>;
			public writeException(param0: java.lang.Exception, param1: number): void;
			public readString(): string;
			public writeFloatArray(param0: native.Array<number>, param1: number): void;
			public writeSerializable(param0: java.io.Serializable, param1: number): void;
			public writeFloat(param0: number): void;
			public readLongArray(param0: native.Array<number>, param1: number): native.Array<number>;
			public isStream(): boolean;
			public readInt(): number;
			public readFloat(): number;
			public readSparseBooleanArray(param0: globalAndroid.util.SparseBooleanArray, param1: number): globalAndroid.util.SparseBooleanArray;
			public readDoubleArray(): native.Array<number>;
			public writeLong(param0: number): void;
			public writeByteArray(param0: native.Array<number>, param1: number, param2: number, param3: number): void;
			public readParcelable(): globalAndroid.os.Parcelable;
			public readDoubleArray(param0: native.Array<number>, param1: number): native.Array<number>;
			public constructor();
			public readIntArray(): native.Array<number>;
			public writeStrongInterface(param0: globalAndroid.os.IInterface): void;
			public readBoolean(): boolean;
			public static readFromParcel(param0: string, param1: androidx.versionedparcelable.VersionedParcel): androidx.versionedparcelable.VersionedParcelable;
			public writeBooleanArray(param0: native.Array<boolean>): void;
			public static getRootCause(param0: java.lang.Throwable): java.lang.Throwable;
			public setSerializationFlags(param0: boolean, param1: boolean): void;
			public readFloatArray(): native.Array<number>;
			public readLong(param0: number, param1: number): number;
			public writeByte(param0: number, param1: number): void;
			public writeSparseBooleanArray(param0: globalAndroid.util.SparseBooleanArray, param1: number): void;
			public readArray(param0: native.Array<any>, param1: number): native.Array<any>;
			public readFloat(param0: number, param1: number): number;
			public readField(param0: number): boolean;
			public readVersionedParcelable(): androidx.versionedparcelable.VersionedParcelable;
			public readSerializable(): java.io.Serializable;
			public writeSizeF(param0: any, param1: number): void;
			public readBoolean(param0: boolean, param1: number): boolean;
			public readStrongBinder(): globalAndroid.os.IBinder;
			public readSet(param0: java.util.Set<any>, param1: number): java.util.Set<any>;
			public readByte(param0: number, param1: number): number;
			public writeLong(param0: number, param1: number): void;
			public readByteArray(param0: native.Array<number>, param1: number): native.Array<number>;
			public readStrongBinder(param0: globalAndroid.os.IBinder, param1: number): globalAndroid.os.IBinder;
			public setOutputField(param0: number): void;
			public readString(param0: string, param1: number): string;
			public readSize(param0: any, param1: number): any;
			public writeBundle(param0: globalAndroid.os.Bundle): void;
			public static writeToParcel(param0: androidx.versionedparcelable.VersionedParcelable, param1: androidx.versionedparcelable.VersionedParcel): void;
			public readCharArray(param0: native.Array<string>, param1: number): native.Array<string>;
			public readIntArray(param0: native.Array<number>, param1: number): native.Array<number>;
			public readArray(param0: native.Array<any>): native.Array<any>;
			public closeField(): void;
			public writeBoolean(param0: boolean, param1: number): void;
			public writeIntArray(param0: native.Array<number>): void;
			public readDouble(param0: number, param1: number): number;
			public writeDouble(param0: number, param1: number): void;
			public readParcelable(param0: globalAndroid.os.Parcelable, param1: number): globalAndroid.os.Parcelable;
			public writeLongArray(param0: native.Array<number>): void;
			public readVersionedParcelable(param0: androidx.versionedparcelable.VersionedParcelable, param1: number): androidx.versionedparcelable.VersionedParcelable;
			public writeString(param0: string, param1: number): void;
			public writeBooleanArray(param0: native.Array<boolean>, param1: number): void;
			public writeIntArray(param0: native.Array<number>, param1: number): void;
			public writeFloatArray(param0: native.Array<number>): void;
			public readInt(param0: number, param1: number): number;
			public writeLongArray(param0: native.Array<number>, param1: number): void;
			public writeParcelable(param0: globalAndroid.os.Parcelable, param1: number): void;
			public writeByteArray(param0: native.Array<number>): void;
			public writeInt(param0: number, param1: number): void;
			public createSubParcel(): androidx.versionedparcelable.VersionedParcel;
			public readSizeF(param0: any, param1: number): any;
			public writeParcelable(param0: globalAndroid.os.Parcelable): void;
			public writeBoolean(param0: boolean): void;
			public readException(param0: java.lang.Exception, param1: number): java.lang.Exception;
			public readBundle(): globalAndroid.os.Bundle;
			public writeByteArray(param0: native.Array<number>, param1: number): void;
			public writeVersionedParcelable(param0: androidx.versionedparcelable.VersionedParcelable, param1: number): void;
			public writeVersionedParcelable(param0: androidx.versionedparcelable.VersionedParcelable): void;
			public writeSize(param0: any, param1: number): void;
			public readBooleanArray(param0: native.Array<boolean>, param1: number): native.Array<boolean>;
			public writeByteArray(param0: native.Array<number>, param1: number, param2: number): void;
			public readBooleanArray(): native.Array<boolean>;
			public writeList(param0: java.util.List<any>, param1: number): void;
			public writeBundle(param0: globalAndroid.os.Bundle, param1: number): void;
			public writeString(param0: string): void;
			public writeCharArray(param0: native.Array<string>, param1: number): void;
			public writeDoubleArray(param0: native.Array<number>, param1: number): void;
			public readDouble(): number;
			public writeStrongBinder(param0: globalAndroid.os.IBinder): void;
			public writeSet(param0: java.util.Set<any>, param1: number): void;
			public writeFloat(param0: number, param1: number): void;
			public writeNoException(): void;
			public writeInt(param0: number): void;
			public writeStrongInterface(param0: globalAndroid.os.IInterface, param1: number): void;
			public readLong(): number;
			public readLongArray(): native.Array<number>;
			public writeDouble(param0: number): void;
			public readByteArray(): native.Array<number>;
			public writeDoubleArray(param0: native.Array<number>): void;
			public writeArray(param0: native.Array<any>): void;
			public writeArray(param0: native.Array<any>, param1: number): void;
			public readFloatArray(param0: native.Array<number>, param1: number): native.Array<number>;
			public readBundle(param0: globalAndroid.os.Bundle, param1: number): globalAndroid.os.Bundle;
			public writeStrongBinder(param0: globalAndroid.os.IBinder, param1: number): void;
		}
		export module VersionedParcel {
			export class ParcelException {
				public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcel.ParcelException>;
				public constructor(param0: java.lang.Throwable);
			}
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class VersionedParcelParcel extends androidx.versionedparcelable.VersionedParcel {
			public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcelParcel>;
			public writeByteArray(param0: native.Array<number>, param1: number, param2: number): void;
			public closeField(): void;
			public writeBoolean(param0: boolean, param1: number): void;
			public readString(): string;
			public readFloat(param0: number, param1: number): number;
			public readDouble(param0: number, param1: number): number;
			public readField(param0: number): boolean;
			public writeDouble(param0: number, param1: number): void;
			public readParcelable(param0: globalAndroid.os.Parcelable, param1: number): globalAndroid.os.Parcelable;
			public writeFloat(param0: number): void;
			public readBoolean(param0: boolean, param1: number): boolean;
			public writeString(param0: string, param1: number): void;
			public readStrongBinder(): globalAndroid.os.IBinder;
			public writeBundle(param0: globalAndroid.os.Bundle, param1: number): void;
			public writeString(param0: string): void;
			public readDouble(): number;
			public writeLong(param0: number, param1: number): void;
			public readInt(param0: number, param1: number): number;
			public writeStrongBinder(param0: globalAndroid.os.IBinder): void;
			public writeParcelable(param0: globalAndroid.os.Parcelable, param1: number): void;
			public readByteArray(param0: native.Array<number>, param1: number): native.Array<number>;
			public writeFloat(param0: number, param1: number): void;
			public readInt(): number;
			public readFloat(): number;
			public writeByteArray(param0: native.Array<number>): void;
			public writeInt(param0: number, param1: number): void;
			public readStrongBinder(param0: globalAndroid.os.IBinder, param1: number): globalAndroid.os.IBinder;
			public setOutputField(param0: number): void;
			public readString(param0: string, param1: number): string;
			public createSubParcel(): androidx.versionedparcelable.VersionedParcel;
			public writeInt(param0: number): void;
			public writeLong(param0: number): void;
			public writeStrongInterface(param0: globalAndroid.os.IInterface, param1: number): void;
			public writeByteArray(param0: native.Array<number>, param1: number, param2: number, param3: number): void;
			public readLong(): number;
			public writeDouble(param0: number): void;
			public readParcelable(): globalAndroid.os.Parcelable;
			public readByteArray(): native.Array<number>;
			public writeParcelable(param0: globalAndroid.os.Parcelable): void;
			public writeBoolean(param0: boolean): void;
			public writeStrongInterface(param0: globalAndroid.os.IInterface): void;
			public readBundle(): globalAndroid.os.Bundle;
			public readBoolean(): boolean;
			public writeByteArray(param0: native.Array<number>, param1: number): void;
			public writeBundle(param0: globalAndroid.os.Bundle): void;
			public readBundle(param0: globalAndroid.os.Bundle, param1: number): globalAndroid.os.Bundle;
			public writeStrongBinder(param0: globalAndroid.os.IBinder, param1: number): void;
			public readLong(param0: number, param1: number): number;
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class VersionedParcelStream extends androidx.versionedparcelable.VersionedParcel {
			public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcelStream>;
			public closeField(): void;
			public writeBoolean(param0: boolean, param1: number): void;
			public readString(): string;
			public readDouble(param0: number, param1: number): number;
			public writeDouble(param0: number, param1: number): void;
			public readParcelable(param0: globalAndroid.os.Parcelable, param1: number): globalAndroid.os.Parcelable;
			public writeFloat(param0: number): void;
			public writeString(param0: string, param1: number): void;
			public isStream(): boolean;
			public readInt(param0: number, param1: number): number;
			public writeParcelable(param0: globalAndroid.os.Parcelable, param1: number): void;
			public readInt(): number;
			public readFloat(): number;
			public writeByteArray(param0: native.Array<number>): void;
			public writeInt(param0: number, param1: number): void;
			public createSubParcel(): androidx.versionedparcelable.VersionedParcel;
			public writeLong(param0: number): void;
			public writeByteArray(param0: native.Array<number>, param1: number, param2: number, param3: number): void;
			public readParcelable(): globalAndroid.os.Parcelable;
			public constructor();
			public writeParcelable(param0: globalAndroid.os.Parcelable): void;
			public writeBoolean(param0: boolean): void;
			public writeStrongInterface(param0: globalAndroid.os.IInterface): void;
			public readBoolean(): boolean;
			public readBundle(): globalAndroid.os.Bundle;
			public constructor(param0: java.io.InputStream, param1: java.io.OutputStream);
			public writeByteArray(param0: native.Array<number>, param1: number): void;
			public setSerializationFlags(param0: boolean, param1: boolean): void;
			public readLong(param0: number, param1: number): number;
			public writeByteArray(param0: native.Array<number>, param1: number, param2: number): void;
			public readFloat(param0: number, param1: number): number;
			public readField(param0: number): boolean;
			public readBoolean(param0: boolean, param1: number): boolean;
			public readStrongBinder(): globalAndroid.os.IBinder;
			public writeBundle(param0: globalAndroid.os.Bundle, param1: number): void;
			public writeString(param0: string): void;
			public readDouble(): number;
			public writeLong(param0: number, param1: number): void;
			public writeStrongBinder(param0: globalAndroid.os.IBinder): void;
			public readByteArray(param0: native.Array<number>, param1: number): native.Array<number>;
			public writeFloat(param0: number, param1: number): void;
			public readStrongBinder(param0: globalAndroid.os.IBinder, param1: number): globalAndroid.os.IBinder;
			public setOutputField(param0: number): void;
			public readString(param0: string, param1: number): string;
			public writeInt(param0: number): void;
			public writeStrongInterface(param0: globalAndroid.os.IInterface, param1: number): void;
			public readLong(): number;
			public writeDouble(param0: number): void;
			public readByteArray(): native.Array<number>;
			public writeBundle(param0: globalAndroid.os.Bundle): void;
			public readBundle(param0: globalAndroid.os.Bundle, param1: number): globalAndroid.os.Bundle;
			public writeStrongBinder(param0: globalAndroid.os.IBinder, param1: number): void;
		}
		export module VersionedParcelStream {
			export class FieldBuffer {
				public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcelStream.FieldBuffer>;
			}
			export class InputBuffer {
				public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcelStream.InputBuffer>;
			}
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class VersionedParcelable {
			public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcelable>;
			/**
			 * Constructs a new instance of the androidx.versionedparcelable.VersionedParcelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class VersionedParcelize {
			public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcelize>;
			/**
			 * Constructs a new instance of the androidx.versionedparcelable.VersionedParcelize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				allowSerialization(): boolean;
				ignoreParcelables(): boolean;
				isCustom(): boolean;
				deprecatedIds(): native.Array<number>;
				jetifyAs(): string;
			});
			public constructor();
			public jetifyAs(): string;
			public ignoreParcelables(): boolean;
			public isCustom(): boolean;
			public allowSerialization(): boolean;
			public deprecatedIds(): native.Array<number>;
		}
	}
}

//Generics information:

