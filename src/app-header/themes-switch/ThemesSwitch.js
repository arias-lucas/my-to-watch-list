import React from "react";
import { ThemeContext, DARK_THEME } from "./../../themes";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import {
  ThemesContainer,
  IconContainer,
  ThemeToggle,
} from "./ThemesSwitch.styles";

const isDarkThemeActive = (theme) => theme === DARK_THEME;

function ThemesSwitch() {
  return (
    <ThemeContext.Consumer>
      {({ theme, changeTheme }) => (
        <ThemesContainer>
          <IconContainer
            style={{
              left: "-10px",
            }}
            onClick={() => !isDarkThemeActive(theme) && changeTheme()}
            role="darkThemeIcon"
          >
            <NightsStayIcon />
          </IconContainer>
          <ThemeToggle
            onChange={changeTheme}
            color="default"
            checked={!isDarkThemeActive(theme)}
            inputProps={{
              role: "themeSwitch",
              "aria-label": "Switch theme's site",
            }}
          />
          <IconContainer
            style={{
              right: "-10px",
            }}
            onClick={() => isDarkThemeActive(theme) && changeTheme()}
            role="lightThemeIcon"
          >
            <WbSunnyIcon />
          </IconContainer>
        </ThemesContainer>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemesSwitch;
