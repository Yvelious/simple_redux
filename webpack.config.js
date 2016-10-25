var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DEVELOPMENT = 'development';
var NODE_ENV = process.env.NODE_ENV || DEVELOPMENT;
var dependencies  = Object.keys(require(__dirname + '/package').dependencies);

module.exports = {

	devtool: NODE_ENV == DEVELOPMENT ? 'eval' : null,

	debug:  NODE_ENV == DEVELOPMENT,

	entry: {
		app: './src/app.js',
		vendor: dependencies
	},

	output: {
		path: path.join(__dirname, 'dist'),
		filename: NODE_ENV == DEVELOPMENT ? 'app.js' : 'app.[hash].js',
		publicPath: '/'
	},

	devServer: {
		historyApiFallback: true,
		contentBase: '/dist/'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel'],
				include: path.join(__dirname, 'src'),
				exclude: /(node_modules)/
			}, {
				test: /\.css/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			}, {
				test: /\.scss/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
			}, {
				test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
				loader: 'url-loader?limit=100000'
			},
		]
	},

	plugins: NODE_ENV == DEVELOPMENT ? [
		/*
		* DEVELOPMENT
		*/
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		}),
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
		new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: __dirname + '/src/index.html',
		})
	] : [
		/*
		 * PRODUCTION
		*/
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash].js'),
		new webpack.optimize.UglifyJsPlugin({
			// Don't beautify output (enable for neater output)
			beautify: false,

			// Eliminate comments
			comments: false,

			// Compression specific options
			compress: {
				warnings: false,

				// Drop `console` statements
				drop_console: true
			},

			// Mangling specific options
			mangle: {
				// Don't mangle $
				except: ['$'],

				// Don't care about IE8
				screw_ie8 : true,

				// Don't mangle function names
				keep_fnames: true
			},
			sourceMap: false
		}),
		new ExtractTextPlugin('style.[contenthash].css'),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: __dirname + '/src/index.html',
		})
	],
};