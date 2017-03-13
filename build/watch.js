const webpack = require('webpack');
const webpackConfig = require('./webpack.conf');
webpackConfig.watch = true

const handleOutPut = require('./util');

webpack(webpackConfig, handleOutPut);
