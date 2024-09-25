import { Container, Icons, Title, StyledLink } from "./style";

// eslint-disable-next-line react/prop-types
export function LinkButton({ icons: Icon, title, to, primary }) {
  return (
    <Container>
      <StyledLink to={to}>
        <Icons>{Icon ? <Icon /> : null}</Icons>
        <Title $primary={primary}>{title}</Title>
      </StyledLink>
    </Container>
  );
}
