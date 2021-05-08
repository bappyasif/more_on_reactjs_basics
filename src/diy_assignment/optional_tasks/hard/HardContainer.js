import React, { Component } from "react";
import uniqid from "uniqid";
import { Overview } from "./Overview";
import { FormComponent } from "../FomComponent";

export class HardContainer extends Component {
  constructor() {
    super();
    this.state = {
      task: { text: "", id: "", num: 1 },
      tasks: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnSubmitTask = this.handleOnSubmitTask.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);
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
    if (this.state.task.text) {
      this.setState({
        tasks: this.state.tasks.concat(this.state.task),
        task: { text: "", id: uniqid(), num: this.state.task.num + 1 },
      });
    } else {
      alert("Enter Task");
    }
  }
  clickHandler(taskNum) {
    let newArray = this.state.tasks.filter((task) => task.num !== taskNum);
    this.setState({
      tasks: newArray,
    });
  }
  editHandler(taskNum) {
    // console.log("before:",this.state.tasks)
    let value = prompt("Change Task Text Here");
    console.log(value);
    if (value) {
      let newArray = this.state.tasks.map(
        (task) => (task.text = task.num === taskNum ? value : task.text)
      );
      //   console.log("before:",this.state.tasks)
      this.setState({
        // only assigning new array to state variable will not cause re rendering, for that we have to specify and use this.state.variable to trigger re rendering
        tasks: newArray,
        // by using this.state.tasks, we will cause DOM to re render to reflectr our chganges
        tasks: this.state.tasks,
      });
      // console.log("after:",this.state.tasks)
    }
  }
  render() {
    let { task, tasks } = this.state;
    return (
      <div>
        <p>Do-It-Yourself-Assignment-optional-tasks - III</p>
        <FormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleOnSubmitTask}
          value={task.text}
        />
        <Overview
          tasks={tasks}
          clickHandler={this.clickHandler}
          editHandler={this.editHandler}
        />
      </div>
    );
  }
}
