import React, { Component } from 'react'

export class Clock extends Component {
    // we'll use date as a state variable which will be changed and rendered each second on DOM, than just a single component as it would have been with a props
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    // Adding lifecycle methods in a class component
    // in applications with many components, its very important to free up resources taken by components when they are done or destroyed
    // here in this case we want to setup a timer, when Clock component is rendered to DOM for first time, this is known as "mounting" in react
    // we also want that timer to clear out that timer whenever DOM produced by Clock is removed, this is known as "unmounting" in React
    // we can declare special methods on component class to run some code when a component mounts and unmounts

    // this methosd runs after component output has been rendered to DOM, and is a good place to setup a timer kind of component
    componentDidMount() {
        this.timer = setInterval(()=>this.tick(), 1000);
    }

    // we will tear down timer that we created in mounting phase earlier
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    // now, lets implement tick() that Clock compoennt will run in everty second
    // it will use this.setState() method to schedule updates to component local state
    tick() {
        this.setState({
            date: new Date()
        })
    }

    // let's recap to see what's going on in and order in which methods are executed
    // 1.a> Clock is passed to container Component which in turn gets rendered by ReactDOM.render()
    // 1.b> since Clock needs to display current time, it initializes this.state with an object inclucding current time, which we'll update this state
    // 2> React then calls Clock compoenent's render(), this is how Reack knows or learns what should be displayed on screen, React then updates DOM to match Clock's render output
    // 3> when Clock output is inserted into DOM, React calls componentDidMount(), inside it clock component sets up a timer for browser to call tick() once a second
    // 4.a> every second tick() is called by browser, inside it Clock component schedules or sets a UI update by calling setState() with an object containing current time
    // 4.b> due to setState() call, React knows state has changed and calls render() method to learn what should be on screen, DOM updates accordingly based on comparison in virtualDOM of React
    // if Clock component is ever removed from DOM then componentWillUnmount() will be called, so that timer is stopped

    // also make sure never to modify state directly, which will not trigger any re render in DOM
    // always use setState() method to ensure re render in DOM, this.state can only be assigned in constructor method

    // State updates maybe asybchronous
    // react may batch multiple setState() calls into a single update for performance
    // props and state may be updated asynchronously, we shold not rely on their values for calculating next state
    /** wrong usage
     * this setState({
     *      counter: this.state.counter + this.props.increment
     * })
     * 
     * correct usage 1, based on previous values
     * this.setState((state, props) => ({
     *      counter: state.counter = props.increment
     * }))
     * 
     * correct usage 2, based on previous values
     * this.setState((state, props) {
     *      return {
     *          counter: state.counter + props.increment
     *      }
     * })
     */

    // state updates are merged
    // setState call merges object we provide into current state, we can have several independent variables and update them independently with separate setState() calls
    /**
     * this.state = {
     *      posts: [],
     *      comments: []
     * }
     * 
     * this.setState({posts: response.posts})
     * 
     * this.setState({comments: response.comments})
     */
    // merging is shallow so this.setState({either}) leaves that other state intact, but comploetely replace itself with updated value

    render() {
        return (
            <div>
                <h4>hello world of react</h4>
                <h4>it is : {this.state.date.toLocaleTimeString()}</h4>
                <button onClick={() => clearInterval(this.timer)}>stop timer</button>                
            </div>
        )
    }
}




// export class Clock extends Component {
//     render() {
//         return (
//             <div>
//                 <h4>hello world of react</h4>
//                 <h4>it is : {this.props.date.toLocaleTimeString()}</h4>
//             </div>
//         )
//     }
// }
