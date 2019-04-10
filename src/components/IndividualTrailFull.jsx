import React, { Component } from 'react';
import {withRouter} from 'react-router'
import RatingsDisplay from './RatingsDisplay'
import AddRating from './Ratings';
import TrailFixRequests from './TrailFixRequests';

import TrailFixRequestDisplay from './TrailFixRequestDisplay'
class IndividualTrailFull extends Component {
render() {
// this is how you acces the trail id this.props.match.params.id
  return (

    <div>
      
      <div className="lists-container trail__display-ratings">
        
        <i class="fa fa-star-half-empty" aria-hidden="true"></i>
        <h2>Add Trail Rating</h2>
        <AddRating trailId={this.props.match.params.id}/>
        
        <i class="fa fa-star" aria-hidden="true"></i>
        <h2>Current Trail Rating</h2>
        <RatingsDisplay trailId={this.props.match.params.id}/>
        
      </div>

      <div>

        <TrailFixRequests trailId={this.props.match.params.id}/>
        <TrailFixRequestDisplay trail_id={this.props.match.params.id}/>

      </div>
      
    </div>
  );
}
}

export default withRouter(IndividualTrailFull);
