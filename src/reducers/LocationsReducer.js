const Locations = (state = [], action) => {
  switch (action.type) {
    case 'STORE_LOCATIONS':
      return [...state, ...action.data];
    case 'SAVE_LOCATION':
      return [...state, action.data];
    default:
      return state;
  }
};

export default Locations;
