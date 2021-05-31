import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { buyIcecream } from '../iceCream/actions_types/Actions';

export function NewIcecreamHooksContainer() {
    let [num, setNum] = useState(1);
    let icecreamsAvailable = useSelector(state=>state.iceCreams.numberOfIcecreams)
    let dispatch = useDispatch();
    let dispatchingAction = () => dispatch(buyIcecream(num));
    return (
        <div>
            <h4>number of icecreams available: {icecreamsAvailable}</h4>
            <input type="number" value={num} onChange={e=>setNum(e.target.value)} />
            <button onClick={dispatchingAction}>Buy Icecream</button>
        </div>
    )
}
