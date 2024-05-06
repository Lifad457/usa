import styled from 'styled-components';
import roadTrip from '../assets/images/hero.jpg';

export const MainContainer = styled.main`
    display: flex;
    width: 100vw;
    background: url(${roadTrip}) no-repeat center center/cover;
    height: 100dvh;
    height: 100vh;
    color: whitesmoke;
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    font-family: var(--ff-tertiary);
    font-size: var(--fs-medium);
    line-height: 1.3;
    margin: 14vh 18vw 0 auto;

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
    
`