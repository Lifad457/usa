import styled from 'styled-components';

export const Photo = styled.img`
	display: block;
	max-width: 100%;
	min-height: 100%;
	object-fit: cover;

	.row-span-2 {
		grid-row: span 2;
	}
	.col-span-2 {
		grid-column: span 2;
	}
`;
