import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ReduxDevTools from '../components/redux-dev-tools';
import reducer from './reducer';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware),
  ReduxDevTools.instrument(),
)(createStore);

export default () => createStoreWithMiddleware(reducer);
