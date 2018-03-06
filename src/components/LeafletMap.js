import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Map,
  TileLayer,
  ZoomControl,
  Polygon,
  LayersControl,
} from 'react-leaflet';
import AllMarkersContainer from '../containers/AllMarkersContainer';

class LeafletMap extends Component {
  componentDidMount() {
    this.props.setMap(this.mapInstance);
  }

  render() {
    const { polygon } = this.props;
    return (
      <div className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={[39.750809, -104.996810]}
          zoom={4}
          maxBounds={[[85, 100], [-85, -280]]}
          ref={(el) => { this.mapInstance = el; }}
        >
          <LayersControl position="topright">
            <LayersControl.BaseLayer name="Basic" checked>
              <TileLayer
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                maxZoom={10}
                minZoom={2}
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Outdoors">
              <TileLayer
                url="https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=720e731b227c40be984f998b71463a2b"
                attribution='Map data &copy; <a href="https://thunderforest.com";>Thunderforest</a> contributors'
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Spinal Map">
              <TileLayer
                url="https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=720e731b227c40be984f998b71463a2b"
                attribution='Map data &copy; <a href="https://thunderforest.com";>Thunderforest</a> contributors'
              />
            </LayersControl.BaseLayer>
          </LayersControl>
          <ZoomControl
            position="bottomright"
          />
          <AllMarkersContainer />
          {polygon.length > 1 && <Polygon positions={polygon} />}
        </Map>
      </div>
    );
  }
}

LeafletMap.defaultProps = {
  polygon: [],
};

LeafletMap.propTypes = {
  setMap: PropTypes.func.isRequired,
  polygon: PropTypes.arrayOf(PropTypes.array),
};

export default LeafletMap;
