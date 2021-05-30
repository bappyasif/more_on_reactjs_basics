// in Action doesnt do any changes to state but just returns an Action that needs to be carried out and this what Reducers are for to take that action and carry out process to return a new state for our store
// so to simplify, Reducers specifies how app's state changes in response to actions sent to store from app, e.g. prevState, action => newState

// we'll implement this reducer function with an initial state for our prevState argument along with action to it
let inititalState = { numberOfCakes: 11 };
// it's a pure function, acceopts state and action and returns a new state
export let reducer = (state = inititalState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        // we're returning a new object but not muatting or merging with existing state object
        // we need to remember that our action object can have multiple proprties, which means it will discard those others, to prevent that we can copy all existing properties and bring change to whatever property/ies we require
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};
