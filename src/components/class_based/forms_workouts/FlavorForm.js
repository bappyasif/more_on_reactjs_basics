import React, { Component } from "react";

export class FlavorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flavor: "pears",
      flavors: ["pears", "peach"],
    };
    this.handleSelection = this.handleSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelection(evt) {
    this.setState({
      flavor: evt.target.value,
    });
  }

  handleSubmit(evt) {
    console.log("favorite flavor : " + this.state.flavor);
    evt.preventDefault();
  }

  render() {
    return (
      <div>
        <fieldset>
          <form onSubmit={this.handleSubmit}>
            <label>pick your favorite flavor</label>
            <select value={this.state.flavor} onChange={this.handleSelection}>
              <option value="peach">peach</option>
              <option value="apple">apple</option>
              <option value="mango">mango</option>
              <option value="pears">pears</option>
            </select>
            <input type="submit" value="submit" />
          </form>
        </fieldset>

        {/* we can also pass an array into value attribute, allowing us to select multiple options in a select tag */}
        <fieldset>
          <form onSubmit={this.handleSubmit}>
            <label>pick your favorite flavor</label>
            <select value={this.state.flavors[1]} onChange={this.handleSelection}>
              <option value="peach">peach</option>
              <option value="apple">apple</option>
              <option value="mango">mango</option>
              <option value="pears">pears</option>
            </select>
            <input type="submit" value="submit" />
          </form>
        </fieldset>
      </div>
    );
  }
}
