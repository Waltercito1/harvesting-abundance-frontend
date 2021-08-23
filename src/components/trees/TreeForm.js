import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTree } from '../../actions/index'

const errorMsgStyles = {
  color: 'red'
}

class TreeForm extends Component {

  imageFile = React.createRef()
  
  state = {
    tree: {
      name: '',
      description: '',
      latitude: undefined,
      longitude: undefined
    }
  }
  
  handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        this.setState((prevState) => {
          return {tree: {...prevState.tree, name: e.target.value} }
        })
        break;
      case "description":
        this.setState((prevState) => {
          return {tree: {...prevState.tree, description: e.target.value} }
        })
        break;
      case "latitude":
        this.setState((prevState) => {
          return {tree: {...prevState.tree, locations_attributes: {...prevState.tree.locations_attributes, latitude: e.target.value}}}
        })
        break;
      case "longitude":
        this.setState((prevState) => {
          return {tree: {...prevState.tree, locations_attributes: {...prevState.tree.locations_attributes, longitude: e.target.value}}}
        })
        break;
   
        default:
          break;
        }
      }

    handleSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData(e.target)
      this.props.addTree(formData)
      .then(() => {
        this.setState({
          name: '',
          description: '',
          latitude: null,
          longitude: null
        })
        this.props.history.push("/trees")
      })
      .catch((err) => {
        console.log(err)
      })
    }      
      
      render() {
    return(
      <div className="new-tree-form">
        {this.props.errors && <>{Object.entries(this.props.errors).map(err => <p style={errorMsgStyles}>{`${err[0]}: ${err[1]}`}</p>)}</>}
          <h4>Add a New Tree:</h4>
          <form className="row g-3" onSubmit={this.handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Tree Name:</label>
              <input 
              type="text" 
              className="form-control item" 
              id="tree-name" 
              value={this.state.tree.name} 
              name='name' 
              onChange={this.handleChange} 
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="description" className="form-label">Description:</label>
              <input 
              type="text" 
              className="form-control item" 
              id="tree-description" 
              value={this.state.tree.description} 
              name='description' 
              onChange={this.handleChange} 
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="latitude" className="form-label">Latitude:</label>
              <input 
              type="text" 
              className="form-control item" 
              id="location-latitude" 
              value={this.state.tree.latitude} 
              name='latitude' 
              onChange={this.handleChange} 
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="longitude" className="form-label">Longitude:</label>
              <input 
              type="text" 
              className="form-control item" 
              id="location-longitude" 
              value={this.state.tree.longitude} 
              name='longitude' 
              onChange={this.handleChange} 
              />
            </div>
            <div className="col-md-2" >
              <button className="btn btn-sm btn-info">Use My Location</button>
            </div>
            <div className="col-md-6">
              <label htmlFor="image" className="form-label">Add an image:</label>
              <input 
              type="file" 
              className="form-control item" 
              id="main-image" 
              name='main_image' 
              ref={this.imageFile}
              />
            </div>
            <div className="col-12" style={{textAlignLast: 'center'}}>
              <button type="submit" className="btn btn-primary submit-tree">Add Tree</button>
            </div>
          </form>
          <br />          
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    errors: state.trees.errors
  }
}

export default connect(mapStateToProps, { addTree })(TreeForm)