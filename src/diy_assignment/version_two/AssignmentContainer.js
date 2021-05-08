import React, { Component } from "react";
import uniqid from "uniqid";
import { FormComponent } from "./components/FormComponent";
import { Overview } from "./components/Overview";

export class AssignmentContainerVersionTwo extends Component {
  constructor() {
    super();
    this.state = {
      task: { text: "", id: uniqid() },
      tasks: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnSubmitTask = this.handleOnSubmitTask.bind(this);
  }
  handleChange(evt) {
    this.setState({
      task: {
        text: evt.target.value,
        // as we have unique id to be added within tasks too, we need to update that state variable as well
        id: this.state.task.id,
      },
    });
  }
  handleOnSubmitTask(evt) {
    evt.preventDefault();
    this.setState({
      // using push method would also invoke error, that's why using concat, so that we dont directly change state
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "", id: uniqid() },
    });
  }
  render() {
    let { task, tasks } = this.state;
    return (
      <div>
        <p>Do-It-Yourself-Assignment</p>
        <FormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleOnSubmitTask}
          value={task.text}
        />
        <Overview tasks={tasks} />
      </div>
    );
  }
}
