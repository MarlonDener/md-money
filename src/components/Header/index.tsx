import logo from '../../assets/Logo.png';
import { Container, Content, Title, WrapperTitle } from './styles';

type Props = {
  onOpenNewTransactionModal: (isOpen: boolean) => void;
};

export function Header({ onOpenNewTransactionModal }: Props) {
  return (
    <Container>
      <Content>
        <WrapperTitle>
          <img src={logo} alt="md money" />
          <Title>Md Money</Title>
        </WrapperTitle>
        <button type="button" onClick={() => onOpenNewTransactionModal(true)}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
