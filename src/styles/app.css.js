import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    max-width: 90rem;
    min-width: 90rem;
`
export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    font-family: var(--font-primary);

    a {
        text-decoration: none;
        color: #ffffff;
    }
`