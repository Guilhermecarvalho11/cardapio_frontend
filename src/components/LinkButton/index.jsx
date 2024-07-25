import { Container, Icons } from "./style";
import PropTypes from "prop-types";

export function LinkButton({ icons: Icon, title }) {
  return (
    <Container>
      <Icons>{<Icon />}</Icons>
      <a>{title}</a>
    </Container>
  );
}

LinkButton.propTypes = {
  title: PropTypes.string.isRequired,
  icons: PropTypes.string.isRequired,
};
