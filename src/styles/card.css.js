import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 20rem;
    height: 25rem;
    cursor: pointer;
    overflow: hidden;
    text-decoration: none;
    font-size: var(--fs-medium);
    color: var(--clr-primary);

    img {
        transition: scale .8s ease-in-out;
        box-shadow: 0 0 .4rem .2rem rgba(0, 0, 0, .6);
    }

    img:hover {
        scale: 1.05;
    }
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    
    h2 {
        font-family: var(--ff-secondary);
        font-size: var(--fs-regular);
    }

    p {
        font-family: var(--ff-primary);
        font-size: var(--fs-small);
        line-height: 1.4;
        margin-block: 1rem;
    }
`