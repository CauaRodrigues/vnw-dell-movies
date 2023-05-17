import styled from "styled-components";

const Button = styled.button`
	padding: 8px 12px;
	width: 155px;
	height: 2.5rem;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.3rem;

	background-color: ${(props) => (props.fill ? props.fill : "transparent")};
	border-radius: 40px;
	transition: ease-in 0.5s;

	&:hover {
		opacity: 0.7;
	}
`;

export default Button;
