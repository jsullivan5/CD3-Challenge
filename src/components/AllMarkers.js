import React from 'react';
import PropTypes from 'prop-types';
import MapMarker from './Marker';

const AllMarkers = ({ locations, modifyPolygon, deleteLocation }) => {
  const markerArray = locations ?
    locations.map((marker) => {
      return (
        <MapMarker
          key={marker._id}
          location={[+marker.lat, +marker.lng]}
          name={marker.name}
          onClick={() => modifyPolygon([
            marker.lat,
            marker.lng,
          ])}
          deleteLocation={deleteLocation}
          marker={marker}
        />
      );
    })
    : null;

  return (
    <div className="paths-container">
      {markerArray}
    </div>
  );
};

AllMarkers.defaultProps = {
  locations: [],
};

AllMarkers.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      lat: PropTypes.number,
      long: PropTypes.number,
    })
  ),
  modifyPolygon: PropTypes.func.isRequired,
  deleteLocation: PropTypes.func.isRequired,
};

export default AllMarkers;
