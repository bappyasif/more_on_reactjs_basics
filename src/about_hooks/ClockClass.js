import React, { Component } from "react";

export class ClockClass extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    this.time = setInterval(() => {
      this.changeTime();
    }, 1000);
  }
  changeTime() {
    this.setState({
      date: new Date(),
    });
  }
  componentWillUnmount() {
    clearInterval(this.time);
  }
  render() {
    return (
      <div>
        <p>hello!! this is a class component Clock</p>
        <h4>it is now {this.state.date.toLocaleTimeString()}</h4>
      </div>
    );
  }
}
