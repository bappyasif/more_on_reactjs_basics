import React, { Component } from "react";
import { TodoItem } from "./TodoItem";
import { todosData } from "../todosData";

export class ContainerForPhaseSeven extends Component {
  constructor() {
    super();
    this.state = {
      todosData: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      let updatedTodos = prevState.todosData.map((todo) => {
        if (todo.id === id) {
          // without {...todo} it would not change in updatedTodos, just in prevState
          // and thats why re render does not occur without it, spread operatior ensures to return a new object with it's changed value
          // without using spread operator and just using todo.completed = !todo.completed; means we're changing state directly
          // chainging state directly won't re render on DOM, that's why we needed to use spread operator

          // way 01
          //   todo = { ...todo };
          //   todo.completed = !todo.completed;

          // way 02
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todosData: updatedTodos,
      };
    });
  }

  render() {
    // console.log("imported:",todosData, "state:",this.state.todosData);
    let todos = this.state.todosData.map((todo) => (
      <TodoItem key={todo.id} item={todo} changeCheckbox={this.handleChange} />
    ));
    return <fieldset className="todo-list">{todos}</fieldset>;
  }
}

/**
 * 
 * 
 handleChange(id) {
    //   console.log(id)
    this.setState((prevState) => {
      let updatedTodos = prevState.todosData.map((todo) => {
        if (todo.id === id) {
          //   console.log(id);
        //   console.log(todo.completed);
          todo = {...todo}
          todo.completed = !todo.completed;
        //   console.log(todo.completed);
        }
        return todo;
      });
    //   console.log(updatedTodos);
      return {
        todosData: updatedTodos,
      };
    });
    // console.log(this.state.todosData);
  }
 * 
 * 
 handleChange(id) {
    // console.log(id, id - 1);
    // todosData[id - 1].completed = !todosData[id - 1].completed;
    // this.setState({
    //   todosData: !todosData[id - 1].completed,
    // });
    // this.setState((prevState) => ({
    // //   todosData: !prevState.completed,
    // todosData: prevState.completed
    // }));
    this.setState((prevState) => {
      let updatedTodos = prevState.todosData.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todosData: updatedTodos,
      };
    });
  }
 */
