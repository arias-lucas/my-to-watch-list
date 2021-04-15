import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ThemesSwitch from "./ThemesSwitch";
import { ThemeContext, DARK_THEME, LIGHT_THEME } from "./../../themes";

afterEach(() => {
  jest.resetAllMocks()
})

function buildThemes(theme) {
  return { theme, changeTheme: jest.fn() };
}

test("should change to light theme", () => {
  const theme = buildThemes(DARK_THEME);
  const { getByRole } = render(
    <ThemeContext.Provider value={theme}>
      <ThemesSwitch></ThemesSwitch>
    </ThemeContext.Provider>
  );
  const lightThemeIcon = getByRole("lightThemeIcon");
  fireEvent.click(lightThemeIcon);
  expect(theme.changeTheme).toHaveBeenCalled();
});

test("should change to dark theme", () => {  
  const theme = buildThemes(LIGHT_THEME);
  const { getByRole } = render(
    <ThemeContext.Provider value={theme}>
      <ThemesSwitch></ThemesSwitch>
    </ThemeContext.Provider>
  );
  const darkThemeIcon = getByRole("darkThemeIcon");
  fireEvent.click(darkThemeIcon); 
  expect(theme.changeTheme).toHaveBeenCalled();
});

test("shouldn't change to light theme", () => {
  const theme = buildThemes(DARK_THEME);
  const { getByRole } = render(
    <ThemeContext.Provider value={theme}>
      <ThemesSwitch></ThemesSwitch>
    </ThemeContext.Provider>
  );
  const darkThemeIcon = getByRole("darkThemeIcon");
  fireEvent.click(darkThemeIcon); 
  expect(theme.changeTheme).not.toHaveBeenCalled();
  });

test("shouldn't change to dark theme", () => {  
  const theme = buildThemes(LIGHT_THEME);
  const { getByRole } = render(
    <ThemeContext.Provider value={theme}>
      <ThemesSwitch></ThemesSwitch>
    </ThemeContext.Provider>
  );
  const lightThemeIcon = getByRole("lightThemeIcon");
  fireEvent.click(lightThemeIcon); 
  expect(theme.changeTheme).not.toHaveBeenCalled();
});


test("should change themes", () => {  
  const theme = buildThemes(LIGHT_THEME);
  const { getByRole } = render(
    <ThemeContext.Provider value={theme}>
      <ThemesSwitch></ThemesSwitch>
    </ThemeContext.Provider>
  );
  const themesSwitch = getByRole("themeSwitch");
  fireEvent.click(themesSwitch); 
  fireEvent.click(themesSwitch);
  expect(theme.changeTheme).toHaveBeenCalledTimes(2);
});