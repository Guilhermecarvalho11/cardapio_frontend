import styled from "styled-components";

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

  > svg {
    font-size: 25px;
    color: white;
  }
`;

export const Menu = styled.button`
  background: none;
  border: none;

  > svg {
    font-size: 25px;
    color: white;
  }
`;
