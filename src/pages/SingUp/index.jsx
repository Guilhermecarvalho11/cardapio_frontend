/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
import { Logo } from "../../components/Logo";
import { Container, Form } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    console.log("clicou", name, email, password);
  }
  return (
    <Container>
      <Logo primary />

      <Form>
        <label htmlFor="name">Seu nome</label>
        <Input
          id="name"
          type="text"
          placeholder="Exemplo: Maria da Silva"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label htmlFor="email">email</label>
        <Input
          id="email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">senha</label>
        <Input
          id="password"
          type="password"
          placeholder="No minimo 6 caracteres"
          onChange={(e) => {
            setPassword(e.target.pasvalue);
          }}
        />
        <Button title="Criar conta" onClick={handleSignUp} />
      </Form>

      <LinkButton title="Já tenho uma conta" to="/signin" />
    </Container>
  );
}
