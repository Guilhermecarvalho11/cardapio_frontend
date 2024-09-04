import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 114px;
  margin: 0 auto;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  .bag {
    display: flex;
    font-size: 25px;
    color: white;
    justify-content: flex-end;
  }

  .bag > :first-child {
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: none;
    }
  }

  .logo {
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: auto;
    }
  }

  .input {
    display: none;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: flex;
      width: 40%;
    }
  }

  .singOut {
    display: none;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: flex;
      width: auto;
      margin-right: 30px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    justify-content: space-evenly;
  }
`;

export const Menu = styled.button`
  background: none;
  border: none;

  > svg {
    font-size: 25px;
    color: white;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`;
