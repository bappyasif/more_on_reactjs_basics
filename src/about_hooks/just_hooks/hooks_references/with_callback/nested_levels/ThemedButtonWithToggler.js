import React, { useContext } from "react";
import { ThemeContext } from "./theme_context";

export function ThemedButtonWithToggler() {
  // this component recieves not only theme but also toggler from that context
  let theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
          style={{ backgroundColor: theme.background }}
        >Toggle Theme</button>
      )}
    </ThemeContext.Consumer>
  );
}
