import styled from 'styled-components';

import { Theme } from '../../styles/global';

export const Container = styled.header`
  background: ${Theme.COLORS.blue};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: ${Theme.COLORS.white};
    background: ${Theme.COLORS.blueLight};
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Title = styled.h2`
  color: ${Theme.COLORS.white};
  padding: 0 1rem;
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
