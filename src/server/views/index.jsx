/**
 * Server-side HTML layout.
 */
const React = require('react');

const Index = () => (
  <html lang="de">
    <head>
      <meta charSet="UTF-8" />
      <title>React-Redux Test Aüü</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/img/favicon.ico" />
    </head>
    <body>
      <div id="root" />
      <script src="./js/bundle.js" />
    </body>
  </html>
);

module.exports = Index;
