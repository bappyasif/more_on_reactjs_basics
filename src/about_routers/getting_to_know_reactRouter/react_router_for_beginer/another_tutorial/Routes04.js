import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { AboutComp, ContactComp, HomeComp, NavComp } from "./Components";

export function Routes04() {
  return (
    <div>
      <p>another react router tutorial</p>
      <Router>
        <NavComp />
        <Route path="/" exact component={HomeComp} />
        <Route path="/about" component={AboutComp} />
        <Route path="/contact" component={ContactComp} />
      </Router>
    </div>
  );
}
