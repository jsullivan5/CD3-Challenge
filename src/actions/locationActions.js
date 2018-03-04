require('isomorphic-fetch');


export const storeAllLocations = (locations) => {
  return {
    type: 'STORE_LOCATIONS',
    data: locations.locations,
  };
};

export const saveLocation = (location) => {
  return {
    type: 'SAVE_LOCATION',
    data: location,
  };
};

export const fetchAllLocations = () => {
  return (dispatch) => {
    return fetch('/locations', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(locations => locations.json())
      .then(json => dispatch(storeAllLocations(json)));
  };
};

export const postLocation = (location) => {
  return (dispatch) => {
    return fetch('/locations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(location),
    })
    .then(response => response.json())
    .then(data => dispatch(saveLocation(data)))
    .catch(error => console.error(error));
  };
};
