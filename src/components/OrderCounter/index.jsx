import { useCounter } from "../../hooks/auth";
import { Container, Button } from "./styles";
import { Bag } from "@phosphor-icons/react";

export function OrderCounter() {
  const { count } = useCounter();

  return (
    <Container>
      <Button>
        <Bag />
        <p>Pedidos ({count})</p>
      </Button>
    </Container>
  );
}
