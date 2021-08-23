import React from "react"
import { connect } from "react-redux"
import { loginUser } from "../actions/index"
//import { useFormik } from 'formik';

const errorMsgStyles = {
  color: 'red'
}

class Login extends React.Component {
  
  state = {
    email: "",
    password: "",
    error: false
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props
      .dispatchLoginUser({ email, password })
      .then(() => this.props.history.push("/"))
      .catch(() => this.setState({ error: true }))
  }

  render() {
    return (
      <div class="registration-form">
      <form onSubmit={this.handleSubmit}>
          <div className="form-icon">
          <span><img height={120} src="https://harvesting-abundance.s3.us-east-2.amazonaws.com/HarvestingAbundance-Logo1.svg" alt="Harvesting Abundance"></img></span>
          </div>
          <div className="form-group"><p>Please login to your account</p>
            <p style={errorMsgStyles}>{this.state.error && "Invalid email or password"}</p>
          </div>
          <div className="form-group">
              <input 
              type="text" 
              name="email" 
              className="form-control item" 
              id="email" 
              placeholder="Email"
              onChange={this.handleChange}
                value={this.state.email}
                />
          </div>
          <div className="form-group">
              <input 
              type="password" 
              name='password' 
              className="form-control item" 
              id="password" 
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <div className="form-group">
              <div style={{textAlignLast: 'center'}} >
                <button type="submit" className="btn btn-block create-account">Log In</button>
              </div>
          </div>
      </form>
  </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLoginUser: (credentials) => dispatch(loginUser(credentials))
  };
};

export default connect(null, mapDispatchToProps)(Login);