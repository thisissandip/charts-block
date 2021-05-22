const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry,
		editorStyles: path.join(__dirname, '/src/editorStyles.scss'),
		frontendStyles: path.join(__dirname, '/src/frontendStyles.scss'),
	},
	plugins: [
		...defaultConfig.plugins,
		new IgnoreEmitPlugin([
			'editorStyles.js',
			'editorStyles.asset.php',
			'frontendStyles.js',
			'frontendStyles.asset.php',
		]),
	],
};
