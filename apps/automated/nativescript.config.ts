import { NativeScriptConfig } from '@nativescript/core';

export default {
	id: 'org.nativescript.UnitTestApp',
	appPath: 'src',
	appResourcesPath: '../../tools/assets/App_Resources',
	android: {
		runtimePackageName: '@nativescript/android-quickjs-ng',
		v8Flags: '--expose_gc',
	},
	cli: {
		packageManager: 'yarn',
		additionalPathsToClean: ['.ns-vite-build'],
	},
	// bundler: 'vite',
	// bundlerConfigPath: 'vite.config.ts',
} as NativeScriptConfig;
