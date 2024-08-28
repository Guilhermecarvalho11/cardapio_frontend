import { Container, Label, Title, Icons, Button } from "./styled";

// eslint-disable-next-line react/prop-types
export function ButtonIMG({ icons: Icon, onClick }) {
  return (
    <Container>
      <Label>Imagem do prato</Label>
      <Button onClick={onClick}>
        <Icons>{Icon ? <Icon /> : null}</Icons>
        <Title>Selecionar imagem</Title>
      </Button>
    </Container>
  );
}
