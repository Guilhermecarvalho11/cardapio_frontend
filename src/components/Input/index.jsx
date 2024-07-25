import { Container } from "./style";
import PropTypes from "prop-types";
export function Input({ id, type, placeholder, icon: Icon }) {
  return (
    <Container>
      <input id={id} type={type} placeholder={placeholder} icon={Icon} />
    </Container>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.elementType,
};
