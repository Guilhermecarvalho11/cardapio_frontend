import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 35px;
  min-height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 88%;

    > h1 {
      color: white;
      font-family: roboto;
    }

    > button {
    }

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
  }
`;
