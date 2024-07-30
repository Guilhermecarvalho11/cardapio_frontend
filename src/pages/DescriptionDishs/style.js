import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 88%;
  margin: 0 auto;
  border: 1px solid red;
`;

export const MealsDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 264px;
    height: 264;
    border-radius: 50%;
  }

  > h1 {
    font-family: roboto;
    font-size: 27px;
    color: white;
  }

  > span {
    font-family: roboto;
    font-size: 16px;
    color: white;
  }
`;
