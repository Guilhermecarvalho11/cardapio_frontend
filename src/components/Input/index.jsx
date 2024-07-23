import { Input } from "./style";
import PropTypes from "prop-types";
export function Forms({ id, type, placeholder }) {
  return <Input id={id} type={type} placeholder={placeholder} />;
}

Forms.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
