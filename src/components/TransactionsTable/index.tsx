import { useEffect } from 'react';

import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categorias</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de sistema</td>
            <td className="deposit">R$ 1.200,00</td>
            <td>Venda</td>
            <td>05/01/2022</td>
          </tr>
          <tr>
            <td>Computador</td>
            <td className="deposit">R$ 2.000,00</td>
            <td>Venda</td>
            <td>05/01/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$ 800,00</td>
            <td>Casa</td>
            <td>05/01/2022</td>
          </tr>
          <tr>
            <td>Lanche</td>
            <td className="withdraw">R$ 52,00</td>
            <td>Alimentação</td>
            <td>05/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
