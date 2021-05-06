import React from "react";
import { FormItem } from "../FormItem";

export function CheckboxItems(props) {
  return (
    <div>
      <label>dietary restrictions if any :</label>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <FormItem
          type={props.type}
          name="isVegan"
          checked={props.isVegan}
          onChange={props.onChange}
        />
        <FormItem
          type={props.type}
          name="nonVegan"
          checked={props.nonVegan}
          onChange={props.onChange}
        />
        <FormItem
          type={props.type}
          name="isKosher"
          checked={props.isKosher}
          onChange={props.onChange}
        />
        <FormItem
          type={props.type}
          name="lactoseFree"
          checked={props.lactoseFree}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}
