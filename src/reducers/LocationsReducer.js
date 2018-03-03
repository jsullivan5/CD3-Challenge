const Locations = (state = [], action) => {
  switch (action.type) {
    case 'STORE_LOCATIONS':
      // store an array of locations to state
      return [...state, ...action.data];
    case 'SAVE_LOCATION':
      return [...state.data, ...action.data];
    default:
      return state;
  }
};

export default Locations;
