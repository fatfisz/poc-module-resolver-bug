const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.base.js');

config.devtool = 'eval';

config.entry = [
  'webpack-dev-server/client?http://127.0.0.1:9778',
  'webpack/hot/only-dev-server',
  'react-hot-loader/patch'
].concat(config.entry);

config.output = {
  path: path.join(__dirname, 'dist'),
  filename: 'bundle.js',
  publicPath: process.env.INTERNAL ? '/internal/static/' : '/static/'
};

config.plugins = [
  new webpack.HotModuleReplacementPlugin()
].concat(config.plugins);

module.exports = config;
