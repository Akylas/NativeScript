const webpack = require("@nativescript/webpack");

module.exports = (env) => {
	webpack.init(env);

	webpack.chainWebpack(config => {
		config.plugin('DefinePlugin').tap(args => {
			Object.assign(args[0], {
				__CI__: !!process.env.CI,
			})

			return args
		  })
	})

	const config = webpack.resolveConfig();
	Object.assign(config.resolve.alias, {
		'@nativescript/core': '@akylas/nativescript'
	})
	// the fork's core uses bare imports relative to its root (eg 'application/helpers-common')
	config.resolve.modules = [require('path').resolve(__dirname, 'node_modules/@akylas/nativescript'), ...(config.resolve.modules || []), 'node_modules']
	// ESM bundle evaluation order: view-base -> style-scope -> application -> content-view -> core/view is circular, start from content-view
	config.entry.bundle = ['@nativescript/core/ui/content-view', ...[].concat(config.entry.bundle)]
	config.resolve.fallback = Object.assign(config.resolve.fallback || {}, { url: false })
	return config;
};


