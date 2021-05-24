import React, { Component } from "react";
import "./App.css";
import { PrevWorkouts } from "./PrevWorkouts";
import { RecentCodeAlongWorkouts } from "./RecentCodeAlongWorkouts";
import randomcolor from "randomcolor";
import { HooksAndRecentWorkouts } from "../HooksAndRecentWorkouts";
import { RoutersContainer } from "./about_routers/RoutersContainer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      show2: false,
      show3: false,
    };

    // binding on click handler, so that it stays in this context whenever a child component triggers it
    // we have to do this same 'this' binding within a class component before passing them around in any child or other components
    this.onButtonClickedHandler = this.onButtonClickedHandler.bind(this);
    this.clickedHandler = this.clickedHandler.bind(this);
    this.clickedHandler3 = this.clickedHandler3.bind(this);
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

  clickedHandler3(show) {
    // console.log(show)
    this.setState({
      // show: !this.state.show,
      show3: !show,
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

        {/* more on stateful components using class and mostly Hooks */}
        <HooksAndRecentWorkouts
          show={this.state.show3}
          clickHandler={this.clickedHandler3}
        />

        {/* react routers */}
        <RoutersContainer />
      </div>
    );
  }
}
