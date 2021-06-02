import React, { useReducer } from 'react'

export function SomeUsecases() {
    
    return (
        <div>
            <UsingReducer />
            {/* <UsingReducerWithInit initialCount={{count:20}}/> */}
            <UsingReducerWithInit initialCount={20}/>
        </div>
    )
}

let init = initCount => {
    return {count: initCount}
}

// let init = initCount => {count: initCount}

// function init(initialCount) { return {count: initialCount}}

let initialState = {count: 0}

let reducer = (state, action) => {
    switch(action.type) {
        case 'up':
            return {count: state.count + 1}
        case 'down':
            return {count: state.count - 1}
        case 'reset':
            return init(action.payload);
        default: throw new Error("something's wrong!!")
    }
}

let UsingReducer = () => {
    // let [currentState, dispatch] = useReducer(reducer, {count: initialCount || 0});
    let [currentState, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h4>Count : {currentState.count}</h4>
            <button onClick={()=>dispatch({type: 'up'})}>+</button>
            <button onClick={()=>dispatch({type: 'down'})}>-</button>
        </div>
    )
}

let UsingReducerWithInit = ({initialCount}) => {
    // let [currentState, dispatch] = useReducer(reducer, initialCount, initialState);
    let [currentState, dispatch] = useReducer(reducer, initialCount, init);
    return (
        <div>
            {console.log(currentState)}
            <h4>Count : {currentState.count}</h4>
            <button onClick={()=>dispatch({type: 'reset', payload: initialCount})}>reset</button>
            <button onClick={()=>dispatch({type: 'up'})}>+</button>
            <button onClick={()=>dispatch({type: 'down'})}>-</button>
        </div>
    )
}