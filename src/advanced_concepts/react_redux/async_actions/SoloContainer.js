import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestingUsers } from "./user/Actions";

function SoloContainer({ userData, fetchUsers }) {
  useEffect(() => fetchUsers(), []);
  console.log(userData, "test")
//   return (<p>test</p>)
  return userData.loading ? (
    <h4>still loading....</h4>
  ) : userData.errorMsg ? (
    <h4>{userData.errorMsg}</h4>
  ) : (
    userData &&
    userData.users &&
    userData.users.map((user) => <p key={user.name}>{user.id}</p>)
  );
}

let mapStateToProps = (state) => {
  return {
    // userData: state.users,
    userData: state,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(requestingUsers()),
  };
};

// this is how we subscribe a component to a redux store
export default connect(mapStateToProps, mapDispatchToProps)(SoloContainer);
