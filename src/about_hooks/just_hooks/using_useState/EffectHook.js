import React, {useState, useEffect} from 'react';

// effect hook lets us perform side effects in function components

export let EffectHook = () => {
    let [count, setCount] = useState(0);
    let [todos, setTodos] = useState({text: "learn hooks"});
    
    // similar to componentDidMount, componentDidUpdate, and componentWillUnmount
    // side effects like data fetching, subscriptions, changing DOMs in react components are example of side effects
    // there are two common kinds of side effects inreact components, those that require "cleanup" and those that doesn't
    
    // without cleanup: when we want to run  some additional code after react has updated DOM
    // network requests, DOM mutations, logging are common examples of effects that don't require a cleanup, because we run them and immediately forget about them or gabage collected
    useEffect(() => {
        document.title = "todos: "+todos.text;
    });
    // in a class components, to accomplish same effect we had to place same code in two lifecycles methods, namely, componentDidMount and componentDidUpdate
    // by using useEffect hook, we tell react to do something after render, react will remember our effect function and call it after DOM updates
    // using useEffect inside components lets us access state variables from effect hook, as it's already in function scope
    // useEffect runs at every renders, by default, it runs on initial render and any updates afer that, it's easire to think that "effects" happens "after render"
    // everytime we re render, we schedule a different effect replacing previous ones, in a way it behaves as a part of render result, each effect "belongs" to a particular render
    
    // with cleanup: when we want to setup a subscription to some external data source, we should cleanup afterwards, so that we dont introduce any memory leaks
    // in class components we have to subscribe in componentDidMount and componentDidUpdate and almost mirror code except use unsubscribe in componentWillUnmount
    // but whenb using useEffect we can do that same in that same effects function, and thus how it designed to keep related code together
    // if our effect function returns a function, react will run it when it is time to clean up

    let [time, setTime] =  useState(new Date());
    useEffect(() => {
        let timer = setInterval(() => setTime(new Date()), 1000);
        // specefying how to and what to clean up, when its time to cleanup
        return () => clearInterval(timer);
    });
    // every effect may return a function that cleans up after it, this lets us keep logic for adding and removing subscriptions close to each other, and they are part of same effect
    // react cleansup when component unmountsm we know effect runs at every render, react also cleans up effects from previous render before running effect next
    //  a cleanup function can be named or unnamed, in effects function, it would still behaves same

    // Tips for using Effects:
    // use multiple effects to separate concern: in class components related code get forcefully splitted up among several lifecycle methods, that's a motivation for Hooks, and solves it using useEffect by using state hook along with it, more than once for each, this separates unrelated logic in different parts
    // hooks lets us split code based on what it's doing, rather than in lifecycle methods, react will apply every effect used by component, in that same order they were specefied

    // why effect runs on each update: if we want to subscribe and unsubscribe in a class component we'd have to subscribe in componentDidMount/Update and unsubscribe pretty much mirror code for unsubscribing in componentWillUnmount
    // if we dont provide componentDidUpdate, this is a bug and would cause memory leak or worse, crash, and in time for unmounting, wrong item will be unmounted, forgetting componentDidUpdate is a common source of bugs in react applications
    // there is no special code for handling updates, cause useEffect handles them by default, it cleans up previous effects before running next effects
    // this behavior of separation of concerns along with cleanup in useEffect, ensures consistency by default and prevents bugs that are common in class component due to absence of Update lifecycle logic

    // tips: optimizing performance by skipping effects:
    // in some cases, cleaning up or applying effect after every render might create a performance problem
    // in class components, we can solve this by writing an extra comparison with prevProps or prevState inside componentDidUpdate
    // in useEffect we can do that same by checking certain values have changed or not, we can do so by providing an optional second parameter to useEffect as a dependency list
    useEffect(() => {
        document.title = " and clicked: "+count+" times!!";
        return () => document.title = " Learning Hooks ";
    }, [count]); // only effects when count changes
    // we passed [count] as second argument to useEffect, to compare if next render value is same as previous then it would skip and thus is optimization
    // it can also has cleanup process, when needed to in that same effects function, in future second element might get added automatically by a build transformation
    // when optimization is used, dependency array should include all values from component scope(props/state) that changes over time and that are used by effect, otherwise code will reference to stale values from previous renders
    // if we want to run an effect just once then we can pass an empty array as a second argument, effect will have their initial values and render with them and stops after that

    let handleCount = () => setCount(count+1);

    let handleChange = () => {
        // setCount(count+1);
        let tekst = prompt("new task");
        tekst ? setTodos({text: tekst}) : setTodos({text: "learn hook!!"})
    }

    return (
        <div>
            <p>todos: {todos.text}</p>
            <button onClick={handleChange}>add task</button>
            <p>current time is : {time.toLocaleTimeString()}</p>
            <button onClick={handleCount}>increment count</button>
        </div>
    )
}
