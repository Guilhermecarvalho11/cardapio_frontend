import styled from "styled-components";

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
  border: 1px solid red;
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

export const Name = styled.button`
  color: white;
  background: transparent;
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
