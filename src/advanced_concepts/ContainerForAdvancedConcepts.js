import React from 'react'
import { ProptypesContainer } from './prop_types/ProptypesContainer'
import { ContainerForStyledComponents } from './styled_components/ContainerForStyledComponents'
import { ReduxContainer } from './using_redux/ReduxContainer'

export function ContainerForAdvancedConcepts() {
    return (
        <div>
            <p>Advanced Concepts About React</p>
            <ProptypesContainer />
            <ContainerForStyledComponents />
            {/* <ReduxContainer /> */}
        </div>
    )
}

