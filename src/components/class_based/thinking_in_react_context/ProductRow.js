import React, { Component } from "react";

export class ProductRow extends Component {
  render() {
    let prod = this.props.product;
    let name = prod.stocked ? (
      prod.name
    ) : (
      <span style={{ color: "red" }}>{prod.name}</span>
    );
    return <tr>
        <td>{name}</td>
        <td>{prod.price}</td>
    </tr>;
  }
}
