import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './actions_types/CakeActions'

function CakeContainer(props) {
    return (
        <div>
            {/* lets make use of our redux store which is pass down from conatining component and use it's props to make our CakeShope functioning */}
           {/* <h4>Number of Cakes Available: {props.numberOfCakes}</h4> */}
           <h4>Number of Cakes Available: {props.cakes}</h4>
           <button onClick={props.buyingCakes}>Buy Cake</button>
           {/* <button onClick={props.buyCake}>Buy Cake</button> */}
        </div>
    )
}

// in oprder to make use of our react-redux library, there are few utility functions needs to be created upfront
let mapStateToProps = state => {
    return {
        // numberOfCakes: state.numberOfCakes
        // whichever property name we use here, will be used in JSX to render
        cakes: state.numberOfCakes
    }
}

let mapDispatchToProps = dispatch => {
    return {
        // buyCake: () => dispatch(buyCake())
        // whichever name we use here will be refecrenced to JSX for appropriate events based on that
        buyingCakes: () => dispatch(buyCake())
    }
}

// to use our connect functionality within our CakeApp container, we need to default export it,
// connect is a function which is HOC, and connects our those two predefined functions and then export it to use
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);