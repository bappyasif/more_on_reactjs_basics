import React, { useReducer } from "react";

// we can also create initial state lazily through a third argument for useReducer call in our component
// this lets us extract logic for calculating initial state outside reducer, this is also handly for reseting state later in response to an action

// let initialCount = {count: 0};
let initialCount = 0;

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case "+":
      return { count: state.count + 1 };
    case "-":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error("something's wrong!!");
  }
}

export function CounterExampleVersionTwo() {
  let [state, dispatch] = useReducer(reducer, initialCount, init);
  // if we return same value from a reducer hook as current state, react will bail out without redering children or firing effects within useEffect
  return (
    <div>
      <p>count :: {state.count}</p>
      <button onClick={() => dispatch({ type: "+" })}>+</button>
      <button onClick={() => dispatch({ type: "-" })}>-</button>
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        reset
      </button>
    </div>
  );
}
