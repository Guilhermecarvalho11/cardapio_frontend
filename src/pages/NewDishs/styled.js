import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Container = styled.div`
  width: 88%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid red;

  > h1 {
    color: white;
    font-family: roboto;
  }

  > label {
    color: white;
    font-family: roboto;
    font-size: 14px;
    margin-bottom: 12px;
  }

  > label:first-of-type {
    margin-top: 12px;
  }
`;
