import React, { Component } from 'react'
import MapContainer from './containers/MapContainer'
import Navigationbar from './components/Navbar'
import TreesContainer from './containers/TreesContainer'
import TreeForm from './components/trees/TreeForm'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { connect } from 'react-redux'
import { addTree, fetchTrees, removeTree } from './actions'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import withAuth from "./components/WithAuth"
import LoadingSpinner from './components/LoadingSpinner'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import Footer from './components/Footer'
import ShowTree from './components/trees/ShowTree'

const AuthenticatedShowTree = withAuth(ShowTree) 
const AuthenticatedTreesContainer = withAuth(TreesContainer) 

class App extends Component {

  componentDidMount() {
    this.props.fetchTrees()
  }

  render() {
    // if (!!this.props.loading) {
    //   return <LoadingSpinner/>
    // }

    if (!!this.props.error) {
      return <ErrorPage error={this.props.error} />
    }

    return(
      <div className="container fluid">
        <Router>
          <Navigationbar />
          <Switch>
            <Route exact path="/" component={withAuth(Home)} />
            <Route exact path='/signup' component={withAuth(Signup)} />
            <Route exact path='/login' component={withAuth(Login)} />
            <Route exact path="/trees/new" component={withAuth(TreeForm)} />
            <Route exact path="/trees" render={routeProps => (<AuthenticatedTreesContainer {...routeProps}/>)} />
            <Route exact path="/map" component={withAuth(MapContainer)}/>
            <Route exact path="/about" component={withAuth(About)}/>
            <Route exact path="/trees/:id" render={routeProps => (<AuthenticatedShowTree {...routeProps}/>)}/>
            
            <Route component={ErrorPage} />
          </Switch>
        </Router>
        <Footer />
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
    addTree: () => dispatch(addTree()),
    removeTree: (treeId) => dispatch(removeTree(treeId)),
  }
}

export default connect(mapStateToProps, mapDispatch)(App)