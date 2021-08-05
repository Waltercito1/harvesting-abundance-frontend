import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

require('dotenv').config();
const googleMapApiKey = process.env.API_KEY;

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  // This hides or shows the InfoWindow
    activeMarker: {},          // This shows the active marker upon click
    selectedPlace: {}          // This shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };  

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 41.881832,
            lng: -87.623177
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapApiKey
})(MapContainer);