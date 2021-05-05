import React, { Component } from "react";
import randomcolor from "randomcolor";

export class RenderingPractice extends Component {
  constructor() {
    super();
    this.state = {
      userLogged: true,
      randomColor: "red",
      backClr: "silver",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ userLogged: !prevState.userLogged }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userLogged !== this.state.userLogged) {
      let rand = randomcolor();
      this.setState({ randomColor: rand, backClr: randomcolor() });
    }
  }

  render() {
    let buttonText = this.state.userLogged ? "logout" : "login";
    return (
      <div>
        <h4>
          User is currently {this.state.userLogged ? "logged in" : "logged out"}
        </h4>
        <button
          onClick={this.handleClick}
          style={{
            color: this.state.randomColor,
            backgroundColor: this.state.backClr,
          }}
        >
        {buttonText} user
        </button>
      </div>
    );
  }
}
