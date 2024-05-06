import styled from 'styled-components';
import roadTrip from '../assets/images/hero.jpg';

export const MainContainer = styled.main`
    display: flex;
    background: url(${roadTrip}) no-repeat center center/cover;
    height: 100vh;
    height: 100dvh;
    color: whitesmoke;
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    font-family: var(--ff-tertiary);
    font-size: var(--fs-medium);
    line-height: 1.5;
    margin: 10dvh 15dvw 0 auto;
    margin: 10vh 15vw 0 auto;

    p {
        animation: fadeIn 3s ease-in-out forwards;
    }

    span {
        animation: fadeIn 3s ease-in-out forwards;
        text-align: right;
        font-size: var(--fs-regular);
        padding-top: .8rem;
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`
export const SectionContainer = styled.section`
    
`
export const ImgWrapper  = styled.div`

`
export const DescWrapper = styled.div`
    margin: 0 auto;
    max-width: 45vw;
    min-width: 45vw;
    font-family: var(--ff-primary);
`