import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  margin: 15px auto 0;
  min-height: 100vh;
`;
export const Title = styled.h2`
  color: white;
  font-family: poppins;
  font-weight: 500;
  font-size: 18px;
  margin: 22px 0 22px 0;
`;

export const Banner = styled.div`
  display: flex;
  background-image: linear-gradient(180deg, #00131c, #091e26);
  width: 100%;
  height: 120px;
  border-radius: 8px;
  align-items: center;
  margin: 25px 0;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-weight: 500;
    align-items: center;
    height: 220px;
  }

  .titleBanner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    gap: 8px;
    width: 100%;
    align-items: left;
    font-family: poppins;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-weight: 500;
      align-items: center;
    }

    > h2 {
      font-weight: 400;

      @media (min-width: ${DEVICE_BREAKPOINTS.XS}) {
        font-size: 1.3rem;
        font-weight: 400;
      }

      @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-weight: 500;
        font-size: 24px;
      }
    }

    > span {
      font-size: 12px;
      font-style: normal;
      font-weight: 300;

      @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-weight: 500;
        font-size: 18px;
        align-items: center;
      }
    }
  }

  img {
    width: 90%;
    height: 160px;
    margin: auto;

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
      width: auto;
      height: 200px;
      margin: auto;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: auto;
      height: 260px;
      margin: auto;
    }
  }
`;
