import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  min-height: 100vh;
  width: 88%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  flex: 1;
  gap: 12px 0;

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: roboto;
    font-size: 22px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px 0;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
  }

  .inputFile {
    cursor: pointer;
    height: 1.5rem;
    margin-bottom: 48px;

    input {
      margin: 0;
      filter: alpha(opacity=0);
      opacity: 0;
    }

    .inputFile-custom:after {
      content: "Escolher imagem";
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      display: flex;
      text-align: ${({ primary }) => (primary ? "center" : "")};
      height: 30px;
      border: none;
      padding: 8px;
      border-radius: 8px;
      margin-top: 8px;
      font-family: poppins;
    }
  }

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: roboto;
    font-weight: 400;
  }

  > label:first-of-type {
    margin-top: 12px;
  }

  > select {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    height: 48px;
    margin-bottom: 12px;
    width: 100%;
    max-width: 100%;
    border-radius: 8px;
  }

  > textarea {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    width: 100%;
    max-width: 100%;
    min-height: 142px;
    border-radius: 8px;
    padding: 8px;
  }

  .buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 12px;

    > button {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      width: 100%;
      margin-top: 12px;
      border-radius: 5px;
      color: white;
    }
  }
`;
