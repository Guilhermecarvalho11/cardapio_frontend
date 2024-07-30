import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 88%;
  margin: 0 auto;
`;

export const MealsDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 264px;
    height: 264;
    border-radius: 50%;
  }

  > h1 {
    font-family: roboto;
    font-size: 27px;
    color: white;
  }

  > span {
    font-family: roboto;
    font-size: 16px;
    color: white;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 37px;
  gap: 16px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  width: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Buton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

export const Quantity = styled.span`
  color: white;
`;

export const ButtonOrder = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TOMATO};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 70%;

  > button {
    font-family: roboto;
    color: white;
    cursor: pointer;
  }
`;
