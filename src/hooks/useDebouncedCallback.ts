import { useCallback, useRef } from 'react';

export default function useDebouncedCallback(fn: (...args: any[]) => void, dependencies: any[], timeout: number) {
  const timeoutRef = useRef<NodeJS.Timeout>();
  return useCallback((...args: any[]) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, timeout);
  }, dependencies);
}
