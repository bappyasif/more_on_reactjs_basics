import React from "react";

export function Blog(props) {
  let sidebar = (
    <ul>
      {props.post.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );

  let content = props.post.map((post) => {
    <div key={post.id}>
      <h4>{post.title}</h4>
      <p>{post.content}</p>
    </div>;
  });
  return (
    <div>
      {sidebar}
      <br />
      {content}
    </div>
  );
}
