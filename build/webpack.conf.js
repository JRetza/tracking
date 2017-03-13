const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [ './src/index.js' ],
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
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {'src': path.resolve(__dirname, '../src')}
  },
  devtool: 'source-map',
  watch: false
};
