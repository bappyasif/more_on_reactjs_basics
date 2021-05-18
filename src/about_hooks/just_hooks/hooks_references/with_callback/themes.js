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
  
  export let ThemeContext = React.createContext(themes.light);