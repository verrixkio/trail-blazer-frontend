import React, { Component } from 'react';

class BottomBar extends Component {
  render() {
    return (
      <footer className="primary__btm-bar">
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
      </footer>
    );
  }
}
export default BottomBar;