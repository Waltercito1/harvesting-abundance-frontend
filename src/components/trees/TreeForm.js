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
          <h2>Add a New Tree:</h2>
          <form onSubmit={this.handleSubmit}>
              <label>Tree Name: </label>
              <input type='text' placeholder='name' value={this.state.name} name='name' onChange={this.handleChange} />
              <label>Description: </label>
              <input type='text' placeholder='description' value={this.state.description} name='description' onChange={this.handleChange} />
              <input type="submit" value="Submit" /> 
          </form>
      </div>
    );
  }
};

export default connect(null, { addTree })(TreeForm)