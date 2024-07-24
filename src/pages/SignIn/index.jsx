import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButonLink } from "../../components/LinkButton";
import { Container } from "./styles";
import { Logo } from "../../components/Logo";
export function SignIn() {
  return (
    <Container>
      <Logo primary />

      <label htmlFor="email">email</label>
      <Input
        id="email"
        type="email"
        placeholder="Exemplo: exemplo@exemplo.com.br"
      />
      <label htmlFor="password">senha</label>
      <Input
        id="password"
        type="password"
        placeholder="No minimo 6 caracteres"
      />
      <Button title="Entrar" />

      <ButonLink title="criar uma conta" />
    </Container>
  );
}
