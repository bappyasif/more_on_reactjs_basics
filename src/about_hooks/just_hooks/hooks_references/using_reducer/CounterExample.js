import React, { useReducer } from "react";

// useReducer is an alternative to useState, accepts a reducer function which tyakes in two arguments, namely, state and action, and determines newState
// useReducer returns current state paired with a dispatch method, this hook is preferrrable when we have a complex statel ogic that involves multiple sub values or when next state is dependent on previous state
// useReducer also lets up optimize performance for components that trigger deep updates because we can pass down dispatch instead of callbacks

// useRerducer needs a initalState, reducer function and useReducer hook within component
let initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
        throw new Error("something's wrong!!");
  }  
}

export function CounterExample() {
    // useReducer hook takes in two arguments, reducer and initial state, and returns current state and dispatch method, to bring necessary changes in state
    let [state, dispatch] = useReducer(reducer, initialState);
    // if we like we can pass initial state as a second argument in useReducer hook call
    // let [state, dispatch] = useReducer(reducer, {count: 0});
  return <div>
      <p>count : {state.count}</p>
      {/* react guarantees dispatch function identity will remain stable and wont change on re renders, thats it's safe to omit useEffect or useCallback */}
      <button onClick={() => dispatch({type: "increment"})}>increment</button>
      <button onClick={() => dispatch({type: "decrement"})}>decrement</button>
  </div>;
}