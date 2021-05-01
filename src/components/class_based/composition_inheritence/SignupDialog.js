import React, { Component } from "react";
import { WelcomeDialog } from "../../function_based/composition_inheritence/WelcomeDialog";

export class SignupDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup =  this.handleSignup.bind(this);
  }
  handleChange(evt) {
    this.setState({ login: evt.target.value });
  }
  handleSignup() {
      alert("welcome aboard, "+this.state.login)
  }
  render() {
    return (
      <div>
        <WelcomeDialog title="lets go to mars" desc="how should we refer to you?">
            <input value={this.state.login} onChange={this.handleChange} />
            <button onClick={this.handleSignup}>singup now</button>
        </WelcomeDialog>
      </div>
    );
  }
}
