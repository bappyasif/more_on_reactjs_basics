import React from 'react'

export function SplitPane(props) {
    return (
        <div className="split-pane">
            <div className="left-pane">
                {props.left}
            </div>
            <div className="right-pane">
                {props.right}
            </div>
        </div>
    )
}
