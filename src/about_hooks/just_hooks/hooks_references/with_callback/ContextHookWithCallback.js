import { ThemeContext, themes } from "./themes";
import { ThemedButton } from "./ThemedButton";
import React, { useState } from "react";

function ToolBar(props) {
  return <ThemedButton onClick={props.toggleTheme}>Change Theme</ThemedButton>;
}

export function ContextHookWithCallback() {
  let [theme, setTheme] = useState(themes.light);
  console.log(theme, "before");
  let toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };
  console.log(theme, "after");
  return (
    <div>
      <ThemeContext.Provider value={theme}>
          <ToolBar toggleTheme={toggleTheme} />
          {/* <ThemedButton /> */}
      </ThemeContext.Provider>
    </div>
  );
}
