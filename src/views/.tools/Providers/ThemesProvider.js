import { useReducer } from 'react';

import { ThemeProvider } from 'styled-components';

import { themes } from 'assets/themes';

import { themeReducer } from 'views/.tools/Reducers/themeReducer';

import { useLocalStorage } from 'views/.tools/Hooks/useLocalStorage';

export const ThemesProvider = ({ children }) => {
  const [themeStorageState, setThemeStorageState] = useLocalStorage('theme', 'iOSTheme');
  const [themeState, themeDispatch] = useReducer(themeReducer, themeStorageState);

  const onChangeTheme = theme => {
    themeDispatch({ type: 'SWITCH_THEME', payload: theme });
    setThemeStorageState(theme);
  };

  return <ThemeProvider theme={{ theme: themes[themeState], onChangeTheme }}>{children}</ThemeProvider>;
};
