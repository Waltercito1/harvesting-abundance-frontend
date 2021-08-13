import React, { Component } from 'react'
import { connect } from 'react-redux'
import LocationForm from '../components/locations/LocationForm'


class LocationContainer extends Component {

    render() {
        return(
            <div>
                <LocationForm />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        locations: state.locations.locations
    }
}

export default connect(mapStateToProps)(LocationContainer)