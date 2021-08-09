import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {
    return (
        <div class="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink
            to='/'
            exact
            class="navbar-brand"
            >Logo</NavLink>
            <NavLink
            to="/trees/new"
            exact
            class="nav-item"
            >Add location</NavLink>
            <NavLink
            to="/map"
            exact
            class="nav-item"
            >Map</NavLink>
        </div>
    )
}

export default Navbar