import React, { Component } from 'react'
import {v4 as uuidv4} from "uuid";
import { Card } from './cards';

export class DemoRestaurantRatingsApp extends Component {
    constructor() {
        super();
        this.state = {
            restaurants: []
        }
    }
    // using class lifecycles methods
    componentDidMount() {
        this.getData();
    }
    getData() {
        this.setState({
            restaurants:[
                {
                  id: uuidv4(),
                  name: "Sushi S",
                  details: "2301 Moscrop Street, Burnaby, BC V61 23Y",
                  image: "null",
                  starsSelected: 0,
                },
                {
                  id: uuidv4(),
                  name: "Agra Tandoori",
                  details: "1255 Canada Way, Burnaby, BC V61 23Y",
                  image: "null",
                  starsSelected: 0,
                },
                {
                  id: uuidv4(),
                  name: "Bandidas Taqueria",
                  details: "2544 Sanders Avenue, Richmond, BC V6Y 0B5",
                  image: "null",
                  starsSelected: 0,
                },
              ]
        })
    }
    // restaurant ratings change handler
    ratingsUpdater(idx, starsSelected) {
        this.setState(
            [...this.state.restaurants].map(restaurant => {
                if(restaurant.id == idx) {
                    restaurant.starsSelected =  starsSelected
                }
            })
        )
    }

    displayExistingRestaurantsRatings() {
        [...this.state.restaurants].map((restaurant, idx) => {
            let name = restaurant.name;
            let image = restaurant.image;
            let details = restaurant.details;
            let starsSelected =  restaurant.starsSelected;
            let id = restaurant.id;
            return (
                <div className="app-body">
                    <Card
                    key={idx}
                    name={name}
                    details={details}
                    imafe={image}
                    starsSelected={starsSelected}
                    id={id}
                    updateStars={(id, starsSelected) => this.ratingsUpdater(id, starsSelected)} />
                </div>                
            )
        })
    }

    render() {
        return (
            <div>
            {/* {this.displayExistingRestaurantsRatings()} */}
                <div className="app-body">
                    {
                        [...this.state.restaurants].map((restaurant, idx) => {
                            let name = restaurant.name;
                            let image = restaurant.image;
                            let details = restaurant.details;
                            let starsSelected =  restaurant.starsSelected;
                            let id = restaurant.id;
                            return (
                                <Card
                                    key={idx}
                                    name={name}
                                    details={details}
                                    imafe={image}
                                    starsSelected={starsSelected}
                                    id={id}
                                    updateStars={(id, starsSelected) => this.ratingsUpdater(id, starsSelected)} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
