import { useCounter } from "../../hooks/auth";
import { Container, Button } from "./styles";
import { Bag } from "@phosphor-icons/react";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

export function OrderCounter() {
  const { user } = useAuth();
  const { count, decrement } = useCounter();

  const role = user.role.includes("admin");

  return (
    <Container>
      {role ? (
        <Link to={"/newdishes"}>
          <Button>
            <p>Novo Produto </p>
          </Button>
        </Link>
      ) : (
        <Button onClick={decrement}>
          <Bag />
          <p>Pedidos: </p>
          <span>{count}</span>
        </Button>
      )}
    </Container>
  );
}
