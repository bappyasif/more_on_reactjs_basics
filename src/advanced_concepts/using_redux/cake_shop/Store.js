// one store for one application entirely, has these responsibilities to take care of
// <> holds application state
// allows access to state via getState()
// allows state to be updated via dispatch(action)
// registers listeners via subscribe(listener)
// handles unrefistering of listeners vis function returned by subscribe(listener)

let redux = require("redux");
// import {redux} from "redux";
import { buyCake } from "./Actions.js";
import {reducer} from "./Reducers.js";

let createStore = redux.createStore;
let store = createStore(reducer);

let unsubscribe = store.subscribe(()=>console.log(store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
