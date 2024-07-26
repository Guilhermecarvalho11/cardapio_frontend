import { Container } from "./styled";
import { Logo } from "../Logo";

export function Footer() {
  return (
    <Container>
      <Logo fontSize={"12px"} />
      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  );
}
