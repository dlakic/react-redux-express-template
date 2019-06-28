import request from '../ajax';
import * as constants from './constants';

export function changeColor(color) {
  return {
    type: constants.CHANGE_COLOR,
    color,
  };
}

export function toggleLoading() {
  return {
    type: constants.USERS_TOGGLE_LOADING,
  };
}

export function setUsers(users) {
  return {
    type: constants.USERS_SET,
    users,
  };
}

export function fetchUsers() {
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());
      const response = await request('get', '/api/users');
      dispatch(setUsers(response.body));
      dispatch(toggleLoading());
    } catch (e) {
      // TODO: Proper error handling
    }
  };
}

export default changeColor;
