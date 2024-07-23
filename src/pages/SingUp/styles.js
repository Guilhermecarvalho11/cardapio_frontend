import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;

  .title {
    display: flex;
    gap: 15px;
    margin-bottom: 50px;

    > h1 {
      color: white;
      font-family: roboto;
    }
  }

  > label {
    color: white;
    font-family: roboto;
    font-size: 13px;
    align-items: end;
    margin-right: auto;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;
