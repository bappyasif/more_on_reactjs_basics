import React from "react";

export function FormItem(props) {
  return (
    <div>
      <label>{props.type === "radio" ? props.value : props.name}</label>
      <br />
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        checked={props.checked}
      />
    </div>
  );
}

// export class FormItem extends Component {
//     constructor() {
//         super();
//         this.handleInputs =  this.handleInputs.bind(this);
//     }
//     handleInputs(evt) {
//         let { name, value, type } = evt.target;
//         this.props.handleChange(name, value)
//     }
//   render() {
//     return (
//       <div>
//         <label>{this.props.name}</label>
//         <br />
//         <input
//           type={this.props.type}
//           name={this.props.name}
//           value={this.props.value}
//           onChange={this.handleInputs}
//           checked={this.props.checked}
//         />
//       </div>
//     );
//   }
// }
