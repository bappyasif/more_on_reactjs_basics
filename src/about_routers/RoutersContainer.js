import React from "react";
import { KnowingRouters } from "./getting_to_know_reactRouter/KnowingRouters";

export function RoutersContainer(props) {
  return (
    <div>
      <button onClick={() => props.clickHandler(!props.show)}>
        Show Workouts About Routers
      </button>
      <div style={{display: props.show ? "block" : "none"}}>
        <p>getting to know ReactRouters</p>
        <KnowingRouters />
      </div>
    </div>
  );
}
