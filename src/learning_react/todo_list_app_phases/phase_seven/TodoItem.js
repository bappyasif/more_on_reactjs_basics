import React, { Component } from "react";
import randomcolor from "randomcolor";

export class TodoItem extends Component {
  render() {
    let styleForTodoCompleted = {
      // color: randomcolor(),
      fontStyle: 'italic',
      textDecoration: "line-through",
      backgroundColor: randomcolor(),
      borderBottom: `1px solid ${randomcolor()}` 
    }
    let styleForTodoIncompleted = {
      // color: randomcolor(),
      fontStyle: 'bold',
      textDecoration: "underline overline",
      // backgroundColor: randomcolor()
    }
    return (
      <div className="todo-item" style={ this.props.item.completed ? styleForTodoCompleted : styleForTodoIncompleted}>
        <input
          type="checkbox"
          checked={this.props.item.completed}
          // onChange={this.handleCheckbox}
          onChange={() => this.props.changeCheckbox(this.props.item.id)}
        />
        <p style={ this.props.item.completed ? {backgroundColor: randomcolor(), color: "coral"} : {backgroundColor: randomcolor(), color: "maroon"}}>{this.props.item.text}</p>
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