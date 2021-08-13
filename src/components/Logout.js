import React from "react"
import { connect } from "react-redux"
import { logoutUser } from "../actions/auth"
import { useHistory } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'

const Logout = ({ logoutUser }) => {
  const history = useHistory();
  
  const handleClick = () => {
    logoutUser().then(() => history.push("/"))
  };

  return (
    <Nav.Link href="/" onClick={handleClick}>Logout</Nav.Link>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(null, mapDispatchToProps)(Logout)