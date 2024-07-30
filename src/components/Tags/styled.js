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
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  width: 85px;

  > h1 {
    font-family: roboto;
    font-size: 14px;
    color: white;
  }
`;
