import React from "react";

export function ExtractAvatar(props) {
  return (
    <div>
      <img src={props.user.avatarUrl} alt={props.user.name} />
    </div>
  );
}
