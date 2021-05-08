import React, { Component } from "react";
import uniqid from "uniqid";
import { Overview } from "./Overview";
import { FormComponent } from "../FomComponent";

export class EasyContainer extends Component {
  constructor() {
    super();
    this.state = {
      task: { text: "", id: "", num: 1 },
      tasks: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnSubmitTask = this.handleOnSubmitTask.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }
  handleChange(evt) {
    this.setState({
      task: {
        text: evt.target.value,
        // as we have unique id to be added within tasks too, we need to update that state variable as well
        id: this.state.task.id,
        // adding numbered to task
        num: this.state.task.num,
      },
    });
  }
  handleOnSubmitTask(evt) {
    evt.preventDefault();
    this.setState({
      // using push method would also invoke error, that's why using concat, so that we dont directly change state
      tasks: this.state.tasks.concat(this.state.task),
      //   task: { text: "", id: uniqid(), num: this.handleTaskNumberCount },
      task: { text: "", id: uniqid(), num: this.state.task.num + 1 },
    });
    // this.handleTaskNumberCount;
  }
  clickHandler(taskNum) {
    // console.log(evt.target.parentNode.id);
    let newArray = this.state.tasks.filter((task) => task.num !== taskNum);
    this.setState({
      tasks: newArray,
    //   task: {text: "", id: uniqid(), num: this.state.tasks.length+1}
    });
  }
  render() {
    let { task, tasks } = this.state;
    return (
      <div>
        <p>Do-It-Yourself-Assignment-optional-tasks - I & II</p>
        <FormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleOnSubmitTask}
          value={task.text}
        />
        <Overview tasks={tasks} clickHandler={this.clickHandler} />
      </div>
    );
  }
}

/**
 * 
 * 
   handleOnSubmitTask(evt) {
    evt.preventDefault();
    this.setState({
      // using push method would also invoke error, that's why using concat, so that we dont directly change state
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "", id: uniqid() },
    });
    this.handleTaskNumberCount
  }
  handleTaskNumberCount() {
    this.setState((prevState) => ({
      task: {... {num: prevState.num + 1} },
    }));
  }
 */
