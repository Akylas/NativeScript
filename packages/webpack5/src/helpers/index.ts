import { merge } from 'webpack-merge';

import { addVirtualEntry, addVirtualModule } from './virtualModules'
import { convertSlashesInPath, getPackageJson, getProjectRootPath } from './project';
import { addCopyRule, removeCopyRule } from './copyRules';
import { determineProjectFlavor, projectUsesCustomFlavor } from './flavor';
import { error, info, warn } from './log';
import { getValue } from './config';
import { getIPS } from './host'
import {
	getAllDependencies,
	hasDependency,
	getDependencyPath,
} from './dependencies';
import {
	addPlatform,
	getAbsoluteDistPath,
	getDistPath,
	getEntryDirPath,
	getEntryPath,
	getPlatform,
	getPlatformName,
} from './platform';


// intentionally populated manually
// as this generates nicer typings
// that show all the utils inline
// rather than imports to types
// todo: maybe use api-extractor instead
export default {
	merge,
	addCopyRule,
	removeCopyRule,
	config: {
		getValue,
	},
	dependencies: {
		getAllDependencies,
		hasDependency,
		getDependencyPath,
	},
	flavor: {
		determineProjectFlavor,
		projectUsesCustomFlavor
	},
	host: {
		getIPS,
	},
	log: {
		error,
		info,
		warn,
	},
	platform: {
		addPlatform,
		getAbsoluteDistPath,
		getDistPath,
		getEntryDirPath,
		getEntryPath,
		getPlatform,
		getPlatformName,
	},
	project: {
		convertSlashesInPath,
		getProjectRootPath,
		getPackageJson,
	},
	virtualModules: {
		addVirtualEntry,
		addVirtualModule
	}
};