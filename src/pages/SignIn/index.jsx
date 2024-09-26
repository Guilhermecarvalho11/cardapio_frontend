import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
import { Container, Form } from "./styles";
import { Logo } from "../../components/Logo";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Logo primary={"primary"} fontSize={"37px"} showImage={true} />
      <Form>
        <h2>Faça Login</h2>
        <label htmlFor="email">email</label>
        <Input
          id="email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">senha</label>
        <Input
          id="password"
          type="password"
          placeholder="No minimo 6 caracteres"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick={handleSignIn} />
        <div className="button">
          <LinkButton title="criar uma conta" to="/register" />
        </div>
      </Form>
    </Container>
  );
}
