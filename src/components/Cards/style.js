import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 310px;
  background: #1f0441;
  color: black;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin: 0 5px;
  border: 3px solid #1f0441;
  box-shadow: 3px 1px 10px #1f0441;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 3px 1px 10px #1f0441;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: end;
  font-size: 24px;
  color: white;
`;

export const Image = styled.img`
  max-width: 92px;
  max-height: 92px;
  width: 92px;
  height: 92px;
  border-radius: 50%;
  display: flex;
  margin: 0 auto;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const Name = styled.h3`
  color: white;
  background: transparent;
  font-size: 18px;
  margin-bottom: 5px;
  font-family: poppins;
  font-weight: 400;
  text-overflow: ellipsis;
`;

export const Price = styled.p`
  font-family: poppins;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 10px;
  color: white;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  color: white;
`;

export const Buton = styled.button`
  display: flex;
  background: transparent;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

export const Quantity = styled.span`
  margin: 0 10px;
`;
