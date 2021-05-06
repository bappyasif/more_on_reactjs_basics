import React from "react";
import { Header } from "./Header";
import { MemeGenerator } from "./MemeGenerator";

export class ContainerForMemeGenerator extends React.Component {
  render() {
    return (
      <div>
          <Header />
          <MemeGenerator />
      </div>
    );
  }
}
