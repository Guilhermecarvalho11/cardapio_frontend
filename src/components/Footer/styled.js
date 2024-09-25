import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 77px;
  padding: 0 15px;

  > span {
    width: 100%;
    color: white;
  }
`;
