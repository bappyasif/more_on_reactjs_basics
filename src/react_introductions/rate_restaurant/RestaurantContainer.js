import React, { Component } from 'react';
import { DemoRestaurantRatingsApp } from './components/DemoRestaurantRatingsApp';

export class RestaurantContainer extends Component {
    render() {
        return (
            <div>
                <p>Rate Restaurant Demo App</p>
                <DemoRestaurantRatingsApp />
            </div>
        )
    }
}