import styled, { css } from "styled-components";

export const CardBox = styled.figure`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: ${(props) => (props.isopen ? "row" : "column")};
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
				height: inherit;
				padding: 12px;

				position: ${props.isopen ? "absolute" : "static"};
				top: ${props.isopen ? "0" : null};
				overflow-y: scroll;

				&::-webkit-scrollbar-track {
					background-color: ${({ theme }) => theme.colors.primary};
				}
				&::-webkit-scrollbar {
					width: 4px;
					background: transparent;
				}
				&::-webkit-scrollbar-thumb {
					background: ${({ theme }) => theme.colors.gray_dark};
					border-radius: 50px;
				}

				/* .description--card {
					height: inherit;
				} */
			`;
		}
	}}
`;
