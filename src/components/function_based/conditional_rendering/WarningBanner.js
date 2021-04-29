import React from 'react'

export function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }

    return (
        <div>
            Warning!!
        </div>
    )
}
