import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { buyCake } from "../cake/actions_types/CakeActions";

export function CakesContainerWithHooks() {
    let cakesAvailable = useSelector(state=>state.cakes.numberOfCakes);
    let dispatch = useDispatch();
    let dispatchingAction = () => dispatch(buyCake());
  return (
    <div>
      <h4>Number of Cakes Available: {cakesAvailable}</h4>
      <button onClick={dispatchingAction}>Buy Cake</button>
    </div>
  );
}