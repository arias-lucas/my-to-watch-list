import { renderHook } from '@testing-library/react-hooks';
import useFetchMovies from './useFetchMovies';

test('should activate isLoading flag', () => {
  let renderedHook = renderHook(() => useFetchMovies('black'))
  expect(renderedHook.result.current.isLoading).toBe(true);
})

test('empty input should display no movies', () => {
  let renderedHook = renderHook(() => useFetchMovies(''))
  expect(renderedHook.result.current.movies).toStrictEqual([]);
})