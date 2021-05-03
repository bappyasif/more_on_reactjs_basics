import React from "react";

export function DemoClock() {
  let date = new Date();
//   date = new Date(2020, "\04", "\03", 10);  // depricated
// date = new Date(2020, 0o4, 0o3, 15); // in use
  let hours = date.getHours();
  let timeOfDay;

  let greeStyles = {
    fontSize: 38,
    backgroundColor: "green",
    width: "max-content",
    margin: "auto",
    marginTop: ".5em"
  };

  let dayStyles = {
      fontSize: 47,
      backgroundColor: "coral"
  }

  if (hours < 12) {
    timeOfDay = "goedmorgen";
    greeStyles.color = "green";
    dayStyles.color = "greenyellow"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "goedmiddag";
    greeStyles.color = "yellow";
    dayStyles.color = "greenyellow"
  } else {
    timeOfDay = "goednacht";
    greeStyles.color = "blue";
    dayStyles.color = "greenyellow"
  }

  let hourStyles = {
    color: "sandybrown",
    backgroundColor: "green",
    width: "max-content",
    margin: "auto",
    marginTop: 2 + "em",
    fontSize: 29,
  };
  return (
    <div>
      <h4 style={hourStyles}>
        Hour Now: {hours % 12} {hours % 12 > 12 ? "AM" : "PM"}
      </h4>
      <h2 style={greeStyles}>
        wishing you a <span style={dayStyles}>{timeOfDay}</span>
      </h2>
    </div>
  );
}
