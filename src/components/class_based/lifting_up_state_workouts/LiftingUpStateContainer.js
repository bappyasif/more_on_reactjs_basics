import React, { Component } from 'react'
import { NewCalculator } from './NewCalculator'
import { TemperatureCalculator } from './TemperatureCalculator'

export class LiftingUpStateContainer extends Component {
    render() {
        return (
            <div>
                <p>lifting state up technique</p>
                <TemperatureCalculator />
                <br />
                {/* multiple inputs */}
                <NewCalculator />
            </div>
        )
    }
}
