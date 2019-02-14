export default function reducer(state, action) {
  if (!state) {
    return {
      color: 'green',
    };
  }

  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.color };
    default:
      return state;
  }
}
