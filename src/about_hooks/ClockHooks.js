import React, {useState, useEffect} from 'react';

export function ClockHooks() {
    let [time, setTime] = useState(new Date());
    let changeTime = () => {
        setTime(new Date())
    }
    useEffect(() => {
        let tick = setInterval(() => changeTime(), 1000);
        return () => {clearInterval(tick)}
    })
    return (
        <div>
            <p>hello!! clcok component using hooks</p>
            <h4>it is now {time.toLocaleTimeString()}</h4>
        </div>
    )
}
