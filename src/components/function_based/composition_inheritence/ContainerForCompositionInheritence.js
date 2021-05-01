import React from "react";
import { SignupDialog } from "../../class_based/composition_inheritence/SignupDialog";
import { Chat } from "./Chat";
import { Contacts } from "./Contacts";
import { FancyBorder } from "./FancyBorder";
import { SplitPane } from "./SplitPane";
import { WelcomeDialog } from "./WelcomeDialog";

export function ContainerForCompositionInheritence() {
  return (
    <div>
      <p>using composition over inheritence</p>
      {/* containment */}
      {/* some components don't know their children ahead of time, it usually common for components like Sidebar or Dialog that represents generic "boxes" */}
      {/* anything inside <FancyBorder> JSX tags  passed into considered as child prop, and can be rendered into that component using {props.children} */}
      {/* className in component doesn't work as JSX tags, seems like only works within JSX tags */}
      <FancyBorder color="blue">
        <h4 className="fancy-title">Welcome</h4>
        <p className="fancy-message">Thank you for visiting our craft</p>
      </FancyBorder>
      {/* while this might be less common but we can have multiple "holes" in a component, in such case we can just use our own "convention" instead of using {children} */}
      <SplitPane left={<Contacts />} />
      <SplitPane right={<Chat />} />
      {/* react elements like <contacts /> and <chat /> are just objects, so we can pass them as props like any other data, there are no limitation on what you can pass as props in React */}
      <br />

      {/* specialization */}
      {/* sometimes we think about components as being "special cases" of other components */}
      {/* in react, this is also achieved by composition, where a more "specefic" component renders more "generic" one's and configures it with props */}
      <WelcomeDialog
        title="Welcome!!"
        desc="Thank you for visiting our craft"
      />
      {/* composition works equally well in class components as well */}
      <SignupDialog />
      {/* props and composition gives us all that flexibility we need to customize a component's look and behavior in an explicit and safe way */}
      {/* we should always remember that compoennts may accept arbitary props, includinf primitive values, React elements or functions */}
      {/* if we need to reuse non UI functionality we can extract it into a module and use it by importing it into components without have to extending it */}
    </div>
  );
}
