import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex: 1;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;
  height: 114px;
  margin: 0 auto;
  padding: 5%;

  > svg {
    color: white;
    font-size: 27px;
    margin-right: 8px;
  }

  > h2 {
    font-family: roboto;
    color: white;
    font-size: 17px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  width: 87%;
  height: auto;
  padding-bottom: 5%;
  padding-left: 3px;
  border-bottom: 3px solid ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > svg {
    color: white;
    font-size: 30px;
  }
`;
