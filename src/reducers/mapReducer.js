const mapReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_MAP':
      return action.data;
    default:
      return state;
  }
};

export default mapReducer;
