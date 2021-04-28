import React from 'react'
import { ExtractAvatar } from './ExtractAvatar'

export function ExrtactingUserinfo(props) {
    return (
        <div>
            <ExtractAvatar user={props.user} />
            <div>{props.user.name}</div>
        </div>
    )
}
