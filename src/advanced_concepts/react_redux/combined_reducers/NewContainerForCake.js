import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../cake/actions_types/CakeActions';

function NewContainerForCake(props) {
    console.log(props, "newCake")
    let [number, setNumber] = useState(1);
    let handleClick = () => props.buyingCakes(number);
    return (
        <div>
           <h4>Number of Cakes Available: {props.cakes}</h4>
           <input value={number} type='number' onChange={e=>setNumber(e.target.value)} />
           {/* <button onClick={props.buyingCakes}>Buy Cake</button> */}
           {/* <button onClick={() => props.buyingCakes(number)}>Buy {number} Cake</button> */}
           <button onClick={handleClick}>Buy {number} Cake</button>
           {/* <button onClick={props.buyingCakes(number)}>Buy {number} Cake</button> */}
        </div>
    )
}

let mapStateToProps = state => {
    return {
        // cakes: state.numberOfCakes
        cakes: state.cakes.numberOfCakes
    }
}

let mapDispatchToProps = dispatch => {
    return {
        // buyingCakes: () => dispatch(buyCake())
        buyingCakes: (number) => dispatch(buyCake(number))
        // buyingCakes: (number) => dispatch(buyNumberedAmountsCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewContainerForCake);