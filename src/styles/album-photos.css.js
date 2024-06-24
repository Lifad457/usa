import styled from 'styled-components';

export const PhotosContainer = styled.section`
	display: grid;
	grid-gap: 0.6rem;
	grid-auto-columns: 1fr;
	margin-block: 2rem;

	@media screen and (min-width: 768px) {
		&.two-pictures {
			:nth-child(1) {
				grid-area: one;
			}
			:nth-child(2) {
				grid-area: two;
			}

			grid-template-areas: 'one two';
		}

		&.three-pictures {
			:nth-child(1) {
				grid-area: one;
			}
			:nth-child(2) {
				grid-area: two;
			}
			:nth-child(3) {
				grid-area: three;
			}

			grid-template-areas:
				'one three'
				'two three';

			&.left {
				grid-template-areas:
					'three one'
					'three two';
			}

			&.stacked {
				grid-template-areas:
					'one'
					'two'
					'three';
			}
		}

		&.four-pictures {
			grid-template-areas:
				'one one'
				'two three'
				'four four';
			&.variant {
				grid-template-areas:
					'one two'
					'one two'
					'three four'
					'three four';
			}

			:nth-child(1) {
				grid-area: one;
			}
			:nth-child(2) {
				grid-area: two;
			}
			:nth-child(3) {
				grid-area: three;
			}
			:nth-child(4) {
				grid-area: four;
			}
		}

		&.five-pictures {
			:nth-child(1) {
				grid-area: one;
			}
			:nth-child(2) {
				grid-area: two;
			}
			:nth-child(3) {
				grid-area: three;
			}
			:nth-child(4) {
				grid-area: four;
			}
			:nth-child(5) {
				grid-area: five;
			}

			grid-template-areas:
				'one two'
				'three four'
				'five five';

			&.variant {
				grid-template-areas:
					'one five'
					'two five'
					'three four';
			}
			&.variant2 {
				grid-template-areas:
					'one two'
					'one two'
					'three three'
					'four five'
					'four five';
			}
		}

		&.six-pictures {
			grid-template-areas:
				'one two'
				'three two'
				'six four'
				'six five';

			&.variant {
				grid-template-areas:
					'one one'
					'two three'
					'two three'
					'four five'
					'four five'
					'six six';
			}
			&.variant2 {
				grid-template-areas:
					'one two'
					'three four'
					'five six';
			}

			:nth-child(1) {
				grid-area: one;
			}
			:nth-child(2) {
				grid-area: two;
			}
			:nth-child(3) {
				grid-area: three;
			}
			:nth-child(4) {
				grid-area: four;
			}
			:nth-child(5) {
				grid-area: five;
			}
			:nth-child(6) {
				grid-area: six;
			}
		}
	}
`;
