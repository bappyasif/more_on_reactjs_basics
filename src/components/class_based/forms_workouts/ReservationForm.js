import React, { Component } from "react";
// import ReactDOM from "react-dom"

export class ReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };
    this.handleMultipleElementChange = this.handleMultipleElementChange.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMultipleElementChange(evt) {
    let target = evt.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(
      "is going: " +
        this.state.isGoing +
        " guests number" +
        this.state.numberOfGuests
    );
  }

//   componentDidMount() {
//     setTimeout(() => {
//       console.log("::");
//       //   return (
//       //     <fieldset>
//       //       <label>going??</label>
//       //       <input
//       //         name="isGoing"
//       //         type="checkbox"

//       //         // onChange={this.handleMultipleElementChange}
//       //       />
//       //     </fieldset>
//       //   );
//       ReactDOM.render(
//         <fieldset>
//           <label>going??</label>
//           <input
//             name="isGoing"
//             type="checkbox"

//             // onChange={this.handleMultipleElementChange}
//           />
//         </fieldset>, document.getElementById("root")
//       );
//     }, 2000);
//   }

  render() {
    return (
      <div>
        <fieldset>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <label>is going</label>
              <input
                name="isGoing"
                type="checkbox"
                onChange={this.handleMultipleElementChange}
              />
            </fieldset>
            <br />
            <fieldset>
              <label>guests number</label>
              <input
                name="numberOfGuests"
                type="number"
                onChange={this.handleMultipleElementChange}
              />
            </fieldset>
            <fieldset>
              <input type="submit" value="submit" />
            </fieldset>
          </form>
          {/* {setTimeout(
            <fieldset>
              <label>going??</label>
              <input
                name="isGoing"
                type="null"
                // onChange={this.handleMultipleElementChange}
              />
            </fieldset>,
            2000
          )} */}
        </fieldset>
      </div>
    );
  }
}
