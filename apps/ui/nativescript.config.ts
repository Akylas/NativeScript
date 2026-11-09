import { NativeScriptConfig } from '@nativescript/core';

export default {
	id: 'org.nativescript.uitestsapp',
	appPath: 'src',
	appResourcesPath: '../../tools/assets/App_Resources',
	android: {
		runtimePackageName: '@nativescript/android-quickjs-ng',
		v8Flags: '--expose_gc',
	},
} as NativeScriptConfig;
