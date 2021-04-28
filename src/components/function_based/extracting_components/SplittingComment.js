import React from "react";
import { ExrtactingUserinfo } from "./ExrtactingUserinfo";

export function SplittingComment(props) {
  return (
    <div>
      <ExrtactingUserinfo user={props.author} />
      <div>{props.text}</div>
      <div>{props.date}</div>

      {/* <ExtractAvatar user={props.author} />
      <div>{props.author.name}</div>
      <div>{props.text}</div>
      <div>{props.date}</div> */}

      {/* <img src={props.author.avatarUrl} alt={props.author.name} />
      <div>{props.author.name}</div>
      <div>{props.text}</div>
      <div>{props.date}</div> */}
    </div>
  );
}
