import React from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import tealdot from '../imgs/tealdot.svg';

const MapMarker = ({ location, onClick, name }) => {
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
      </Marker>
    </div>
  );
};

export default MapMarker;
