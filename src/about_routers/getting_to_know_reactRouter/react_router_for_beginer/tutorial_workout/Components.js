import React from "react";
import { Link } from "react-router-dom";

export function MainLayout() {
  return <div>{props.children}</div>;
}

export function Home05() {
  return <h4>Home Compoenent</h4>;
}

export function SearchLayout() {
  return <div>{props.children}</div>;
}

export function UsersList() {
  return (
    <ul>
      <li>baebee</li>
      <li>hoxiee</li>
      <li>loxiee</li>
      <li>tweety</li>
    </ul>
  );
}

export function WidgetList() {
  return (
    <ol>
      <li>baebee</li>
      <li>hoxiee</li>
      <li>loxiee</li>
      <li>tweety</li>
    </ol>
  );
}

export function NavComp() {
  return (
    <ul className="routeNav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/widgets">Widgets</Link>
      </li>
    </ul>
  );
}
