import { BUY_CAKE } from "../actions_types/ActionTypes"

let initialState = {
    numberOfCakes: 11,
    info: 'number of cakes available'
}

export let cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                // numberOfCakes: state.numberOfCakes - 1
                numberOfCakes: state.numberOfCakes - action.payload
            }
        default: return state
    }
}