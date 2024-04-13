import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    &:root {
        --ff-primary: "Ubuntu", sans-serif;
        --ff-secondary: 'Limelight', sans-serif;
        --ff-tertiary: "Great Vibes", cursive;
        --ff-header: "Abril Fatface", serif;
        --fw-light: 300;
        --fw-regular: 400;
        --fw-medium: 500;
        --fw-bold: 700;
        
        --fs-extra-large: calc(46px + 78*((100vw - 320px) / 1680));
        --fs-large: calc(24px + 39*((100vw - 320px) / 1680));
        --fs-medium: calc(18px + 32*((100vw - 320px) / 1680));
        --fs-regular: calc(16px + 26*((100vw - 320px) / 1680));
        --fs-small: calc(14px + 20*((100vw - 320px) / 1680));
        --fs-extra-small: calc(12px + 16*((100vw - 320px) / 1680));
    }

    body {
        background-color: whitesmoke;
        line-height: 1.5;
        min-height: 100vh;
        min-height: 100dvh;

        display: grid;
        grid-template-rows: auto 1fr auto;
    }
`