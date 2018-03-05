import React from 'react';
import { Marker, Tooltip, Popup } from 'react-leaflet';
import L from 'leaflet';
import tealdot from '../imgs/tealdot.svg';

const MapMarker = ({ location, onClick, name, removeLocation, marker }) => {
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
          <button onClick={() => removeLocation(marker)}>
            Delete
          </button>
        </Popup>
      </Marker>
    </div>
  );
};

export default MapMarker;
