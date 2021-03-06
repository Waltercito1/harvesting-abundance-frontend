import React from "react"
import { connect } from "react-redux"
import { checkAuth } from "../actions/index"
import LoadingSpinner from "./LoadingSpinner"
import Login from "./Login"

function withAuth(WrappedComponent) {

  const loginMsgStyles = {
    color: 'red',
    textAlign: 'center'
  }

  class Wrapper extends React.Component {
    
    componentDidMount() {
      this.props.checkAuth()
    }

    render() {
      if (!this.props.authChecked || this.props.loading) {
        return <LoadingSpinner />
      } else if (!this.props.loggedIn) {
        return (
          <>
            <p style={loginMsgStyles}>You need to login to view this page.</p>
            <Login />
          </>
        )
      } else {
        return <WrappedComponent {...this.props} />
      }
    }
  }

  const mapStateToProps = ({auth: { authChecked, loggedIn, currentUser }, trees: {loading}}) => {
    return { authChecked, loggedIn, currentUser, loading }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      checkAuth: () => dispatch(checkAuth())
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Wrapper)
}

export default withAuth