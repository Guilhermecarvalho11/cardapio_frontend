import { ButtonLink } from "./style";
import PropTypes from "prop-types";

export function ButonLink({ title }) {
  return <ButtonLink>{title}</ButtonLink>;
}

ButonLink.propTypes = {
  title: PropTypes.string.isRequired,
};
