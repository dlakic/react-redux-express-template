const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

const { config } = baseConfig;

config.mode = 'development';

config.output.filename = 'js/bundle.js';

config.entry = [
  'react-hot-loader/patch',
  'webpack-hot-middleware/client',
  ...config.entry,
];

config.plugins = ([
  new webpack.HotModuleReplacementPlugin(),
]);

module.exports = config;
