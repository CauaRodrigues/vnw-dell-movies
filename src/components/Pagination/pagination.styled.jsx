import styled from "styled-components";

export const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
	background-color: white;
	color: black;
`;

export const PageButton = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	padding: 5px 10px;
	margin: 0 5px;
	font-size: 16px;
	color: ${(props) => (props.active ? "blue" : "black")};
`;

export const LastPageButton = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	padding: 5px 10px;
	margin: 0 5px;
	font-size: 16px;
	color: blue;
`;
