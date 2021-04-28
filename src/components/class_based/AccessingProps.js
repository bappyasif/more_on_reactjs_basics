import React, { Component } from 'react'

export class AccessingProps extends Component {
    render() {
        // using destructuring, we can make those props name destructured within our component to use, witout have to use this.props as a prepender everytime we need to use them within our JSX or elsewhere within component
        let {title, clickHandler} = this.props;
        return (
            <div>
                <p>Accessing Props From Container</p>
                {/* <h4>Title : {this.props.title}</h4>
                <button onClick={this.props.clickHandler}>Click Here!!</button> */}
                <h4>Title : {title}</h4>
                <button onClick={clickHandler}>Click Here!!</button>
            </div>
        )
    }
}
