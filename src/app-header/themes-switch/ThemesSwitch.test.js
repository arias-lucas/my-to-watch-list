import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ThemesSwitch from './ThemesSwitch';

test('should change to light theme', () => {
  const mockedHandleChange = jest.fn();
  const { getByRole } = render(<ThemesSwitch handleChange={mockedHandleChange} />)
  const themesSwitch = getByRole('themeSwitch');
  fireEvent.click(themesSwitch);
  expect(mockedHandleChange).toHaveBeenCalled();
});

test("shouldn't change theme if its using a theme and we click on its icon", () => {
  const mockedHandleChange = jest.fn();
  const { getByRole } = render(<ThemesSwitch handleChange={mockedHandleChange} />)
  const themesSwitch = getByRole('themeSwitch');
  const darkThemeIcon = getByRole('darkThemeIcon');
  const lightThemeIcon = getByRole('lightThemeIcon');

  fireEvent.click(themesSwitch); //dark theme to light theme
  fireEvent.click(lightThemeIcon);
  expect(mockedHandleChange).toHaveBeenCalledTimes(1);

  fireEvent.click(darkThemeIcon);
  fireEvent.click(darkThemeIcon);
  expect(mockedHandleChange).toHaveBeenCalledTimes(2);

  fireEvent.click(themesSwitch);
  expect(mockedHandleChange).toHaveBeenCalledTimes(3);

  fireEvent.click(darkThemeIcon);
  expect(mockedHandleChange).toHaveBeenCalledTimes(4);
  fireEvent.click(lightThemeIcon);
  fireEvent.click(lightThemeIcon);
  expect(mockedHandleChange).toHaveBeenCalledTimes(5);
});