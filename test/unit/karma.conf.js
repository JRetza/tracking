const webpack = require('webpack');

// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

// Define process title
process.title = 'Tracking: Karma';

const path = require('path');
const merge = require('webpack-merge');
const webpackConfigs = require('../../build/webpack.conf');
const baseConfig = webpackConfigs.baseConfig;
const projectRoot = path.resolve(__dirname, '../../');

const webpackConfig = merge(baseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  devtool: '#inline-source-map',
  performance: {hints: false},
  plugins: [new webpack.DefinePlugin({'API_VERSION': JSON.stringify(require(path.join(__dirname, '../../package.json')).version)})]
});

// No need for app entry during tests
delete webpackConfig.entry;

webpackConfig.module.rules = webpackConfig.module.rules || [];
webpackConfig.module.rules.unshift({
  test: /\.js$/,
  loader: 'babel-loader',
  include: projectRoot,
  exclude: /test\/unit|node_modules/
});

webpackConfig.module.rules.some(function (loader) {
  if (loader.loader === 'babel-loader') {
    loader.include = /test\/unit/;
    return true;
  }
});

var reporters = [process.env.KARMA_REPORTER || 'spec', 'coverage'];
module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: reporters,
    files: ['./specs/**/*.spec.js', '../../src/**/!(browser).js'],
    preprocessors: {
      './specs/**/*.spec.js': ['webpack', 'sourcemap'],
      '../../src/**/*.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {noInfo: true},
    client: {
      'mocha': {
        timeout: '5000'
      },
      captureConsole: true
    },
    specReporter: {},
    coverageReporter: {
      dir: './coverage',
      reporters: [
        {type: 'lcov', subdir: '.'},
        {type: 'text', subdir: '.', file: 'coverage.txt'},
        {type: 'text-summary'}
      ],
      check: {
        global: {
          statements: 100,
          branches: 100,
          functions: 100,
          lines: 100
        },
        each: {
          statements: 100,
          branches: 100,
          functions: 100,
          lines: 100
        }
      }
    }
  });
};
