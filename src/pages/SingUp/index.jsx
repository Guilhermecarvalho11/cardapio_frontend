import { Button } from "../../components/Button";
import { Forms } from "../../components/Input";
import { ButonLink } from "../../components/LinkButton";
import { Logo } from "../../components/Logo";
import { Container } from "./styles";
export function SignUp() {
  return (
    <Container>
      <Logo />
      <label htmlFor="name">Seu nome</label>
      <Forms id="name" type="text" placeholder="Exemplo: Maria da Silva" />

      <label htmlFor="email">email</label>
      <Forms
        id="email"
        type="email"
        placeholder="Exemplo: exemplo@exemplo.com.br"
      />
      <label htmlFor="password">senha</label>
      <Forms
        id="password"
        type="password"
        placeholder="No minimo 6 caracteres"
      />
      <Button title="Entrar" />

      <ButonLink title="Já tenho uma conta" />
    </Container>
  );
}
