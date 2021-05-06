import React from "react";

export function FormOutput(props) {
  return (
    <fieldset>
      <h4>Form Output</h4>
      <p>firstName: {props.firstName}</p>
      <p>lastName: {props.lastName}</p>
      <p>age: {props.age}</p>
      <p>gender: {props.gender}</p>
      <p>location: {props.location}</p>
      <p>dietary restriction if any : </p>
      <p>
        {props.isVegan ? "< Vegan : " + props.isVegan + " > " : ""}
        {props.nonVegan ? "< NonVegan : " + props.nonVegan + " > " : ""}
        {props.isKosher ? "< Kosher : " + props.isKosher + " > " : ""}
        {props.lactoseFree
          ? "< LactoseFree : " + props.lactoseFree + " > "
          : ""}
      </p>
    </fieldset>
  );
}
