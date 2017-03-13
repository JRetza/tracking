const webpack = require('webpack');
const webpackConfig = require('./webpack.conf');
const handleOutPut = require('./util');

webpack(webpackConfig, handleOutPut);
