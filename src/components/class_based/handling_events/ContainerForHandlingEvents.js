import React, { Component } from 'react'
import { Toggle } from './Toggle'

export class ContainerForHandlingEvents extends Component {
    // react events are named usding camelCase rather than lowercase
    // with JSX we pass a function as event handler rather than a string as it would have been in usual html
    // e.g onClick={eventHandler} vs onclick="eventHandler()"
    
    // another difference is that we have to specifically define event.preventDeafult to prevent default behavior, in html it's used return false to just same
    // e.g. onClick={(e)=>e.preventDefault()} vs onclick="return false"

    render() {
        return (
            <div>
                <p>handling events</p>
                <Toggle />
            </div>
        )
    }
}
