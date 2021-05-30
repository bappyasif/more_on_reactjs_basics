let redux = require("redux");
let createStore = redux.createStore;
// bring in combine reducers from redux
let combineReducers = redux.combineReducers;

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
let store = createStore(rootReducer);
console.log("initial state: ",store.getState())
let unsubscribe = store.subscribe(() => console.log("updated state:", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe();