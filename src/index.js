import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

import { ThemesProvider } from 'views/.tools/Providers/ThemesProvider';

import { reportWebVitals } from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <ThemesProvider>
      <App />
    </ThemesProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
