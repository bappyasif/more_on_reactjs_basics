import React, { useEffect } from "react";
// axios are for making async request, redux thunk is for allowing our actions creator in our app
// after configuring our reducer, store, actions for async calls, then we need to subscribe our component to redux store
import { connect } from "react-redux";
import { requestingUsers } from "../async_actions/user/Actions";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => fetchUsers(), []);

  return (
    <div>
      <p>async actions with react-redux</p>
      {userData.loading ? (
        <h4>loading data....</h4>
      ) : userData.erroMsg ? (
        userData.errorMsg
      ) : (
        userData &&
        userData.users &&
        userData.users.map((user) => <p>{user.name}</p>)
      )}
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(requestingUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
