const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.base.js');

config.debug = false;
config.bail = true;
config.profile = false;
config.devtools = false;

config.output = {
  path: process.env.INTERNAL !== 'true' ? path.join(__dirname, 'dist') : path.join(__dirname, 'dist/internal'),
  filename: 'bundle.js',
  publicPath: process.env.INTERNAL !== 'true' ? '/' : '/internal/'
};

config.plugins = [
  // This plugin extract common dependencies from chunks
  new webpack.optimize.CommonsChunkPlugin({
    name: 'main',
    children: true,
    minChunks: 2
  }),

  // This plugin looks for similar chunks and files
  // and merges them for better caching by the user
  new webpack.optimize.DedupePlugin(),

  // This plugins optimizes chunks and modules by
  // how much they are used in your app
  new webpack.optimize.OccurenceOrderPlugin(),

  // This plugin prevents Webpack from creating chunks
  // that would be too small to be worth loading separately
  new webpack.optimize.MinChunkSizePlugin({
    minChunkSize: 51200
  }),

  // This plugin minifies all the Javascript code of the final bundle
  new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    compress: {
      warnings: false
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      INTERNAL: JSON.stringify(process.env.INTERNAL),
      ENV: JSON.stringify(process.env.ENV),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }),
  new CopyWebpackPlugin([
    {
      from: 'raw',
      to: 'raw'
    },
    {
      from: 'scripts',
      to: 'scripts'
    },
    {
      from: 'bower_components',
      to: 'bower_components'
    }
  ])
].concat(config.plugins);

module.exports = config;
