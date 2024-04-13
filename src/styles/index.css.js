import styled from 'styled-components';
import roadTrip from '../assets/images/road-trip.jpg';

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
    background: url(${roadTrip}) no-repeat center center/cover;
    height: 100dvh;
    height: 100vh;
    color: whitesmoke;
    padding-top: 15vh;
    padding-left: 10vw;
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);

    p {
        font-family: var(--ff-primary);
        font-weight: var(--fw-bold);
        font-size: var(--fs-medium);
        animation: fadeIn 3s ease-in-out forwards;
    }
    span {
        font-family: var(--ff-tertiary);
        font-size: var(--fs-regular);
        animation: fadeIn 3s ease-in-out forwards;
        text-align: right;
        padding-top: .5rem;
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