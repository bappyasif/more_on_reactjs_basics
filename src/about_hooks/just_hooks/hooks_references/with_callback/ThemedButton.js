import React, { useContext } from "react";
import { ThemeContext } from "./themes";

export function ThemedButton(props) {
  let theme = useContext(ThemeContext);
  console.log(theme, props);
  return (
    <div>
      <button {...props} style={{ backgroundColor: theme.background }} />
      {/* <button {...props} style={{ backgroundColor: theme.background }}>Change Theme</button> */}
    </div>
  );
}