import { Header } from "../../components/Header";
import { LinkButton } from "../../components/LinkButton";
import { Footer } from "../../components/Footer";
import { MdNavigateBefore } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";

import imageMeals from "../../assets/imageMeals.svg";
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
import { useState } from "react";

export function DescriptionDishs() {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const ingredient = [
    { id: 1, name: "Alface" },
    { id: 2, name: "Cebola" },
    { id: 3, name: "Pão naan" },
    { id: 4, name: "pepino" },
    { id: 5, name: "Rabanete" },
    { id: 6, name: "tomate" },
  ];
  return (
    <>
      <Header />
      <LinkButton icons={MdNavigateBefore} title="Voltar" to="/" />
      <Container>
        <MealsDescription>
          <img src={imageMeals} />
          <h1>Salada Ravanelo</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            expedita, totam, aperiam autem consectetur assumenda consequuntur,
            architecto tempora reiciendis nostrum doloribus! Ad itaque dolores
            velit perspiciatis non, porro doloremque qui.
          </span>
          <Tags ingredients={ingredient} />
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
