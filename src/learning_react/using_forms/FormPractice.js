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
      isVegan: false,
      nonVegan: false,
      isKosher: false,
      lactoseFree: false,
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
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  // handleChange(evt) {
  //   let { name, value, type, checked } = evt.target;
  //   type === "checkbox"
  //     ? this.setState((prevState) => ({
  //         dietary_restrictions: {
  //           ...prevState.dietary_restrictions,
  //           [name]: checked,
  //         },
  //       }))
  //     : this.setState({
  //         [name]: value,
  //       });
  // }
  handleSubmit(evt) {
    evt.preventDefault();
    alert([
      this.state.firstName,
      this.state.lastName,
      this.state.gender,
      this.state.location,
      this.state.isVegan,
      this.state.nonVegan,
      this.state.isKosher,
      this.state.lactoseFree,
    ]);
  }
  render() {
    // let restrictions;
    // if(this.state.isVegan) {
    //   restrictions += "Vegan"+this.state.isVegan
    // } else if(this.state.nonVegan) {
    //   restrictions += "NonVegan"+this.state.nonVegan;
    // }

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

            <p />
            <label>Gender: </label>

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
            <p />
            <label>
              vegetarian:
              <input
                type="checkbox"
                // name="dietary_restrictions"
                name="isVegan"
                checked={this.state.isVegan}
                // checked={this.state.dietary_restrictions.isVegan}
                // value="vegetarian"
                // value={this.state.dietary_restrictions.isVegan}
                onChange={this.handleChange}
              />
            </label>
            <label>non-vegetarian</label>
            <input
              type="checkbox"
              // name="dietary_restrictions"
              name="nonVegan"
              checked={this.state.nonVegan}
              // checked={this.state.dietary_restrictions.nonVegan}
              // value="non-vegetarian"
              // value={this.state.dietary_restrictions.nonVegan}
              onChange={this.handleChange}
            />
            <label>kosher</label>
            <input
              type="checkbox"
              // name="dietary_restrictions"
              name="isKosher"
              checked={this.state.isKosher}
              // checked={this.state.dietary_restrictions.isKosher}
              // value="kosher"
              // value={this.state.dietary_restrictions.isKosher}
              onChange={this.handleChange}
            />
            <label>lactose-free</label>
            <input
              type="checkbox"
              // name="dietary_restrictions"
              name="lactoseFree"
              checked={this.state.lactoseFree}
              // checked={this.state.dietary_restrictions.lactoseFree}
              // value="lactose-free"
              // value={this.state.dietary_restrictions.lactoseFree}
              onChange={this.handleChange}
            />

            <button type="submit">submit</button>
          </form>
        </fieldset>
        <fieldset>
          <h4>Form Output</h4>
          <p>firstName : {this.state.firstName}</p>
          <p>lastName : {this.state.lastName}</p>
          <p>age : {this.state.age}</p>
          <p>gender : {this.state.gender}</p>
          <p>destination : {this.state.location}</p>
          <p>
            dietary_restrictions:{" "}
            {/* {this.state.isVegan
              ? "Vegan : " + this.state.isVegan
              : this.state.nonVegan
              ? "NonVegan : " + this.state.nonVegan
              : ""} */}

            {/* {restrictions} */}

            <p>
              {this.state.isVegan ? "Vegan : "+this.state.isVegan+", " : ""}
              {this.state.nonVegan ? "NonVegan : "+this.state.nonVegan+", " : ""}
              {this.state.isKosher ? "Kosher : "+this.state.isKosher+", " : ""}
              {this.state.lactoseFree ? "LactoseFree : "+this.state.lactoseFree+", " : ""}
            </p>
          </p>
          <p>
            dietary_restrictions: kosher :{" "}
            {/* {this.state.dietary_restrictions.isKosher} */}
            {/* {this.state.isKosher} */}
            {this.state.isKosher ? "Yes" : "No"}
          </p>
          <p>
            dietary_restrictions: vegan :{" "}
            {/* {this.state.dietary_restrictions.isVegan} */}
            {/* {this.state.isVegan} */}
            {this.state.isVegan ? "Yes" : "No"}
          </p>
          <p>
            dietary_restrictions: nonVegan :{" "}
            {/* {this.state.dietary_restrictions.nonVegan} */}
            {/* {this.state.nonVegan} */}
            {this.state.nonVegan ? "Yes" : "No"}
          </p>
          <p>
            dietary_restrictions: lactoseFree :{" "}
            {/* {this.state.dietary_restrictions.lactoseFree} */}
            {/* {this.state.lactoseFree} */}
            {this.state.lactoseFree ? "Yes" : "No"}
          </p>
        </fieldset>
      </div>
    );
  }
}
