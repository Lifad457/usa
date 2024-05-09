import styled from 'styled-components';
import hero from '../assets/images/hero.jpg';

export const MainContainer = styled.main`
    display: flex;
    background: url(${hero}) no-repeat center top/cover;
    height: 100vh;
    height: 100dvh;
    color: var(--clr-secondary);
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow: hidden;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    font-family: var(--ff-tertiary);
    font-size: var(--fs-large);
    line-height: 1.5;
    margin: 14dvh 20dvw 0 auto;
    margin: 14vh 20vw 0 auto;

    p {
        animation: fadeIn 3s ease-in-out forwards;
        padding-left: 2rem;
    }

    span {
        animation: fadeIn 3s ease-in-out forwards;
        text-align: right;
        padding-right: 2rem;
        padding-top: .8rem;
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`
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