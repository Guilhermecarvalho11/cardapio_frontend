import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
import { Container, Form } from "./styles";
import { Logo } from "../../components/Logo";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { singIn } = useAuth();
  const navigate = useNavigate();

  function handleSignIn() {
    if (!email && !password) {
      alert("Favor preencher todos os campos");
    }
    singIn({ email, password });
    navigate("/");
  }

  return (
    <Container>
      <Logo primary="true" fontSize={"37px"} />
      <Form>
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
      </Form>

      <LinkButton title="criar uma conta" to="/register" />
    </Container>
  );
}
