import React from "react";
import {
  faCoffee,
  faEdit,
  faTrashAlt,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import randomcolor from "randomcolor";

export let Overview = (props) => {
  let { tasks, clickHandler, editHandler } = props;
  let styling = {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "4.7px",
  };
  let displayTasks = tasks.map((task) => {
    console.log(task.id, task.num);
    return (
      <li key={task.id} style={styling}>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "35vw",
            textAlign: "justify",
          }}
        >
          <FontAwesomeIcon icon={faTasks} style={{ marginRight: "8px" }} />
          {task.text}{" "}
        </span>
        <span>
          {" "}
          <FontAwesomeIcon icon={faCoffee} /> task no: {task.num}
        </span>
        <span onClick={() => editHandler(task.num)}>
          {" "}
          {/* <FontAwesomeIcon icon={['fas', 'fa-edit']} /> */}
          <FontAwesomeIcon icon={faEdit} />
        </span>
        <span onClick={() => clickHandler(task.num)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </span>
      </li>
    );
  });
  return (
    <div style={{ border: `dashed 4px ${randomcolor()}` }}>
      <h4>{displayTasks}</h4>
    </div>
  );
};
