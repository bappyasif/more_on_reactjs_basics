import React, { Component } from "react";
import {WarningBanner} from "../../function_based/conditional_rendering/WarningBanner";

export class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState((state) => ({ showWarning: !state.showWarning }));
  }
  render() {
    return <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggle}>
            {this.state.showWarning ? "Hide" : "Show"}
        </button>
    </div>;
  }
}
