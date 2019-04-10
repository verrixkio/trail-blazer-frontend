import React, { Component } from 'react';
import axios from 'axios';

class AddRating extends Component {

AddRating = (e) => {
    e.preventDefault();
    axios.post("/api/v1/ratings", {
        rating:  e.target.elements["AddRating"].value,
        trailId: this.props.trailId
        
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        throw error;
    })
    e.target.elements["AddRating"].value = ''
    window.location.reload()
}

render() {
  return (        
    <form onSubmit={this.AddRating} >
      <div className="form-group">
        <label htmlFor="AddRating">Add Trail Rating:</label>
        <input className="regular-form" id="AddRating" name="AddRating" type="integer" placeholder="Rate the trail between 1 and 5"></input>
      </div>
      <button className="btn btn-block" type="submit">Submit Rating</button>
    </form>
  )}
}

export default AddRating; 