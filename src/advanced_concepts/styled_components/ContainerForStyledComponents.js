import React from 'react'
import { ExampleUsecase } from './ExampleUsecase'

export function ContainerForStyledComponents() {
    // motivation for using styled-copmponents
    // its a result of wondering how we could enhance css for styling react component systems
    // we get all these benefits while writing css, just bound to individual components
    /**
     * automatic critical css - styled component keeps tract of which components are rendered and injecting styles, nothing else fully automaticaly, so use has to load least amount of code necessary in their end
     * no class name bugs - styled component generates unique class names for our styles, without have to worrying about duplication or misspellings
     * easier deletion of css - it can be harder to know if any classname being used in codebase somewhere, styled components makes it obvious as they are tied to component directly, if component is unused tooling detects and delets all its styles
     * simple dynamic styling - adapting styling of a component based on its props or global theme is simple and intuitive without having to manually manage dozens of classes
     * painless maintenance - we never have to hunt across different files to find styling affecting our components, and thus maintenance is simpler, no matter how big codebase is
     * automatic vendor prefixing - we just need to write css to curent standard and rest will be taken care of by styled components
     */
    return (
        <div>
            <p>Styled Components</p>
            <ExampleUsecase />
        </div>
    )
}