import React, { Component } from "react";
import { ProductTable } from "../stateful_version/ProductTable";
import { SearchBar } from "../stateful_version/SearchBar";

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      filterProduct: false,
    };
    this.handleUserSearchText = this.handleUserSearchText.bind(this);
    this.handleFilterProductClick = this.handleFilterProductClick.bind(this);
  }
  // handleUserSearchText(evt) {
  //   this.setState((prevState) => {
  //     return {
  //       searchText: prevState.searchText + evt.target.value,
  //     };
  //   });
  // }
  // handleUserSearchText(evt) {
  //   this.setState({
  //     searchText: evt.target.value,
  //   });
  // }
  handleUserSearchText(filterSearch) {
    this.setState({
      searchText: filterSearch,
    });
  }


  // handleFilterProductClick(evt) {
  //   this.setState((prevSatate) => {
  //     return {
  //       filterProduct: !prevSatate.filterProduct,
  //     };
  //   });
  // }
  // handleFilterProductClick(evt) {
  //   this.setState({ filterProduct: evt.target.value });
  // }
  handleFilterProductClick(inStockProductOnly) {
    this.setState({ filterProduct: inStockProductOnly });
  }
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          handleChange={this.handleUserSearchText}
          inStock={this.state.filterProduct}
          handleCheckbox={this.handleFilterProductClick}
        />
        <ProductTable
          inStock={this.state.filterProduct}
          products={this.props.products}
          searchText={this.state.searchText}
        />
      </div>
    );
  }
}
