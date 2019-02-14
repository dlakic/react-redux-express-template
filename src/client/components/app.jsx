import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeColor } from '../store/action';

const App = ({ color, dispatch }) => {
  function handleClick(chosenColor) {
    dispatch(changeColor(chosenColor));
  }

  return (
    <div>
      <h1>Welcome to the react test app!</h1>
      <p className={color}>It works!</p>
      <button type="button" onClick={() => handleClick('green')}>green</button>
      <button type="button" onClick={() => handleClick('yellow')}>yellow</button>
      <button type="button" onClick={() => handleClick('red')}>red</button>
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
