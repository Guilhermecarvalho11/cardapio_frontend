import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
import { Logo } from "../../components/Logo";
import { Container } from "./styles";
export function SignUp() {
  return (
    <Container>
      <Logo primary />
      <label htmlFor="name">Seu nome</label>
      <Input id="name" type="text" placeholder="Exemplo: Maria da Silva" />

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
      <Button title="Criar conta" />

      <LinkButton title="Já tenho uma conta" to="/signin" />
    </Container>
  );
}
