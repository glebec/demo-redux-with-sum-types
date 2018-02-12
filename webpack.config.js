'use strict'; // eslint-disable-line semi

const { resolve } = require('path')

module.exports = {
	entry: [
		'babel-polyfill', // enables async-await
		resolve(__dirname, 'src', 'index.jsx')
	],
	resolve: {
		alias: {
			src: resolve(__dirname, 'src'),
		},
		extensions: ['.js', '.jsx', '.json'],
	},
	output: {
		path: resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader' // see .babelrc for settings
			},
			{
				test: /\.scss$/,
				use: [{
					loader: 'style-loader' // creates style nodes from JS strings
				}, {
					loader: 'css-loader', // translates CSS into CommonJS
					options: { sourceMap: true },
				}, {
					loader: 'sass-loader', // compiles Sass to CSS
					options: { sourceMap: true },
				}]
			}
		]
	}
}
