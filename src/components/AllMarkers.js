/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapMarker from './Marker';

class AllMarkers extends Component {
  render() {
    const markerArray = this.props.locations.map((marker, i) => {
      return (
        <MapMarker
          key={i}
          location={[+marker.lat, +marker.lng]}
          name={marker.name}
          onClick={() => this.props.modifyPolygon([
            marker.lat,
            marker.lng,
          ])}
        />
      );
    });

    return (
      <div className="paths-container">
        {markerArray}
      </div>
    );
  }
}

export default AllMarkers;
