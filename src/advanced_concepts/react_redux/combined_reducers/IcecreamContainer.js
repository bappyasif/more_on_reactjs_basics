import React from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from '../iceCream/actions_types/Actions'

function CombinedIcecreamContainer(props) {
    console.log(props, "icecreams")
    return (
        <div>
            <h4>number of icecreams available: {props.iceCreams}</h4>
            <button onClick={props.buyingIcecreams}>Buy Icecream</button>
        </div>
    )
}

let mapStateToProps = state => {
    return {
        iceCreams: state.iceCreams.numberOfIcecreams
    }
}

let mapDispatchToProps = dispatch => {
    return {
        buyingIcecreams: () => dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CombinedIcecreamContainer)
