import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: "Rowdies", sans-serif;
        font-weight: 300;
        color: inherit;
    }

    *, :after, :before {
        box-sizing:border-box;
    }

    :root {
        -webkit-tap-highlight-color: transparent;
        -webkit-text-size-adjust: 100%;
        text-size-adjust: 100%;
        cursor: default;
        line-height: 1.5;
        overflow-wrap: break-word;
        -moz-tab-size: 4;
        tab-size: 4;
    }

    html, body {
        height: 100%;
    }

    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;