import { useState, useEffect } from "react";

export function useLoginStatusLogic(btnID) {
  let [isOnline, setIsOnline] = useState(false);
  let [bgClr, setColor] = useState("");
  let handleChange = () => {
    setIsOnline(!isOnline);
  };

  useEffect(() => {
    isOnline ? setColor("maroon") : setColor("green");

    let button = document.querySelector(btnID);
    button.addEventListener("click", handleChange);

    return () => button.removeEventListener("click", handleChange);
  }, [isOnline]);

  return [isOnline, handleChange, bgClr];
}

// export function useLoginStatusLogic(btnID) {
//   let [isOnline, setIsOnline] = useState(false);
//   let [bgClr, setColor] =  useState("");
//     // useEffect(() => {
//     //     isOnline ? setColor("maroon") : setColor("green");
//     // },[isOnline]);
// //   let bgClr;
//   let handleChange = () => {
//     // bgClr = isOnline ? "green" : "maroon";
//     // console.log(bgClr);
//     setIsOnline(!isOnline);
//   };

//   useEffect(() => {
//     // let button = document.querySelector("#btnID");
//     isOnline ? setColor("maroon") : setColor("green");

//     let button = document.querySelector(btnID);
//     button.addEventListener("click", handleChange);

//     // console.log(button, isOnline);

//     return () => button.removeEventListener("click", handleChange);
//   },[isOnline]);
// //   return [isOnline, handleChange];
//   return [isOnline, handleChange, bgClr];
// }
