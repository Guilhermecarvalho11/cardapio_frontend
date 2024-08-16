// import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { ButtonEditDishs } from "../ButtonEditDishs";
import PropTypes from "prop-types";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { Button } from "../Button";
import {
  CardContainer,
  Icon,
  Image,
  Name,
  Price,
  QuantityContainer,
  Buton,
  Quantity,
  // IncludeButton,
  StyledLink,
} from "./style";

export function Card({ image, name, price }) {
  const { user } = useAuth();
  const role = user.role.includes("admin");
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
        {role ? <ButtonEditDishs /> : <Icon>{<IoIosHeartEmpty />}</Icon>}
        <Image src={image} alt={name} />
        <StyledLink to="/dishs">
          <Name>{name}</Name>
        </StyledLink>
        <Price>${price}</Price>
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
        {role ? "" : <Button title="Incluir" />}
      </CardContainer>
    </>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
