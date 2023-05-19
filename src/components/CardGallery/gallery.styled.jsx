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
`;
