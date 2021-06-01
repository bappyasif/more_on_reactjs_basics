import {createStore, applyMiddleware} from "redux";
import { userReducer } from "./user/Reducer";
import thunk from "redux-thunk";

// always make sure to include applyMiddleware, and thunk to be imported and pass it into createStore accordingly to handle Async Actions
export let userStore = createStore(userReducer, applyMiddleware(thunk));
// export let userStore = createStore(userReducer);