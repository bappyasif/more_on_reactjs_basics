import React, {useState} from 'react';

export function CounterHooks() {
    let[count, setCount] = useState(0);
    const incrementCount = () => setCount(count+1);
    return (
        <div>
            <p>count: {count}</p>
            {/* setting a state is an asynchronous task */}
            {/* setting state calls a re render */}
            <button onClick={incrementCount}>increment count</button>
        </div>
    )
}
