import { useRef, useCallback } from 'react';
import Lodash from 'lodash';

function useDebouncedCallback(callback, delay) {
  const callbackRef = useRef()
  callbackRef.current = callback;

  return useCallback(Lodash.debounce(
      (...args) => callbackRef.current(...args),
      delay,
  ), []);
};

function useThrottledCallback(callback, delay) {
  const callbackRef = useRef()
  callbackRef.current = callback;

  return useCallback(Lodash.throttle(
      (...args) => callbackRef.current(...args),
      delay,
  ), []);
};

export {useDebouncedCallback, useThrottledCallback};