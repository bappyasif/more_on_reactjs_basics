import React from 'react'

export function LoginButton(props) {
    return (
        <div>
            <button onClick={props.onClicked}>
                Login
            </button>
        </div>
    )
}
