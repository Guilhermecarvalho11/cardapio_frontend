import { Container, Button } from "./style";
import { CiEdit } from "react-icons/ci";

export function ButtonEditDishs() {
  return (
    <Container>
      <Button>{<CiEdit />}</Button>
    </Container>
  );
}
