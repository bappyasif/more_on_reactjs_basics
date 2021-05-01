import React, { Component } from "react";

export class SearchBar extends Component {
  render() {
    return (
      <div>
        <fieldset>
            <form>
                <input type='text' placeholder='search..' />
                <p>
                    <input type='checkbox' />
                    {' '}
                    show products available only
                </p>
            </form>
        </fieldset>
      </div>
    );
  }
}
