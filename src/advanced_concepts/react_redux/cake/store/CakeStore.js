import { createStore } from "redux";
import { cakeReducer } from "../reducer/CakeReducer";

// thats how we create a Redux Store
export let cakeStore = createStore(cakeReducer);