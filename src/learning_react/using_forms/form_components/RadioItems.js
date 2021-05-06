import React from "react";
import { FormItem } from "../FormItem";

export function RadioItems(props) {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <FormItem
        type="radio"
        // name="gender"
        // type={props.type}
        name={props.name}
        value="female"
        checked={props.checked === "female"}
        onChange={props.onChange}
      />
      <FormItem
        type="radio"
        // name="gender"
        value="male"
        // type={props.type}
        name={props.name}
        // value={props.value}
        checked={props.checked === "male"}
        onChange={props.onChange}
      />
    </div>
  );
}
