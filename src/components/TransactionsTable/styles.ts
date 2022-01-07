import styled from 'styled-components';

import { Theme } from '../../styles/global';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: ${Theme.COLORS.textBody};
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: ${Theme.COLORS.shape};
      color: ${Theme.COLORS.textBody};
      border-radius: 0.25rem;

      &:first-child {
        color: ${Theme.COLORS.textTitle};
      }
      &.withdraw {
        color: ${Theme.COLORS.red};
      }
      &.deposit {
        color: ${Theme.COLORS.green};
      }
    }
  }
`;
