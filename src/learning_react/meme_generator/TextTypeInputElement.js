import React from "react";

export function TextTypeInputElement(props) {
  return (
    <div>
        <input
          name={props.name}
          placeholder={props.label}
          type="text"
          value={props.value}
          onChange={props.onChange}
          style = {{
            backgroundColor: "silver",
            color: "darksalmon",
            fontSize: "1.3em",
            textAlign: "center"
          }}
        />
    </div>
  );
}
