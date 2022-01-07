import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';

import { App } from './App';
import { GlobalStyle, Theme } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme} />
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
