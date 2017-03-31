const path = require('path');
const webpack = require('webpack');
const projectRoot = path.resolve(__dirname, '../');
const baseConfig = function () {
  return {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: './',
      filename: 'index.js',
      libraryTarget: 'umd',
      library: 'Fresh8Tracking'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: projectRoot,
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            formatter: require('eslint-friendly-formatter'),
            fix: true
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js'],
      alias: {'src': path.resolve(__dirname, '../src')}
    },
    plugins: [
      new webpack.DefinePlugin({
        URL: JSON.stringify(process.argv.slice(2)[0]) || JSON.stringify('http://heimdall.fresh8.co')
      }),
      new webpack.ProvidePlugin({
        Promise: 'es6-promise'
      })
    ],
    devtool: 'source-map',
    watch: false
  };
};

const minifiedConfig = baseConfig();
minifiedConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({comments: false, sourceMap: true}));
minifiedConfig.plugins.push(new webpack.optimize.DedupePlugin());
minifiedConfig.output.filename = 'index.min.js';

const browserConfig = baseConfig();
browserConfig.entry = ['babel-polyfill', './src/browser.js'];
browserConfig.output.filename = 'browser.js';
delete browserConfig.output.library;

const minifiedBrowserConfig = baseConfig();
minifiedBrowserConfig.entry = ['babel-polyfill', './src/browser.js'];
minifiedBrowserConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({comments: false, sourceMap: true}));
minifiedBrowserConfig.plugins.push(new webpack.optimize.DedupePlugin());
minifiedBrowserConfig.output.filename = 'browser.min.js';
delete browserConfig.output.library;

module.exports = {
  baseConfig: baseConfig(),
  minifiedConfig: minifiedConfig,
  browserConfig: browserConfig,
  minifiedBrowserConfig: minifiedBrowserConfig
};
