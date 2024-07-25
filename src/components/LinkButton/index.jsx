import { Container, Icons, Title, StyledLink } from "./style";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export function LinkButton({ icons: Icon, title, to }) {
  return (
    <Container>
      <StyledLink to={to}>
        <Icons>{Icon ? <Icon /> : null}</Icons>
        <Title>{title}</Title>
      </StyledLink>
    </Container>
  );
}

LinkButton.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
