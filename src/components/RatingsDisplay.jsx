import React, { Component } from 'react';
import axios from 'axios';

class RatingsDisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
            Ratings: [],
            average: 0,
            SpecificRatings: []
        }
    }
    componentDidMount() {

        axios.get('http://localhost:3000/trails/api/v1/ratings')
        .then(response => {


            const serverRate  = response.data
            let Ratings = [];

            console.log('Ratings', Ratings)
            console.log("!!!!!!!!!  state ratings 1   ", serverRate)
            console.log('the props from component did mount',this.props.trailId)
            
            let theProp = this.props.trailId

            serverRate.forEach(function(Rate) {
            if (Rate.trails_id == theProp) {
            Ratings.push(Rate.feedback)} 
            });

            console.log('!!!!!!!!   not ratings ', Ratings)
            let total = 0
            Ratings.forEach(function(Rate) {
                total += Rate
            })
        
            let average = (total / Ratings.length);
            let averageRnd = Math.round(average);
        
            console.log('tthe props ',this.props.trailId)
            console.log('total' + total)
            console.log('numb'  + Ratings.length)
            
            this.setState({
                Ratings: serverRate,
                SpecificRatings: Ratings,
                average: averageRnd 
            })
            console.log(response.data)
            
        })
        .catch(error => console.log(error))
    }

    renderRatings() {
        
        return (
            <div>
              {this.state.average === 1 &&
                <div className="stars">
                    <i className="fa fa-tree"></i><i className="fa fa-tree grey"></i><i className="fa fa-tree grey"></i><i className="fa fa-tree grey"></i><i className="fa fa-tree grey"></i>
                </div>
              }
              {this.state.average === 2 &&
                <div className="stars">
                <i className="fa fa-tree"></i><i className="fa fa-tree"></i><i className="fa fa-tree grey"></i><i className="fa fa-tree grey"></i><i className="fa fa-tree grey"></i>
                </div>
              }
              {this.state.average === 3 &&
                <div className="stars">
                    <i className="fa fa-tree"></i><i className="fa fa-tree"></i><i className="fa fa-tree"></i><i className="fa fa-tree grey"></i><i className="fa fa-tree grey"></i>
                </div>
              }
              {this.state.average === 4 &&
                <div className="stars">
                    <i className="fa fa-tree"></i><i className="fa fa-tree"></i><i className="fa fa-tree"></i><i className="fa fa-tree"></i><i className="fa fa-tree grey"></i>
                </div>
              }
              {this.state.average === 5 &&
                <div className="stars">
                    <i className="fa fa-tree"></i><i className="fa fa-tree"></i><i className="fa fa-tree"></i><i className="fa fa-tree"></i><i className="fa fa-tree"></i>
                </div>
              }
            </div>
        );
    }

    render() {
        console.log('!!!!!! specific rating', this.state.SpecificRatings)
        return (
            <div className="trail-rating">

                {this.renderRatings()}

            </div>
        )
    }

}

export default RatingsDisplay; 
