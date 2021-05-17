import React, { Component } from 'react'
import { ClockClass } from './ClockClass'
import { ClockHooks } from './ClockHooks'
import { CounterHooks } from './CounterHooks'
import { CustomHooks } from './just_hooks/custom_hooks/CutomHooks'
import { HooksAtAGlance } from './just_hooks/HooksAtAGlance'
import { ContainerForHooksReference } from './just_hooks/hooks_references/ContainerForHooksReference'
import { EffectHook } from './just_hooks/using_useState/EffectHook'
import { StateHook } from './just_hooks/using_useState/StateHook'
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

                {/* State Hook */}
                <StateHook />

                {/* Effect Hook */}
                <EffectHook />

                {/* Custom Hook */}
                <CustomHooks />

                {/* Additional Hooks */}
                <ContainerForHooksReference />
            </div>
        )
    }
}
