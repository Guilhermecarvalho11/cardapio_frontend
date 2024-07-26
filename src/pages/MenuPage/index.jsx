import { X } from "@phosphor-icons/react";
import { MagnifyingGlassPlus } from "@phosphor-icons/react";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
import { Container, Div } from "./styles";

export function Menu() {
  return (
    <>
      <Container>
        <LinkButton title="Menu" to="/" icons={X} />
      </Container>
      <Div>
        <Input
          icon={MagnifyingGlassPlus}
          id="search"
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />

        <LinkButton title="Sair" to="/register" />
      </Div>
    </>
  );
}
