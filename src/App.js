import React, { Component } from 'react'
import Navigationbar from './components/Navbar'
import MapContainer from './containers/MapContainer'
import TreesContainer from './containers/TreesContainer'
import TreeForm from './components/trees/TreeForm'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { connect } from 'react-redux'
import { addTree, fetchTrees } from './actions'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import withAuth from "./components/WithAuth"
import LoadingSpinner from './components/LoadingSpinner'
import ErrorPage from './components/ErrorPage'

class App extends Component {

  componentDidMount() {
    this.props.fetchTrees()
  }

  render() {
    if (!!this.props.loading) {
      return <LoadingSpinner/>
    }

    if (!!this.props.error) {
      return <ErrorPage error={this.props.error} />
    }

    return(
      <div className="container fluid">
        <Router>
          <Navigationbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path="/trees" component={withAuth(TreesContainer)} />
            <Route exact path="/trees/new" component={withAuth(TreeForm)} />
            <Route exact path="/map" component={MapContainer}/>
            <Route component={ErrorPage} />
          </Switch>
        </Router>
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
    fetchTrees: () => dispatch(fetchTrees()),
    addTree: () => dispatch(addTree())
  }
}

export default connect(mapStateToProps, mapDispatch)(App)