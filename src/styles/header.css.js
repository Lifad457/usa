import styled from "styled-components";
import drapeau from "../assets/images/drapeau.jpg";
import roadTrip from "../assets/images/road-trip.jpg";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    padding-block: 8%;
    height: 100vh;
    height: 100dvh;
    margin: 0 auto;
    background-image: url(${roadTrip});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: #ffffff;
    font-family: var(--ff-header);
    font-size: 4.5rem;
    letter-spacing: .2rem;
    text-align: center;

    h1 {
        display: inline-block;
        background: url(${drapeau}) no-repeat top center/cover;
        background-position: top;
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        opacity: 0;
        animation: fadeIn 3s ease-in-out forwards;
    }
    h2 {
        animation: fadeIn 5s ease-in-out forwards;
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`