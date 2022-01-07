import logo from '../../assets/Logo.png';
import { Container, Content, Title, WrapperTitle } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <WrapperTitle>
          <img src={logo} alt="md money" />
          <Title>Md Money</Title>
        </WrapperTitle>
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
