import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { MagnifyingGlassPlus } from "@phosphor-icons/react";
import { IoMdExit } from "react-icons/io";
import { Container, Menu } from "./styles";
import { List } from "@phosphor-icons/react";
import { Logo } from "../../components/Logo";
import { OrderCounter } from "../OrderCounter/index";
import { SingOut } from "../ButtonSignOut/index";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Link to="/MenuPage">
        <Menu>
          <List />
        </Menu>
      </Link>
      <div className="logo">
        <Logo fontSize={"20px"} adm={"ADMIN"} />
      </div>
      <div className="input">
        <Input
          primary
          icon={MagnifyingGlassPlus}
          id="search"
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />
      </div>
      <div className="bag">
        <OrderCounter />
      </div>
      <div className="singOut">
        <SingOut title={""} icons={IoMdExit} onClick={signOut} />
      </div>
    </Container>
  );
}
