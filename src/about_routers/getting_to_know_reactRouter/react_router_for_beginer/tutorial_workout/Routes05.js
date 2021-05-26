import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import { Home05, MainLayout, NavComp, SearchLayout, UsersList, WidgetList } from './Components'
export function Routes05() {
    return (
        <div>
            <Router>
                <NavComp />
                <Route component={MainLayout}>
                    <Route exact path="/" component={Home05} />
                    <Route component={SearchLayout}>
                        <Route path="/users" component={UsersList} />
                        <Route path="/widgets" component={WidgetList} />
                    </Route>
                </Route>
            </Router>
        </div>
    )
}
