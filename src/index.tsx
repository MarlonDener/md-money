import React from 'react';
import ReactDOM from 'react-dom';

import { createServer } from 'miragejs';
import { ThemeProvider } from 'styled-components';

import { App } from './App';
import { GlobalStyle, Theme } from './styles/global';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme} />
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
