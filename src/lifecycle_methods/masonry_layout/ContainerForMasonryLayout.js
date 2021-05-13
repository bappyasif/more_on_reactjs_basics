import React, { Component } from "react";
import { GridComponent } from "./GridComponent";

export class ContainerForMasonryLayout extends Component {
  render() {
    return (
      <div>
        <p>another lifecycle methods example</p>
        <GridComponent numberOfBlocks={8} />
      </div>
    );
  }
}
