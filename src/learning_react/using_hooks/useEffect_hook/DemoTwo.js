import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

export function DemoTwo() {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState("");

  // with cleanup process included
  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);

    // by using this return functiojn use effect will ensure that that sideeffects been unmounted when moving away from it, preventing any potential memory leaks there might be
    return () => clearInterval(interval);
  }, []);

  // without any cleanup process
  //   useEffect(() => {
  //     setInterval(() => {
  //       setCount((prevCount) => prevCount + 1);
  //     }, 2000);
  //   }, []);

  useEffect(() => {
    // setInterval(() => {
    //   setCount((prevCount) => prevCount + 1);
    // }, 2000);
    setColor(randomcolor());
    // this dependency list will cause an infinite due to setInterval, as count would change and triggger setInterval in motion which inturnis trigger their own setInterval and so forth and so on
    // to stop this we'll use an empty array to reflect this code to run once at each interval and not more than that, for thgat we 'll uyse a separate useEffect hook to delegate that
  }, [count]);
  return (
    <div>
      <p>
        cleanup process using useEffect hook after any side effects to prevent
        any memory leaks
      </p>
      <h4 style={{ color: color }}>Count : {count}</h4>
    </div>
  );
}
