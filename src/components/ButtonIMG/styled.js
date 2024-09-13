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
  color: #1f0441;
  cursor: pointer;
`;
export const Title = styled.span`
  color: #1f0441;
  text-decoration: none;
`;
export const Icons = styled.div`
  font-size: 34px;
  color: #1f0441;
`;

export const Label = styled.label`
  color: #1f0441;
  font-weight: 400;
  margin: 8px 0;
`;
