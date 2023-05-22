import styled from "styled-components";

export const Main = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ContainerContent = styled.section`
	width: 85%;

	@media (max-width: 900px) {
		width: 90%;
	}

	@media (max-width: 645px) {
	}
`;
