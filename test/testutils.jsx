import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from '../src/client/store';
import '@babel/polyfill';

export const Provider = ({ children }) => {
  const store = configureStore();

  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};
Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
