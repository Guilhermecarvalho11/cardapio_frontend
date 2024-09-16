import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 30px;
  margin: 20px 0;
`;

export const TagsProducts = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  width: 90px;

  > h1 {
    color: white;
  }
`;
