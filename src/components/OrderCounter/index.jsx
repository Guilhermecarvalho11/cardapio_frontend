import { useCounter } from "../../hooks/auth";
import { Container, Button } from "./styles";
import { Bag } from "@phosphor-icons/react";

export function OrderCounter() {
  const { count, decrement } = useCounter();

  return (
    <Container>
      <Button onClick={decrement}>
        <Bag />
        <p>Pedidos ({count})</p>
      </Button>
    </Container>
  );
}
