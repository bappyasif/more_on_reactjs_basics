import React, { Component } from "react";

export class Toggle extends Component {
  // in react we dont have to call addEventListener to add a event listener to a DOM element fter its being created, instead we just provide a listener reference when element is rendered
  constructor(props) {
    super(props);
    this.state = {
      isToggled: true,
    };
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  toggleHandler() {
    this.setState((state) => ({ isToggled: !state.isToggled }));
  }

  checkArguments(evt, val) {
      console.log(val, evt);
  }

  render() {
    return (
      <div>
        <h4>Toggled {this.state.isToggled ? "on" : "off"}</h4>
        <button onClick={this.toggleHandler}>toggle here</button>
        
        {/* not recommended way of binding eventHandlers, due to performance issues of re rendering */}
        {/* <button onClick={() => this.toggleHandler}>toggle here</button> */}
        
        {/* we can also bind this within JSX on event triggering but can also be seen as not recommended, best to place to bind evenjt handlers is constructor */}
        {/* we can also pass in extra parameters along with synthetic event, when needed in this way, eventHandler will carry any extra parameters after evt, function signature for them doesnt matter much to accessing them accordingly  */}
        <button onClick={this.checkArguments.bind(this, "some value")}>check console</button>
      </div>
    );
  }
}
