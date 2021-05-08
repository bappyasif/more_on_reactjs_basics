import React from "react";

export function FormComponent(props) {
  return (
    <div>
      <fieldset>
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="taskInput">Enter Task</label>
          <input
            type="text"
            id="taskInput"
            value={props.value}
            onChange={props.handleChange}
          />
          <button type="submit">
            Add Task
          </button>
        </form>
      </fieldset>
    </div>
  );
}
