import React from "react";

export function ProductItem(props) {
  let styles = {
    color: "lightcoral",
    fontSize: "1.3em",
    borderBottom: "2px solid silver",
  };
  let datas = `Product: ${props.name}, Price: ${props.price}, Description: ${props.desc}`;
  return (
    <div style={styles}>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.desc}</p>
      <button onClick={() => alert(datas)}>Click Here</button>
    </div>
  );
}
