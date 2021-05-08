import React from "react";

export let Overview = (props) => {
  let { tasks } = props;
  let displayTasks = tasks.map((task) => {
    console.log(task.id);
    return <li key={task.id}>{task.text}</li>;
  });
  return <h4>{displayTasks}</h4>;
};
