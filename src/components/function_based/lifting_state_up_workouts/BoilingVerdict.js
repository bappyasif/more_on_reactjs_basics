import React from "react";

export function BoilingVerdict(props) {
  // props has a celsius temperature and prints whether it's hot enough to boil water
  if (props.celsius >= 100) {
    return <p>this would boil water</p>;
  }
  return <div>water would not boil</div>;
}
