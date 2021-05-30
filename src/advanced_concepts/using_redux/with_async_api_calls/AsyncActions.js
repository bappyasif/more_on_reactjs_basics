let redux = require("redux");
let axios = require("axios");
let reduxThunk = require("redux-thunk").default;

let createStore = redux.createStore;
let applyMiddleware = redux.applyMiddleware;

let FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
let FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
let FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

let initialState = {
    users: [],
    loading: false,
    errorMsg: ''
};

let fetchRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

let requestSuccess = (data) => {
    return {
        payload: data,
        type: FETCH_USERS_SUCCESS
    }
}

let requestFailure = (msg) => {
    return {
        payload: msg,
        type: FETCH_USERS_FAILURE
    }
}

let reducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true               
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
    }
}

// action creator for Async API call, which returns a function rather than just an Action
// it happens due to redux-thunk middleware that we are able to do so, which will allow us to dispatch different action function
let fetchUsers = () => {
    // it comes in with dispatch as parameter for action action creators with side effects, which will handled by reducer function
    return dispatch => {
        // making a fetch request, with fetch request action
        dispatch(fetchRequest());
        
        // fetch('http://jsonplaceholder.typicode.com/users')
        // .then(res=>res.json())
        axios('http://jsonplaceholder.typicode.com/users')
        .then(data=>{
            // console.log(data.data);
            let users = data.data.map(user=>user.id);
            // dispatching users with success
            dispatch(requestSuccess(users));
        })
        .catch(err=>{
            console.log(err.message);
            let errorMsg = err.message;
            // dispatching error with failure
            dispatch(requestFailure(errorMsg));
        })
    }
}

let store = createStore(reducer, applyMiddleware(reduxThunk));
// subscribing to our store and dipatch our async action creator
store.subscribe(()=>console.log(store.getState()))
store.dispatch(fetchUsers());