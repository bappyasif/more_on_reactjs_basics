import React, { Component } from "react";
import { FormItem } from "./FormItem";

export class FormPracticeVersionTwo extends Component {
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
    if(this.state.location) {
        alert("have a safe journey");
    }
  }
  render() {
    return (
      <div>
        <h4>Travelling Form</h4>
        <fieldset>
          <form onSubmit={this.handleSubmition}>
            <FormItem
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <FormItem
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <FormItem
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <FormItem
                type="radio"
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.handleChange}
              />
              <FormItem
                type="radio"
                name="gender"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.handleChange}
              />
            </div>
            <p />
            <label>
              travelling to :
              <select
                name="location"
                onChange={this.handleChange}
                value={this.state.location}
              >
                <option value="">please choose a destination</option>
                <option value="europe">europe</option>
                <option value="africa">africa</option>
                <option value="asia">asia pacific</option>
              </select>
            </label>
            <p />
            <label>dietary restrictions if any :</label>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <FormItem
                type="checkbox"
                name="isVegan"
                checked={this.state.isVegan}
                onChange={this.handleChange}
              />
              <FormItem
                type="checkbox"
                name="nonVegan"
                checked={this.state.nonVegan}
                onChange={this.handleChange}
              />
              <FormItem
                type="checkbox"
                name="isKosher"
                checked={this.state.isKosher}
                onChange={this.handleChange}
              />
              <FormItem
                type="checkbox"
                name="lactoseFree"
                checked={this.state.lactoseFree}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">submit</button>
          </form>
        </fieldset>
        <fieldset>
          <h4>Form Output</h4>
          <p>firstName: {this.state.firstName}</p>
          <p>lastName: {this.state.lastName}</p>
          <p>age: {this.state.age}</p>
          <p>gender: {this.state.gender}</p>
          <p>location: {this.state.location}</p>
          <p>dietary restriction if any : </p>
          <p>
            {this.state.isVegan
              ? "< Vegan : " + this.state.isVegan + " > "
              : ""}
            {this.state.nonVegan
              ? "< NonVegan : " + this.state.nonVegan + " > "
              : ""}
            {this.state.isKosher
              ? "< Kosher : " + this.state.isKosher + " > "
              : ""}
            {this.state.lactoseFree
              ? "< LactoseFree : " + this.state.lactoseFree + " > "
              : ""}
          </p>
        </fieldset>
      </div>
    );
  }
}
