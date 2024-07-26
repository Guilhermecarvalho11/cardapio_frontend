import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  margin: 0 auto;
`;
export const Title = styled.h2`
  color: white;
  font-family: roboto;
  font-size: 18px;
  margin: 22px 0 22px 0;
`;

export const Banner = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LINEAR};
  width: 100%;
  height: 120px;

  .titleBanner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    gap: 8px;
    width: 170px;
    align-items: left;
    font-family: roboto;

    > h2 {
      font-size: 18px;
    }

    > span {
      font-size: 12px;
    }
  }
`;
