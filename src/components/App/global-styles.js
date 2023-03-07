import { createGlobalStyle } from "styled-components";
import Roboto from "../../assets/fonts/Roboto-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

        ::before,::after {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
    }


    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto}) format('woff2');
    }

    body {
        font-family: 'Roboto';
        font-weight: normal;
        font-style: normal;
    }

    a {
        text-decoration: none;
    }
`;
