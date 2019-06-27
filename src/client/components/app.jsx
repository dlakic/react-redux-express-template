import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { changeColor } from '../store/action';
import ReduxDevTools from './redux-dev-tools';

export const App = ({ color, dispatch }, { store }) => {
  function handleClick(chosenColor) {
    dispatch(changeColor(chosenColor));
  }

  let DevTools = null;
  if (process.env.NODE_ENV === 'development') {
    DevTools = <ReduxDevTools store={store} />;
  }

  return (
    <div>
      <h1>Welcome to the react-redux test app!</h1>
      <p className={color}>It works!</p>
      <button type="button" onClick={() => handleClick('green')}>green</button>
      <button type="button" onClick={() => handleClick('yellow')}>yellow</button>
      <button type="button" onClick={() => handleClick('red')}>red</button>
      {DevTools}
    </div>
  );
};

App.contextTypes = {
  store: PropTypes.shape({
    color: PropTypes.string.isRequired,
  }),
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    color: state.color,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));
