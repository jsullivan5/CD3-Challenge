import React from 'react';
import MapMarker from './Marker';

const AllMarkers = ({ locations, modifyPolygon, removeLocation }) => {
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
          removeLocation={removeLocation}
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

export default AllMarkers;
