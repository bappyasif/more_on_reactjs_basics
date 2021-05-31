import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { buyIcecream } from './actions_types/Actions';

export function WithHooksIcecreamContainer() {
    let icecreamsAvailable = useSelector(state=>state.numberOfIcecreams);
    let dispatch = useDispatch();
    let dispatchingAction = () => dispatch(buyIcecream());
    return (
        <div>
            <h4>number of available ICECREAMS -- {icecreamsAvailable}</h4>
            <button onClick={dispatchingAction}>buy ICECREAM</button>
        </div>
    )
}
