import React, { Component } from "react";

export class StateUsage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.countUp = this.countUp.bind(this);

    // function foo() {
    //     this.a = 2;
    // }
    // foo()
    // console.log(this, a);
  }

  // when count is incremented based on previous state value, much more safer approach
  // countUp() {
  //     this.setState((prevState)=>{
  //         return {
  //             count: prevState.count+1
  //         }
  //     })
  // }

  // updating count state variable value directly without have to noticing it's previous value
  countUp() {
    // setState method is used to set new state of state variable value, rather chaing it directly which will cause to  unexpected behavior, and thus React state is immutable, we should always use setStae method to bring changes in state variables
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
      let {count} = this.state
    return (
      <div>
        <p>using state variable 'count' to observe change for count on DOM</p>
        {/* <h4>Counter : {this.state.count}</h4> */}
        <h4>Counter : {count}</h4>
        <button onClick={this.countUp}>UpCount</button>
      </div>
    );
  }
}
