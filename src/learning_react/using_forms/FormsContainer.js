import React, { Component } from "react";
import { FormPractice } from "./FormPractice";
import { FormPracticeVersionTwo } from "./FormPracticeVersionTwo";
import { FormVersionThreeContainer } from "./FormVersionThreeContainer";

export class FormsContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favColor: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeVersionTwo = this.handleChangeVersionTwo.bind(this);
    this.handleChangeVersionThree = this.handleChangeVersionThree.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      firstName: evt.target.value,
    });
  }
  handleChangeVersionTwo(evt) {
    // let name = evt.target.name;
    // let value = evt.target.value;
    let { name, value } = evt.target;
    this.setState({
      //   ...this.state,
      [name]: value,
    });
  }
  handleChangeVersionThree(evt) {
    let { name, value, type, checked } = evt.target;
    value = type === "checkbox" ? checked : value;
    // value = type === "radio" ? name : name

    this.setState({
      //   ...this.state,
      [name]: value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state.firstName, this.state.favColor);
    alert(this.state.firstName, this.state.favColor);
  }
  render() {
    return (
      <div>
        <p>using forms</p>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <input
              name="firstName"
              placeholder="first name"
              value={this.state.firstName}
              //   onChange={this.handleChange}
              //   onChange={this.handleChangeVersionTwo}
              onChange={this.handleChangeVersionThree}
            />
            {/* <h2>{this.state.firstName}</h2> */}
            <input
              name="lastName"
              placeholder="last name"
              value={this.state.lastName}
              //   onChange={this.handleChangeVersionTwo}
              onChange={this.handleChangeVersionThree}
            />
            {/* <h2>
              {this.state.firstName} {this.state.lastName}
            </h2> */}
            <textarea value={"write here...."} />
            <label>
              <input
                name="isFriendly"
                type="checkbox"
                checked={this.state.isFriendly}
                onChange={this.handleChangeVersionThree}
              />{" "}
              is friendly?!
            </label>
            <label>
              <input
                name="gender"
                value="female"
                type="radio"
                // checked={this.state.gender}
                checked={this.state.gender === "female"}
                onChange={this.handleChangeVersionThree}
              />{" "}
              female
            </label>
            <label>
              <input
                name="gender"
                value="male"
                type="radio"
                // checked={this.state.gender}
                checked={this.state.gender === "male"}
                onChange={this.handleChangeVersionThree}
              />{" "}
              male
            </label>
            <label>
              favorite color:
              <select
                name="favColor"
                value={this.state.favColor}
                onChange={this.handleChangeVersionThree}
              >
                <option value="yellow">yellow</option>
                <option value="maroon">maroon</option>
                <option value="green">green</option>
                <option value="aqua">aqua</option>
              </select>
            </label>
            <h2>
              {this.state.firstName} {this.state.lastName}{" "}
              {this.state.gender ? (
                <span>
                  you're a {this.state.gender} and your favorite color is :{" "}
                  {this.state.favColor}
                </span>
              ) : (
                ""
              )}
            </h2>
            <button type="submit">submit</button>
          </fieldset>
        </form>
        <br />
        <FormPractice />
        {/* separation of concerns exist */}
        <FormPracticeVersionTwo />
        {/* separation of concern with perhaps over simplification, and kind of manifesting need of use Context API */}
        <FormVersionThreeContainer />
      </div>
    );
  }
}
