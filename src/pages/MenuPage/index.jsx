import { Link } from "react-router-dom";

import { X } from "@phosphor-icons/react";
import { MagnifyingGlassPlus } from "@phosphor-icons/react";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
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
        <Link to="/">
          <LinkButton title="Sair" />
        </Link>
      </Div>
    </>
  );
}
