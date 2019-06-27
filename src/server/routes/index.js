const users = require('./users');

function helloRoutes(app) {
  app.get('/api/hello', (req, res) => {
    res.status(200).send('hello');
  });
}

function userRoutes(app) {
  app.get('/api/users', users.get);
  app.post('/api/users', users.post);
}


function routes(app) {
  helloRoutes(app);
  userRoutes(app);
}

module.exports = routes;
