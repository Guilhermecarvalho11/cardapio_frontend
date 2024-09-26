import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: auto;
  height: 100vh;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: row;
    width: 90%;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 88%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    width: 100%;
    align-self: center;
    padding: 20px;
    border-radius: 8px;
  }

  > h2 {
    display: none;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: flex;
      justify-content: center;
      color: white;
      font-size: 2rem;
      font-weight: 400;
      padding: 12px 0;
    }
  }

  > label {
    font-size: 1.2rem;
    color: white;
    align-items: end;
    margin-right: auto;
    margin: 10px 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 88%;
      align-self: center;
    }
  }

  > label:first-of-type {
    margin-bottom: 10px;
  }

  .button {
    margin: 20px auto 0;
  }
`;
