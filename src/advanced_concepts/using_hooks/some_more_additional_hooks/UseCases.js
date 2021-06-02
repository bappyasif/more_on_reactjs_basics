import React, { forwardRef, useDebugValue, useEffect, useImperativeHandle, useRef, useState } from 'react'

export function UseCases() {
    return (
        <div>
            <Timer />
            <FancyInput />
            <UsingDebug />
        </div>
    )
}

let Timer = () => {
    let [count, setCount] = useState(0);
    let intervalRef = useRef();
    // useRef creates a plain javascript object, only difference between {} and useRef() is useRef() gives same object on every render, and {} that wouldn't, it'd be considered as new object at each render
    useEffect(() => {
        let timerID = setInterval(() => {
            setCount(c=>c+1)
        }, 1001)
        // if we just wanted to set an interval, we wouldn't need ref (simple timerID would be effective enough)
        // but it's useful when we wnat to clear timer interval from an event handler, we can use this useRef instance variable
        // typically refs should be handled within event handlers and effcts, not in redners that could cause bugs
        intervalRef.current = timerID;
        return() => {
            clearInterval(intervalRef.current);
        }
    })
    let clickHandler = () => clearInterval(intervalRef.current);
    useDebugValue(new Date().toString());
    return (
        <div>
            <h4>Count: {count}</h4>
            <button onClick={clickHandler}>halt counts</button>
        </div>
    )
}

// useImperativeHandle customizes instances value that is exposed to parent components when using ref, and uses should be avoided in most cases
// useImperativeHandle should be used with forwardRef
let FancyInput = (props, ref) => {
    let inputRef = useRef();
    useImperativeHandle(ref, ()=>({
        focus: () => inputRef.current.focus()
    }))
    return (
    <div>
        <input ref={inputRef} />
        <button onClick={()=>inputRef.current.focus()}>focus</button>
    </div>
    )
}

FancyInput = forwardRef(FancyInput);

let UsingDebug = () => {
    let [isOline, setStatus] = useState(null);
    useDebugValue(isOline ? 'online' : 'offline');
    return isOline;
}