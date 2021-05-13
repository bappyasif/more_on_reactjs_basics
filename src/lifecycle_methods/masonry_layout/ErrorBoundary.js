import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { errorMsg: "" };
  }

  static getDerivedStateFromError(error) {
    return { errorMsg: error.message };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {
    if (this.state.errorMsg) {
      return <h4>something's wrong!!</h4>;
    }
    return this.props.children;
  }
}

export class ErrorButton extends Component {
  constructor() {
    super();
    this.state = { showError: false };
    this.handleClick = () => {
      this.setState({ showError: true });
    };
  }

  render() {
    if (this.state.showError) {
      throw new Error("Something's Wrong!!");
    }
    return <button onClick={this.handleClick}>Trigger Error</button>;
  }
}
