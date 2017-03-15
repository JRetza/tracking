const webpack = require('webpack');
const webpackConfigs = require('./webpack.conf');
const handleOutPut = require('./util');

webpack([
  webpackConfigs.baseConfig,
  webpackConfigs.minifiedConfig,
  webpackConfigs.browserConfig,
  webpackConfigs.minifiedBrowserConfig
]).run(handleOutPut);
