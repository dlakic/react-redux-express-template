function routes(app) {
  app.get('/hello', (req, res) => {
    res.status(200).send('hello');
  });
}

module.exports = routes;
