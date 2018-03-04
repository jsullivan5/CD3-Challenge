const matchLocation = (locationArray, location) => {
  if (!locationArray.length) { return null; }

  for (let i = 0; i < locationArray.length; i += 1) {
    if (locationArray[i][0] === location[0] && locationArray[i][1] === location[1]) {
      return i;
    }
  }
  return null;
};

const modifyLocations = (state, actionData) => {
  const newState = [...state];
  const index = matchLocation(newState, actionData);

  if (index !== null && newState.length === 1) {
    return [];
  }

  if (index !== null) {
    return newState.splice(index, 1);
  }

  return [...newState, actionData];
};

const polygonReducer = (state = [], action) => {
  switch (action.type) {
    case 'MODIFY_POLYGON':
      return modifyLocations(state, action.data);
    default:
      return state;
  }
};

export default polygonReducer;
