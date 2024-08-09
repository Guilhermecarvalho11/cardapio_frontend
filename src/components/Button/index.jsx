import { Container } from "./styles";
import PropTypes from "prop-types";

export function Button({ title, onClick }) {
  return (
    <>
      <Container>
        <button onClick={onClick} type="button">
          {title}
        </button>
      </Container>
    </>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
