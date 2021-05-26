import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, NavigationComponent, Photos, SpecificPhoto } from "./Components";

export function Routes06() {
  return (
    <div>
      <Router>
        <NavigationComponent />

        <Route path="/home" component={Home} />
        <Route exact path="/photos" component={Photos} />
        <Route path="/photos/:id" component={SpecificPhoto} />
      </Router>
    </div>
  );
}
