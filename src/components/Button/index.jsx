import PropTypes from "prop-types";
import { Container } from "./styles";

export function Button({ title, onClick, primary }) {
  return (
    <Container primary={primary}>
      <button onClick={onClick} type="button">
        {title}
      </button>
    </Container>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  primary: PropTypes.bool, // Adiciona prop para definir o estilo
};
