import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../cake/actions_types/CakeActions'
import { buyIcecream } from '../iceCream/actions_types/Actions'

function PropsAndStateContainer(props) {
    return (
        <div>
            <h4>Items -- {props.item} </h4>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

// second parameter is components's ownProps not passed down from parent component, to conditianlly render somethign that we might want
let mapStateToProps = (state, ownProps) => {
    // based on cake props being sent down from parent component, then conditionally render values
    let itemsState = ownProps.cake ? state.cakes.numberOfCakes : state.iceCreams.numberOfIcecreams
    return {
        item: itemsState
    }
}

let mapDispatchToProps = (dispatch, ownProps) => {
    let dispatchItem = ownProps.cake
      ? () => dispatch(buyCake())
      : () => dispatch(buyIcecream());
    return { buyItem: dispatchItem };
  };

export default connect(mapStateToProps, mapDispatchToProps)(PropsAndStateContainer)