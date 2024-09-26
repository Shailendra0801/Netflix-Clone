import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvatica Neue', Helvatica, Arial, sans-serif;
        -webkit-font-smoothing: antialised;
        -moz-osx-font-smoothing: grascale;
        background-color: black;
        color: #333333;
        font-size: 16px;
    }
`;