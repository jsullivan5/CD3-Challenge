const removeLocation = (state, location) => {
  const newState = [...state];
  const index = newState.indexOf(location);

  if (index > -1) {
    newState.splice(index, 1);
    return newState;
  }
  return newState;
};

const Locations = (state = [], action) => {
  switch (action.type) {
    case 'STORE_LOCATIONS':
      return [...state, ...action.data];
    case 'SAVE_LOCATION':
      return [...state, action.data];
    case 'REMOVE_LOCATION':
      return removeLocation(state, action.data);
    default:
      return state;
  }
};

export default Locations;
