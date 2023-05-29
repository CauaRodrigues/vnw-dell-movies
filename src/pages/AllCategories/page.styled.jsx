import styled from "styled-components";

export const Container = styled.main`
	width: 100%;
	padding-top: 150px;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.section`
	width: 90%;
	margin: 1.5rem 0;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const ContentList = styled.div`
	width: 100%;
	margin: 16px 0;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;

	@media (max-width: 900px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 640px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 372px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
