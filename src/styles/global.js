import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*{
    margin: 0;
    border: none;
    padding: 0;
    box-sizing: border-box;
}

:root {
    font-size: 16px;
}

body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
}

body, input-security, button, textarea, label, h1, h2 {
    font-family: poppins;
    font-size: 1rem;
    outline: none;
}
`;
