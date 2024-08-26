/* eslint-disable react/prop-types */
import { Container, TagsProducts } from "./styled";

export function Tags({ ingredients }) {
  const ingredientsArray = ingredients
    .split(",")
    .map((ingredient) => ingredient.trim());

  return (
    <Container>
      {ingredientsArray.map((ingredient, index) => (
        <TagsProducts key={index}>
          <h1>{ingredient}</h1>
        </TagsProducts>
      ))}
    </Container>
  );
}
