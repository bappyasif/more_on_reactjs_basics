import { combineReducers } from "redux";
import { userReducer } from "../../async_actions/user/Reducer";
import { cakeReducer } from "../../cake/reducer/CakeReducer";
import { icecreamReducer } from "../../iceCream/reducer/IcecreamReducer";

export let rootReducers = combineReducers({
  cakes: cakeReducer,
  iceCreams: icecreamReducer,
  user: userReducer
});
