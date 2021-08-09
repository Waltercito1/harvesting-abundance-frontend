import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTree } from '../../actions/index'

class TreeForm extends Component {

  state = {
    name: '',
    description: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    //debugger
    e.preventDefault()
    this.props.addTree(this.state) // add other params to be sent to action
    this.setState({
      name: '',
      description: ''
    })
  }

  render() {
    return(
      <div>
          <h4>Add a New Tree:</h4>
          <form class="row g-3" onSubmit={this.handleSubmit}>
            <div class="col-md-6">
              <label htmlFor="name" class="form-label">Tree Name:</label>
              <input type="text" class="form-control" id="tree-name" value={this.state.name} name='name' onChange={this.handleChange} />
            </div>
            <div class="col-md-6">
              <label htmlFor="description" class="form-label">Description:</label>
              <input type="text" class="form-control" id="tree-description" value={this.state.description} name='description' onChange={this.handleChange} />
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
          <br />  {/* remove line break */}
          
      </div>
    );
  }
};

export default connect(null, { addTree })(TreeForm)