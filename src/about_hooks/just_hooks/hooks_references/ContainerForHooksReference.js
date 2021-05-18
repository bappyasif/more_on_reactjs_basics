import React from 'react'
import { ContextHook } from './ContextHook'
import { ContextHookVersionTwo } from './ContextHookVersionTwo'
import { TextInputWithFocus } from './TextInputWithFocus'
import { CounterExample } from './using_reducer/CounterExample'
import { CounterExampleVersionTwo } from './using_reducer/CounterExampleVersionTwo'
import { ContextHookWithCallback } from './with_callback/ContextHookWithCallback'
import { ContextHooksNestedComponents } from './with_callback/nested_levels/ContextHooksNestedComponents'

export function ContainerForHooksReference() {
    // lazy initialState, is a scenario when, initial state is dependent on a result from an expensive computation
    // we may provide a function, which will be executed just once at initial render
    // let [state, setState] = useState(() => {
    //     let initialState = someExpensiveComputation(props);
    //     return initialState;
    // })

    // useCallback, returns a memoized callback, pass an inline callback and dependeciy array, ro prevent unnecessary renders
    // e.g. let memoziedCallback = useCallback(()=>{doSomething(a,b)},[a,b])

    // useMemo, returns a memoized value, pass a "create" function and dependecy array, useMemo will only recompute memoized value when one of dependencies has changed, opyimization also helps to avoid expensive calculations on every render
    // e.g. let memoizedValue =  useMemo(() => computeReallyExpensiveValue(a,b), [a,b])

    // useDebugValue can be used to display a label for custom hooks in react devtools, it also accepts an optional parameter which can determines formatted value to display
    // e.g. useDebugValue(isOnline ? "Online" : "Offline"), it will show in DevTools as, "FriendStatus: Online"

    return (
        <div>
            <p>using other additional hooks</p>
            <ContextHook />
            <br />
            <ContextHookWithCallback />
            <br />
            <ContextHooksNestedComponents />
            <br />
            <ContextHookVersionTwo />
            <br />
            {/* useReducer Hook */}
            <CounterExample />
            <CounterExampleVersionTwo />
            <br />
            {/* useRef hook */}
            <TextInputWithFocus />
        </div>
    )
}
