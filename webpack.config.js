const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry,
		frontendscript: path.join(__dirname, '/src/blocks/frontend.js'),
	},
	plugins: [
		...defaultConfig.plugins,
		new IgnoreEmitPlugin(['frontendscript.asset.php']),
	],
};
