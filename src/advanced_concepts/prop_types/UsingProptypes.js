import React from 'react'
import PropTypes from "prop-types";

export function UsingProptypes({name}) {
    // preface to use propTypes in react components
    // many programmers agree that defining variable type upfront would reduce chance of mis matched data type error
    // aiming at that clause, react provides a way to define to declare types using ProtoTypes
    return (
        <div>
            <h4>Hello {name}</h4>
        </div>
    )
}

UsingProptypes.propTypes = {
    name: PropTypes.string
}