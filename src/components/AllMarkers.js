import React from 'react';
import MapMarker from './Marker';

const AllMarkers = ({ locations, modifyPolygon }) => {
  const markerArray = locations ?
    locations.map((marker) => {
      return (
        <MapMarker
          key={marker.id}
          location={[+marker.lat, +marker.lng]}
          name={marker.name}
          onClick={() => modifyPolygon([
            marker.lat,
            marker.lng,
          ])}
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
