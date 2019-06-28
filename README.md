# React-Redux Express Template

A minimal template to work with as a starting point for React-Redux web applications.

## Components
The template is split into a server and client component. 
The server consists of an [Express.js](https://expressjs.com) server which serves the routes for an API proxy
and bundles the built React-Redux frontend. The client component consists of said frontend. 

The following features and libraries are integrated and shown as an example:

- **[React](https://reactjs.org/)**: For the UI (also includes react-hot-loader for hot-reloading during development)
- **[Redux](https://redux.js.org/)**: Global state handling
- **[Jest](https://jestjs.io/)**: Testing of UI elements and Redux state
- **[Express](https://expressjs.com)**: Backend responsible for serving routes and bundled frontend
- **[SuperAgent](https://visionmedia.github.io/superagent/)**: Handling client-side calls
- **[Webpack](https://webpack.js.org/)**: For bundling client-side scripts
- **[Babel](https://babeljs.io/)**: For transpiling the client-side to ES5 code 

## Setup

For production use the following commands need to be executed: 

```
npm install
npm run clean  # in case a frontend has been bundled previously
npm run build
npm start --production
```

For local dev usage these commands need to be executed:

```
npm install
npm run devstart
```

## Useful commands

- `npm start` - Starts the application in production mode (frontend needs to be built first)
- `npm run devstart` - Starts the application with live reloading using [nodemon](https://nodemon.io/)
- `npm run build:webpack` - Bundles the frontend
- `npm run clean` - Removes public/js folder which contains the bundled frontend
- `npm run build` - Runs clean & build:webpack
- `npm run build:win` - Runs clean & build:webpack for Windows
- `npm test` - Runs the tests

## Useful links

- [Redux Form](https://redux-form.com/8.1.0/) - The best way to manage your form state in Redux  
- [React-Select](https://github.com/JedWatson/react-select) - React Multi-Select component  
- [React-Dropzone](https://github.com/react-dropzone/react-dropzone) - Simple HTML5 drag-drop zone with React.js. 
- [JEST](https://jestjs.io/) - Delightful Javascript Testing Framework
- [Snapshot testing in Jest](https://jestjs.io/docs/en/snapshot-testing)
- [React Tutorial](https://facebook.github.io/react/docs/tutorial.html)
- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
- [How redux works, how to use redux](https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree?series=getting-started-with-redux) **note:** really worth it!
- [Express.js Guide](http://expressjs.com/en/guide/routing.html)
- [SuperAgent](http://visionmedia.github.io/superagent/) - A light-weight progressive ajax API
- [Webpack](https://webpack.js.org/concepts/) - JS bundler
- [Babel](https://babeljs.io/docs/en/next/) - JS transpiler
- [Browserlist](https://github.com/browserslist/browserslist) - Share target browsers between different front-end tools

