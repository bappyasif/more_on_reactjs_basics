import React from 'react'

export function HigherOrderComponentsContainer() {
    // a higher order component is an advanced technique in React for reusing component logic
    // basically, a higher order component is a function that takes a component as an argument and returns a new component
    // whereas a component transforms props into UI, a higher order component transforms a component into another component, a popular library for that is, 'connect' from redux
    return (
        <div>
            <p>using HOC's</p>
        </div>
    )
}
