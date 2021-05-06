import React, { Component } from "react";
import { FormComponentUiRender } from "./FormComponentUiRender";
import { FormOutput } from "./form_components/FormOutput";

export class FormVersionThreeContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "",
      isVegan: false,
      nonVegan: false,
      isKosher: false,
      lactoseFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmition = this.handleSubmition.bind(this);
  }
  handleChange(evt) {
    let { name, value, type, checked } = evt.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }
  handleSubmition(evt) {
    evt.preventDefault();
    if (this.state.location) {
      alert("have a safe journey");
    }
  }
  render() {
    return (
      <div>
        <FormComponentUiRender
          onChange={this.handleChange}
          {...this.state}
          // data={this.state}
          handleSubmition={this.handleSubmition}
        />
        <FormOutput {...this.state} />
      </div>
    );
  }
}
