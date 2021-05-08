import React from 'react'
import { EasyContainer } from './easy/EasyContainer'
import { HardContainer } from './hard/HardContainer'

export function ContainerForOptionalTasks() {
    return (
        <div>
            <EasyContainer />
            <hr />
            <HardContainer />
        </div>
    )
}
