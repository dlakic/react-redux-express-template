/**
 * dev server
 */
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const wpConfig = require('./../../../webpack.config.dev');
const logger = require('../logger');


module.exports = (app) => {
  logger.debug('Starting dev server');
  const compiler = webpack(wpConfig);

  app.use(devMiddleware(compiler, {
    noInfo: true,
    publicPath: wpConfig.output.publicPath,
  }));

  app.use(hotMiddleware(compiler));
};
