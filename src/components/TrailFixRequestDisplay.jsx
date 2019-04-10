import React, { Component } from 'react';
import axios from 'axios';
import FixPopUp from './FixPopUp';
class TrailFixRequestDisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
            solutions: [],
            donations: [],
            solutionD: [],
            showPopup: false
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:3000/trails/api/v1/trail_solutions.json')
        .then(response => {
            this.setState({
                solutions: response.data
            })
        })
        .catch(error => console.log(error))

        axios.get('http://localhost:3000/trails/api/v1/donations.json')
        .then(response => {
            this.setState({
                donations: response.data
            })
        })

   /*         let donations = response.data
            solutions.forEach(function (solution) {
                donations.forEach(function(donation) {
                    if (solution.id == donation.trail_solutions_id)
                    solution.donation = donation
                })
            })*/
            
        .catch(error => console.log(error))
        
    }
    



       togglePopup = (solution) => {
    this.setState({
      showPopup: !this.state.showPopup,
      solution: solution
    });

    
    
  }
render() {
    
    return (

        
  <div className="lists-container trail__display-fix-requests">
          <i class="fa fa-tags" aria-hidden="true"></i>
        <h2>Pending Requests to Fix Trail</h2>
        {this.state.solutions.map( solution => {
            if (solution.trails_id == this.props.trail_id ) {
            return (
                
                   <div className="single-solution" key={solution.id}>
                        <p>{solution.description_to_fix}</p>
                    

                    <button onClick={() => this.togglePopup(solution)}>Donate</button>  
                    {this.state.showPopup ? 
                    <FixPopUp
                        text='Close Me'
                        solution={this.state.solution}
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null }
                    
                    
                    ) 
        
                
        {this.state.donations.map( donation => {
            if (donation.trail_solutions_id == solution.id) {
            return (
            <div>
               <h2> Thank you to: </h2>
                <h2>{donation.name}</h2>
                <h3>for donating:</h3>
                <h2>{donation.amount}</h2>
            </div>)
            
            }
        })} 
        </div>
    )
    } } 
    ) }

        <h1>thank you all contributors!</h1>
    {this.state.donations.map( donation => {
        if (donation.trails_id == this.props.trail_id ) {
        return (<div>
            <h2>{donation.name}</h2>
            <h2>{donation.amount}</h2>
        </div>)
        }
    })} 

    </div>
)}}

export default TrailFixRequestDisplay;