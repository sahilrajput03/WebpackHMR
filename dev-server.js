const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
// This file is to run webpack with nodejsapi, to
// run with this configuration, you would need 
// to start via cli, `node dev-server.js`.

const config = require('./webpack.config.js');
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});