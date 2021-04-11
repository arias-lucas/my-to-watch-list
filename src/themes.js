import React from "react";

export const DARK_THEME = {
  backgroundColor: "rgb(27 26 26)",
  color: "#ded7d7",
};

export const LIGHT_THEME = {
  backgroundColor: "lightgrey",
  color: "black",
};

export const ThemeContext = React.createContext({
  theme: DARK_THEME,
});
