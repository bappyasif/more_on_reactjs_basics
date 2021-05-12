import React, { Component } from "react";
import { ExampleCounter } from "./ExampleCounter";

// a component can be in different states of it's life and in React we can use those states to handle certain tasks.
// for creation -- componentDidMount
// for rendering -- render
// for updating -- componentDidUpdate
// for removal -- componentWillUnmount
export class ContainerForLifecycleMethods extends Component {
  // render -- render method contains all UI related logic that should display on screen, or null if we don't want to display anything, like we do with conditional rendering
  // componentDidMount -- runs when component is mounted, meaning when inserted into DOM tree, common tasks are, API calls, JS frameworks, set timers, event listeners
  // componentDidUpdate -- not called for initial rendedr but anyother time when component updates, great place to work and operate on DOM when compoennt has updated, e.g. we could do network requests, to compare it to current props
  // componentWillUnmount -- called upon when component is removed from DOM tree, usually cleanup tasks goes here, such as removing what we added into DOM, such as, removing event listeners, canceling network request, and other cleanup routines

  // render method has to be pure with no side effects, as in for same set of inputs it will return same output
  // which means we can not setState within a render method, for that we'll have to use someother lifecycle methods

  // componentDidMount is called as soon as component is mounted and ready, a good place to initiate API calls,  when we need to load data from API, we can use setState to update state and cause rerendering, but it will happen before browser updates, to ensure there is no duplicate re rendering
  // also use it wth caution cause it might leads to performance issues, react allows setState within this method is for special cases like tooltips, modals and similar concepts when we need to measure a DOM node before rendering something that depends on its position

  // componenrDidUpdate is invoked as soon as updating happens, most commonly used in DOM updates in response to props or state changes, we can call setState but we have to wrap it in a condition to check for state or prop changes from previous state otherwise it will/can lead to an inifinite loop

  // componentWillUnmount is called just before component is unmounted and destroyedm usually suitable place for cleanup process such as clearing timers, canceling apoi calls or clearing any caches in storage, as t6his method will never be re rendered so no setState calls are allowed

  // uncommon react lifecycle methods:

  // shouldComponentUpdate -- can be handy when we dont want to render any of our state or prop changes, anytime setState is called component re renders by default, and this mnethod is used to let react know if these changes should affect rendering or not, is exists only for certain performance optimizations, we can not update compoennt state in this method, do not always reply on it to prevent rendering, thus can lead to several bugs

  // static getDerivedStateFromProps -- it is called just before calling render method, as its a static function doesnt have access to "this", it returns an object to update state in response to prop changes, can return null if there is no change in state, used when state depends on changes in props in a component, it's fired on every render cycle

  // getSnapshotBeforeUpdate -- called on right before DOM is updated, value that gets returned from this method will be passed on to componentDidUpdate method, senerios such as resizing window during an async rendering can be utilized

  // Mounting: these methods are called in following order when an instance of a component is being created and inserted into DOM:
  // constructor(), static getDerivedStateFromProps(), render(), componentDidMount()

  // Updating: an update can be caused by changes to props or state, these methods are called in following order when a component is being re rendered:
  // static getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate()

  // Unmounting: this method is called when a component is being removed from DOM:
  // componentWillUnmount()

  // Error Handling: these mnethods are called when there is an error during rendering in a lifecycle method or in constructor of any child component:
  // static getDerivedStateFromProps(), componentDidCatch()

  constructor() {
    super();
    this.state = {
      mount: true,
      ignoreProp: 0,
      seat: 42,
      showErrorComponent: false,
    };
    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
    this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });
    this.generateSeat = () =>
      this.setState({ seat: Number(Math.random() * 100) });
    this.toggleErrorComponentUI = () =>
      this.setState({ showErrorComponent: !this.state.showErrorComponent });
  }
  
  render() {
    return (
      <div>
        {/* <ExampleCounter /> */}
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount Counter
        </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          Unmount Counter
        </button>
        <button onClick={this.ignoreProp}>IgnoreProp</button>
        <button onClick={this.generateSeat}>Seat Generator</button>
        <button onClick={this.toggleErrorComponentUI}>Toggle Error</button>
        {this.state.mount ? (
          <ExampleCounter
            ignoreProp={this.state.ignoreProp}
            seat={this.state.seat}
            showErrorComponent={this.state.showErrorComponent}
          />
        ) : null}
      </div>
    );
  }
}
