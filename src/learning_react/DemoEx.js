import React from "react";
import { DemoFooter } from "./DemoFooter";
import { DemoMain } from "./DemoMain";
import { DemoNav } from "./DemoNav";

export function DemoEx() {
  return (
    <div>
      <h4 style={{ color: "maroon" }}>
        <DemoNav />
      </h4>
      <p style={{ fontSize: "2em" }}>
        <DemoMain />
      </p>
      <ul>
        <li>a</li>
        <li>b</li>
      </ul>
      <DemoFooter />
    </div>
  );
}
