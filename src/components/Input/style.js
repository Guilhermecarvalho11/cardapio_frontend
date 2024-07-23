import styled from "styled-components";

export const Input = styled.input`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  height: 48px;
  width: 100%;
  border: none;
  border-radius: 8px;
  margin-bottom: 12px;
  padding-left: 5px;
`;
