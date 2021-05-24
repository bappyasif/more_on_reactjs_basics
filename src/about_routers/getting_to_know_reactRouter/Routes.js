import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { Home } from './Home'
import { Profile } from './Profile'

// Route: are our routes, as in url path, and a component that should be rendered when we navigate to this url
// BrowserRouter: is a router, which uses history API(pushState, replaceState, popstate) to keep our UI in sync with URL, assumeably is at root of our project
// Switch: renders first child that matches with provided location, by checking through all those path and first one to match gets rendered initially, while others will be ignored

export function Routes() {
    return (
        <div>
            {/* handles all existing routes */}
            <BrowserRouter>
            <Switch>
                {/* <Route path="/" component={Home} />
                <Route path="/profile" component={Profile} /> */}
                {/* <Route path="/" component={Home} /> */}

                {/* without "exact" keyword, routes path will match first matching patterns, it's home with default path is at top, then only home page will be rendered */}
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}
