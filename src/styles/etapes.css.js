import styled from "styled-components";

export const EtapesContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    max-width: 70rem;
    margin: 0 auto;
    font-family: var(--ff-primary);
    color: var(--clr-primary);
    margin-block: 2rem;
    
    & > h1 {
        font-size: var(--fs-medium-large);
        line-height: 1.2;
        margin-block: .5rem;
    }

    & > p {
        font-size: var(--fs-regular);
        text-align: left;
        line-height: 1.6;
        margin-block: 1rem;
    }
`