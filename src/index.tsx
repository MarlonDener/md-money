import React from 'react';
import ReactDOM from 'react-dom';

import { createServer, Model } from 'miragejs';
import { ThemeProvider } from 'styled-components';

import { App } from './App';
import { GlobalStyle, Theme } from './styles/global';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Venda de celular',
          type: 'deposit',
          amount: 2300,
          category: 'Renda extra',
          createdAt: new Date('2022-01-02 16:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          amount: 1100,
          category: 'Renda extra',
          createdAt: new Date('2022-01-02 16:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
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
