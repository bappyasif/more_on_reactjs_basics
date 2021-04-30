import React, { Component } from "react";
import { TemperatrureInput } from "./TemperatrureInput";

import {
  tryConvertion,
  toCelsius,
  toFarenheit,
} from "../../function_based/lifting_state_up_workouts/conversionUtilities";
import { BoilingVerdict } from "../../function_based/lifting_state_up_workouts/BoilingVerdict";

// to recap, to understand what happens when an edit happens in input element
// <> react calls function specified as onChange method on DOM <input>, which is handleChange in TemperatureInput component
// <> handleChange method in TemperatureInput component calls onTemperatureChange props passed down from NewCalculator with new desired value
// <> when previous rendered, NewCalculator had specified that onTemnperatureChange of celsius TemperatureInput is NewCalculator's toHandleCelsiusChange method
// <> and onTemperatureChange on farenheit TemperatureInput is NewCalculator's toHandleChangeFarenheit method
// <> so either of thgese two calculator methods gets called depending on which input is chnged or editted
// <> inside those methods, NewCalculator component asks React to re render itself by calling this.setState() with new input value and current scale of input just editted
// <> react calls NewCalculator component's render method to learn what UI should look like, values of both inputs are re computed based on current temperature and active scale, temperature conversion is also done here
// <> react calls render methods of individual TemperatureInput compon ents with thier new props specified by NewCalculator, and it learns what UI should look like
// <> react calls render method of BoilingVerdict component passing temperature in celsius as its props
// <> ReactDOM updates DOM with boiling verdict and to match desired input values, input we just editted recieves its current value and other input is updated to temperature after conversion
// <> every update goes through same steps, so inputs stays in sync

// Lesson Learned
// there should be a single source of value for any data that changes in react appliucation
// usually state is first added to component that needs it for rendering, then if other component also needs it then lift up to their closest common ancestor instead of trying to sync state between different components, we should always rely on top-down data flow
// lifting state involves writing more boilerplate code than two way binding approaches, but it takes less work to find and isolate bugs
// if somethign can be derived from their props or state, it probably should not be in state, fopr example, instead of storing both celsius and farenheit value, we just store temperature and scale, other input can always be calculated inrender method based on current edit
// when there is a UI mismatch situation like these, we can use React Developer Tools to inspect props and move up tree until we find component responsible for updating that state, ,pre easier bugs traceablity

// with syncing for both celcius and farenheit
export class NewCalculator extends Component {
  // we'll store current input's temperature and scale in its's local state
  // that's what we "lifted up" from inputs and it will serve as source of values for child components
  // we are doing thius so that when we change temperature, it shall reflect accordingly for both units
  // it's enough to store recently changed input and scale that it represents, so that we can infer value of that other input basedf on current temperature and same state

  constructor(props) {
    super(props);
    this.toHandleCelsiusChange = this.toHandleCelsiusChange.bind(this);
    this.toHandleFarenheitChange = this.toHandleFarenheitChange.bind(this);
    this.state = {
      temperature: "",
      scale: "c",
    };
  }

  toHandleCelsiusChange(temperature) {
    this.setState({
      temperature: temperature,
      scale: "c",
    });
  }

  toHandleFarenheitChange(temperature) {
    this.setState({
      temperature,
      scale: "f",
    });
  }

  render() {
    let scale = this.state.scale;
    let temperature = this.state.temperature;

    let celsius =
      scale === "f" ? tryConvertion(temperature, toCelsius) : temperature;
    let farenheit =
      scale === "c" ? tryConvertion(temperature, toFarenheit) : temperature;

    // no matter which input we edit, temperature, scale in this compoenent gets updated
    // one of inputs gets value as is, so any user input is preserved and other is re calculated based on it
    return (
      <div>
        <fieldset>
          <TemperatrureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.toHandleCelsiusChange}
          />
          <TemperatrureInput
            scale="f"
            temperature={farenheit}
            onTemperatureChange={this.toHandleFarenheitChange}
          />
          <BoilingVerdict celsius={parseFloat(celsius)} />
        </fieldset>
      </div>
    );
  }
}

// just bringing two instances of TemperatureInput without syncing temperature for both ccelcius and farenheit
// export class NewCalculator extends Component {
//     render() {
//         return (
//             <div>
//                 {/* when both of these were inpendent of each other with their own state values, without syncing */}
//                 <TemperatrureInput scale="c" />
//                 <TemperatrureInput scale="f" />
//             </div>
//         )
//     }
// }
