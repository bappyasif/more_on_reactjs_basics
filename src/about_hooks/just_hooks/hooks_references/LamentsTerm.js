import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export function LamentsTerm() {
  // useEffect is a place where we place our imperative code within our functional components, and it's invoked at each render but can be choose not to when dependency value didnt change
  // useEffect is also a place for cleanup after every render or when component is unmounted, to avoid any potential memory leaks
  // useEffect(() => console.log(props1), [props1]) // considering props1 would change only once, useeffect will run twice, once on mount and another on change

  // useContext must recieve an context object, as in returned value from React.createContext, not from .Provider or .Consumer, and returns current value for that context
  // value returned from useContext is determined by value prop of nearest Provider in DOM tree, provided other Provider also has same prop as value for their Consumer
  // if ancestor uses React.memo or shouldComponentUpdate, component that uses useContext, if it has an updated value, it will be re rendered , and if it is too expensive then we can consider using memoization
  // useContext lets read context and subscribe to its changes, but we still need a Provider above in component to provide value to be read by useContext subscribers

  // useReducer an alternative to useState, when invoked returns an array that holds current state value and a dispatch method, it can take 2 or 3 arguments as a parameter, where 3rd parameter is used for initial state so that it can be accessible for any action type when needed
  // with useState we update using updater function but with useReducer we use dispatch function to pass it an action and a payload as convention (e.g. {type: "increase"}, payload: 20)
  // reducer function that is passed as 1st parameter to useReducer, takes in 2 parameter, namely, state and action and returns a new state based on that, which is manged and passed to reducer by useReducer from our components
  // when not provided with 3rd argument to useReducer, state value will be considered as initial state value

  // useCallback and useMemo is quite similar except, useCallback returns a memoized function and useMemo returns a memoized value
  // useCallback and useMemo are could be same when, called as such useCallback(fn, deps) === useMemo(()=>fn, deps), which is why useMemo became alternative to useCallback in tha case, otherwise as ditinctly sepearted as they would
  // we should always to run our code without useMemo beforehand, and use it for optimization, by using array dependency list we'll ensure to avoid each unnecessary renders

  // useRefreturns a mutable object whose value is set as: {current: initialValue} (e.g. {current: *doim node*}, <div ref={smRef} />), and remains same throughout component lifetime across re render and that's how its differes from any manually setting an object as a re placement of useRef
  // when we update value stored useRef by a new value, it wil remain so untill we change it again when needed (e.g. {initialProp.current: *new value*})
  // by using ref we can use it as a variable, and do mutations yjpuhj use fo 'current' as required within effects function as we see fit
  // useRef don't notify its content changes, and consequently doesn't cause a re render
  let [height, setHeight] = useState(0);
  // creating an optimised callback via useCallback
  let measuredRef = useCallback((node) => {
    // callback passed to 'ref' will recieve DOM node as an argument
    if (node) setHeight(node.getBoundingClientRect().height);
  }, []);

  // useImperativeHandle takes a ref object and a createHandle function whose return value 'replaces' stored value in 'ref' object (e.g. useImperativeHandle(ref, createHandle, [deps]))
  // also note, useImperativeHandle should be used with forwardRef, as in do something when something happens, consider this following example, when on xlick input elelment gets focused
  let inputRef = useRef(null);
  let handleClick = () => inputRef.current.focus();

  let anotherRef = useRef(null);
  let handleClick2 = () => anotherRef.current.focus();

//   let anotherRef3 = useRef(<InputWithImperativeHandle ref={useRef(null)} />);
//   console.log("<>",anotherRef3)
let inputRef3 = useRef(null);
  let handleClick3 = () => inputRef3.current.focus();

  return (
    <div>
      <p>react hook documentation in lments term</p>
      <StateDependent />
      <MergingState />
      {/* if expensive calculations done within functional component, then consider using useMemo for optimization efforts, that is to say, to bailout from unnecessary renders */}

      {/* using state, callback and ref hooks */}
      <h2 ref={measuredRef}>'sup world!!</h2>
      <h4>above header is {Math.round(height)}px tall</h4>

      {/* using refs, this works perfectly alright, but we can use forwardRef to do just same as well */}
      <input ref={inputRef} />
      <button onClick={handleClick}>focus input</button>
      {/* with forwardRef */}
      <InputWithForwardRef ref={anotherRef} />
      <button onClick={handleClick2}>focus input</button>
      {/* however in these ref situations parent component has full access to input element what if we dont want that and just expose a focus function, thats all parent compoenent needs, and thats where useImperativeHandle comes in */}
      {/* <InputWithImperativeHandle ref={anotherRef3} /> */}
      <InputWithImperativeHandle ref={inputRef3} />
      {/* {console.log(
        <InputWithImperativeHandle />,
        <InputWithImperativeHandle ref={anotherRef3} />
      )} */}
      <button onClick={handleClick3}>focus input</button>
    </div>
  );
}

let InputWithImperativeHandle = forwardRef((props, ref) => {
  // creating an internal ref object to hold actual; input dom node
  let inputRef = useRef(null);
  // passing ref from parent to useImperativeHandle and replace its value with createHandle function
  useImperativeHandle(ref, () => ({
    // instead of parent having full access now has acces to current which points to focus, which is implemented within useImperativeHandle
    focus: () => {
      inputRef.current.focus();
    },
  }));
  // passing internal ref to input to hold dom node
  return <input ref={inputRef} {...props} />;
});

let InputWithForwardRef = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

let LazyInitialization = (smProp) => {
  // is OK
  let [state, setState] = useState(20);

  // subsequent props update will be ignored
  let [state2, setState2] = useState(smProp);
};

let HooksDependency = () => {
  let [state, setState] = useState(0);
  // before: re-render would trigger when there is a change in state or setState
  useEffect(() => {
    setState(state * 20);
  }, [state, setState]);
  // after: when we want it to run on munt only
  useEffect(() => {
    setState((prevState) => prevState * 20);
  }, [setState]); // only using setState we can prevent unnecessary re render
  // return (<div onClick={() => state+1}>{state}</div>)
};

let MergingState = () => {
  let [state, setState] = useState({ name: "react" });
  // without merging
  let updateStateWithoutMerging = () => setState({ madeBy: "facebook" });
  // with merging
  let updateStateWithMerging = () =>
    setState((prevState) => ({
      ...prevState,
      madeBy: "facebook",
    }));
  return (
    <>
      <p>merging state</p>
      <pre>{JSON.stringify(state)}</pre>
      <button onClick={updateStateWithoutMerging}>
        update state without merging
      </button>
      <button onClick={updateStateWithMerging}>
        update state With Merging
      </button>
    </>
  );
};

let StateDependent = () => {
  let [width, setWidth] = useState(42);
  let increaseWidth = () => setWidth((prevWidth) => prevWidth + 20);
  return (
    <div>
      <div>state value dependent on previous value</div>
      <button style={{ width: width }} onClick={increaseWidth}>
        click to see grow
      </button>
    </div>
  );
};
