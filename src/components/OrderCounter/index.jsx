import { Container, Button } from "./styles";
import { Bag } from "@phosphor-icons/react";

export function OrderCounter() {
  return (
    <Container>
      <Button>
        <Bag />
        {`Pedidos (${0})`}
      </Button>
    </Container>
  );
}
