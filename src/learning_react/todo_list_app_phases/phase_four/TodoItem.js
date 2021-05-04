import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" checked={this.props.item.completed} />
        <p>{this.props.item.text}</p>
      </div>
    );
  }
}
