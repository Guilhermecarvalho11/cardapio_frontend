/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth, useCounter, useFavorites } from "../../hooks/auth";
import { ButtonEditDishs } from "../ButtonEditDishs";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
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
  StyledLink,
  FavoriteIcon,
} from "./style";
import toast from "react-hot-toast";

export function Card({ id, name, price, image_url }) {
  const { user } = useAuth();
  const { increment } = useCounter();
  const { favorites, addFavorite, removeFavorites } = useFavorites();
  const [quantity, setQuantity] = useState(0);

  const role = user.role.includes("admin");

  const [isFavorite, setIsFavorite] = useState();

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleFavoriteClick = () => {
    const updatedFavoriteState = !isFavorite; // Calcula o novo estado

    if (updatedFavoriteState) {
      addFavorite({ id, name, price, image_url });
      toast.success("Item adicionado à lista de favoritos!");
    } else {
      removeFavorites(id);
      toast.error("Item removido da lista de favoritos");
    }

    setIsFavorite(updatedFavoriteState); // Atualiza o estado com o novo valor
  };

  useEffect(() => {
    const favoriteExist = favorites.some((fav) => fav.id === id);
    setIsFavorite(favoriteExist);
    console.log("favorites", favoriteExist);
  }, [favorites, id]);

  return (
    <>
      <CardContainer>
        {role ? (
          <ButtonEditDishs id={id} />
        ) : (
          <FavoriteIcon isFavorite={isFavorite} onClick={handleFavoriteClick}>
            {isFavorite ? (
              <Icon>
                <IoIosHeart />
              </Icon>
            ) : (
              <Icon>
                <IoIosHeartEmpty />
              </Icon>
            )}
          </FavoriteIcon>
        )}
        <Image src={`${import.meta.env.VITE_API_URL}${image_url}`} alt={name} />
        <StyledLink to={`/dishs/${id}`}>
          <Name>{`${name} >`} </Name>
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
        {role ? "" : <Button title="Incluir" onClick={increment} />}
      </CardContainer>
    </>
  );
}
