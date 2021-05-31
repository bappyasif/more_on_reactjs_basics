import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { buyCake } from "../cake/actions_types/CakeActions";

export function NewCakeHooksContainer() {
    let [num, setNum] = useState(1);
    let cakesAvailable = useSelector(state=>state.cakes.numberOfCakes);
    let dispatch = useDispatch();
    let dispatchingAction = () => dispatch(buyCake(num));
  return (
    <div>
      <h4>Number of Cakes Available: {cakesAvailable}</h4>
      <input type="number" value={num} onChange={e=>setNum(e.target.value)} />
      <button onClick={dispatchingAction}>Buy Cake</button>
    </div>
  );
}