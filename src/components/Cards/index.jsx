import { useState } from "react";
import PropTypes from "prop-types";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
  CardContainer,
  Icon,
  Image,
  Name,
  Price,
  QuantityContainer,
  Button,
  Quantity,
  IncludeButton,
} from "./style";

export function Card({ icon, image, name, price }) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <CardContainer>
        <Icon>{icon}</Icon>
        <Image src={image} alt={name} />
        <Name>{name}</Name>
        <Price>${price}</Price>
        <QuantityContainer>
          <Button onClick={handleDecrease}>
            <FaMinus />
          </Button>
          <Quantity>{quantity}</Quantity>
          <Button onClick={handleIncrease}>
            <FaPlus />
          </Button>
        </QuantityContainer>
        <IncludeButton>Incluir</IncludeButton>
      </CardContainer>
    </>
  );
}

Card.propTypes = {
  icon: PropTypes.element.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
