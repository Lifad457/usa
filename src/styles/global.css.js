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
        
        --fs-xxl: clamp(2.80rem, calc(1.94rem + 4.28vw), 5.26rem);
        --fs-extra-large: clamp(2.33rem, 1.77rem + 2.81vw, 3.95rem);
        --fs-large: clamp(1.94rem, 1.59rem + 1.77vw, 2.96rem);
        --fs-medium-large: clamp(1.62rem, calc(1.41rem + 1.05vw), 2.22rem);
        --fs-medium: clamp(1.35rem, 1.24rem + 0.55vw, 1.67rem);
        --fs-regular: clamp(1.13rem, 1.08rem + 0.22vw, 1.25rem);
        --fs-small: clamp(0.94rem, 0.94rem, 0.94rem);
        --fs-extra-small: clamp(0.70rem, 0.81rem + -0.13vw, 0.78rem);
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