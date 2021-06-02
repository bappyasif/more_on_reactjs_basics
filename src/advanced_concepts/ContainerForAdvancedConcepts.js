import React from 'react'
import { HigherOrderComponentsContainer } from './higherOrder_components/HigherOrderComponentsContainer'
import { ProptypesContainer } from './prop_types/ProptypesContainer'
import { ContainerForReactRedux } from './react_redux/ContainerForReactRedux'
import { ContainerForStyledComponents } from './styled_components/ContainerForStyledComponents'
import { HooksContainer } from './using_hooks/HooksContainer'
import { ReduxContainer } from './using_redux/ReduxContainer'

export function ContainerForAdvancedConcepts() {
    return (
        <div>
            <p>Advanced Concepts About React</p>
            <ProptypesContainer />
            <ContainerForStyledComponents />
            {/* <ReduxContainer /> */}
            <ContainerForReactRedux />
            <HigherOrderComponentsContainer />
            <HooksContainer />            
        </div>
    )
}

