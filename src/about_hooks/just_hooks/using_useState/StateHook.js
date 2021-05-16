import React, {useState} from 'react';

// a functional components can also be defined as, Comp = props => {}
// hooks dont work inside classes, but we can use them in any functionl to components without have to write any classes

export function StateHook() {
    // hook is a special function that lets us "hook into" React stateful features from any functional components
    // when we are in need of using some state to it, we can use this useState hook to just that, without have to write class components
    let [count, setCount] = useState(0);
    // by calling useState, it declares a state variable, this way it preserve some values to it
    // normally variables "disappear" when function exits but state variables are preserved by React
    // only arguments to useState hook is initial state, unlike class componenent it doesn't have to be an object, we can simply use primitives if all that we need
    // useState returns a pair of values, current state and updater function, similar to this.state and this.setState in a class component

    // using multiple state variables, is as easy as declaring a single state variable, it would maintain same convention, just with a deifferent tuple names for each of them
    let [todos, setTodos] = useState({text: "learn hooks"});
    // let [todos, setTodos] = useState([{text: "learn hooks"}]);

    // now we can handle click handler as usual and refer it in JSX attached to an tag
    let handleClick = () => {
        let text = prompt("new task?!");
        // text ? setTodos([{text: text}]) : setTodos([{text: "learn hooks"}]);
        text ? setTodos({text: text}) : setTodos({text: "learn hooks"});
    }
    // we don't have to use many state variables if we don want to and rather hold objects and arrays instead
    // however, unlike this.setState, updating a state variable in useState always replaces previous value instead mergin it
    
    return (
        <div>
            {/* to read state value, we directly use state variable unlike this.state.variable in class components */}
            <p>count: {count}</p>
            {/* using updater function that comes with useState declaration, we can update current state value */}
            <button onClick={()=>setCount(count + 1)}>click here</button>

            {/* <p>Todos: {todos[0].text}</p> */}
            <p>Todos: {todos.text}</p>
            <button onClick={handleClick}>Add Task</button>
        </div>
    )
}
