const baseConfig = require('./webpack.config.base');

const { config } = baseConfig;

config.mode = 'production';

config.bail = true;

config.output.filename = 'js/bundle.js';

module.exports = config;
