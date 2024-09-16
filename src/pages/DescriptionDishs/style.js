import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 88%;
  margin: 0 auto;
  flex: 1;
  min-height: 100vh;
`;

export const MealsDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    align-items: flex-start;
  }

  > img {
    width: 264px;
    height: 264;
    border-radius: 50%;
  }
`;

export const DivDesktop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 2rem;
    color: white;
  }

  > span {
    color: white;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 80px;
  }
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
