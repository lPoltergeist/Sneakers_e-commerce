import { createGlobalStyle } from "styled-components";

export  const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0 ;
        padding: 0;
        font-family: "Roboto", sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    body {
        margin: 0 5rem;
        background-color: #f2f2f2;

        @media screen and (max-width: 920px) {
            margin: 0;
        }
    }
`