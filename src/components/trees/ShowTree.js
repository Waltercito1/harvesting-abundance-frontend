//import { Link } from 'react-router-dom'
import React from "react"
import Container from 'react-bootstrap/Container'
import { removeTree } from '../../actions/index'

const ShowTree = (props) => {
    debugger

    const handleClick = () => {
        removeTree(props.location.state.id)
        props.history.push("/trees")
    }

    const formatImg = () => props.location.state.image_format ? props.location.state.image_format.url : "https://harvesting-abundance.s3.us-east-2.amazonaws.com/No-Image-Placeholder.svg"
    
    const conditionalBttn = () => props.location.state.users[0].id !== 1 ? <></> : <button className="btn btn-danger" onClick={() => handleClick()}>Delete</button>

    return(
        <div>
        <Container fluid >
            <div className="row mb-4 align-items-center">
                <div className="col-md-6 aos-init aos-animate">
                    <h2>{props.location.state.name}</h2>
                    <p>{props.location.state.description}</p>
                </div>
            </div>
            <div className="site-section pb-0">
                <div >
                <div className="row align-items-stretch">
                    <div className="col-md-8 aos-init aos-animate" >
                        <img src={formatImg()} alt="treeImage" className="img-fluid" width={600}style={{objectFit: 'cover', padding: '0 0 0 1em'}}/>
                    </div>
                    <div className="col-md-3 ml-auto" >
                    <div className="sticky-content">
                        <h3 className="h3">Location</h3>
                        <p className="mb-4"><span className="text-muted">Latitude: {props.location.state.locations[0].latitude}</span></p>
                        <p className="mb-4"><span className="text-muted">Longitude: {props.location.state.locations[0].longitude}</span></p>

                        <div className="mb-5">
                        <p>Show small Map Conatiner with location.</p>
                        </div>

                        <h4 className="h4 mb-3">Details:</h4>
                        <ul className="list-unstyled list-line mb-5">
                        <li>Access Type</li>
                        <li>Season</li>
                        <li>Date Visited</li>
                        <li>Fruiting Status</li>
                        <li>Quality</li>
                        <li>Yield</li>
                        </ul>

                        <button type="button" className="btn btn-info">Edit</button><br /><br />
                        <button type="button" className="btn btn-danger">Delete</button>
                        {conditionalBttn()}
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