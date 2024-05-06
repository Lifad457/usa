import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    position: absolute;
    width: 100%;
    height: 3rem;
    padding: 1rem 2rem;
    background-color: transparent;
    z-index: 100;

    p {
        font-family: var(--ff-header);
        font-size: var(--fs-small);
        color: whitesmoke;
        word-spacing: .5rem;
    }

    span:nth-of-type(1) {
        color: darkblue;
    }
    span:nth-of-type(2) {
        color: darkred;
        font-weight: var(--fw-bold);
    }
`