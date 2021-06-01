import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./Types";

let initialState = {
    loading: false,
    users: [],
    errorMsg: ''
};


export let userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                errorMsg: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                errorMsg: action.payload
            }
        default: return state
    }
}


// export let userReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case FETCH_USERS_REQUEST:
//             return {
//                 loading: true,
//                 users: [],
//                 errorMsg: ''
//             }
//         case FETCH_USERS_SUCCESS:
//             return {
//                 loading: false,
//                 users: action.payload,
//                 errorMsg: ''
//             }
//         case FETCH_USERS_FAILURE:
//             return {
//                 loading: false,
//                 users: [],
//                 errorMsg: action.payload
//             }
//         default: return state
//     }
// }