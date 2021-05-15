import React, { useState, useEffect } from "react";
import { useUserLoginStatus } from "./custom_hooks/useUserLoginStatus";

export function HooksAtAGlance() {
  // State Hook:
  // react will preserve this state between re renders, returns a pair, current value and an updater function, we can call this function from venthanlers or elsewhere
  // it's similar to this.setState except, it doesn't merge old state with new state together, initial state argument is only used during first render, and its value can be an object or primitives
  let [count, setCount] = useState(0);

  // it can have multiple state variable declarations and usage within a component
  // react assumes when useState is called many times, it maintains same order at each renders

  // Effect Hook:
  // tasks that can affect other components and can't be done during rendering are called Effects, short for Side Effects (e.g. data fetching, subscriptions and as such)
  // this adds ability to perform side effects from a functional component, serves same purpose as componentDidMount, componentDidUpdate, componentWillUnmount methods from class components
  useEffect(() => (document.title = `you've clicked ${count} times!!`));
  // when we call useEffect, react runs our effect function after flushing changes to DOM
  // effects are declared inside component so that they have access to props and state, by default runs after every render
  // it can also specify how to clean up after, by returning a function
  useEffect(() => {
    let timer = setTimeout(() => setCount(42), 1001);
    return () => clearTimeout(timer);
  });
  // in that example react woul clearout timer, that was introduced in that effect function, so that there is no memory leakage of any sort
  // we can also use useEffect multiple times, to encapsulate functionality better, reducing unnecessary code spliting among lifecycle methods for various purposes, thus reducing unwanted bugs

  // Rules Of Using Hooks:
  // <> only call hooks at top level of component, dont call hooks inside loops, conditions or nested functions
  // <> only call hooks from react functional components, dont call hooks from regular Javascript functions, except its called from customHooks that we created

  // building a custom hook:
  // sometimes we want to reuse some stateful logic between components, traditionally we'd have used hoc or render props
  // custom hooks lets us do that same, but without adding more components to our component tree
  let userStat = useUserLoginStatus("#btn");
  // console.log("user:", userStat);
  // we are using a custom hook named useUserLoginStatus(btnID), so that from that hook it returns state of user's current login status
  // based on that returned isOnline value, we will render button and div text, and in that custom hook we have a changeHandler which will basically toggle users login status on click

  // state of each component is completely independent, hooks are a way to reuse stateful logic, not logic itself
  // each call to a hook has completely isolated state, so we can even same custom hook for more than once in same component, and each of them will reflect on seperate state value
  // custom hooks are more of an convention than a feature, if a function name starts with "use" and it calls other hooks, we say its a custom hook
  // we can write custom hooks for variety of aspects, such as, handling, animation, declarative subscription, timers and so on

  // Other Hooks:
  // there are other hooks that are not quite frequent in use but might be useful, such as useContext, useReducer and among others
  // to name a few additional hooks, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useDebugValue
  
  return (
    <div>
      <p>simple counter using hooks</p>
      <h4>Count : {count}</h4>
      <button onClick={() => setCount(count + 1)}>increment count</button>
      <br />
      {/* using a custom hook */}
      <h4>user is currently {userStat ? "online" : "offline"}</h4>
      <button id="btn">{userStat ? "logout" : "login"}</button>
    </div>
  );
}
