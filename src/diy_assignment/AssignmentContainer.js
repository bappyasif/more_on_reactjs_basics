import randomcolor from "randomcolor";
import React, { Component } from "react";
import { FormComponent } from "./components/FormComponent";
import { Overview } from "./components/Overview";

export class AssignmentContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      data: [],
    };
    this.userInputChangedHandler = this.userInputChangedHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  userInputChangedHandler(evt) {
    this.setState({
      text: evt.target.value,
    });
  }
  //   submitHandler(evt) {
  //     evt.preventDefault();
  //     this.setState({
  //       data: this.state.data.push(this.state.text),
  //     });
  //   }
  // submitHandler(evt) {
  //     evt.preventDefault();
  //     this.setState(prevState => {
  //         [...prevState.data]
  //         data: this.state.data.concat(this.state.text)
  //     });
  //   }

  submitHandler(evt) {
    evt.preventDefault();
    // document.querySelector("input").textContent = "";
    this.setState({
      data: [...this.state.data, this.state.text],
      text: "",
    });
  }
  render() {
      let diyStyle = {
          border: `dashed 4px ${randomcolor()}`,
          marginTop: "11px"
      }
    return (
      <div style={diyStyle}>
        <p>Dot-It-Yourself Assignment</p>
        {/* container compoennt will be responsible for Form inputs and business logic regarding it */}
        <FormComponent
          value={this.state.text}
          changeHandler={this.userInputChangedHandler}
          handleSubmit={this.submitHandler}
        />

        {/* overview is responsible for rendering tasks */}
        <Overview text={this.state.text} data={this.state.data} />
      </div>
    );
  }
}
