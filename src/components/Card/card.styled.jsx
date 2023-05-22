import styled, { css } from "styled-components";

export const CardBox = styled.figure`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 0.3rem;

	img {
		opacity: ${(props) => (props.isOpen ? "0.4" : "1")};
		cursor: pointer;
	}
`;

export const CardInfo = styled.div`
	${(props) => {
		if (props.isOpen) {
			return css`
				width: 100%;
				height: 300px;
				padding: 12px;

				flex: 1;
				position: ${props.isOpen ? "absolute" : "static"};
				top: ${props.isOpen ? "0" : null};
				overflow-y: scroll;

				&::-webkit-scrollbar {
					display: none;
					background-color: transparent;
				}

				.description--card {
					height: inherit;
				}
			`;
		}
	}}
`;
