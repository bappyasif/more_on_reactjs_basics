import React from "react";
export let themes = {
    light: {
      foreground: "#000",
      background: "#eee",
    },
    dark: {
      foreground: "#fff",
      background: "#222",
    },
  };
  
  // do make sure shape of default value passed to context matches how consumers expects
  export let ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {}
  });