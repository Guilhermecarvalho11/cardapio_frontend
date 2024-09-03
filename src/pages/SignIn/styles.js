import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  width: 88%;
  flex-direction: column;
  margin: 0 auto 15px;

  .title {
    display: flex;
    gap: 15px;
    margin-bottom: 50px;

    > h1 {
      color: white;
      font-family: poppins;
    }
  }

  > label {
    color: white;
    font-family: poppins;
    font-weight: 400;
    font-size: 13px;
    align-items: end;
    margin-right: auto;
    margin-top: 10px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > label:first-of-type {
    margin-bottom: 10px;
  }
`;
