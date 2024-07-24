import { Container, Menu } from "./styles";
import { List, Bag } from "@phosphor-icons/react";
import { Logo } from "../../components/Logo";

export function Header() {
  return (
    <Container>
      <Menu>
        <List />
      </Menu>
      <Logo />
      <Bag />
    </Container>
  );
}
