import React from 'react'
import PropTypes from "prop-types";
import {withRouter} from 'react-router-dom'

export function ShowLocation(props) {
    let {match, location, history} = props;
    console.log(match, history, "withRouter");

    return (
        <div>
            <h4>you are now at location: {location.pathname}</h4>
        </div>
    )
}

ShowLocation.propTypes = {
    match: PropTypes.object.isRequired,
    loaction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export let showLocationWithRouter = withRouter(ShowLocation);