import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About, Item, Nav, Shop } from "./Pages";

export function Routes03() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" exact component={Shop} />
        {/* <Route path="/" component={Home} /> */}
        <Route path="/shop/:prodId" component={Item} />
      </Switch>
    </Router>
  );
}

let Home = () => {
  return <h4>Home Page</h4>;
};
