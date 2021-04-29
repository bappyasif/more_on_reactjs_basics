import React from 'react'
import { GuestGreeting } from './GuestGreeting';
import { UserGreeting } from './UserGreeting';

export function GreetingContainer(props) {
    let isUserLoggedIn = props.isLogged;
    if(isUserLoggedIn) {
        return <UserGreeting />
    }
    return <GuestGreeting />
    
    // return (
    //     <div>
    //         {isUserLoggedIn ? <UserGreeting /> : <GuestGreeting />}
    //     </div>
    // )
}
