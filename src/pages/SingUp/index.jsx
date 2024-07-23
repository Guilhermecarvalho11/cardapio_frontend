import { Button } from "../../components/Button";
import { Forms } from "../../components/Input";
import { ButonLink } from "../../components/LinkButton";
import { Container } from "./styles";
import PolygnoSVG from "../../assets/Polygon.png";
export function SignUp() {
  return (
    <Container>
      <div className="title">
        <img src={PolygnoSVG} />
        <h1>Food Explorer</h1>
      </div>
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
