import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 15px;

  .ctt {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 88%;

    > span {
      width: 100%;
      color: white;
      font-size: 0.8rem;

      > a {
        text-decoration: none;
        color: white;
        font-size: 0.7rem;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
      gap: 10px;
      > span {
        font-size: 1rem;

        > a {
          font-size: 1rem;
        }
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      gap: 15px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      margin: 0 auto;
    }
  }
`;
