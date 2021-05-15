import React, { Component } from 'react'
import { ClockClass } from './ClockClass'
import { ClockHooks } from './ClockHooks'
import { CounterHooks } from './CounterHooks'
import { HooksAtAGlance } from './just_hooks/HooksAtAGlance'
import { UsageOfUseState } from './UsageOfUseState'

export class HooksContainer extends Component {

    render() {
        return (
            <div>
                <ClockClass />
                <ClockHooks />
                {/* comparing these two ways to create a component Hooks need less code and more clear to read and reason about */}
                {/* hooks give us a more effecient way to replace class component lifecycle methods */}
                
                <CounterHooks />
                <hr />
                <UsageOfUseState />
                <hr />
                
                {/* hooks docs code along */}
                <HooksAtAGlance />
            </div>
        )
    }
}
