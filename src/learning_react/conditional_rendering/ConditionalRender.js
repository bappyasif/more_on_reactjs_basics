import React, { Component } from 'react'

export class ConditionalRender extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.isLoading ? "Loading Data!!" : "Data Here"}</h4>
            </div>
        )
    }
}
