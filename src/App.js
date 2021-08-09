import React, { Component } from 'react';
import MapContainer from './containers/MapContainer';
import TreeForm from './components/trees/TreeForm';

class App extends Component {
  render() {
    return(
      <div class="container fluid">
        <TreeForm />
        <MapContainer />
      </div>
    )
  }

}

export default App