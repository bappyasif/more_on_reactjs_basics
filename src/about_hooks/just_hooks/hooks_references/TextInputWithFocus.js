import React, { useRef } from 'react'
// useRef returns a mutable ref object whose .current property is initialized to passed argument(initialValue), will persist lifetime of component
export function TextInputWithFocus() {
    //  a common use case is to access a child compoenent imperatively
    let inputEl = useRef(null);
    // "current" points to mounted text input element
    let handleClick = () => inputEl.current.focus();
    // essentially, useRef is like a "box" that can hold a mutable value in its .current property
    
    return (
        <div>
            {/* if we pass a ref object to react with "ref", react will set it's .current property to corresponding DOM node */}
            <input ref={inputEl} type="text" />
            {/* mutating .current property doesnt cause a re render, if we want to run some code upon attaching or detaching a ref then we might want use a callback ref  */}
            <button onClick={handleClick}>focus input</button>
        </div>
    )
}