import React, { Component } from "react";

export class EssayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "please write an essay",
    };
    this.handleUserInputChange = this.handleUserInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInputChange(evt) {
    this.setState({
      userInput: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("essay submitted: ", this.state.userInput);
  }

  render() {
    return (
      <div>
        <fieldset>
          <form onSubmit={this.handleSubmit}>
            <label>
              essay:
              <textarea
                value={this.state.userInput}
                onChange={this.handleUserInputChange}
              />
              {/* <input type="submit" value="submit" /> */}
            </label>
            <input type="submit" value="submit" />
          </form>
        </fieldset>
      </div>
    );
  }
}
