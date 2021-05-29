import React from 'react'
// import PropTypes from "prop-types";
import { UsingProptypes } from './UsingProptypes'

export function ProptypesContainer() {
    return (
        <div>
            <UsingProptypes name="Lara" />
            {/* this following would throw an warning in console saying types mismatch expecting string but recieving number type */}
            <UsingProptypes name={1} />
        </div>
    )
}

// ProptypesContainer.propTypes = {
//     name: PropTypes.string
// }