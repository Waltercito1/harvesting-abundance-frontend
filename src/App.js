import React, { Component } from 'react';
import MapContainer from './containers/MapContainer';
import TreeForm from './components/trees/TreeForm';

class App extends Component {
  render() {
    return(
      <div className="App">
        <TreeForm />
        <MapContainer />
      </div>
    )
  }

}

export default App

// export class MapContainer extends Component {
//   state = {
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {}
//   };

//   onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });

//   onClose = props => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   };

//   render() {
//     return (
//       <CurrentLocation
//       centerAroundCurrentLocation
//       google={this.props.google}
//       >
//         <Marker onClick={this.onMarkerClick} name={'Current Location'} />
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >
//           <div>
//             <h4>{this.state.selectedPlace.name}</h4>
//           </div>
//         </InfoWindow>
//       </CurrentLocation>,
//       <TreeForm />
//     );
//   }
// }

// export default GoogleApiWrapper({ apiKey: env.API_KEY })(MapContainer);