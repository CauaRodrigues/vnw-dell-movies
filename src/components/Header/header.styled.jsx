import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	min-height: 8vh;
	padding: 12px 24px;

	z-index: 10;
	position: fixed;
	top: 0;

	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: ${({ theme }) => theme.colors.transparent};
	backdrop-filter: blur(16px);
	-webkit-backdrop-filter: blur(16px);

	@media (max-width: 680px) {
		padding: 12px;
	}

	.logo {
		width: 150px;
	}
`;

export const NavMenu = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;

	a {
		color: ${({ theme }) => theme.colors.primary};
		transition: all 0.4s;

		&:hover {
			opacity: 0.5;
		}
	}

	@media (max-width: 680px) {
		gap: 1rem;
	}

	.tab {
		width: 125px;
		height: 42px;

		display: flex;
		justify-content: center;
		align-items: center;

		background: transparent;
		border-radius: 42px;
		text-align: center;

		@media (max-width: 680px) {
			width: 100px;
		}

		&#active {
			background: ${({ theme }) => theme.colors.gray_dark};
		}
	}
`;
