import React, { Component } from 'react';
import randomcolor from "randomcolor";

export class LifecycleMethods extends Component {
    constructor() {
        super();
        this.state={
            count: 0,
            color: '',
            randClr: ''
        }
        this.incrementingCount = this.incrementingCount.bind(this);
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }
    static getDerivedStateFromProps(props, state) {
        // returns new, updated state based on propsprops recieved
    }
    getSnapshotBeforeUpdate() {
        // creates a backup of current way of things are
    }
    componentDidMount() {
        // get data that needs to be displayed correctly
        console.log("mounted");
    }
    componentDidUpdate(prevProps, prevState) {
    // componentDidUpdate() {
        console.log("did updated");
        // let newColor = randomcolor();
        // using setState within componentDidUpdate or componentWillUpdate, will make app to go on an infinite loop as it will keep rerendering and see setState triggeres render again and so on        
        // this.setState({color: newColor});
        // to prevent that previous infinite loop, we need to set aboundary condition to update that setState within those lifecycle methods
        // in this scenario we'll update color state, when there is an update in count, so that it renders once after increases, and renders just once and not fall into an inifinite loop
        if(prevState.count !== this.state.count) {
            let newColor = randomcolor();
            this.setState({color: newColor});
        }

    }
    shouldComponentUpdate(nextProps, nextState) {
        // return true if needs to be updated
        // return false if not
        return true;
    }
    componentWillUnmount() {
        // teardown or cleanup code before component dissappears to enhance performance
        // e.g. remove event handlers or timers, and as such
    }

    incrementingCount() {
        this.setState(prevState=>({count: prevState.count+1}))
    }


    incrementCount() {
        this.setState(prevState=>({count: prevState.count+1, randClr: randomcolor()}))
    }
    decrementCount() {
        this.setState(prevState=>({count: prevState.count-1, randClr: randomcolor()}))
    }
    render() {
        console.log('render');
        return (
            <div>
                <h4 style={{color: this.state.color}}>Count : {this.state.count}</h4>
                <button onClick={this.incrementingCount}>increment count</button>

                <p>scenario two</p>
                <button onClick={this.incrementCount}>increment count</button>
                <button onClick={this.decrementCount}>decrement count</button>

                {/* scenario 01 is much effecient as we are not going top duplicate logic in differernt handler methods, and keeping separation of concern intact and stable */}
                {/* whereas scenario 02 here works fine but duplicating updating randClr state in both event handlers method */}
            </div>
        )
    }
}
