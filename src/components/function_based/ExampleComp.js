import React from 'react'

// props are passed as an argument to component itself rather than to constructor for class components
export function ExampleComp(props) {
    let {title} = props;
    return (
        <div>
            <p>Accessing value of Props from a functional component</p>
            <h4>Title : {props.title}</h4>
            <h4>Title : {title}</h4>
        </div>
    )
}
