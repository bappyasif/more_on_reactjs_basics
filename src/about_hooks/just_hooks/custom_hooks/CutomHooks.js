import React, { useEffect, useState } from 'react'
import {UserLoginStatusText, ButtonText, ButtonColor} from "./LoginStatus";
import { useLoginStatusLogic } from './useLoginStatusLogic';

// we simply extrapolated other shared logics in separate files, one of which consists our CustomHook and other necessary functionalities in other file and we are just simply simply rendering them according to their associate state value
// we also added a change handler to a button elelment so tha user ca ntoggle around their state value, which in turn takes effect in their rendering

export function CustomHooks() {
    let [_,handleChange, z] = useLoginStatusLogic("#btnID");
    
    let bgClr = ButtonColor("#btnID");

    return (
        <div>
            <p>user is currently <UserLoginStatusText id="#btnID" /> </p>
            <button id="btnID" onClick={handleChange} style={{backgroundColor: bgClr}} ><ButtonText id="#btnID" /></button>
        </div>
    )
}



// export function CustomHooks() {
//     let [_,handleChange, z] = useLoginStatusLogic("#btnID");
//     // let [isOnline,handleChange] = useLoginStatusLogic("#btnID");
//     // let bgClr = isOnline ? "green" : "maroon";
//     // console.log(bgClr);
//     // let [bgClr, setColor] =  useState("");
//     // useEffect(() => {
//     //     isOnline ? setColor("maroon") : setColor("green");
//     // },[isOnline]);
    
//     let bgClr = ButtonColor("#btnID");

//     console.log(bgClr);

//     return (
//         <div>
//             <p>user is currently <UserLoginStatusText id="#btnID" /> </p>
//             <button id="btnID" onClick={handleChange} style={{backgroundColor: bgClr}} ><ButtonText id="#btnID" /></button>
//         </div>
//     )
// }



// export function CustomHooks() {
//     let [isOnline,handleChange] = useLoginStatusLogic();
//     console.log(isOnline, handleChange)
//     return (
//         <div>
//             <p>user is currently <UserLoginStatusText /> </p>
//             <button id="btnID" onClick={handleChange} ><ButtonText /></button>
//             {/* <p>user is currently {<UserLoginStatusText id="#btn" />} </p>
//             <button id="btn">{<ButtonText id="#btn" />}</button> */}
//         </div>
//     )
// }
