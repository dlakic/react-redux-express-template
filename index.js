const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('./src/server/logger');
const routes = require('./src/server/routes');
const devServer = require('./src/server/middleware/dev-server');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

// view engine setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './src/server/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

if (process.env.NODE_ENV === 'development') {
  devServer(app);
}

app.use(express.static(path.join(__dirname, 'public')));

routes(app);

// every other route should go to index.html due to react router
app.use('*', (req, res) => {
  res.render('index');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

const httpPort = process.env.PORT || 3000;

const server = app.listen(httpPort, (err) => {
  if (err) {
    logger.error(`Failed to listen to port ${httpPort}`, {
      err,
    });
    return;
  }
  const { scheme = 'http', host = 'localhost', port } = server.address();

  logger.info(`Server listening on ${scheme}://${host}:${port}`);
});

module.exports = app;
