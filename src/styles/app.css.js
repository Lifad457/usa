import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    h1 {
        padding-top: 3rem;
        font-size: var(--fs-large);
        font-family: var(--ff-header);
        margin: 1rem 0;
    }
`
export const MainContainer = styled.main`
    display: flex;
    height: 100vh;
    height: 100dvh;
    color: var(--clr-secondary);
    background-color: var(--clr-primary);
    background: url(${props => props.src}) no-repeat center top/cover;
    animation: fondu 3s linear forwards;
    opacity: .75;
    
    @keyframes fondu {
        35% {
            opacity: .85;
        }
        65% {
            opacity: .95;
        }
        100% {
            opacity: 1;
        }
    }
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    padding: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    font-family: var(--ff-primary);
    font-size: var(--fs-large);
    animation: fadeIn 3s ease-in-out forwards;

    h3 {
        font-size: var(--fs-large);
    }

    hr {
        width: 100%;
        border: 1.8px solid var(--clr-secondary);
        margin: 1rem 0;
    }

    span {
        font-size: var(--fs-medium-large);
        font-size: var(--fs-regular);
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    &.woody {
        margin: 0;
        padding: 0;
        font-family: var(--ff-tertiary);
        font-size: var(--fs-large);
        flex-wrap: wrap;
        overflow: hidden;
        line-height: 1.5;
        margin: 14dvh 20dvw 0 auto;
        margin: 14vh 20vw 0 auto;
        text-align: left;

        p {
            padding-left: 2rem;
        }

        span {
            text-align: right;
            padding-right: 2rem;
            padding-top: .8rem;
            font-size: var(--fs-large);
        }
    }
    `