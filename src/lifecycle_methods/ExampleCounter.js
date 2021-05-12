import React, { Component } from "react";

let ErrorComponent = 1 / 0;

export class ExampleCounter extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      count: 0,
      seed: 0,
      initializing: true
    };
    // this.incrementCount = this.incrementCount.bind(this);
    // this.decrementCount = this.decrementCount.bind(this);

    this.incrementCount = () => this.setState({ count: this.state.count + 1 });
    this.decrementCount = () => this.setState({ count: this.state.count - 1 });
  }
  //   incrementCount(evt) {
  //     this.setState({ count: this.state.count + 1 });
  //   }
  //   decrementCount(evt) {
  //     this.setState({ count: this.state.count - 1 });
  //   }

  componentDidMount() {
    setTimeout(() => {
        this.setState({initializing: false})
    }, 2000);
    console.log("componentDidMount");
    console.log("*******************");
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seat && state.seed !== props.seat) {
      return {
        seed: props.seat,
        count: props.seat,
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== this.state.ignoreProp
    ) {
      console.log("shouldComponentUpdate -- didn't render");
      return false;
    }
    console.log("shouldComponentUpdate -- did render");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }

  render() {
      if(this.props.showErrorComponent && this.state.error) {
          return<h4>{this.state.error.message} Somethings working</h4>
      }
      if(this.state.initializing) return <div>Initializing</div>
    return (
      <div>
        <h4>Counter Example showing lifecycle methods </h4>
        <h4>{this.state.count}</h4>
        <button onClick={this.incrementCount}>increment count</button>
        <button onClick={this.decrementCount}>decrement count</button>
        {/* <ErrorComponent /> */}
        {this.props.showErrorComponent ? <ErrorComponent /> : null}
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log("====================");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    console.log("---------------------");
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch");
    this.setState({ error: error, info: info });
  }
}
