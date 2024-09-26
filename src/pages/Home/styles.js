import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  margin: 15px auto 0;
  min-height: 100vh;
  margin-bottom: 20px;
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
  background-image: linear-gradient(180deg, #1f0441, #3b145e, #6e3f85);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 150px;
  border-radius: 8px;
  align-items: center;
  margin: 25px 0;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-weight: 500;
    align-items: center;
    margin: 40px 0;
  }

  .titleBanner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    gap: 8px;
    width: 100%;
    align-items: left;

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
      font-size: 0.8rem;

      @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-weight: 500;
        font-size: 1.1rem;
        align-items: center;
      }
    }
  }
`;
