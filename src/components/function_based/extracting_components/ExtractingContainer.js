import React from "react";
import { SplittingComment } from "./SplittingComment";

export function ExtractingContainer(props) {
  let comment = {
    date: Date(),
    text: "enjoy react",
    author: {
      name: "hallo kitty",
      avatarUrl: "https:/placekitten.com/g/65/65",
    },
  };
  return (
    <div>
      <SplittingComment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </div>
  );
}
