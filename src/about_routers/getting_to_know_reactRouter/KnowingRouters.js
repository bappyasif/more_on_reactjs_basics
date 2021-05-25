import React from 'react'
import { Routes02 } from './assignment_01/Routes02'
import { Profile } from './Profile'
import { Routes04 } from './react_router_for_beginer/another_tutorial/Routes04'
import { Routes03 } from './react_router_for_beginer/Routes03'
import { Routes } from './Routes'

export function KnowingRouters() {
    return (
        <div>
            <p>basic usage of routers</p>
            {/* <Profile /> */}
            <Routes />
            {/* assignment 01 */}
            <Routes02 />
            {/* beginner react router tutorial */}
            <Routes03 />
            {/* another react router tutorial */}
            <Routes04 />            
        </div>
    )
}
