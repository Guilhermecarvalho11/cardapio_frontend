/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Button({ title, onClick, type = "button", primary }) {
  return (
    <Container $primary={primary}>
      <button onClick={onClick} type={type}>
        {title}
      </button>
    </Container>
  );
}
