const path = require('path');
const webpack = require('webpack');
const baseConfig = function () {
  return {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'index.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
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
        },
      ]
    },
    resolve: {
      extensions: ['.js'],
      alias: {'src': path.resolve(__dirname, '../src')}
    },
    plugins: [
      new webpack.DefinePlugin({
        URL: JSON.stringify(process.argv.slice(2)[0]) || JSON.stringify('http://heimdall.fresh8.co')
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

const minifiedBrowserConfig = baseConfig();
minifiedBrowserConfig.entry = ['babel-polyfill', './src/browser.js'];
minifiedBrowserConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({comments: false, sourceMap: true}));
minifiedBrowserConfig.plugins.push(new webpack.optimize.DedupePlugin());
minifiedBrowserConfig.output.filename = 'browser.min.js';

module.exports = {
  baseConfig: baseConfig(),
  minifiedConfig: minifiedConfig,
  browserConfig: browserConfig,
  minifiedBrowserConfig: minifiedBrowserConfig
};
