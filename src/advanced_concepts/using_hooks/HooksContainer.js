import React from 'react'
import { SomeGottchas } from './effects_hook/SomeGottchas'
import { SomeUsecases } from './reducer_hooks/SomeUsecases'
import { UseCases } from './some_more_additional_hooks/UseCases'

export function HooksContainer() {
    return (
        <div>
            <p>some nitty gritty about using hooks</p>
            <SomeGottchas />
            <SomeUsecases />
            <UseCases />
        </div>
    )
}
