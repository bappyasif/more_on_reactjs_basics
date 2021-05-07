import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

// useEffect mimicks these lifecycle methods from a class component
// componentDidMount, componentDidUpdate, and componentWillUnmount

// useEffect is used for these scenarios, which mainly causes side effects, such as
// network requests, dom manipulation, event listeners, timeouts, intervals and as such

export function DemoUsage() {
  let [count, setCount] = useState(0);
  let [ans, setAns] = useState("yes");
  let [randClr, setColor] = useState("");
  let [btnClr, setClr] = useState(randomcolor());

  let increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  let decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    // randClr = randomcolor();
    setColor(randomcolor());
    // count is dependency list to watch for re rendering, re rendering will happen only when count variable is changed and not otherwise
  }, [count]);

  // useEffect(() => {
  //     // randClr = randomcolor();
  //     setColor(randomcolor());
  //     // it will only run once, and not run again
  // }, [])

  return (
    <div>
      <p>using useEffect hook with useState hook together</p>
      <p>is learning hooks important? {ans}</p>
      <h4 style={{ color: randClr }}>Count : {count}</h4>
      <button style={{backgroundColor: btnClr}} onClick={increment}>increment</button>
      <button style={{backgroundColor: btnClr}} onClick={decrement}>decrement</button>
    </div>
  );
}
