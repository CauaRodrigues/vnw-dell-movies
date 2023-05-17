import styled from "styled-components";

export const Hero = styled.section`
	width: 100%;
	min-height: 95vh;

	display: flex;
	justify-content: center;
	align-items: flex-end;

	background-image: ${(props) => `url(${props.bgimage})`};
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-position: center;
	filter: opacity(0.8);

	-webkit-box-shadow: inset 0px -105px 70px 53px rgba(0, 0, 0, 0.76);
	-moz-box-shadow: inset 0px -105px 70px 53px rgba(0, 0, 0, 0.76);
	box-shadow: inset 0px -105px 70px 53px rgba(0, 0, 0, 0.76);
`;

export const HeroContent = styled.div`
	width: 80%;
	margin: 12px;
	margin-bottom: 3rem;

	display: flex;
	flex-direction: column;
	gap: 0.3rem;

	p {
		width: 50%;
	}
`;

export const HeroRating = styled.div`
	display: flex;
	align-items: center;
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
	display: flex;
	align-items: center;
	gap: 1rem;
`;
