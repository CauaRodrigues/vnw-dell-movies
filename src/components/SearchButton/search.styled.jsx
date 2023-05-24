import styled from "styled-components";

export const ContainerSearch = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FieldSearch = styled.div`
	height: fit-content;
	width: fit-content;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Field = styled.input`
	height: 30px;
	width: 30px;
	padding: 10px;
	padding-left: 20px;

	background-color: transparent;
	transition: all 0.5s ease-in-out;

	color: ${({ theme }) => theme.colors.light};
	font-weight: 600;

	&:focus {
		width: 300px;
		padding: 20px 0;
		padding-left: 50px;
		outline: none;
		border-radius: 8px;
		border: 2px solid ${({ theme }) => theme.colors.light};
		background-color: ${({ theme }) => theme.colors.main};
		transition: all 0.6s cubic-bezier(0, 0.11, 0.35, 2);
	}
`;

export const Button = styled.button`
	width: 30px;
	height: 30px;
	margin: 0 10px;
	position: absolute;
	left: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	background: transparent;

	&:focus ~ ${Field} {
		width: 300px;
		padding: 20px 0;
		padding-left: 50px;
		outline: none;
		border-radius: 8px;
		border: 2px solid ${({ theme }) => theme.colors.light};
		background-color: ${({ theme }) => theme.colors.main};
		transition: all 0.6s cubic-bezier(0, 0.11, 0.35, 2);
	}
`;
