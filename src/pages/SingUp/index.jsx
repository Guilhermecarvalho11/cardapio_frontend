/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
import { Logo } from "../../components/Logo";
import { Container, Form } from "./styles";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return toast.error("Favor preencher todos os campos");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        toast.success("Usuário cadastro com sucesso");
        navigate("/signin");
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          console.log("Não foi possivel cadastrar");
        }
      });
  }

  return (
    <Container>
      <Logo primary="true" />

      <Form>
        <h2>Crie sua conta</h2>

        <label htmlFor="name">Seu nome</label>
        <Input
          id="name"
          type="text"
          placeholder="Exemplo: Maria da Silva"
          onChange={(e) => setName(e.target.value)}
        />

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
        <Button title="Criar conta" onClick={handleSignUp} />
        <div className="button">
          <LinkButton title="Já tenho uma conta" to="/signin" />
        </div>
      </Form>
    </Container>
  );
}
