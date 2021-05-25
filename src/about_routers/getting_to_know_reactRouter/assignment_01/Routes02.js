import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Playing } from "./Playing";
import { Streaming } from "./Streaming";
import { Home02 } from "./Home02";
import {Topics} from "./Topics";

// using nav for routes
export function Routes02() {
  // anytime we need to enforce a specefic navigation, we can use Redirect, when Redirect renders, it will navigate using its "to" prop
  return (
    <div>
      {/* BrowserRouter uses regular URL paths, these are generally best looking urls, but they require to be configuired in server as well to serve correctly */}
      {/* HashRouter stores current location, in hash portion of URL, so since hash is never sent to server so no further configuartion is needed */}
      <BrowserRouter>
        <nav>
          {/* <ul> */}
            <li>
              {/* Link will create an "a" tag, whwre as NavLink will create same but with styling className when it's active */}
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
