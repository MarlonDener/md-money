import styled from 'styled-components';

import { Theme } from '../../styles/global';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;

  div {
    background: ${Theme.COLORS.shape};
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: ${Theme.COLORS.textTitle};

    &.highlight-background {
      background: ${Theme.COLORS.green};
      color: ${Theme.COLORS.white};
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      display: block;
      line-height: 3rem;
    }
  }
`;
