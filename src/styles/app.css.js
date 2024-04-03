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