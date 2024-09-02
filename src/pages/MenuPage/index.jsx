import { X } from "@phosphor-icons/react";
import { useAuth } from "../../hooks/auth";
import { MagnifyingGlassPlus } from "@phosphor-icons/react";
import { Input } from "../../components/Input";
import { LinkButton } from "../../components/LinkButton";
import { SingOut } from "../../components/ButtonSignOut";

import { Container, Content, Div, List } from "./styles";
import { Footer } from "../../components/Footer";

export function Menu() {
  const { signOut } = useAuth();
  const { user } = useAuth();
  const role = user.role.includes("admin");

  return (
    <>
      <Container>
        <Content>
          <LinkButton title="Menu" to="/" icons={X} />
        </Content>
        <Div>
          <Input
            primary
            icon={MagnifyingGlassPlus}
            id="search"
            type="text"
            placeholder="Busque por pratos ou ingredientes"
          />
          <List>
            {role && (
              <li>
                <LinkButton title="Novo Prato" to="/newdishes" />
              </li>
            )}
            <li>
              <SingOut title="Sair" onClick={signOut} />
            </li>
          </List>
        </Div>
      </Container>
      <Footer />
    </>
  );
}
