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
  font-size: 1.3rem;
  font-weight: 500;
  color: ${({ $primary, theme }) =>
    $primary ? theme.COLORS.BACKGROUND_TOMATO : "white"};
  text-decoration: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: ${({ $primary }) => ($primary ? "0px" : "15px")};
  }
`;
export const Icons = styled.div`
  font-size: 34px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_TOMATO};
`;
