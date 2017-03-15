const webpack = require('webpack');
const webpackConfigs = require('./webpack.conf');
const webpackConfig = webpackConfigs.baseConfig;
webpackConfig.watch = true;

const handleOutPut = require('./util');

webpack(webpackConfig, handleOutPut);
