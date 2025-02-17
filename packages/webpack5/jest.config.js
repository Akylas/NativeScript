module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: {
		'^@akylas/nativescript-webpack$': '<rootDir>/src'
	},
	setupFiles: [
		'<rootDir>/scripts/jest.setup.ts'
	],
	setupFilesAfterEnv: [
		'<rootDir>/scripts/jest.mockWarn.ts',
		'<rootDir>/scripts/jest.copyRules.ts'
	],
	globals: {
		__TEST__: true,
	},
	resolver: '<rootDir>/scripts/resolver.js',
};
