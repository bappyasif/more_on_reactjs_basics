import React, { Component } from "react";
import { Clock } from "./Clock";

export class StateAndLifecycleContainer extends Component {
  render() {
    return (
      <div>
        <p>using state and lifecycles</p>
        {/* we want this Clock component to be rendered every second from that component it self, we'll just pass initial date string as props to component */}
        {/* as long as we render Clock into same DOM node, only single instance of it will be used, but state and lifecycle methods will help us to just so */}
        {/* <Clock date={new Date()} /> */}

        {/* 
            Data usually flows down
            neither parent or child components can know if a certain component is stateful or stateless, and they shouldn't care whether it is defined as a function or class
            this is why state is often called local or encapsulated, it is not accessible any component other component other than that contains and sets it
            a component may choose to pass its state down as props to its child components, would care less if it came from a class or functional component, or whether its a vlaue from state variable or hard coded by hand
            this is commonly known as "top-down" or "undirectional", any state is always owned by some specefic component
            any data or UI derived from taht state can only affect components "below" them in component tree
            each clock sets up its own timer and updates independently, whether a component is stateful or stateless is considered an implementation detail of component that may change over time, we can use stateless components inside a stateful component and vice versa 
        */}
        <Clock />
        <Clock />
      </div>
    );
  }
}

// export function StateAndLifecycleContainer() {
//   let element = (
//     <div>
//       <h4>Hello World Of React</h4>
//       <h4>It is {new Date().toLocaleTimeString()}</h4>
//     </div>
//   );
//   return (
//     <div>
//       <p>Using State And Lifecycles</p>
//       {element}
//     </div>
//   );
// }

// setInterval(StateAndLifecycleContainer, 1001);
