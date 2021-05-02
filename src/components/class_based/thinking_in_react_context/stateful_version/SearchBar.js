import React, { Component } from "react";

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.userSearchedProductText =  this.userSearchedProductText.bind(this);
    this.inStockProductFilter =  this.inStockProductFilter.bind(this);
  }
  userSearchedProductText(evt) {
    this.props.handleChange(evt.target.value);
  }
  inStockProductFilter(evt) {
    this.props.handleCheckbox(evt.target.checked);
  }
  render() {
    return (
      <div>
        <fieldset>
          <form>
            <input
              type="text"
              placeholder="search.."
              value={this.props.searchText}
              // onChange={this.props.handleChange}
              onChange={this.userSearchedProductText}
            />
            <p>
              <input
                type="checkbox"
                checked={this.props.inStock}
                // onChange={this.props.handleCheckbox}
                onChange={this.inStockProductFilter}
              />{" "}
              show products available only
            </p>
          </form>
        </fieldset>
      </div>
    );
  }
}
