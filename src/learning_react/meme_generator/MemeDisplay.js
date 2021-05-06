import React from "react";

export function MemeDisplay(props) {
  let textStyle = {
    position: "absolute",
    paddingLeft: "128px",
    paddingRight: "128px",
  };
  // let bottomTextStyle = {
  //   position: "absolute",
  //   paddingLeft: "128px",
  //   paddingRight: "128px"
  // }
  return (
    <div>
      <h2 style={textStyle}>{props.data.topText}</h2>

      <img
        src={props.data.randomImg}
        alt="meme-generated"
        style={{ width: "470px", height: "440px" }}
      />
      <h2 style={textStyle}>{props.data.bottomText}</h2>
    </div>
  );
}
