import * as constants from './constants';

export default function reducer(state, action) {
  if (!state) {
    return {
      color: 'green',
      users: [],
      userLoading: false,
    };
  }

  switch (action.type) {
    case constants.CHANGE_COLOR:
      return { ...state, color: action.color };
    case constants.USERS_TOGGLE_LOADING:
      return { ...state, userLoading: !state.userLoading };
    case constants.USERS_SET:
      return { ...state, users: action.users };
    default:
      return state;
  }
}
