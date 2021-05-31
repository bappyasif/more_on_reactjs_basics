import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from '../iceCream/actions_types/Actions'

function NewContainerForIcecream(props) {
    let [number, setNumber] = useState(1)
    return (
        <div>
            <h4>number of icecreams available: {props.iceCreams}</h4>
            <input type='number' value={number} onChange={e=>setNumber(e.target.value)} />
            <button onClick={() => props.buyingIcecreams(number)}>Buy {number} Icecream</button>
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
        // buyingIcecreams: () => dispatch(buyIcecream())
        buyingIcecreams: (number) => dispatch(buyIcecream(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewContainerForIcecream)
