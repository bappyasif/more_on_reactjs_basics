import React, { useState } from "react";

export function HookDemo() {
  let [ans, setAns] = useState("yes");
  let [count, setCount] = useState(0);
  // setAns("Yes");
  // setAns(() => {
  //     setAns("no");
  // })

  setTimeout(() => setAns("no"), 2000)

  let handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  let handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  let handleChange = (op, by=1) => {
      switch(op){
          case "+":
            setCount(prevCount=>prevCount + by);
            break;
        case "-":
            setCount(prevCount=>prevCount - by);
            break;
        case "*":
            setCount(prevCount=>prevCount * 2);
            break;
        case "/":
            setCount(prevCount=>Math.round(prevCount / 2))
            break;
        default:
            return "?!";
      }
    //   setCount(prevCount=>prevCount +op+ 1)
  }

  return (
    <div>
      <p>
        using useState hook, to access component state variable and its values
      </p>
      <h4>is hooks important to know? answer: {ans}</h4>
      <h4>Count : {count}</h4>
      <button onClick={handleCount}>increment count</button>
      <button onClick={handleDecrement}>decrement count</button>
      <button onClick={() =>handleChange("+", 4)}>increment count by 4</button>
      <button onClick={() =>handleChange("-", 4)}>decrement count by 4</button>
      <button onClick={() =>handleChange("+")}>increment count by 1</button>
      <button onClick={() =>handleChange("-")}>decrement count by 1</button>
      <button onClick={() =>handleChange("*")}>multiply count by 2</button>
      <button onClick={() =>handleChange("/")}>half count</button>
    </div>
  );
}
