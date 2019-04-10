import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router'

class TrailFullInfo extends Component {
  constructor(props){
    super(props)
    this.state = {
        trails: []
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/trails/api/v1/trails/${this.props.match.params.id}.json`)
      .then(response => {
        this.setState({
          trails: response.data
    })
  })
    .catch(error => console.log(error))
}
  render() {
    console.log(this.props)
    return (
      <div className="lists-container trail__full-info">
      <i class="fa fa-info" aria-hidden="true"></i>
      <h2>Trail Information</h2>
      <div className="single-trail" key={this.state.trails.id}>
        <h3>{this.state.trails.name}</h3>
        <p>{this.state.trails.description}</p>
        <p>{this.state.trails.length / 1000}km</p>
        <p><strong>Difficulty of:</strong> {this.state.trails.difficulty}</p>
        <p>{this.state.trails.condition}</p>
      </div>    
        
      </div>
    );
}
}

export default withRouter (TrailFullInfo);