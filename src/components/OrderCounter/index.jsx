import { useCounter } from "../../hooks/auth";
import { Container, Button, StyledLink } from "./styles";
import { Bag } from "@phosphor-icons/react";
import { useAuth } from "../../hooks/auth";

export function OrderCounter() {
  const { user } = useAuth();
  const { count, decrement } = useCounter();

  const role = user.role.includes("admin");

  return (
    <Container>
      {role ? (
        <StyledLink to={"/newdishes"}>
          <Button>
            <p>Novo Produto </p>
          </Button>
        </StyledLink>
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
