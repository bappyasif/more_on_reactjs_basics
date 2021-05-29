import React from 'react'
import { ProptypesContainer } from './prop_types/ProptypesContainer'
import { ContainerForStyledComponents } from './styled_components/ContainerForStyledComponents'

export function ContainerForAdvancedConcepts() {
    return (
        <div>
            <p>Advanced Concepts About React</p>
            <ProptypesContainer />
            <ContainerForStyledComponents />
        </div>
    )
}

