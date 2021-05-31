import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../cake/actions_types/CakeActions'

function CombinedCakeContainer(props) {
    console.log(props, "cakes");
    return (
        <div>
           <h4>Number of Cakes Available: {props.cakes}</h4>
           <button onClick={props.buyingCakes}>Buy Cake</button>
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
        buyingCakes: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CombinedCakeContainer);