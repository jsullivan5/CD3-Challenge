const modifyPolygon = (location) => {
  return {
    type: 'MODIFY_POLYGON',
    data: location,
  };
};

export default modifyPolygon;
