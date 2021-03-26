import { Fragment } from 'react';

import { ThemeProvider } from 'styled-components';

import './App.css';
import { GlobalStyle } from 'GlobalStyles';

import { themes } from 'assets/themes';
import logo from 'assets/img/logo.svg';

import { Button } from 'views/.components/Button';

export const App = () => (
  <ThemeProvider theme={themes.bubblesTheme}>
    <GlobalStyle />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://instagram.com/pablo.arrastia" target="_blank" rel="noopener noreferrer">
          Pablo Arrastia
        </a>
        <Button label={'test'} />
      </header>
    </div>
  </ThemeProvider>
);
