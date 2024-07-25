// import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";

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
  StyledLink,
} from "./style";

export function Card({ image, name, price }) {
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
        <Icon>{<IoIosHeartEmpty />}</Icon>
        <Image src={image} alt={name} />
        <StyledLink to="/dishs">
          <Name>{name}</Name>
        </StyledLink>
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
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
