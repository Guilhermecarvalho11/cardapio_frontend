import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { MagnifyingGlassPlus } from "@phosphor-icons/react";
import { IoMdExit } from "react-icons/io";
import { Container, Menu } from "./styles";
import { List, Bag } from "@phosphor-icons/react";
import { Logo } from "../../components/Logo";
import { OrderCounter } from "../OrderCounter/index";
import { SingOut } from "../ButtonSignOut/index";

export function Header() {
  function handleSingOut() {
    console.log("fui clicado");
  }
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
        <Bag />
        <OrderCounter />
      </div>
      <div className="singOut">
        <SingOut onClick={handleSingOut} icons={IoMdExit} title={""} />
      </div>
    </Container>
  );
}
