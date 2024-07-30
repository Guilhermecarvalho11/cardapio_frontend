import { X } from "@phosphor-icons/react";
import { MagnifyingGlassPlus } from "@phosphor-icons/react";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
import { Container, Content, Div } from "./styles";
import { Footer } from "../../components/Footer";

export function Menu() {
  return (
    <>
      <Container>
        <Content>
          <LinkButton title="Menu" to="/" icons={X} />
        </Content>
        <Div>
          <Input
            icon={MagnifyingGlassPlus}
            id="search"
            type="text"
            placeholder="Busque por pratos ou ingredientes"
          />
          <LinkButton title="Sair" to="/register" />
        </Div>
      </Container>
      <Footer />
    </>
  );
}
