import React, { useContext, useState } from "react";

// syntax: let value = useContext(someContext);
// accepts a context object, returned from React.createContext, which returns current context value for that context
// current context value ios determined by value prop of nearest <SomeCtx.Provider> above in component tree
// when nearest Context.Provider updates, this hook will trigger a re render with latest context value passed to that SomeCtx provider
// if any ancestor uses memo or shouldComponentUpdate, a re render still happens at compoennet itself using useContext hook
// useContext(SomeContext) only lets us read context amd subscrfibe to its changes, we would needed a SomeContext.Provider above in DOM tree to provide value for this context

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

let ThemeContext = React.createContext(themes.light);

export function ContextHook() {
  //   let toggleTheme = () => (themes.dark ? themes.light : themes.dark);
  // let toggleTheme = () => (themeType = themeType === themes.dark ? themes.light : themes.dark);
//   let [isTheme, setTheme] = useState(themes.dark);
// let [isTheme, setTheme] = useState(true);
// let [isDark, setDark] = useState(true)
//   let toggleTheme = () => (isDark ? setTheme(themes.light) && setDark(false) : setTheme(themes.dark) && setDark(true));

  return (
    <div>
      <ThemeContext.Provider
        // value={{ themeType: themes.dark, toggle: toggleTheme }}
        // value={{ themeType: isTheme}}
        // value={{ themeType: isTheme, toggle: toggleTheme }}
        value={{ themeType: themes.dark}}
      >
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  let theme = useContext(ThemeContext);
    // console.log(theme)
  //   let toggleTheme = () => themes.dark ? themes.light : themes.dark;
//   let toggleTheme = () =>
//     (theme.themeType = theme.themeType.background === "#222"
//       ? themes.light
//       : themes.dark);
  return (
    <button
        // onClick={theme.toggle}
    //   onClick={toggleTheme}
      style={{
        backgroundColor: theme.themeType.background,
        color: theme.themeType.foreground,
      }}
    >
      Styled by theme context
    </button>
  );
}

/**
 * 
 * 
 function ThemedButton() {
  let theme = useContext(ThemeContext);
//   let toggleTheme = () => themes.dark ? themes.light : themes.dark;
  return (
    <button onClick={toggleTheme}
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      Styled by theme context
    </button>
  );
}
 * 
 * 
 export function ContextHook() {
  // let themes = {
  //     light: {
  //         foreground: "#000",
  //         background: "#eee"
  //     },
  //     dark: {
  //         foreground: "#fff",
  //         background: "#222"
  //     }
  // }

  // let ThemeContext = React.createContext(themes.light);

//   let toggleTheme = () => themes.dark ? themes.light : themes.dark;

  return (
    <div>
      <ThemeContext.Provider value={themes.dark}>
          <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}
 */
