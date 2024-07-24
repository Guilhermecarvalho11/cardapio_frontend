import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*{
    margin: 0;
    border: none;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
}
`;
