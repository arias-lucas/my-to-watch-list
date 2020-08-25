import React from 'react';
import { render } from '@testing-library/react';
import MovieCard from './MovieCard';

test('should render given data', () => {
  const mockedMovie = {
    Title: 'Fake movie',
    Poster: 'image',
    Year: '2020'
  };
  const { getByText, getByRole } = render(<MovieCard movie={mockedMovie} />)
  expect(getByText(mockedMovie.Title)).toBeInTheDocument();
  expect(getByRole('img')).toBeInTheDocument();
  expect(getByText(mockedMovie.Year)).toBeInTheDocument();
});