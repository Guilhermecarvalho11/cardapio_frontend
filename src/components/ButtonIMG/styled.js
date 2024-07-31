import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 48px;
  padding: 0 32px;
  gap: 10px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;
export const Title = styled.span`
  font-family: roboto;
  color: white;
  text-decoration: none;
`;
export const Icons = styled.div`
  font-size: 34px;
  color: white;
`;

export const Label = styled.label`
  color: white;
  font-size: 12px;
  margin: 8px 0;
`;
