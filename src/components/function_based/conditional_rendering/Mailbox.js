import React from "react";

export function Mailbox(props) {
  let unreadMsgs = props.unreadMsgs;
  return (
    <div>
      <h4>Hello!!</h4>
      {/* we can embed expression in JSX within curly braces, this includes logical and operators */}
      {/* this works because in Javascript true && expression always evaluates to expression, and false && expression to false */}
      {unreadMsgs.length > 0 && (
        <h4>you have {unreadMsgs.length} unread messages</h4>
      )}
    </div>
  );
}
