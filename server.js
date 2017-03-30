const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  //remove comment to use https (for SSO, feedback forms and stuff like that)
  // https: true,
  historyApiFallback: {
    index: `${config.output.publicPath}/index.html`
  },
  stats: {
    colors: true
  }
}).listen(9778, 'localhost', (err) => {
  if(err)
    return console.log(err);

  console.log('Listening at 127.0.0.1:9778');
});
