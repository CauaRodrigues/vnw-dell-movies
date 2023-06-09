import styled from "styled-components";

export const GenresContainer = styled.ul`
	width: 100%;
	padding: 12px 0;

	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
`;

export const GenresList = styled.ul`
	padding: 12px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
	overflow-x: hidden;
	white-space: nowrap;

	&::-webkit-scrollbar-track {
		background-color: ${({ theme }) => theme.colors.primary};
	}
	&::-webkit-scrollbar {
		height: 5px;
		background: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.colors.gray_dark};
		border-radius: 50px;
	}
`;

export const Button = styled.button`
	background: ${({ theme, active }) =>
		active ? theme.colors.gray_light : "transparent"};
	padding: 10px 24px;
	border-radius: 43px;
	transition: all 0.5s;

	&:hover {
		background-color: ${({ theme }) => theme.colors.gray_light};
	}
`;
