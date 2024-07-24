import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  > input {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    height: 48px;
    width: 100%;

    border: none;
    border-radius: 8px;
    margin-bottom: 20px;
    padding-left: 5px;
    &:focus {
      border-color: #66afe9;
      outline: none;
    }
  }
`;

export const Input = styled.input``;
