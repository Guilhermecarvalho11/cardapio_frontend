import { Button } from "../../components/Button";
import { Forms } from "../../components/Input";
import { Container } from "./styles";
export function SignIn() {
  return (
    <Container>
      <Forms type="email" />
      <Forms type="password" placeholder="No minimo 6 caracteres" />
      <Button />
    </Container>
  );
}
