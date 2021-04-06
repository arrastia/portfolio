import { Fragment, useContext } from 'react';

import './App.css';
import { GlobalStyle } from 'GlobalStyles';

import { ThemeContext } from 'styled-components';

import logo from 'assets/img/logo.svg';

import { Button } from 'views/.components/Button';

export const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <GlobalStyle theme={theme} />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a className="App-link" href="https://instagram.com/pablo.arrastia" target="_blank" rel="noopener noreferrer">
            Pablo Arrastia
          </a>
          <Button label={'test'} />
        </header>
      </div>
    </Fragment>
  );
};
