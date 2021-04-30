import React, { Component } from "react";

export class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInputChange = this.handleUserInputChange.bind(this);
  }

  handleUserInputChange(evt) {
    this.setState({
      userInput: evt.target.value,
    });
  }

  handleSubmit(evt) {
    // console.log("submitted name: ", evt.target.value);
    console.log("submitted name: ", this.state.userInput);
    evt.preventDefault();
  }
  render() {
    return (
      <div>
        <fieldset>
          {/* handleSubmit runs on clicking submit button and prevenbtDefault() srops it to submit form to any server there might be, and shows us value into that state variable instead */}
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                // since value is set on form element element, displayed value will always be this.state.userInput, making state source of value
                value={this.state.userInput}
                // since handleUserInputChange runs on every keystrokes to update it's state, displayed value will update as user types into element
                onChange={this.handleUserInputChange}
              />
            </label>
            <input type="submit" value="submit" />
          </form>
        </fieldset>
      </div>
    );
  }
}
