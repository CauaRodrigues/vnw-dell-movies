import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
	width: 100%;
	height: 100vh;
	padding: 0 24px;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

export const Header = styled.header`
	width: 100%;
	min-height: 16vh;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 200px;
	}
`;

export const Content = styled.section`
	width: 100%;
	padding: 24px 0;

	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	gap: 1rem;

	text-align: center;

	img {
		width: 40%;

		@media (max-width: 900px) {
			width: 50%;
		}
		@media (max-width: 790px) {
			width: 70%;
		}
		@media (max-width: 580px) {
			width: 90%;
		}
		@media (max-width: 370px) {
			width: 100%;
		}
	}
`;

export const LinkButton = styled(Link)`
	padding: 12px 18px;
	background-color: #fd483d;
	border-radius: 30px;
`;
