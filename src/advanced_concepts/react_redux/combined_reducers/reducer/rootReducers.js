import { combineReducers } from "redux";
import { cakeReducer } from "../../cake/reducer/CakeReducer";
import { icecreamReducer } from "../../iceCream/reducer/IcecreamReducer";

export let rootReducers = combineReducers({
  cakes: cakeReducer,
  iceCreams: icecreamReducer,
});
