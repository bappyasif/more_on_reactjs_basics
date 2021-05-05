import React, { Component } from "react";

export class FormPractice extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "",
      dietary_restrictions: {
        isVegan: false,
        nonVegan: false,
        isKosher: false,
        lactoseFree: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //   handleChange(evt) {
  //     let { name, value, type, checked } = evt.target;
  //     let valuePassing = type === "checkbox" ? checked : value;
  //     this.setState({
  //       [name]: valuePassing,
  //     });
  //   }
  handleChange(evt) {
    let { name, value, type, checked } = evt.target;
    type === "checkbox"
      ? this.setState({
          dietary_restrictions: {
            [name]: checked,
          },
        })
      : this.setState({
          [name]: value,
        });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    alert(
      this.state.firstName,
      this.state.lastName,
      this.state.gender,
      this.state.location,
      this.state.dietary_restrictions
    );
  }
  render() {
    return (
      <div>
        <fieldset>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="first name"
            />
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder="last name"
            />
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />

            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            <label>female</label>

            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            <label>male</label>

            <label>
              travelling to :
              <select
                name="location"
                onChange={this.handleChange}
                value={this.state.location}
              >
                <option value="europe">europe</option>
                <option value="africa">africa</option>
                <option value="asia">asia pacific</option>
              </select>
            </label>
            <label>
              dietary restrictions if any :<label>vegetarian:</label>
              <input
                type="checkbox"
                // name="dietary_restrictions"
                name="isVegan"
                checked={this.state.dietary_restrictions.isVegan}
                // value="vegetarian"
                value={this.state.dietary_restrictions.isVegan}
                onChange={this.handleChange}
              />
              <label>non-vegetarian</label>
              <input
                type="checkbox"
                // name="dietary_restrictions"
                name="nonVegan"
                checked={this.state.dietary_restrictions.nonVegan}
                // value="non-vegetarian"
                value={this.state.dietary_restrictions.nonVegan}
                onChange={this.handleChange}
              />
              <label>kosher</label>
              <input
                type="checkbox"
                // name="dietary_restrictions"
                name="isKosher"
                checked={this.state.dietary_restrictions.isKosher}
                // value="kosher"
                value={this.state.dietary_restrictions.isKosher}
                onChange={this.handleChange}
              />
              <label>lactose-free</label>
              <input
                type="checkbox"
                // name="dietary_restrictions"
                name="lactoseFree"
                checked={this.state.dietary_restrictions.lactoseFree}
                // value="lactose-free"
                value={this.state.dietary_restrictions.lactoseFree}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">submit</button>
          </form>
        </fieldset>
      </div>
    );
  }
}
