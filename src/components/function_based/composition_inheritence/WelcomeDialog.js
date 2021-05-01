import React from "react";
import { FancyBorder } from "./FancyBorder";

export function WelcomeDialog(props) {
  return (
    <div>
      <FancyBorder color="coral">
        <h4 className="fancy-title">{props.title}</h4>
        <p className="fancy-message">{props.desc}</p>
        {props.children}
      </FancyBorder>
    </div>
  );
}
