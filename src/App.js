import React, { Component } from 'react'
import MapContainer from './containers/MapContainer'
import TreeForm from './components/trees/TreeForm'
import { connect } from 'react-redux'
import { fetchTrees } from './actions'
import TreesContainer from './containers/TreesContainer'

class App extends Component {

  componentDidMount() {
    this.props.fetchTrees()
  }

  render() {
    return(
      <div class="container fluid">
        {/* <TreeForm /> */}
        <TreesContainer trees={this.props.trees}/>
        <MapContainer />
      </div>
    )
  }

}

const mapStateToProps = (currentState) => {
  //debugger
  return {
    trees: currentState.trees.trees,
    loading: currentState.trees.loading,
    error: currentState.trees.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchTrees: (trees) => dispatch(fetchTrees(trees))
  }
}


export default connect(mapStateToProps, mapDispatch)(App)