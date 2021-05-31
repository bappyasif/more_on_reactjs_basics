import React from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from './actions_types/Actions'

function IcecreamContainer(props) {
    return (
        <div>
            <h4>number of icecreams available: {props.iceCreams}</h4>
            <button onClick={props.buyingIcecreams}>Buy Icecream</button>
        </div>
    )
}

let mapStateToProps = state => {
    return {
        iceCreams: state.numberOfIcecreams
    }
}

let mapDispatchToProps = dispatch => {
    return {
        buyingIcecreams: () => dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer)
