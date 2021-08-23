import React from "react"
import { connect } from "react-redux"
import { signupUser } from "../actions/auth"

class Signup extends React.Component {
  state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      errors: {status: {message: ""}}
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { first_name, last_name, email, password } = this.state
    this.props
      .signupUser({ first_name, last_name, email, password })
      .then(() => this.props.history.push("/"))
      .catch((errors) => {this.setState({ errors })})
  };

  render() {
    return (
      <div class="registration-form">
      <form onSubmit={this.handleSubmit}>
          <div class="form-icon">
              <span><i class="icon icon-user"></i></span>
          </div>
          <div className="form-icon">
          <span><img height={120} src="https://harvesting-abundance.s3.us-east-2.amazonaws.com/HarvestingAbundance-Logo1.svg" alt="Harvesting Abundance"></img></span>
          </div>
          <p>Please complete the fields below:</p>
            <p style={{color: 'red'}}>{this.state.errors.status.message}</p>
          <div class="form-group">
              <input 
              type="text" 
              name="first_name"
              id="first_name" 
              class="form-control item" 
              placeholder="first name"
              onChange={this.handleChange}
              value={this.state.first_name}
              />
          </div>
          <div class="form-group">
              <input 
              type="text" 
              name="last_name"
              id="last_name" 
              class="form-control item" 
              placeholder="last name"
              onChange={this.handleChange}
              value={this.state.last_name}
              />
          </div>
          <div class="form-group">
              <input 
              type="password"
              name="password"
              id="password" 
              class="form-control item" 
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
              />
          </div>
          <div class="form-group">
              <input 
              type="text" 
              name="email"
              id="email" 
              class="form-control item" 
              placeholder="email"
              onChange={this.handleChange}
              value={this.state.email}
              />
          </div>
          <div class="form-group">
            <div style={{textAlignLast: 'center'}} >
                <button type="submit" class="btn btn-block create-account">Create Account</button>
            </div>
          </div>
      </form>
  </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (credentials) => dispatch(signupUser(credentials))
  };
};

export default connect(null, mapDispatchToProps)(Signup)