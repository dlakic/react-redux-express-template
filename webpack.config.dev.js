const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

const { config } = baseConfig;

config.output.filename = 'js/bundle.js';

config.entry = [
  'react-hot-loader/patch',
  './src/client/index.js',
  'webpack-hot-middleware/client',
];

config.plugins = ([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
  }),
]);

module.exports = config;
