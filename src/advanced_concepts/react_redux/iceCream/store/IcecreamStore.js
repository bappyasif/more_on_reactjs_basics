import {createStore} from "redux";
import {icecreamReducer} from "../reducer/IcecreamReducer"

export let icecreamStore = createStore(icecreamReducer);