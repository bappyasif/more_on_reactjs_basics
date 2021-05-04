import React, { Component } from "react";

export class ClassBasedComponentsDemo extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: true,
    };
  }
  render() {
      let wordDisplay;
      if(this.state.isLogged) {
          wordDisplay = "in";
      } else {
          wordDisplay = "out";
      }
    return (
      <div>
        <Header username="mickey dobbs" />
        <Greeting />
        <h4>You are currently logged {this.state.isLogged ? "in" : "out"}</h4>
        <h4>You are currently logged {wordDisplay}</h4>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    );
  }
}

class Greeting extends Component {
  render() {
    let date = new Date();
    let hours = date.getHours();
    let timeOfDay;
    if (hours < 12) {
      timeOfDay = "morgen";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "middag";
    } else {
      timeOfDay = "avond";
    }

    return <h2>Goed {timeOfDay}, jij dar!!</h2>;
  }
}
