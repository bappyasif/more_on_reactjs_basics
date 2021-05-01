import React from 'react'

export function FancyBorder(props) {
    return (
        <div className={"fancy-border fancy-border-"+props.color}>
            {props.children}
        </div>
    )
}
