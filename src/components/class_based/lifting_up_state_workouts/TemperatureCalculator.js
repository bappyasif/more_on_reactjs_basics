import React, { Component } from "react";
import { BoilingVerdict } from "../../function_based/lifting_state_up_workouts/BoilingVerdict";

export class TemperatureCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      temperature: evt.target.value,
    });
  }
  render() {
    let { temperature } = this.state;
    return (
      <div>
        <fieldset>
          <legend>enter temperature in celsius</legend>
          <input value={temperature} onChange={this.handleChange} />
          <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
      </div>
    );
  }
}
