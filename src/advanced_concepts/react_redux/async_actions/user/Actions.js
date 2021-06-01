import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./Types";

export let fetchingUsers = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export let requestSuccessful = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export let requestFailed = (errMsg) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: errMsg,
  };
};

export let requestingUsers = () => {
  // thanks to thunk middleware, we can incorporate async actions in our app, and dispatch appropriate actions
  return (dispatch) => {
    dispatch(fetchingUsers()); // turns loading to true
    let url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url)
    .then(res=>{
      let users = res.data;
      console.log(users, "data")
      dispatch(requestSuccessful(users))
    })
    .catch(err => {
      let msg = err.message;
      dispatch(requestFailed(msg));
    })
  }
}