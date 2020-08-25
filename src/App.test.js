import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

function renderWithRouter(ui, { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}) {
  const Wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  )
  return { ...render(ui, { wrapper: Wrapper }), history }
}

test('home route', () => {
  const { container } = renderWithRouter(<App />)
  expect(container.innerHTML).toMatch('Find a movie')
});

test('movie-details route', () => {
  const { container } = renderWithRouter(<App />, { route: '/details/7' })
  expect(container.innerHTML).toMatch('Movie details')
});

test('my-list route', () => {
  const { container } = renderWithRouter(<App />, { route: '/my-list' })
  expect(container.innerHTML).toMatch('My ToWatchList')
});

test('404 not found route', () => {
  const { container } = renderWithRouter(<App />, { route: '/non-existent-route' })
  expect(container.innerHTML).toMatch('404')
});