import React, { Component } from "react";

let scaleNames = {
  c: "celsius",
  f: "farenheit",
};

export class TemperatrureInput extends Component {
  // recap changes
  // removed local state from this component and instead reading temperature using props passed down from container component
  // instead of calling setState when want to make change, we now call method ontemperatureChange provided by its container compoennt NewCalculator
  //   constructor(props) {
  //     super(props);
  //     this.handleChange = this.handleChange.bind(this);
  //     this.state = {
  //       temperature: "",
  //     };
  //   }
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    // previously
    // this.setState(
    // {
    //     temperature: evt.target.value,
    // },
    // );

    // using lifting up state
    this.props.onTemperatureChange(evt.target.value);

    // onTemperatureChange prop will be provided with temperature prop by NewCalculator component
    // it handle change by modifying its own local state, thus rerendering both inputs with new temperature values
  }

  render() {
    let temperature = this.props.temperature;
    let scale = this.props.scale;
    // currently both of those temperature are bound to their local state
    // but they are not in sync with each other, when we update celsius point, farenheit should also reflect converted temperatuyre and vice versa

    // in react sharing state is accomplished by moving it up o closest common ancestor of components that needs it, known as "lifting up state"
    // we will remove local state from TemperatureInput into NewCalculator instead

    // if NewCalculator holds shared state, then it becomes source of value for current temperature in both inputs
    // it can instruct them both to have values that are consitent with each other, since both of them are coming from same container component, those two inputs will always be in sync

    // first we'll access temperature by using this.props
    // as props are read only , so temperature could just call setState() to change it, as they are coming from temperature props, so this component has no control over it

    // in react, this is usually solved b y making a component controlled, just like both inputs accespts value and an onChange prop, so can custom TemperatureInput accept both temperature and onTemperatureInput props from container component NewCalculator
    // when this component wants to update its temperature, it calls this.props.onTemperatureaChange
    return (
      <div>
        <fieldset>
          <legend>enter temperature in {scaleNames[scale]}</legend>
          <input value={temperature} onChange={this.handleChange} />
        </fieldset>
      </div>
    );
  }
}

// export class TemperatrureInput extends Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {
//       temperature: "",
//     };
//   }

//   handleChange(evt) {
//     this.setState({
//       temperature: evt.target.value,
//     });
//   }

//   render() {
//     let { temperature } = this.state;
//     let scale = this.props.scale;
//     // now those two inputs are not in sync, for that we'll have to use lifting up state technique
//     return (
//       <div>
//         <fieldset>
//           <legend>enter temperature in {scaleNames[scale]}</legend>
//           <input value={temperature} onChange={this.handleChange} />
//         </fieldset>
//       </div>
//     );
//   }
// }
