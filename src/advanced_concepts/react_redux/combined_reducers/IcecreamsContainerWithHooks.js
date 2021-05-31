import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { buyIcecream } from '../iceCream/actions_types/Actions';

export function IcecreamsContainerWithHooks() {
    let icecreamsAvailable = useSelector(state=>state.iceCreams.numberOfIcecreams)
    let dispatch = useDispatch();
    let dispatchingAction = () => dispatch(buyIcecream());
    return (
        <div>
            <h4>number of icecreams available: {icecreamsAvailable}</h4>
            <button onClick={dispatchingAction}>Buy Icecream</button>
        </div>
    )
}
