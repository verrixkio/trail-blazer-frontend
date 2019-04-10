import React, { Component } from 'react';
import {Map, InfoWindow, Marker, Polyline, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';
import TrailPopup from './TrailPopup';

const decodePolyline = require('decode-google-map-polyline');
export class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
        trails: [],
        showPopup: false
      // pop up set to state in App.js
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3000/trails/api/v1/trails.json')
      .then(response => {
        console.log(response.data)
          this.setState({
            trails: response.data
      })
    })
      .catch(error => console.log(error))
  }
 
  onPolylineClick(props, marker, e) {
    console.log(props)
  }
  togglePopup = (trail) => {
    this.setState({
      showPopup: !this.state.showPopup,
      trail: trail
    });
    
    
  }
/*

  <button onClick={this.togglePopup.bind(this)}>show popup</button>
    
  {this.state.showPopup ? 
    <TrailPopup
      text='Close Me'
      closePopup={this.togglePopup.bind(this)}
    />
    : null
  }*/




  
    colorSelect(trail) {
      if (trail.difficulty === 1) {
          return "#0B6B99"
      } else if (trail.difficulty === 2) {
          return "#F1EB06"
      } else if (trail.difficulty === 3 ) {
          return "#F19C06"
      } else if (trail.difficulty === 4) {
          return "#F10606"
      } else if (trail.difficulty === 5) {
          return "#C40303"
      } else {
        return "#35CD05"
      }
}

  
  render() {


   
  
    return (
 
      <Map
  
       google={this.props.google} 
       
       initialCenter={{
          lat: 51.045015,
          lng: -114.069984
        }}
        zoom={12}
        >
       {this.state.trails.map(trail => 
      
      <Polyline
      path={decodePolyline(trail.coded_path)}
      
      strokeColor= {this.colorSelect(trail)}
      strokeOpacity={1}
      strokeWeight={2}  
      
      Polyline onmouseenter={console.log('!!!!!! hover', trail)}
     
      name={'Current location'}
      data={trail}
       />)}
          {this.state.showPopup ? 
        <TrailPopup
          text='Close Me'
          trail={this.state.trail}
          closePopup={this.togglePopup.bind(this)}
        />
        : null
      }
          </Map> 
    
   
      
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDogOOtZl3ChFa_gEgwpDaadpSKP_EKtmk')
})(MapContainer)