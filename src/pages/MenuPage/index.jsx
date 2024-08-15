import { X } from "@phosphor-icons/react";
import { useAuth } from "../../hooks/auth";
import { MagnifyingGlassPlus } from "@phosphor-icons/react";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
import { SingOut } from "../../components/ButtonSignOut";

import { Container, Content, Div } from "./styles";
import { Footer } from "../../components/Footer";

export function Menu() {
  const { signOut } = useAuth();

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
          <SingOut title="Sair" onClick={signOut} />
        </Div>
      </Container>
      <Footer />
    </>
  );
}
