import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';

class TrailComments extends Component {
  
  constructor(props){
    super(props)
    this.state = {
        comments: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/trails/api/v1/comments/${this.props.match.params.id}.json`)
      .then(response => {
          this.setState({
            comments: response.data.reverse()
    })
  })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <i class="fa fa-comments" aria-hidden="true"></i>
        <h2>Trail Comments</h2>
        {this.state.comments.map( comment => {
          return (
            <div className="single-trail" key={comment.id}>
              <h3>{comment.name}</h3>
              <p>{comment.data}</p>
            </div>
          )
        })}
      </div>
      );
  }

}
export default withRouter(TrailComments);