import { Container, Icons, Title, Button } from "./style";

// eslint-disable-next-line react/prop-types
export function SingOut({ icons: Icon, title, onClick }) {
  return (
    <Container>
      <Button onClick={onClick}>
        <Icons>{Icon ? <Icon /> : null}</Icons>
        <Title>{title}</Title>
      </Button>
    </Container>
  );
}
