import React from "react";
import { CheckboxItems } from "./form_components/CheckboxItems";
import { RadioItems } from "./form_components/RadioItems";
import { SelectItem } from "./form_components/SelectItem";
import { TextAndNumberType } from "./form_components/TextAndNumberType";

export function FormComponentUiRender(props) {
  return (
    <div>
      <h4>Travelling Form</h4>
      <fieldset>
        <form onSubmit={props.handleSubmition}>
          <TextAndNumberType
            // type="text"
            // name="firstName"
            firstName={props.firstName}
            lastName={props.lastName}
            age={props.age}
            onChange={props.onChange}
          />
          <RadioItems
            type="radio"
            name="gender"
            checked={props.gender}
            onChange={props.onChange}
          />
          <p />
          <SelectItem
            name="location"
            onChange={props.onChange}
            value={props.location}
          />
          <p />
          <CheckboxItems
            type="checkbox"
            checked={props.lactoseFree}
            onChange={props.onChange}
          />
          <button type="submit">submit</button>
        </form>
      </fieldset>
    </div>
  );
}
