import styled from 'styled-components';

export const SectionContainer = styled.section`
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
        text-align: center;
        line-height: 1.2;
        margin-bottom: 2rem;
    }

    & > p {
        font-size: var(--fs-regular);
        text-align: left;
        line-height: 1.6;
    }
`
export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    grid-gap: 2rem;
    margin-top: 3rem;
`