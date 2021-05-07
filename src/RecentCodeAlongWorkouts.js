import { DemoClock } from "./learning_react/DemoClock";
import { DemoEx } from "./learning_react/DemoEx";
import { TodoListPhase01 } from "./learning_react/todo_list_app_phases/TodoListPhase01";
import { PhaseTwoTodoList } from "./learning_react/todo_list_app_phases/phase_two/PhaseTwoTodoList";
import { CardsContainer } from "./learning_react/contacts_card_with_props/CardsContainer";
import { JokesContainer } from "./learning_react/jokes_workouts/JokesContainer";
import { ProductsContainer } from "./learning_react/listing_products/ProductsContainer";
import { ContainerForPhaseThree } from "./learning_react/todo_list_app_phases/phase_three/ContainerForPhaseThree";
import { ClassBasedComponentsDemo } from "./learning_react/ClassBasedComponentsDemo";
import { ContainerForPhaseFour } from "./learning_react/todo_list_app_phases/phase_four/ContainerForPhaseFour";
import { ContainerForPhaseFive } from "./learning_react/todo_list_app_phases/phase_five/ContainerForPhaseFive";
import { ContainerForPhaseSix } from "./learning_react/todo_list_app_phases/phase_six/ContainerForPhaseSix";
import { LifecycleMethods } from "./learning_react/LifecycleMethods";
import { ContainerForConditionalRendering } from "./learning_react/conditional_rendering/ContainerForConditionalRendering";
import { ContainerForPhaseSeven } from "./learning_react/todo_list_app_phases/phase_seven/ContainerForPhaseSeven";
import { FetchingData } from "./learning_react/FetchingData";
import { FormsContainer } from "./learning_react/using_forms/FormsContainer";
import { ContainerForMemeGenerator } from "./learning_react/meme_generator/ContainerForMemeGenerator";
import { HookDemo } from "./learning_react/using_hooks/useState_hook/HookDemo";
import { DemoUsage } from "./learning_react/using_hooks/useEffect_hook/DemoUsage";
import { DemoTwo } from "./learning_react/using_hooks/useEffect_hook/DemoTwo";

import React, { Component } from "react";

export class RecentCodeAlongWorkouts extends Component {
  constructor() {
    super();
    this.handlingClick = this.handlingClick.bind(this);
  }
  handlingClick(evt) {
    this.props.clickHandler(!this.props.show);
  }
  render() {
    return (
      <div>
        <button onClick={this.handlingClick}>show recents</button>
        <div
          style={this.props.show ? { display: "block" } : { display: "none" }}
        >
          <DemoEx />
          <hr />
          <TodoListPhase01 />
          <hr />
          <DemoClock />
          <hr />
          <PhaseTwoTodoList />
          <hr />
          <CardsContainer />
          <hr />
          <JokesContainer />
          <hr />
          <ProductsContainer />
          <hr />
          <ContainerForPhaseThree />
          <hr />
          <ClassBasedComponentsDemo />
          <hr />
          <p>Todo List Phase Four</p>
          <ContainerForPhaseFour />
          <p>Todo List Phase Five</p>
          <ContainerForPhaseFive />
          <p>Todo List Phase Six</p>
          <ContainerForPhaseSix />
          <hr />
          <LifecycleMethods />
          <hr />
          <ContainerForConditionalRendering />
          <hr />
          <ContainerForPhaseSeven />
          <hr />
          <FetchingData />
          <hr />
          <FormsContainer />
          <hr />
          <p>Meme Generator</p>
          <ContainerForMemeGenerator />
          <hr />
          <HookDemo />
          <hr />
          <DemoUsage />
          <DemoTwo />
        </div>
      </div>
    );
  }
}
