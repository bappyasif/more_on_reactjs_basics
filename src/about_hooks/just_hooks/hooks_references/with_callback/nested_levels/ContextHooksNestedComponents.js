import React, { useState } from "react";
import { ThemeContext, themes } from "./theme_context";
import { ThemedButtonWithToggler } from "./ThemedButtonWithToggler";

export function ContextHooksNestedComponents() {
  let [theme, setTheme] = useState(themes.light);
  let toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <Content />
    </ThemeContext.Provider>
  );
}

function Content() {
    return(
        <div>
            <ThemedButtonWithToggler />
        </div>
    )
}