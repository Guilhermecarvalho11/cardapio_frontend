import { Link } from "react-router-dom";

import { Container, Menu } from "./styles";
import { List, Bag } from "@phosphor-icons/react";
import { Logo } from "../../components/Logo";

export function Header() {
  return (
    <Container>
      <Link to="/MenuPage">
        <Menu>
          <List />
        </Menu>
      </Link>
      <Logo fontSize={"37px"} adm={"ADMIN"} />
      <Bag />
    </Container>
  );
}
