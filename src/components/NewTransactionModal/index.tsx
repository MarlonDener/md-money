import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { AxiosRequestConfig } from 'axios';

import closeImg from '../../assets/Close.svg';
import incomeImg from '../../assets/Income.svg';
import outcomeImg from '../../assets/Outcome.svg';
import { api } from '../../services/api';
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
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    };

    api.post('/transactions', data);
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <FormControl>
          <input
            placeholder="Título"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder="Valor"
            type="number"
            onChange={(e) => setValue(Number(e.target.value))}
          />

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

          <input
            placeholder="Categoria"
            type="text"
            onChange={(e) => setCategory(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </FormControl>
      </Container>
    </Modal>
  );
}
