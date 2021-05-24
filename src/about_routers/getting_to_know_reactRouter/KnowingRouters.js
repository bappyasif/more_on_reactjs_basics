import React from 'react'
import { Routes02 } from './assignment_01/Routes02'
import { Profile } from './Profile'
import { Routes } from './Routes'

export function KnowingRouters() {
    return (
        <div>
            <p>basic usage of routers</p>
            {/* <Profile /> */}
            <Routes />
            {/* assignment 01 */}
            <Routes02 />
        </div>
    )
}
