import React from 'react'
import { ContextHook } from './ContextHook'

export function ContainerForHooksReference() {
    return (
        <div>
            <p>using other additional hooks</p>
            <ContextHook />
        </div>
    )
}
