import { Container } from "./styles";
import PropTypes from "prop-types";

export function Button({ title }) {
  return (
    <>
      <Container>
        <button>{title}</button>
      </Container>
    </>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};
