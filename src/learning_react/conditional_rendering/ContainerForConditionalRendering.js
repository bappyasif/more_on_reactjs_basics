import React, { Component } from "react";
import { ConditionalRender } from "./ConditionalRender";
import { RenderingConditionally } from "./RenderingConditionally";
import { RenderingPractice } from "./RenderingPractice";

export class ContainerForConditionalRendering extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      unreadMsgs: ["you have got mail", "ding ding ding ding"],
      // msgs: ["??", "!!"]
      msgs: [],
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
        unreadMsgs: null,
      });
    }, 2900);
  }
  render() {
    return (
      <div>
        <p>conditional rendering</p>
        <ConditionalRender isLoading={this.state.isLoading} />

        {/* usually what we want is state realted rendering should be on component it self rather than ina  different component */}
        {this.state.isLoading ? (
          "Loading Is In Progress...."
        ) : (
          // notice in that case we dont even have to send in any props to components, simply call to renders when ready
          <RenderingConditionally />
        )}

        {this.state.unreadMsgs ? (
          <h4>you've got {this.state.unreadMsgs.length} mails</h4>
        ) : (
          <h4>no more undread messages!!</h4>
        )}

        {/* another way of conditional rendering is to use && */}
        {this.state.msgs.length >= 0 && (
          <h4>you've got {this.state.msgs.length} mails</h4>
        )}

        <RenderingPractice />
      </div>
    );
  }
}
