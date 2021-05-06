import React from "react";
import { FormItem } from "../FormItem";

export function TextAndNumberType(props) {
  return (
    <div>
      <FormItem
        type="text"
        name="firstName"
        // type={props.type}
        // name={props.firstName}
        value={props.firstName}
        onChange={props.onChange}
      />
      <FormItem
        type="text"
        name="lastName"
        // type={props.type}
        // name={props.lastName}
        value={props.lastName}
        onChange={props.onChange}
      />
      <FormItem
        type="number"
        name="age"
        // name={props.age}
        value={props.age}
        onChange={props.onChange}
      />
    </div>
  );
}
