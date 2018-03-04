import React, { Component } from 'react';
import MapMarker from './Marker';

class AllMarkers extends Component {
  render() {
    const { locations } = this.props;
    const markerArray = locations ?
      locations.map((marker) => {
        return (
          <MapMarker
            key={marker.id}
            location={[+marker.lat, +marker.lng]}
            name={marker.name}
            onClick={() => this.props.modifyPolygon([
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
  }
}

export default AllMarkers;
