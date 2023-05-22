import styled from "styled-components";

export const ContainerReleases = styled.section`
	width: 100%;
	margin: 24px 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 2rem;
`;

export const ArrowButton = styled.button`
	background-color: transparent;
	align-self: center;

	cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;
