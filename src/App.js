import React, { Component } from "react";
import "./App.css";
import { DemoClock } from "./learning_react/DemoClock";
import { DemoEx } from "./learning_react/DemoEx";
import { TodoListPhase01 } from "./learning_react/todo_list_app_phases/TodoListPhase01";
import { PrevWorkouts } from "./PrevWorkouts";
import { PhaseTwoTodoList } from "./learning_react/todo_list_app_phases/phase_two/PhaseTwoTodoList";
import { CardsContainer } from "./learning_react/contacts_card_with_props/CardsContainer";
import { JokesContainer } from "./learning_react/jokes_workouts/JokesContainer";
import { ProductsContainer } from "./learning_react/listing_products/ProductsContainer";
import { ContainerForPhaseThree } from "./learning_react/todo_list_app_phases/phase_three/ContainerForPhaseThree";
import { ClassBasedComponentsDemo } from "./learning_react/ClassBasedComponentsDemo";
import { ContainerForPhaseFour } from "./learning_react/todo_list_app_phases/phase_four/ContainerForPhaseFour";
import { ContainerForPhaseFive } from "./learning_react/todo_list_app_phases/phase_five/ContainerForPhaseFive";
import { ContainerForPhaseSix } from "./learning_react/todo_list_app_phases/phase_six/ContainerForPhaseSix";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };

    // binding on click handler, so that it stays in this context whenever a child component triggers it
    // we have to do this same 'this' binding within a class component before passing them around in any child or other components
    this.onButtonClickedHandler = this.onButtonClickedHandler.bind(this);
  }

  //   onButtonClickedHandler = () => console.log("Button Clicked");
  onButtonClickedHandler(show) {
    console.log("Button Clicked");
    this.setState({
      // show: !this.state.show,
      show: show,
    });
  }

  // when working with a React App it's always better start with smaller component and work our way up to top of App View hierarchy

  render() {
    return (
      <div className="App">
        <PrevWorkouts
          show={this.state.show}
          clickHandler={this.onButtonClickedHandler}
        />

        {/* more code along with Props and State */}
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
      </div>
    );
  }
}
