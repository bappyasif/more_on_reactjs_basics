import React, { Component } from "react";
import { GreetingContainer } from "../../function_based/conditional_rendering/GreetingContainer";
import { Mailbox } from "../../function_based/conditional_rendering/Mailbox";
import { LoginController } from "./LoginController";
import { Page } from "./Page";

export class ContainerForConditionalRendering extends Component {
  render() {
    let msgs = ["react", "re:react"];
    let count = 0;
    return (
      <div>
        <p>conditional rendering</p>
        <GreetingContainer isLogged={true} />
        <br />
        <p>
          with a stateful component, to ensure which button to show up along
          with greetings
        </p>
        <LoginController />

        {/* using inline if with logical && operator */}
        <Mailbox unreadMsgs={msgs} />
        {/* if it's a falsy expresion, will still cause element after && to be skipped but will return falsy expression */}
        <div>{count && <h4>messages: {count}</h4>}</div>
        <br />

        {/* preventing component from rendering */}
        {/* in some cases we might want to hide a component even though it was renddered by another component. to do so we return null instead of its render output */}
        {/* in this example WarningBanner is rendered depending on value of prop called warn, if false then component does not render */}
        {/* returning null from a compoenent render method does not affect component's lifecycle method, for instance componentDidUpdate will still be called when returned false from component, just without render output but false */}
        <Page />
      </div>
    );
  }
}
