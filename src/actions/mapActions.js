export const setMap = (mapRef) => {
  return {
    type: 'SET_MAP',
    data: mapRef,
  };
};

export const flyTo = (location) => {
  return (dispatch, getState) => {
    const map = getState().mapRef;

    map.leafletElement.flyTo(
      [location.lat, location.lng],
      5
    );
  };
};
