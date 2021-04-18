import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';
import { useMedia } from './useMedia';

export const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode');
  const prefersDarkMode = useMedia(['(prefers-color-scheme: dark)'], [true], false);

  const enabled = typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

  useEffect(() => {
    const className = 'dark-mode';
    const element = window.document.body;
    enabled ? element.classList.add(className) : element.classList.remove(className);
  }, [enabled]);

  return [enabled, setEnabledState];
};
