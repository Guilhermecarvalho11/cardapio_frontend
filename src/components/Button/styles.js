import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  background-color: ${({ primary, theme }) =>
    primary ? theme.COLORS.BACKGROUND_800 : theme.COLORS.BACKGROUND_TOMATO};
  display: flex;
  justify-content: center;
  color: white;
  width: 100%;
  height: 48px;
  border-radius: 5px;
  margin-top: 20px;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 88%;
    align-self: center;
  }

  > button {
    background: transparent;
    width: 100%;
    color: white;
    cursor: pointer;
  }
`;
