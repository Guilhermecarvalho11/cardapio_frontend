import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ primary, theme }) =>
    primary ? theme.COLORS.BACKGROUND_800 : theme.COLORS.BACKGROUND_TOMATO};
  display: flex;
  justify-content: center;
  color: white;
  width: 100%;
  height: 48px;
  border-radius: 5px;
  margin-top: 12px;

  > button {
    background: transparent;
    width: 100%;
    color: white;
    cursor: pointer;
  }
`;
