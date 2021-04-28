import React, { Component } from 'react'

export class ExampleComponent extends Component {
    // constructor(props) {
    //     super(props)
    // }
    
    render() {
        return (
            <div>
                <p>Using Props Within A Class Component</p>
                <h4>Title: {this.props.title}</h4>
            </div>
        )
    }
}