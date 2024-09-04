/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { ButtonEditDishs } from "../ButtonEditDishs";
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

export function Card({ id, name, price, image_url }) {
  console.log("Image URL in Card:", image_url);
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
        {role ? (
          <ButtonEditDishs id={id} />
        ) : (
          <Icon>{<IoIosHeartEmpty />}</Icon>
        )}
        {image_url && (
          <Image src={`http://localhost:3333${image_url}`} alt={name} />
        )}
        <StyledLink to={`/dishs/${id}`}>
          <Name>{name}</Name>
        </StyledLink>
        <Price>{`R$ ${price}`}</Price>
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
