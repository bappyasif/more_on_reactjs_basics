import React from 'react'

export function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} />
            {/* <p>{props.text}</p> */}
            <p>{props.item.text}</p>
        </div>
    )
}
