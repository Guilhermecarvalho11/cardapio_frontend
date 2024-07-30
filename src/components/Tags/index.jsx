/* eslint-disable react/prop-types */
import { Container, TagsProducts } from "./styled";

export function Tags({ ingredients }) {
  return (
    <Container>
      {ingredients.map((itens) => (
        <TagsProducts key={itens.id}>
          <h1>{itens.name}</h1>
        </TagsProducts>
      ))}
    </Container>
  );
}
