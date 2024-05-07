import styled from 'styled-components';
import hero from '../assets/images/hero.jpg';

export const MainContainer = styled.main`
    display: flex;
    background: url(${hero}) no-repeat center top/cover;
    height: 100vh;
    height: 100dvh;
    color: whitesmoke;
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
    flex-wrap: wrap;
    padding: 2rem;
    
    h1 {
        font-family: var(--ff-primary);
        font-size: var(--fs-large);
        text-align: center;
        margin-block: 3rem;
        line-height: 1.2;
    }
`
export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-gap: 2rem;
    width: 65rem;
    margin: 0 auto;
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    width: 20rem;
    height: 30rem;
    
    font-size: var(--fs-medium);
    color: #ffffff;
    
    border-radius: 1.2rem;
    border: .6rem solid whitesmoke;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    background: url(${hero}) no-repeat left center/cover;
    
    cursor: pointer;
    text-decoration: none;
    
    p {
        font-family: var(--ff-secondary);
        font-size: var(--fs-medium);
    }
`