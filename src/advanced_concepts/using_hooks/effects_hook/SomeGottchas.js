import React, { useEffect, useState } from 'react'

export function SomeGottchas() {
    
    return (
        <div>
            <HasBugs />
            <FixedBugs />
            <FixedBugsWithPause />
            <FixedBugsWithReset />
        </div>
    )
}

let HasBugs = () => {
    let [count, setCount] = useState(0);
    useEffect(() => {
        let timerID = setInterval(() => {
            setCount(count + 1); // depends on 'count' state
        }, 1001)
        return () => clearInterval(timerID)
        // empty dependency means, it will only run once and not on any subsequent changes
        // problem is that inside setInterval callback, value of count does not change, and it only changes to 1 and never beyond that on each interval, as it should have been
        // we could have solved that bug by specifying [count], but would cause interval to reset on each change
        // effectively each setinterval would get one chance  to execute before being cleared out, that may not be desirable, to fix this we can use functional form of useState, it lets us specify how state needs to change without referencing current state
    }, [] /*[count]*/) // 'count is not sprecefied as dependency, causing bugs

    return <h4>Count: {count}</h4>
}

let FixedBugs = () => {
    let [count, setCount] = useState(0);
    useEffect(() => {
        let timerID = setInterval(() => {
            setCount(c => c+1) // this way, doesnt depend on 'count' variable outside
        }, 1001)
        return () => {
            console.log("clearing timer");
            clearInterval(timerID)
        }
    }, []) // our effect doesn't use any variables in component scope, so doesn't require any dependency list to trigger changes
    return <h4>Count :: {count}</h4>
}

let FixedBugsWithPause = () => {
    let [count, setCount] = useState(0);
    let [pause, setPause] =  useState(false);

    let clickHandler = () => {
        // setCount(0);
        setPause(!pause);
    }

    useEffect(() => {
        let timerID = setInterval(() => {
            if(pause) {
                setCount(c => c+1)
            } else if (!pause) {
                clearInterval(timerID)
            }
        }, 1001)

        return () => {
            console.log("clearing timer");
            clearInterval(timerID);
            // clickHandler();
        }
    }, [pause]) // our effect doesn't use any variables in component scope, so doesn't require any dependency list to trigger changes
    return (
        <div>
            <h4>Count :: {count}</h4>
            <button onClick={clickHandler}>{pause ? "" : "un"}pause timer</button>
        </div>
    )
}

let FixedBugsWithReset = () => {
    let [count, setCount] = useState(0);
    // let [pause, setPause] =  useState(false);
    let timerID;
    let clickHandler = () => {
        // setPause(true);
        // clearTimeout(timerID);
        setCount(0)
        console.log("timer ID", timerID)
    }

    useEffect(() => {
        timerID = setInterval(() => {
            setCount(c => c+1) // this way, doesnt depend on 'count' variable outside
        }, 1001)

        return () => {
            console.log("clearing timer");
            clearInterval(timerID);
            // clickHandler();
        }
    }, []) // our effect doesn't use any variables in component scope, so doesn't require any dependency list to trigger changes
    return (
        <div>
            <h4>Count :: {count}</h4>
            <button onClick={clickHandler}>reset timer</button>
        </div>
    )
}