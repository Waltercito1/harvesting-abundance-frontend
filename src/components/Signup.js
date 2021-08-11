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
      .catch((errors) => this.setState({ errors }))
  };

  render() {
    return (
    //   <form
    //     onSubmit={this.handleSubmit}
    //     className='w-11/12 max-w-2xl mx-auto mt-8'
    //   >
    //     <h1 className='font-bold text-3xl mb-2'>Sign Up</h1>
    //     <p className='h-8 text-red-400'>{this.state.errors.status.message}</p>
    //     <fieldset>
    //       <label className='block uppercase mb-2' htmlFor='email'>
    //         Email:
    //       </label>
    //       <input
    //         type='text'
    //         name='email'
    //         id='email'
    //         className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
    //         onChange={this.handleChange}
    //         value={this.state.email}
    //       />
    //     </fieldset>
    //     <fieldset>
    //       <label className='block uppercase mb-2' htmlFor='password'>
    //         Password:
    //       </label>
    //       <input
    //         type='password'
    //         name='password'
    //         id='password'
    //         className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
    //         onChange={this.handleChange}
    //         value={this.state.password}
    //       />
    //     </fieldset>
    //     <input
    //       className='w-full text-center uppercase p-4 bg-blue-300 cursor-pointer mt-4'
    //       type='submit'
    //       value='Sign Up'
    //     />
    //   </form>,
      <div class="registration-form">
      <form onSubmit={this.handleSubmit}>
          <div class="form-icon">
              <span><i class="icon icon-user"></i></span>
          </div>
          <p>Please complete the fields below:</p>
            <p color="#ff1900">{this.state.error && "Invalid email or password"}</p>
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
              <button type="submit" class="btn btn-block create-account">Create Account</button>
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