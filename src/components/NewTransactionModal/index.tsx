import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/Close.svg';
import incomeImg from '../../assets/Income.svg';
import outcomeImg from '../../assets/Outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';
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
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
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
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
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
