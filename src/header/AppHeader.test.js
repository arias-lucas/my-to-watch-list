import React from 'react';
import { render } from '@testing-library/react';
import AppHeader from './AppHeader';

test('header exists', () => {
  const { getByText } = render(<AppHeader />)
  expect(getByText('MY TO WATCH LIST')).toBeInTheDocument();
});