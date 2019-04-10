import React, { Component } from 'react';

class SignUpForm extends Component {
  render() {
    return (

        <div className="register-form">
          <h1>Register</h1>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                className="regular-form"
                id="username"
                name="username"
                type="text"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="regular-form"
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="regular-form"
                id="password"
                name="password"
                type="text"
                placeholder="Enter password"
              />
            </div>
            <button className="btn btn-block">Register</button>
          </form>

          <p className="login-msg">Already have an account? <a href="/login">Log in here.</a></p>
        </div>
    );
  }
}
export default SignUpForm;