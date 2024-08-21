import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 88%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  > h1 {
    color: white;
    font-family: roboto;
    font-size: 22px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: roboto;
    font-size: 14px;
    margin-bottom: 12px;
  }

  > label:first-of-type {
    margin-top: 12px;
  }

  > select {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    height: 48px;
    margin-bottom: 12px;
  }

  > textarea {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    width: 100%;
    max-width: 100%;
    min-height: 172px;
  }

  .buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 20px;

    > button {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      width: 100%;
      margin-top: 12px;
      border-radius: 5px;
      color: white;
    }
  }
`;
