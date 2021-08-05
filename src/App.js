import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

require('dotenv').config();
const googleMapApiKey = process.env.API_KEY;

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class MapContainer extends Component {
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