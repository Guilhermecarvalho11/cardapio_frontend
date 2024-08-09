import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  width: 88%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 15px;

  > label {
    color: white;
    font-family: roboto;
    font-size: 13px;
    align-items: end;
    margin-right: auto;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;
