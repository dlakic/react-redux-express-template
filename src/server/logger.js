/**
 * Logger setup
 */

const winston = require('winston');

const format = winston.format.combine(
  winston.format.simple(),
);

module.exports = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'warn' : 'debug',
  transports: [
    new winston.transports.Console({ format }),
  ],
});
