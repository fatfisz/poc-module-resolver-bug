const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    './src/index'
  ],
  plugins: [
    new webpack.ResolverPlugin( new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main']) )
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'bower_components']
  },
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
