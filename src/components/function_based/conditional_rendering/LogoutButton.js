import React from "react";

export function LogoutButton(props) {
  return (
    <div>
      <button onClick={props.onClicked}>Logout</button>
    </div>
  );
}
