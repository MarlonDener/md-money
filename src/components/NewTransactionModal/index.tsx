import React, { useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/Close.svg';
import incomeImg from '../../assets/Income.svg';
import outcomeImg from '../../assets/Outcome.svg';
import { Theme } from '../../styles/global';
import {
  Container,
  FormControl,
  TransactionTypeContainer,
  RadioBox,
} from './styles';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTrasactionModal({ onRequestClose, isOpen }: Props) {
  const [type, setType] = useState('deposit');

  return (
    <Modal
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>
        <FormControl>
          <TransactionTypeContainer>
            <RadioBox
              type="button"
              onClick={() => setType('deposit')}
              isActive={type === 'deposit'}
              activeColor={Theme.COLORS.green}
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox
              type="button"
              onClick={() => setType('withdraw')}
              isActive={type === 'withdraw'}
              activeColor={Theme.COLORS.red}
            >
              <img src={outcomeImg} alt="Entrada" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>
          <input placeholder="Categoria" type="text" />
          <input placeholder="Valor" type="number" />
          <button type="submit">Cadastrar</button>
        </FormControl>
      </Container>
    </Modal>
  );
}
