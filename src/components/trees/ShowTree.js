//import { Link } from 'react-router-dom'
import React from "react"
import Container from 'react-bootstrap/Container'
import { removeTree } from '../../actions/index'

const ShowTree = (props) => {
    //debugger


    const handleClick = () => {
        removeTree(props.location.state.id)
        props.history.push("/trees")
    }

    const formatImg = () => props.location.state.image_format ? props.location.state.image_format.url : "https://harvesting-abundance.s3.us-east-2.amazonaws.com/No-Image-Placeholder.svg"
    
    const conditionalBttns = () => props.location.state === "/" ? <></> : <button className="btn btn-danger" onClick={() => handleClick()}>Delete</button>

    return(
        <div>
        <Container fluid >
            <div class="row mb-4 align-items-center">
                <div class="col-md-6 aos-init aos-animate">
                    <h2>{props.location.state.name}</h2>
                    <p>{props.location.state.description}</p>
                </div>
            </div>
            <div class="site-section pb-0">
                <div >
                <div class="row align-items-stretch">
                    <div class="col-md-8 aos-init aos-animate" >
                    <img src={formatImg()} width={600} alt="treeImage" class="img-fluid"/>
                    </div>
                    <div class="col-md-3 ml-auto aos-init aos-animate" >
                    <div class="sticky-content">
                        <h3 class="h3">Location</h3>
                        <p class="mb-4"><span class="text-muted">Latitude: {props.location.state.locations[0].latitude}</span></p>
                        <p class="mb-4"><span class="text-muted">Longitude: {props.location.state.locations[0].longitude}</span></p>

                        <div class="mb-5">
                        <p>Show small Map Conatiner with location.</p>
                        </div>

                        <h4 class="h4 mb-3">Details:</h4>
                        <ul class="list-unstyled list-line mb-5">
                        <li>Access Type</li>
                        <li>Season</li>
                        <li>Date Visited</li>
                        <li>Fruiting Status</li>
                        <li>Quality</li>
                        <li>Yield</li>
                        </ul>

                        <button type="button" class="btn btn-info">Edit</button><br /><br />
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </Container>
        </div>
    )
}

export default ShowTree