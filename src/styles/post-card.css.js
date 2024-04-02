import styled from "styled-components";
import monumentValley from "../assets/images/monument-valley.png";
import { Link } from "react-router-dom";

export const PostCardContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    font-size: var(--fs-medium);
    width: 30rem;
    height: 20rem;
    margin: .5rem;
    padding: 1rem 1.5rem;
    border-radius: 1.2rem;
    border: .6rem solid whitesmoke;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    color: #ffffff;
    background: rgb(9,9,121);
    background: linear-gradient(0deg,
        rgba(0, 0, 0, 0.5) 30%,
        rgba(255, 255, 255, 0) 50%),
        url(${monumentValley});
    background-size: cover;
    background-position: top right;
    transform: rotate(-2deg);
    transition: 500ms transform ease-in-out;
    cursor: pointer;

    h2 {
        font-family: var(--ff-secondary);
    }
    p {
        font-family: var(--ff-tertiary);
        font-size: var(--fs-medium);
    }

    &:hover {
        transform: scale(1.2) rotate(0deg);
        z-index: 2;
    }

    :hover + & {
        transform: scale(1.1) rotate(+2deg);
        z-index: 1;
    }

    &:has(+ :hover) {
        transform: scale(1.1) rotate(-4deg);
        z-index: 1;
    }
`