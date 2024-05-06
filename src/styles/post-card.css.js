import styled from "styled-components";
import monumentValley from "../assets/images/monument-valley.png";
import { Link } from "react-router-dom";

export const PostCardContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: var(--fs-medium);
    width: 24rem;
    height: 15rem;
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
    transition: 500ms scale ease-in-out;
    cursor: pointer;
    text-decoration: none;
    
    h2 {
        font-family: var(--ff-secondary);
        font-size: var(--fs-medium);
    }

    p {
        font-family: var(--ff-tertiary);
        font-size: var(--fs-regular);
    }

    &:hover {
        scale: 1.5;
        z-index: 2;
    }

    :hover + & {
        scale: 1.05;
        z-index: 1;
    }

    &:has(+ :hover) {
        scale: 1.05;
        z-index: 1;
    }
`