import React from 'react'

export function Overview(props) {
    let showItems = props.data.map(item => <li key={item}>{item}</li>)
    return (
        <div>
            <p>displaying tasks</p>
            {/* {props.text}
            {props.data.length} */}
            {showItems}
        </div>
    )
}
