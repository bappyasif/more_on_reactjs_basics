import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Playing } from "./Playing";
import { Streaming } from "./Streaming";
import { Home02 } from "./Home02";
import {Topics} from "./Topics";

// using nav for routes
export function Routes02() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          {/* <ul> */}
            <li>
              <Link to="/">Home02</Link>
            </li>
            <li>
              <Link to="/playing">Playing</Link>
            </li>
            <li>
              <Link to="/streaming">Streaming</Link>
            </li>
            <li>
              <Link to="/topics">Nested Routing</Link>
            </li>
          {/* </ul> */}
        </nav>
        {/* a Switch looks through its children routes and renders first matched url */}
        <Switch>
          <Route exact path="/" component={Home02} />
          <Route exact path="/playing" component={Playing} />
          <Route exact path="/streaming" component={Streaming} />
          {/* <Route exact path="/topics" component={Topics} /> */}
          <Route exact path="/topics">
              <Topics />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

// without using nav element
// export function Routes02() {
//     return (
//         <div>
//             <BrowserRouter>
//             <Switch>
//                 <Route exact path="/" component={Home02} />
//                 <Route exact path="/playing" component={Playing} />
//                 <Route exact path="/streaming" component={Streaming} />
//             </Switch>
//             </BrowserRouter>
//         </div>
//     )
// }
