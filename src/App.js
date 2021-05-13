import React, { Component } from "react";
import "./App.css";
import { PrevWorkouts } from "./PrevWorkouts";
import { RecentCodeAlongWorkouts } from "./RecentCodeAlongWorkouts";
import randomcolor from "randomcolor";
import { AssignmentContainer } from "./diy_assignment/AssignmentContainer";
import { AssignmentContainerVersionTwo } from "./diy_assignment/version_two/AssignmentContainer";
import { ContainerForOptionalTasks } from "./diy_assignment/optional_tasks/ContainerForOptionalTasks";
import { ContainerForLifecycleMethods } from "./lifecycle_methods/ContainerForLifecycleMethods";
import { ContainerForMasonryLayout } from "./lifecycle_methods/masonry_layout/ContainerForMasonryLayout";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      show2: false,
    };

    // binding on click handler, so that it stays in this context whenever a child component triggers it
    // we have to do this same 'this' binding within a class component before passing them around in any child or other components
    this.onButtonClickedHandler = this.onButtonClickedHandler.bind(this);
    this.clickedHandler = this.clickedHandler.bind(this);
  }

  //   onButtonClickedHandler = () => console.log("Button Clicked");
  onButtonClickedHandler(show) {
    console.log("Button Clicked");
    this.setState({
      // show: !this.state.show,
      show: show,
    });
  }

  clickedHandler(show) {
    console.log("Button Clicked");
    this.setState({
      // show: !this.state.show,
      show2: show,
    });
  }

  // when working with a React App it's always better start with smaller component and work our way up to top of App View hierarchy

  render() {
    return (
      <div className="App" style={{ backgroundColor: randomcolor() }}>
        <PrevWorkouts
          show={this.state.show}
          clickHandler={this.onButtonClickedHandler}
        />

        {/* more code along with Props and State */}
        <RecentCodeAlongWorkouts
          show={this.state.show2}
          clickHandler={this.clickedHandler}
        />

        {/* do-it-yourself assignment */}
        <AssignmentContainer />
        <hr />

        {/* do-it-yourself-assignment-version-two */}
        <AssignmentContainerVersionTwo />
        <hr />

        {/* do-it-yourself-assignment-optional-tasks */}
        <ContainerForOptionalTasks />
        <hr />

        {/* lifecycle methods */}
        <ContainerForLifecycleMethods />
        <hr />
        <ContainerForMasonryLayout />
      </div>
    );
  }
}
