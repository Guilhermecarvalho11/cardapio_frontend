import styled from "styled-components";

export const Title = styled.h2`
  color: white;
  font-family: roboto;
`;

export const CardContainer = styled.div`
  width: 210px;
  height: 292px;
  background: #00070a;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;

export const Icon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const Name = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Price = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background: #fff;
  color: #000;
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
