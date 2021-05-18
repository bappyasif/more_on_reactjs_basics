import React, { useContext, useState } from "react";
let themes = {
  light: {
    foreground: "#000",
    background: "#eee",
  },
  dark: {
    foreground: "#fff",
    background: "#222",
  },
};

let ThemeContext = React.createContext({
  theme: themes.light,
  toggler: () => {},
});

export function ContextHookVersionTwo() {
  let [theme, setTheme] = useState(themes.dark);
  let toggler = () =>
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  return (
    <ThemeContext.Provider value={{ theme, toggler }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  let themeCtx = useContext(ThemeContext);
//   console.log(themeCtx, "??");
  return (
    <button
      onClick={themeCtx.toggler}
      style={{
        backgroundColor: themeCtx.theme.background,
        color: themeCtx.theme.foreground,
      }}
    >
      Styled by theme context
    </button>
  );
}
