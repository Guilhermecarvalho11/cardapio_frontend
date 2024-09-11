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
  height: 292px;
  background: #00070a;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin: 0 5px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 20px tomato;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: end;
  font-size: 24px;
`;

export const Image = styled.img`
  width: 50%;
  height: 50%;
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
  font-weight: 200;
`;

export const Price = styled.p`
  font-family: poppins;
  font-weight: 200;
  font-size: 16px;
  margin-bottom: 10px;
  color: #82f3ff;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Buton = styled.button`
  background: transparent;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

export const Quantity = styled.span`
  margin: 0 10px;
`;

export const IncludeButton = styled.button`
  background: #fff;
  color: #000;
  border: none;
  padding: 10px;
  cursor: pointer;
`;
