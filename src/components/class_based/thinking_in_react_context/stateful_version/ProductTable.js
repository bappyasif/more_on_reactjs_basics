import React, { Component } from "react";
import { ProductCategoryRow } from "../ProductCategoryRow";
import { ProductRow } from "../ProductRow";

export class ProductTable extends Component {
  render() {
    let rows = [];
    let lastCategory = null;

    this.props.products.forEach((prod) => {
      if(prod.name.indexOf(this.props.searchText) === -1) {
        return
      }
      if(this.props.inStock && !prod.stocked) {
        return
      }
      if (prod.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow category={prod.category} key={prod.category} />
        );
      }

      rows.push(<ProductRow product={prod} key={prod.name} />);

      lastCategory = prod.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
