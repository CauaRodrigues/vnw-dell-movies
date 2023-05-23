import styled from "styled-components";

export const PaginationContainer = styled.div`
	margin: 20px 0;
	display: flex;
	justify-content: center;
	align-items: baseline;
	gap: 0.5rem;
`;

export const PageButton = styled.button`
	width: 45px;
	height: 45px;

	background: ${({ theme, active }) =>
		active ? theme.colors.primary : "transparent"};
	border: 1px solid ${({ theme }) => theme.colors.primary};
	border-radius: 50%;
	cursor: pointer;

	text-align: center;
	font-size: 1rem;
	color: ${({ theme, active }) =>
		active ? theme.colors.black : theme.colors.primary};
`;

export const Button = styled.button`
	padding: 8px 12px;

	background: ${({ theme, active }) =>
		active ? theme.colors.primary : "transparent"};
	border: 1px solid ${({ theme }) => theme.colors.primary};
	border-radius: 8px;
	cursor: pointer;

	text-align: center;
	font-size: 1rem;
	color: ${({ theme, active }) =>
		active ? theme.colors.black : theme.colors.primary};
`;
