import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ThemesSwitch from "./ThemesSwitch";
import { ThemeContext, DARK_THEME } from "./../../themes";

test("should change to light theme", () => {
  const theme = { theme: DARK_THEME, changeTheme: jest.fn() };
  const { getByRole } = render(
    <ThemeContext.Provider value={theme}>
      <ThemesSwitch></ThemesSwitch>
    </ThemeContext.Provider>
  );
  const themesSwitch = getByRole("themeSwitch");
  fireEvent.click(themesSwitch);
  expect(theme.changeTheme).toHaveBeenCalled();
});

test("shouldn't change theme if its using a theme and we click on its icon", () => {
  const theme = { theme: DARK_THEME, changeTheme: jest.fn() };
  const { getByRole } = render(
    <ThemeContext.Provider value={theme}>
      <ThemesSwitch></ThemesSwitch>
    </ThemeContext.Provider>
  );
  const themesSwitch = getByRole("themeSwitch");
  const darkThemeIcon = getByRole("darkThemeIcon");
  const lightThemeIcon = getByRole("lightThemeIcon");

  fireEvent.click(themesSwitch); //dark theme to light theme
  fireEvent.click(lightThemeIcon);
  expect(theme.changeTheme).toHaveBeenCalledTimes(1);

  fireEvent.click(darkThemeIcon);
  fireEvent.click(darkThemeIcon);
  expect(theme.changeTheme).toHaveBeenCalledTimes(2);

  fireEvent.click(themesSwitch);
  expect(theme.changeTheme).toHaveBeenCalledTimes(3);

  fireEvent.click(darkThemeIcon);
  expect(theme.changeTheme).toHaveBeenCalledTimes(4);
  fireEvent.click(lightThemeIcon);
  fireEvent.click(lightThemeIcon);
  expect(theme.changeTheme).toHaveBeenCalledTimes(5);
});
