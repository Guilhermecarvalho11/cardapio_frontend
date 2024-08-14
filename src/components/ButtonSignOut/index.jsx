import { Container, Icons, Title, StyledLink } from "./style";

// eslint-disable-next-line react/prop-types
export function SingOut({ icons: Icon, title, onClick }) {
  return (
    <Container>
      <StyledLink onClick={onClick}>
        <Icons>{Icon ? <Icon /> : null}</Icons>
        <Title>{title}</Title>
      </StyledLink>
    </Container>
  );
}
