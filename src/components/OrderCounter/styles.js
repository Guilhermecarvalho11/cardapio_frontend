import styled from "styled-components";
import { Link } from "react-router-dom";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  /* display: none; */

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none; /* Remove a linha */
  color: inherit; /* Mantém a cor do texto do botão */
`;

export const Button = styled.button`
  display: flex;
  color: white;
  justify-content: flex-end;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  > p {
    display: none;
  }

  > span {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TOMATO};
    border-radius: 50%;
    padding: 5px;
    font-size: 0.8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    font-weight: 200;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    width: auto;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TOMATO};
    border: 1px solid tomato;
    color: white;
    gap: 8px;
    border-radius: 8px;
    cursor: pointer;

    > p {
      display: flex;
      font-size: 1rem;
    }

    > span {
      font-size: 1rem;
    }
  }
`;
