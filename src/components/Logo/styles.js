import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: ${({ primary }) => (primary ? "50px" : "0")};

  > h1 {
    color: white;
    font-family: roboto;
    font-size: ${({ primary }) => (primary ? " 37px" : "21px")};
    line-height: 26px;
  }
`;
