import React, { useState, useEffect } from "react";

export function useUserLoginStatus(btnID) {
  let [isOnline, setIsOnline] = useState(false);
  let handleChange = () => setIsOnline(!isOnline);
  useEffect(() => {
    // let button = document.querySelector("#btn");
    let button = document.querySelector(btnID);
    button.addEventListener("click", handleChange);

    // console.log(button, isOnline);

    return () => button.removeEventListener("click", handleChange);
  });
  return isOnline;
//   return (
//     <div>
//         {/* <h4>user is currently {isOnline}</h4>
//       <button id="btn">login</button> */}
//     </div>
//   );
}
