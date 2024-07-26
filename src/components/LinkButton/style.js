import styled from "styled-components";
import { Link } from "react-router-dom";

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
  font-family: roboto;
  color: white;
  text-decoration: none;
`;
export const Icons = styled.div`
  font-size: 34px;
  color: white;
`;
