import React from "react";

export function ListItem(props) {
  let value = props.value;
  // it's not recommended to use key in separated from compoennt where array method is called
  // return <li key={value.toString()}>{value}</li>;

  // key will be used in where array exists in component
  return <li>{value}</li>;
}
