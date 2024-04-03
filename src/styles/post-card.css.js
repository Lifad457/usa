import styled from "styled-components";
import monumentValley from "../assets/images/monument-valley.png";
import { Link } from "react-router-dom";

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-gap: 1rem .5rem;
    margin-top: 5rem;
    width: 95rem;

    a {
        text-decoration: none;
        color: #ffffff;
    }
`
export const PostCardContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: var(--fs-medium);
    width: 30rem;
    height: 20rem;
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

    h2 {
        font-family: var(--ff-secondary);
    }
    p {
        font-family: var(--ff-tertiary);
        font-size: var(--fs-medium);
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