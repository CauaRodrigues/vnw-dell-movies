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
		opacity: ${(props) => (props.isopen ? "0.4" : "1")};
		cursor: pointer;
	}
`;

export const CardInfo = styled.div`
	${(props) => {
		if (props.isopen) {
			return css`
				width: 100%;
				height: 300px;
				padding: 12px;

				flex: 1;
				position: ${props.isopen ? "absolute" : "static"};
				top: ${props.isopen ? "0" : null};
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
