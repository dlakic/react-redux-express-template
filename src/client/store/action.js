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
  return (dispatch) => {
    toggleLoading();
    return request('get', '/api/users')
      .then(response => dispatch(setUsers(response.body)))
      .catch((err) => {

      })
      .finally(() => {
        dispatch(toggleLoading());
      });
  };
}

export default changeColor;
