import { renderHook, act } from '@testing-library/react-hooks';
import useDebounce from './useDebounce';

test('should return the value after X ms', () => {
  jest.useFakeTimers();
  let renderedHook = renderHook(() => useDebounce('testing debounced value', 500))

  expect(renderedHook.result.current).toBe(undefined);

  act(() => {
    jest.runAllTimers();
  });

  expect(renderedHook.result.current).toBe('testing debounced value');
})