import React, { Component } from "react";
import "./App.css";
import { AccessingProps } from "./components/class_based/AccessingProps";
import { ContainerForConditionalRendering } from "./components/class_based/conditional_rendering/ContainerForConditionalRendering";
import { ExampleComponent } from "./components/class_based/ExampleComponent";
import { FormsContainer } from "./components/class_based/forms_workouts/FormsContainer";
import { ContainerForHandlingEvents } from "./components/class_based/handling_events/ContainerForHandlingEvents";
import { LiftingUpStateContainer } from "./components/class_based/lifting_up_state_workouts/LiftingUpStateContainer";
import { StateUsage } from "./components/class_based/StateUsage";
import { StateAndLifecycleContainer } from "./components/class_based/state_lifecycles/StateAndLifecycleContainer";
import { ContainerForThinkingReact } from "./components/class_based/thinking_in_react_context/ContainerForThinkingReact";
import { ContainerForCompositionInheritence } from "./components/function_based/composition_inheritence/ContainerForCompositionInheritence";
import { ExampleComp } from "./components/function_based/ExampleComp";
import { ExtractingContainer } from "./components/function_based/extracting_components/ExtractingContainer";
import { ListsAndKeysContainer } from "./components/function_based/lists_keys/ListsAndKeysContainer";

export class PrevWorkouts extends Component {
  constructor(props) {
    super(props);

    // binding on click handler, so that it stays in this context whenever a child component triggers it
    // we have to do this same 'this' binding within a class component before passing them around in any child or other components
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  //   onButtonClickedHandler = () => console.log("Button Clicked");
  buttonClicked() {
    console.log("Button Clicked from component");
    this.props.clickHandler(!this.props.show);
  }
  render() {
    // React can render DOM tags or User defined components into DOM
    // Components names always starts with Capital letter to be in scope
    let element = <div />;
    return (
      <div className="App">
        <button onClick={this.buttonClicked}>Show prevWorkouts</button>
        <div style={this.props.show ? {display: "block"} :{display: "none"}}>
          {element}
          {/* using props */}
          {/* props are immutable to child components, which means it can only read value from but can not mutate their value if needed */}
          <ExampleComponent title="World Of React Props" />
          <hr />
          <ExampleComp title="World Of React Props" />
          <hr />
          {/* we can name props as we want to, but child components need to access them as we define it in here */}
          <AccessingProps
            title="World Of React Props"
            clickHandler={this.onButtonClickedHandler}
          />
          <hr />
          <p>Splitting Components Into Chunks</p>
          <ExtractingContainer />
          <hr />
          {/* using state */}
          {/* values that can be changed over time, are handled using state unlike props these state are mutable by components as it/they needs be */}
          <StateUsage />
          <hr />

          {/* react documentation code along */}

          {/* using state and lifecycles */}
          <StateAndLifecycleContainer />
          <hr />

          {/* handling events */}
          <ContainerForHandlingEvents />
          <hr />

          {/* conditional rendering */}
          <ContainerForConditionalRendering />
          <hr />

          {/* using lists and keys */}
          <ListsAndKeysContainer />
          <hr />

          {/* using Forms, controlled component */}
          <FormsContainer />

          {/* lifting shared state to their shared closest common ancestor */}
          <LiftingUpStateContainer />
          <hr />

          {/* using composition over inheritence in react */}
          <ContainerForCompositionInheritence />
          <hr />

          {/* thinking in React way */}
          {/* one of many great aspects of React is how it makes us think about apps as we build them */}
          <ContainerForThinkingReact />
        </div>
      </div>
    );
  }
}
