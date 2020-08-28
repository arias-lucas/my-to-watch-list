import React from 'react';
import { render } from '@testing-library/react';
import MoviesGrid from './MoviesGrid';

test('should render given data', () => {
  const mockedMovies = [{
    Title: 'Movie one',
    Poster: 'image one',
    Year: '2020',
    imdbID: 1
  }, {
    Title: 'Movie two',
    Poster: 'image two',
    Year: '2015',
    imdbID: 2
  }];

  const { getByText } = render(<MoviesGrid movies={mockedMovies} />)
  expect(getByText(/Movie one/)).toBeInTheDocument();
  expect(getByText(/2020/)).toBeInTheDocument();
  expect(getByText(/Movie two/)).toBeInTheDocument();
  expect(getByText(/2015/)).toBeInTheDocument();
});

test('should render no results', () => {
  const { getByText } = render(<MoviesGrid movies={[]} />);
  expect(getByText(/There are no results./)).toBeInTheDocument();
});

test('should render no results', () => {
  const { getByText } = render(<MoviesGrid />);
  expect(getByText(/There are no results./)).toBeInTheDocument();
});