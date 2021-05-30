let redux = require("redux");
let createStore = redux.createStore;

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
let inititalState = { numberOfCakes: 11, numberOfIcecreams: 110 };
// reducer functions, takes in previousState and action returns a new state
let reducer = (state = inititalState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        // we're returning a new object but not muatting or merging with existing state object
        // we need to remember that our action object can have multiple proprties, which means it will discard those others, to prevent that we can copy all existing properties and bring change to whatever property/ies we require
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    //   using same reduce and single state object
      case "BUY_ICECREAM":
        return {
          // we're returning a new object but not muatting or merging with existing state object
          // we need to remember that our action object can have multiple proprties, which means it will discard those others, to prevent that we can copy all existing properties and bring change to whatever property/ies we require
          ...state,
          numberOfIcecreams: state.numberOfIcecreams - 1,
        };
    default:
      return state;
  }
};

// redux store, which holds app state, subsribe to any changes in state and updates it and finally unsubscribe listener
let store = createStore(reducer);
console.log("initial state: ",store.getState())
let unsubscribe = store.subscribe(() => console.log("updated state:", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe();