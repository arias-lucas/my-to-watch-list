import React from 'react';
import { render } from '@testing-library/react';
import HomeContainer from './HomeContainer';

test('should render loading text', () => {
  const isLoading = true;

  const { getByText } = render(<HomeContainer isLoading={isLoading} />)
  expect(getByText(/Loading/)).toBeInTheDocument();
});

test('should render movies', () => {
  const isLoading = false;

  const { getByText } = render(<HomeContainer isLoading={isLoading} />)
  expect(getByText(/There are no results./)).toBeInTheDocument();
});