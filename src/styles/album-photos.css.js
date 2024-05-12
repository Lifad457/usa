import styled from "styled-components";

export const PhotosContainer = styled.section`
    display: grid;
    grid-gap: .8rem;
    margin-block: 2rem;

    @media screen and (min-width: 768px) {
        grid-template-areas: 
        'one'
        'two'
        'three';

        grid-template-columns: repeat(2, 1fr);
        
        :nth-child(1) {
            grid-area: one;
        }
        :nth-child(2) {
            grid-area: two;
        }
        :nth-child(3) {
            grid-area: three;
            grid-row: span 2;
        }

        grid-template-areas: 
            'one three'
            'two three';
    }
`