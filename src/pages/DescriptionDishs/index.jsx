import { useAuth, useCounter } from "../../hooks/auth";

import { Header } from "../../components/Header";
import { LinkButton } from "../../components/LinkButton";
import { Button } from "../../components/Button";

import { Footer } from "../../components/Footer";
import { MdNavigateBefore } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";

import {
  Buton,
  Container,
  DivDesktop,
  DivLinkButton,
  MealsDescription,
  Quantity,
  QuantityContainer,
} from "./style";
import { Tags } from "../../components/Tags";
import { useEffect, useState } from "react";
import { useItensMenu } from "../../hooks/itensMenu";
import { useParams } from "react-router-dom";

export function DescriptionDishs() {
  const { user } = useAuth();
  const role = user.role.includes("admin");
  const [quantity, setQuantity] = useState(0);
  const { itensMenu } = useItensMenu();
  const { id } = useParams();
  const { increment } = useCounter();

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
      <Container>
        <DivLinkButton>
          <LinkButton icons={MdNavigateBefore} title="Voltar" to="/" primary />
        </DivLinkButton>
        <MealsDescription>
          <img src={`${import.meta.env.VITE_API_URL}${product.image_url}`} />
          <DivDesktop>
            <h1>{product.name}</h1>
            <span>{product.description}</span>
            <Tags ingredients={product.ingredients} />
            {role ? (
              ""
            ) : (
              <QuantityContainer>
                <Buton onClick={handleDecrease}>
                  <FaMinus />
                </Buton>
                <Quantity>{quantity}</Quantity>
                <Buton onClick={handleIncrease}>
                  <FaPlus />
                </Buton>
              </QuantityContainer>
            )}
            {role ? (
              <Button title="Editar Prato" />
            ) : (
              <Button title="Incluir" onClick={increment} />
            )}
          </DivDesktop>
        </MealsDescription>
      </Container>
      <Footer />
    </>
  );
}
