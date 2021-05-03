import React from "react";

export function JokeItem(props) {
  return (
    <div className="joke-item">
      {/* <p>{props.question ? Question: {props.question}: ""}</p> */}
      {/* <p style={{display: props.question ? "block" : "none"}}>Question: {props.question}</p> */}
      <p style={{display: !props.question && "none"}}>Question: {props.question}</p>
      {/* {props.question ? <p>Question: {props.question}</p> : ""} */}
      <span style={{fontSize: !props.question && "1.3em", color: "maroon", textAlign: "justify" }}>Punch Line: {props.punchLine}</span>
    </div>
  );
}
