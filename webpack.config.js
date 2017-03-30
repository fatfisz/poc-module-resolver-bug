const config = process.env.NODE_ENV === 'production' ?
  require('./webpack.config.production.js') :
  require('./webpack.config.development.js');

module.exports = config;
