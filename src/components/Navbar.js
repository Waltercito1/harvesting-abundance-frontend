import React from 'react'
import { NavLink } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


const Navigationbar = (props) => {
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand exact href="/">LOGO</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/trees">Trees You've Added</Nav.Link>
                    <Nav.Link href="/trees/new">Add location</Nav.Link>
                    <Nav.Link href="/map">Map</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">Signup</Nav.Link>
                </Nav>   
            </Container>
        </Navbar>
        </>
        // <div className="navbar navbar-expand-lg navbar-light bg-light">
        //     <NavLink
        //     to='/'
        //     exact
        //     className="navbar-brand"
        //     >Logo</NavLink>
        //     <NavLink
        //     to="/trees"
        //     exact
        //     className="nav-item"
        //     >Trees You've Added</NavLink>
        //     <NavLink
        //     to="/trees/new"
        //     exact
        //     className="nav-item"
        //     >Add location</NavLink>
        //     <NavLink
        //     to="/map"
        //     exact
        //     className="nav-item"
        //     >Map</NavLink>
        // </div>
    )
}

export default Navigationbar