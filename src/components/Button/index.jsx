import { Buton } from "./styles";
import PropTypes from "prop-types";

export function Button({ title }) {
  return (
    <>
      <Buton>{title}</Buton>
    </>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};
