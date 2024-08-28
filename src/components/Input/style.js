import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  > input {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    height: 48px;
    width: 100%;
    padding-left: 10px;
    border: none;
    border-radius: 8px;

    &:focus {
      border-color: #66afe9;
      outline: none;
    }
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 25px;
`;
