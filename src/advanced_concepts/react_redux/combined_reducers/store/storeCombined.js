import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension"
import { rootReducers } from "../reducer/rootReducers";
// to incorporate async actions in our app
import thunk from "redux-thunk";

// using devtools alongside middleware, it's super useful for debug purpose
// take these steps first: npm install --save redux-devtools-extension, and import import { composeWithDevTools } from 'redux-devtools-extension';
export let combinedStore = createStore(rootReducers, composeWithDevTools(applyMiddleware(logger, thunk)));

// using middleware within store
// export let combinedStore = createStore(rootReducers, applyMiddleware(logger));

// without using any middleware
// export let combinedStore = createStore(rootReducers);