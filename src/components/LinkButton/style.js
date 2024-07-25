import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: red;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: transparent;
`;

export const Title = styled.span`
  font-family: roboto;
  color: white;
  text-decoration: none;
`;
export const Icons = styled.div`
  display: flex;
  font-size: 34px;
  color: white;
`;
