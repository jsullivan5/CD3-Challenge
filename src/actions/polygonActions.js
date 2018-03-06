export const modifyPolygon = (latLng) => {
  return {
    type: 'MODIFY_POLYGON',
    data: latLng,
  };
};

export const removePolygon = (latLng) => {
  return {
    type: 'REMOVE_POLYGON',
    data: latLng,
  };
};
