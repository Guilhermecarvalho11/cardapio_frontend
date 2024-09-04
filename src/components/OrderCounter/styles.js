import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

export const Button = styled.button`
  display: flex;
  font-weight: 200;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  width: auto;
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TOMATO};
  color: white;
  gap: 8px;
  border-radius: 8px;
`;
