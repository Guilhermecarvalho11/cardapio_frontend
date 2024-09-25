import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

import PropTypes from "prop-types";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: ${({ $primary }) => ($primary ? "50px" : "0")};

  > h1 {
    color: white;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: xx-large;
    }
  }

  > span {
    color: #82f3ff;
    font-size: 12px;
  }
`;

Container.propTypes = {
  primary: PropTypes.string, // Agora aceita booleano
  fontSize: PropTypes.string,
};
