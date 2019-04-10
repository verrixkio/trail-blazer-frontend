import React, { Component } from 'react';

class TopBar extends Component {
  render() {
    return (
      <header className="primary__top-bar">  
          <a href="/"><i className="home-logo"><img src={require("../images/trail-blazer-logo.png")} alt = "font logo" style ={{width: '4%', position: "absolute", color: "#9E9A41"}}></img></i></a>
        <ul className="nav navbar-nav">
            <li>
              <a href="/"><i className="fa fa-map"></i>View Trails</a>
            </li>
            <li>
              <a href="/trail/"><i className="fa fa-map-marker"></i>My Trails</a>
            </li>
            <li>
              <a href="/form-example/"><i className="fa fa-user"></i>My Account</a>
            </li>
        </ul>
      </header>
    );
  }
}
export default TopBar;