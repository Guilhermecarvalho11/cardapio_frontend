import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

import PropTypes from "prop-types";

export const Container = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  gap: 15px;
  margin-bottom: ${({ $primary }) => ($primary ? "50px" : "0")};

  > img {
    width: ${({ $location }) =>
      $location === "banner" || $location === "footer" ? "auto" : "170px"};
    height: ${({ $location }) =>
      $location === "banner" || $location === "footer" ? "120px" : "170px"};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%; /* Aplica bordas arredondadas, 50% deixa a imagem circular */
    object-fit: cover;

    border: 2px solid transparent;
    border-radius: 50%;
    box-shadow: 0px 0px 15px 2px
      ${({ $location }) =>
        $location === "banner" || $location === "footer"
          ? "#fe0557"
          : "#1f0441"};

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
      width: auto;
      height: 180px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: auto;
      height: 220px;
    }
  }
  > h1 {
    color: white;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: xx-large;
    }
  }

  > span {
    color: #82f3ff;
  }
`;

Container.propTypes = {
  primary: PropTypes.string, // Agora aceita booleano
  fontSize: PropTypes.string,
};
