import { transparentize } from 'polished';
import styled from 'styled-components';

import { Theme } from '../../styles/global';

export const Container = styled.form`
  h2 {
    color: ${Theme.COLORS.textTitle};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1rem;
    height: 3.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${Theme.COLORS.borderGray};

    background: #e7e9ee;

    &::placeholder {
      color: ${Theme.COLORS.textBody};
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1rem;
    height: 3.5rem;
    background: ${Theme.COLORS.green};
    border-radius: 0.25rem;
    border: 0;
    color: ${Theme.COLORS.white};
    font-size: 1rem;
    font-weight: 600;
    box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.2);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: string;
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 3.5rem;
  border: 1px solid ${Theme.COLORS.borderGray};
  border-radius: 0.25rem;
  background: ${(props) =>
    props.isActive ? transparentize(0.8, props.activeColor) : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    filter: brightness(0.9);
  }
  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;

    color: ${Theme.COLORS.textTitle};
  }
`;
