import React from "react";

export function Header() {
  let headerStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: "1.7em",
    backgroundColor: "darkred",
    color: "darksalmon",
  };
  let pngStyle = { height: "110px", width: "110px" };
  return (
    <div>
      <header style={headerStyle}>
        <img
          src="http://pngall.com/wp-content/uploads/2016/05/Trollface.png"
          alt="got problem?!"
          style={pngStyle}
        />
        <p>Meme Genrator</p>
      </header>
    </div>
  );
}
