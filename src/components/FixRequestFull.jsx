import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router'

class FixRequestFull extends Component {
    constructor(props){
        super(props)
        this.state = {
          FixRequests: [],
            
        }
    }
    componentDidMount() {
        axios.get('/api/v1/trail_solutions')
    .then(response => {
        // this.setState({
        //     Ratings: response.data
        // })
        const FixRequest  = response.data
        let Requests = [];
        
        console.log("!!!!!!!!!  state ratings 1   ", FixRequest)
        console.log('the props from component did mount',this.props.trailId)
        let theProp = this.props.match.params.id


        FixRequest.forEach(function(Request) {
           if (Request.trails_id == theProp) {
            Requests.push(Request.feedback)} 
        });


   
      
      
       
      
        this.setState({
            FixRequests: Requests,
    
        })
        console.log(response.data)
        
    })
    .catch(error => console.log(error))
    
   
       
    
}


render() {
  
  return (
      <div>
       
      {this.state.FixRequests.map((request, i) => {
          
          return (
              
              <div className="single-solution" key={i} >
                 
                  <h3>{request}</h3>
              </div>
    

          )
      }
  )}
  </div>
)}}
export default withRouter(FixRequestFull);
