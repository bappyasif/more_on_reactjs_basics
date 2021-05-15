import React, { useState, useEffect } from "react";

export function UsageOfUseState() {
  let [bgColor, setColor] = useState("blue");

  // syntax is useEffect(()=>{},[]), withing curly braces we add code to be executed, dependency array at end is optional but mostly gets used
  // a dependency can be any state, prop, context that is used within useEffect callback, we can also use styate and props that are not within useEffect code as well
  useEffect(() => {
    let changeColorOnClick = () => {
      bgColor === "blue" ? setColor("maroon") : setColor("blue");
    };

    let bgDiv = document.querySelector("#bgDiv");
    // document.addEventListener("click", changeColorOnClick);
    bgDiv.addEventListener("click", changeColorOnClick);

    // return statement is equal to componentWillUnmount method
    return () => {
      //   document.removeEventListener("click", changeColorOnClick);
      bgDiv.removeEventListener("click", changeColorOnClick);
    };

    // when leave dependency list empty, [], this option is equal to a componentDidMount lifecycle method, meaning hook runs only once, when component is mounted
    // when we have a dependency list, [bgColor], useEffect wil re run each time bgColor changes, this is similar to componentDidUpdate method, with only difference that it only runs when a certain condition is met or changed
    // when we leave out dependency array complete from useEffect, this will run anytime there is a change in component at anytime, right after initial render, this option is a combination of both componentDidMount and componentDidUpdate
}, [bgColor]);
// });

  let styles = {
    color: "whitesmoke",
    width: "101px",
    height: "101px",
    position: "relative",
    left: "50%",
    top: "50%",
    backgroundColor: bgColor,
  };
  return (
    <div>
      <div id="bgDiv" style={styles}>
        this div can change color on click, using hooks
      </div>
    </div>
  );
}
