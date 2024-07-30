import { Container, Title, Icons, Button } from "./styled";

// eslint-disable-next-line react/prop-types
export function ButtonIMG({ icons: Icon }) {
  return (
    <Container>
      <Button>
        <Icons>{Icon ? <Icon /> : null}</Icons>
        <Title>Selecionar imagem</Title>
      </Button>
    </Container>
  );
}
