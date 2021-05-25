import React from 'react'
import {Link, NavLink} from "react-router-dom";

export function HomeComp() {
    return (
        <div>
            <h4>HomeComp</h4>
            <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
        </div>
    )
}

export function AboutComp() {
    return (
        <div>
            <h4>AboutComp</h4>
            <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
        </div>
    )
}

export function ContactComp() {
    return (
        <div>
            <h4>ContactComp</h4>
            <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
        </div>
    )
}

export function NavComp() {
    return (
        <div className="routeNav">
            <h4>Navigation Links</h4>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}