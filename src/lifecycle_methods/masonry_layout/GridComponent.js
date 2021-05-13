import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import { ErrorBoundary, ErrorButton } from "./ErrorBoundary";
import { initializeGrid, layoutInitialGrid } from "./grid";

// utility methods
let randomInt = (min, max) => {
  let minimum = Math.ceil(min);
  let maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

let createBlocks = (number) => {
  let blocks = [];
  for (let i = 0; i < number; i++) {
    blocks.push({
      id: uuid(),
      height: randomInt(101, 202),
    });
  }
  return blocks;
};

export class GridComponent extends Component {
  // most common use case for constructors are, setting up state, creatig refs, and method binding
  constructor(props) {
    super(props);
    this.state = {
      blocks: [],
    };
    // will be using ref to pass it to brick.js library, this needs to be within constructor
    this.grid = React.createRef();

    this.addBlocks = this.addBlocks.bind(this);
  }

  addBlocks() {
    let newBlocks = createBlocks(2);
    this.setState((prevState) => ({
      blocks: prevState.blocks.concat(newBlocks),
    }));
  };

  // when mounting this method is last method called before rendering, we can use it to set state according to initial props
  // most common use case for this method is returning a state object based on initial props
  // another most common usecase for updating phase, updating satte based on props, when props themselves aren't enough
  static getDerivedStateFromProps(props, state) {
    // return {
    //     // we use numberOfBlocks to create a set of randomly sized blocks, and then return our desired state object
    //     blocks: createBlocks(props.numberOfBlocks)
    // }

    // we could have placed this in constructor but using this method is much more intuitive,
    // cause it's only meant for setting state, whereas constructor has multiple uses,
    // this is also gets called, both before Mount and Update phase

    // for updating:
    // hanging state based on props is not recommended, we can just simply access it through props without have to store it in state variable,
    // except for these edge cases, such as,
    // <> resetting video/audio elemnent when source chages,
    // <> refreshing UI element with updates from server
    // <> closing an accordion element when contents changes
    // even with those usecases, this method will be quite resourceful than any other

    // if current number of blocks we have in state exceeds new prop, we dont update state, othereise we do
    if (state.blocks.length > 0) {
      return {};
    }
    return {
      blocks: createBlocks(props.numberOfBlocks),
    };
  }

  // when we needf to load data, this is where we do it usually
  // most common usecases are, AJAX calls, event listeners and as such for component
  componentDidMount() {
    // its a place for interactivity, such as, drawing on a canvas, that just rendered, initialize library functions like masonry grid layout from collections of elements and adding event listeners
    // basically a place for setup you couldnt do without a DOM, and start getting all data that we need
    this.bricks = initializeGrid(this.grid.current);
    layoutInitialGrid(this.bricks);

    // mimicking loading data or blocks in this case, in every two seconds
    // this.interval = setInterval(() => this.addBlocks(), 2000);
    // this.interval = setInterval(this.addBlocks, 2000);
  }

  // most common use case, controlling exactly what we wnat to re render in our component
  shouldComponentUpdate(nextProps, nextState) {
    // to decide whether we really need a re render, thus improving our component performance
    // this method allows to check and look for any changes or updates in props or state value about to change, if there is then render else dont

    // in this grid scenario, default behavior dictates to rerender when new props arrives, thats wasteful rather we hould only update when there is a change in number of blocks state change
    return nextState.blocks.length > this.state.blocks.length;
  }

  // most common usecase is to return JSX for component
  render() {
    return (
      <div className="wrapper">
        <ErrorBoundary>
          <ErrorButton />
        </ErrorBoundary>

        <div ref={this.grid} className="Grid">
          {this.state.blocks.map((block) => (
            <div
              key={block.id}
              style={{ height: block.height }}
              className="grid-item"
            />
          ))}
        </div>
      </div>
    );
  }

  // this method exists as last chance look at our component with its previous props and state
  // so that we can know what DOM exactly at that time of integrating result of latest render, here is wehre we can find that out
  // most common use case, taking a look at some attrivute of current DOM, and passing that value to componentDidUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // in this grid scenario, when grid expands, if user are at bottom, keep them there
    if (prevState.blocks.length < this.state.blocks.length) {
      let grid = this.grid.current;
      let atBottomOfGrid =
        window.innerHeight + window.pageYOffset === grid.scrollHeight;
      // is user has scrolled to bottom, return an object reflecting that position otherwise return null
      return { atBottomOfGrid };
    }
    return null;
    // we should always return a value or null from this method
  }

  //   most common use case, reacting to committed changes to DOM
  componentDidUpdate(prevProps, prevState, snapshot) {
    // re-layout grid , using pack method from brick.js
    this.bricks.pack();
    // if our snapshot shows that user at bottom of grid, we scroll them down to bottom of new blocks
    if (snapshot.atBottomOfGrid) {
      window.scrollTo({
        top: this.grid.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  // here we can cancel any outgoing network requests, or remove all event listeners, timers and as such
  // most common use case, clearing up any leftovers from our component
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // handling errors
  // most common use cases, updating state to display an error screen without crashing app
  //   getDerivedStateFromError(error) {
  //     // when error is caught from any descendant components, we can use this method and set error state to true
  //     // we shouyld not use this for any side effects, for that we can use componentDidCatch
  //     return { hasError: true };
  //   }

  // it's pretty similar to previous method, only differencce is we can now perform any side effects, like logging error
  // this method only works for errors in render/lifecycle methods, if app throws error from any click handler, it will not be caught
  // we would use this method only in special error boundary components, to wrap up any descendant tree with sole purpose of catching any errors and logging them
  // most common use case, catching and logging errors
  //   componentDidCatch(error, info) {
  //     console.log(error, info);
  //   }
}
