import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { buyCake } from './actions_types/CakeActions';

export function WithHooksCakeContainer() {
    // we'll use useSelector hooks from react-redux to access state value that is returned from that hook function call
    // useSelector hook will take in a function as it's argument where it takes state as argument and returns whatever is returning for that call, it pretty similar to mapStateToProps function
    let numOfCakesAvailable = useSelector(state => state.numberOfCakes);

    // to use our dispatch functionality to buy cake, we'll use another hook from react-redux, called useDispatch, which returns a refernece to carryout our dispatch call
    let dispatch = useDispatch();
    let dispatchingAction = () => dispatch(buyCake());

    return (
        <div>
            <h4>Number of Cakes Available : {numOfCakesAvailable}</h4>
            <button onClick={dispatchingAction}>Buy Cake</button>
        </div>
    )
}
