const modifyLocations = (state, actionData) => {
  const newState = [...state];
  const index = newState.indexOf(actionData);

  if (index > -1) {
    return newState.splice(index, 1);
  }

  return newState.push(actionData);
};

const polygonReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_POLYGON':
      return modifyLocations(state, action.data);
    default:
      return state;
  }
};

export default polygonReducer;
