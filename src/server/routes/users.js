/**
 * users routes
 */
const winston = require('winston');
const { StatusCodeError } = require('request-promise/errors');
const usersApi = require('../api/users');

exports.get = (req, res) => {
  winston.profile('users-api');

  usersApi.get(req.query)
    .then((users) => {
      res.set('Cache-Control', 'no-cache');
      res.status(200).send(users);
    })
    .catch(StatusCodeError, (e) => {
      res.status(e.statusCode).send(e.error.message);
    })
    .finally(() => {
      winston.profile('users-api');
    });
};

exports.post = (req, res) => {
  winston.profile('users-api');

  console.log(req.body);
  usersApi.post(req.body)
    .then(() => {
      res.set('Cache-Control', 'no-cache');
      res.sendStatus(204);
    })
    .catch(StatusCodeError, (e) => {
      res.status(e.statusCode).send(e.error.message);
    })
    .finally(() => {
      winston.profile('users-api');
    });
};
