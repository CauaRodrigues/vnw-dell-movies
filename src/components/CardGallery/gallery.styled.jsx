import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 2rem;
`;

export const Gallery = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 24px;

	@media (max-width: 780px) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media (max-width: 600px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 495px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 340px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
