import React from "react";

export let Overview = (props) => {
  let { tasks, clickHandler } = props;
  let displayTasks = tasks.map((task) => {
    console.log(task.id, task.num);
    return (
      <li key={task.id}>
        {task.text} {task.num}{" "}
        <span className="del-btn" onClick={() => clickHandler(task.num)}>
          X
        </span>
      </li>
    );
  });
  return <h4>{displayTasks}</h4>;
};
