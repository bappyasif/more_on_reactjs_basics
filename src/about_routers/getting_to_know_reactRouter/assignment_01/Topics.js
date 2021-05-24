import React from 'react'
import {Link, Switch, Route, useRouteMatch, useParams} from "react-router-dom";

export function Topics() {
    let matchRoute = useRouteMatch();
    console.log(matchRoute, useParams());
    return (
        <div>
            <h4>Topics</h4>
            <li><Link to={`${matchRoute.url}/components`}>Components</Link></li>
            <li><Link to={`${matchRoute.url}/props-vs-state`}>Props Vs State</Link></li>
            <Switch>
                <Route path={`${matchRoute.path}/:topicID`}>
                {/* <Route path={`${matchRoute.url}/:topicID`}> */}
                    {/* <Topic /> */}
                    {/* <Topic topicID="components" /> */}
                    <h4>??</h4>
                </Route>
                <Route path={matchRoute.path}>
                    <h6>please choose a topic</h6>
                </Route>
            </Switch>
        </div>
    )
}


export let Topic = () => {
    console.log("??")
    let {topicID} = useParams();
    // console.log(topicID, useParams())
    return <h4>requested topic ID: {topicID}</h4>
}