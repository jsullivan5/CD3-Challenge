const matchLocation = (locationArray, location) => {
  if (!locationArray.length) { return null; }

  for (let i = 0; i < locationArray.length; i += 1) {
    if (locationArray[i][0] === location[0] && locationArray[i][1] === location[1]) {
      return i;
    }
  }
  return null;
};

const modifyLocations = (state, actionData, index) => {
  const newState = [...state];

  if (index !== null && newState.length === 1) {
    return [];
  }

  if (index !== null) {
    newState.splice(index, 1);
    return newState;
  }
  return [...newState, actionData];
};

const removePolygon = (state, actionData, index) => {
  const newState = [...state];

  if (index === null) {
    return newState;
  }

  return modifyLocations(state, actionData, index);
};

const polygonReducer = (state = [], action) => {
  const index = matchLocation(state, action.data);

  switch (action.type) {
    case 'MODIFY_POLYGON':
      return modifyLocations(state, action.data, index);
    case 'REMOVE_POLYGON':
      return removePolygon(state, action.data, index);
    default:
      return state;
  }
};

export default polygonReducer;
