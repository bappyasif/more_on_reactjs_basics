import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.item.completed}
          // onChange={this.handleCheckbox}
          onChange={() => this.props.changeCheckbox(this.props.item.id)}
        />
        <p>{this.props.item.text}</p>
      </div>
    );
  }
}


/**
 * 
 * 
 constructor(props) {
    super(props);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }
  handleCheckbox() {
    this.props.changeCheckbox(this.props.item.id);
  }
 */