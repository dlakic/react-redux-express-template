/**
 * Server-side HTML layout.
 */
const React = require('react');

const Index = () => (
  <html lang="de">
    <head>
      <meta charSet="UTF-8" />
      <title>Produkte Rankings</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/img/favicon.ico" />
      <link rel="stylesheet" href="/css/bootstrap.css" />
    </head>
    <body>
      <div id="app" />
      <script src="./js/bundle.js" />
    </body>
  </html>
);

module.exports = Index;
