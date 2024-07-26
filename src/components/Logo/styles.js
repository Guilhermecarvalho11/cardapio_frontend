import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: ${({ primary }) => (primary ? "50px" : "0")};

  > h1 {
    color: white;
    font-family: roboto;
  }
`;
