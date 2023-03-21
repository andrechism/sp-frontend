import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: sans-serif;
    }
    
    body {
        margin: 0;
    }

    h1, h2, h3 {
        margin: 0;
    }

    ul {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;
