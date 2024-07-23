import { Button } from "../../components/Button";
import { Forms } from "../../components/Input";
import { ButonLink } from "../../components/LinkButton";
import { Container } from "./styles";
import { Logo } from "../../components/Logo";
export function SignIn() {
  return (
    <Container>
      <Logo />

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

      <ButonLink title="criar uma conta" />
    </Container>
  );
}
