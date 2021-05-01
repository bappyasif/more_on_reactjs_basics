import React, { Component } from 'react'
import { StaticVersion } from './static_version/StaticVersion'

export class ContainerForThinkingReact extends Component {
    render() {
        return (
            <div>
                <p>will see how a static mock for filterable table becomes a live functioning app</p>
                <h4>Static Version</h4>
                <StaticVersion />
            </div>
        )
    }
}
