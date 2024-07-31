import { Container, Label, Title, Icons, Button } from "./styled";

// eslint-disable-next-line react/prop-types
export function ButtonIMG({ icons: Icon }) {
  return (
    <Container>
      <Label>Imagem do prato</Label>
      <Button>
        <Icons>{Icon ? <Icon /> : null}</Icons>
        <Title>Selecionar imagem</Title>
      </Button>
    </Container>
  );
}
