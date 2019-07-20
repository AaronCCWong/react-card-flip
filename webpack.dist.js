/* global __dirname, require, module*/

const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');

let libraryName = pkg.name;

let plugins = [], outputFile;
outputFile = libraryName + '.js';

const config = {
  mode: 'production',
  entry: __dirname + '/src/ReactCardFlip.jsx',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js', '.jsx']
  },
  plugins: plugins
};

module.exports = config;
