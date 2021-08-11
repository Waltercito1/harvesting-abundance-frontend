import React from "react"
import { connect } from "react-redux"
import { checkAuth } from "../actions/index"
import LoadingIndicator from "./LoadingIndicator"
import Login from "./Login"

function withAuth(WrappedComponent) {
  class Wrapper extends React.Component {
    
    componentDidMount() {
      this.props.checkAuth()
    }

    render() {
      if (!this.props.authChecked) {
        return <LoadingIndicator />
      } else if (!this.props.loggedIn) {
        return (
          <>
            <Login />
            <p>You need to login to view this page.</p>
          </>
        )
      } else {
        return <WrappedComponent {...this.props} />
      }
    }
  }

  const mapStateToProps = ({auth: { authChecked, loggedIn, currentUser }}) => {
    return { authChecked, loggedIn, currentUser }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      checkAuth: () => dispatch(checkAuth())
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Wrapper)
}

export default withAuth