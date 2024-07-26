import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
import { Container } from "./styles";
import { Logo } from "../../components/Logo";
export function SignIn() {
  return (
    <Container>
      <Logo primary fontSize={"37px"} />

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

      <LinkButton title="criar uma conta" to="/register" />
    </Container>
  );
}
