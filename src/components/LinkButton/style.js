import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
  line-height: 114%;
`;

export const Title = styled.span`
  font-family: poppins;
  font-weight: 200;
  font-size: 24px;
  color: white;
  text-decoration: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 15px;
  }
`;
export const Icons = styled.div`
  font-size: 34px;
  color: white;
`;
