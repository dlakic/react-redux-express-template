/**
 * users routes
 */
const logger = require('../logger');
const usersApi = require('../api/users');

exports.get = async (req, res) => {
  logger.profile('users-api');
  try {
    const users = await usersApi.get(req.query);
    res.set('Cache-Control', 'no-cache');
    res.status(200).send(users);
    logger.profile('users-api');
  } catch (e) {
    res.status(e.statusCode).send(e.error.message);
    logger.profile('users-api');
  }
};

exports.post = async (req, res) => {
  logger.profile('users-api-create');
  try {
    await usersApi.post(req.body);
    res.set('Cache-Control', 'no-cache');
    res.sendStatus(204);
    logger.profile('users-api-create');
  } catch (e) {
    res.status(e.statusCode).send(e.error.message);
    logger.profile('users-api-create');
  }
};
