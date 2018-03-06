import React from 'react';
import PropTypes from 'prop-types';
import { Marker, Tooltip, Popup } from 'react-leaflet';
import L from 'leaflet';
import tealdot from '../imgs/tealdot.svg';

const MapMarker = ({ location, onClick, name, deleteLocation, marker }) => {
  const icon = L.icon({
    iconUrl: tealdot,
    iconSize: [15, 15],
  });

  return (
    <div className="marker-container">
      <Marker
        position={location}
        icon={icon}
        onClick={onClick}
      >
        <Tooltip
          sticky
          interactive
        >
          <div>
            <h4>{name}</h4>
          </div>
        </Tooltip>
        <Popup>
          <button onClick={() => deleteLocation(marker)}>
            Delete
          </button>
        </Popup>
      </Marker>
    </div>
  );
};

MapMarker.propTypes = {
  location: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  deleteLocation: PropTypes.func.isRequired,
  marker: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    lat: PropTypes.number,
    long: PropTypes.number,
  }).isRequired,
};

export default MapMarker;
