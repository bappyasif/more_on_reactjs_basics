import React from "react";

export function FormComponent(props) {
  return (
    <div>
      <fieldset>
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            value={props.value}
            onChange={props.changeHandler}
            placeholder="enter data"
          />
          <button type="submit">click to add here!!</button>
        </form>
      </fieldset>
    </div>
  );
}
