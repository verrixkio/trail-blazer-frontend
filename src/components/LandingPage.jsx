import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (

      <div className="landing-page">
        <h1>Trail Blazers</h1>
        <p>Do you have a mountain bike trail you would like to see fixed in your community?</p>
        <p>Invest in your community and donate to maintain a mountain bike trail.</p>
        <a href="/register" className="btn btn-block reset">Register</a>
        <a href="/login" className="btn btn-block secondary">Already have an account? Log in.</a>
      </div>

    );
  }
}
export default LandingPage;