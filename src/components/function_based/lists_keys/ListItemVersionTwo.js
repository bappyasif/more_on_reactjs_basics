import React from "react";
import { ListItem } from "./ListItem";

export function ListItemVersionTwo(props) {
  let numbers = props.numbers;
  console.log(numbers);
  let listItems = numbers.map((num) => (
    <ListItem key={num.toString()} value={num} />
  ));
  return <ul>{listItems}</ul>;
}
