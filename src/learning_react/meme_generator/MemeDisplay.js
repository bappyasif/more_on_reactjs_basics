import randomcolor from "randomcolor";
import React from "react";

export function MemeDisplay(props) {
  let textStyle = {
    position: "absolute",
    paddingLeft: "128px",
    paddingRight: "128px",
    color: randomcolor(),
  };
  let bottomTextStyle = {
    position: "absolute",
    paddingLeft: "128px",
    transform: "translateY(-83px)",
    color: randomcolor(),
    alignSelf: "center"
  };
  return (
    <div>
      <h2 style={textStyle}>{props.data.topText}</h2>

      <img
        src={props.data.randomImg}
        alt="meme-generated"
        style={{ width: "470px", height: "440px" }}
      />
      <h2 style={bottomTextStyle}>{props.data.bottomText}</h2>
    </div>
  );
}
