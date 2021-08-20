import React from 'react'
import { checkAuth } from "../actions/index"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { connect } from 'react-redux'
import Logout from './Logout'
import { NavLink } from 'react-router-dom'


class Navigationbar extends React.Component {
    componentDidMount() {
        this.props.checkAuth();
    }

    renderAuthLinks() {
        const { authChecked, loggedIn, currentUser } = this.props;
        if (authChecked) {
          return loggedIn ? (
            <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} exact to="/"><img height={40} src="https://harvesting-abundance.s3.us-east-2.amazonaws.com/HarvestingAbundance-Logo1.svg" alt="Harvesting Abundance"></img></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} exact to="/trees">Trees You've Added</Nav.Link>
                        <Nav.Link as={NavLink} exact to="/trees/new">Add location</Nav.Link>
                        <Nav.Link as={NavLink} exact to="/map">Map</Nav.Link>
                        <Nav.Link as={NavLink} exact to="/about">About</Nav.Link>
                        <Logout/>
                    </Nav>   
                </Container>
            </Navbar>
            </>
          ) : (
            <>
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand as={NavLink} exact to="/"><img height={40} src="https://harvesting-abundance.s3.us-east-2.amazonaws.com/HarvestingAbundance-Logo1.svg" alt="Harvesting Abundance"></img></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} exact to="/trees/new">Add location</Nav.Link>
                        <Nav.Link as={NavLink} exact to="/map">Map</Nav.Link>
                        <Nav.Link as={NavLink} exact to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} exact to="/login">Login</Nav.Link>
                        <Nav.Link as={NavLink} exact to="/signup">Signup</Nav.Link>
                    </Nav>   
                </Container>
            </Navbar>
            </>
          );
        } else {
          return null
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthLinks()}
            </div>
        )
    }
}

const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
    return { authChecked, loggedIn, currentUser }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        checkAuth: () => dispatch(checkAuth())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigationbar)