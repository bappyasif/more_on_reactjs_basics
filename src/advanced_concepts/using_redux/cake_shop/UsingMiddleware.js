let redux = require("redux");
let reduxLogger = require("redux-logger");

let createStore = redux.createStore;
// bring in combine reducers from redux
let combineReducers = redux.combineReducers;
// applying middleware to pass to store for using logger
let applyMiddleware = redux.applyMiddleware;
// bringing in redux logger
let logger = reduxLogger.createLogger();


// Action String
let BUY_CAKE = "BUY_CAKE";
let BUY_ICECREAM = "BUY_ICECREAM";

// Action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "redux action",
  };
}
function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: "another action"
    }
}
// initial state
let inititalCakesState = { numberOfCakes: 11 };
let inititalIcecreamsState = { numberOfIcecreams: 110 };

// reducer functions, takes in previousState and action returns a new state
let cakesReducer = (state = inititalCakesState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

let icecreamsReducer = (state = inititalIcecreamsState, action) => {
    switch (action.type) {
        case "BUY_ICECREAM":
          return {
            ...state,
            numberOfIcecreams: state.numberOfIcecreams - 1,
          };
      default:
        return state;
    }
  };

// redux store, which holds app state, subsribe to any changes in state and updates it and finally unsubscribe listener
// redux store can only take in Single Reducer function as it's argument, not multiple, that's where we need to combine multiple reducers to single reducer function for redux store
// let store = createStore(reducer);
let rootReducer = combineReducers({
    cake: cakesReducer,
    iceCream: icecreamsReducer
})
// let store = createStore(rootReducer);
// we can pass in as many middleware in stores second arguments not just limited to single middleware
let store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state: ",store.getState())
// let unsubscribe = store.subscribe(() => console.log("updated state:", store.getState()));
// as logger middleware will take care of logging on our behalf
let unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe();