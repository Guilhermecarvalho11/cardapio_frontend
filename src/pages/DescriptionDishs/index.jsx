import { Header } from "../../components/Header";
import { LinkButton } from "../../components/LinkButton";
import { Footer } from "../../components/Footer";
import { MdNavigateBefore } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";

import {
  Buton,
  ButtonOrder,
  Container,
  DivButtons,
  MealsDescription,
  Quantity,
  QuantityContainer,
} from "./style";
import { Tags } from "../../components/Tags";
import { useEffect, useState } from "react";
import { useItensMenu } from "../../hooks/itensMenu";
import { useParams } from "react-router-dom";

export function DescriptionDishs() {
  const [quantity, setQuantity] = useState(0);
  const { itensMenu } = useItensMenu();
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    image_url: "",
    category: "",
    ingredients: "",
    price: "",
    description: "",
  });

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const productsDescription = itensMenu.find(
      (item) => item.id === Number(id)
    );
    if (productsDescription) {
      setProduct(productsDescription);
    }
  }, [itensMenu, id]);

  return (
    <>
      <Header />
      <LinkButton icons={MdNavigateBefore} title="Voltar" to="/" />
      <Container>
        <MealsDescription>
          <img src={`http://localhost:3333${product.image_url}`} />
          <h1>{product.name}</h1>
          <span>{product.description}</span>
          <Tags ingredients={product.ingredients} />
          <DivButtons>
            <QuantityContainer>
              <Buton onClick={handleDecrease}>
                <FaMinus />
              </Buton>
              <Quantity>{quantity}</Quantity>
              <Buton onClick={handleIncrease}>
                <FaPlus />
              </Buton>
            </QuantityContainer>
            <ButtonOrder>Incluir</ButtonOrder>
          </DivButtons>
        </MealsDescription>
      </Container>
      <Footer />
    </>
  );
}
