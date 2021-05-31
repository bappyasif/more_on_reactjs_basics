import {BUY_ICECREAM} from "../actions_types/Types"
let initialState = {
    numberOfIcecreams: 110,
    info: 'number of icecream available'
}

export let icecreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                // numberOfIcecreams: state.numberOfIcecreams - 1
                numberOfIcecreams: state.numberOfIcecreams - action.payload
            }
        default: return state
    }
}