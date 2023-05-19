import styled from "styled-components";

export const Hero = styled.section`
	width: 100%;
	min-height: 100vh;

	display: flex;
	justify-content: center;
	align-items: flex-end;

	background-image: ${(props) => `url(${props.bgimage})`};
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	box-shadow: inset 0px -44px 50px 14px rgba(0, 0, 0, 0.95);

	@media (max-width: 650px) {
		min-height: 90vh;
	}
`;

export const HeroContent = styled.div`
	width: 85%;
	margin: 12px;
	margin-bottom: 3rem;

	display: flex;
	flex-direction: column;
	gap: 0.3rem;
	text-shadow: 1px 2px 8px rgba(0, 0, 0, 0.62);

	@media (max-width: 750px) {
		width: 90%;
	}

	@media (max-width: 650px) {
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	@media (max-width: 500px) {
		width: 95%;
		margin-bottom: 24px;
	}

	p {
		width: 50%;

		@media (max-width: 1170px) {
			width: 80%;
		}

		@media (max-width: 750px) {
			width: 90%;
		}
	}
`;

export const HeroRating = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	gap: 1rem;

	.rating {
		display: flex;
		align-items: flex-end;

		span {
			line-height: 1;
			&:first-of-type {
				margin-left: 0.3rem;
			}
		}
	}

	img {
		width: 42px;
	}
`;

export const GroupButtons = styled.div`
	margin: 1rem 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: inherit;
	gap: 1rem;
`;
