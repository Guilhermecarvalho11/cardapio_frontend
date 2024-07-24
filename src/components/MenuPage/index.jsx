import { X } from "@phosphor-icons/react";
import { MagnifyingGlassPlus } from "@phosphor-icons/react";
import { Input } from "../Input";
import { ButonLink } from "../LinkButton";
import { Container, Div } from "./styles";

export function Menu() {
  return (
    <>
      <Container>
        <X />
        <h2>Menu</h2>
      </Container>
      <Div>
        <Input
          icon={MagnifyingGlassPlus}
          id="search"
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />

        <ButonLink title="Sair" />
      </Div>
    </>
  );
}
