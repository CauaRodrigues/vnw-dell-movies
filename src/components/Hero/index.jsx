import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { FilmStrip, Play, Star } from "@phosphor-icons/react";
import MediaQuery, { useMediaQuery } from "react-responsive";

import Text from "@components/Text";
import Button from "@components/Button";
import * as S from "./hero.styled";

const Hero = ({ popular }) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery({
		query: "(min-width: 650px)",
	});

	return (
		<S.Hero bgimage={popular.image}>
			<S.HeroContent>
				<Text
					text={popular.title}
					tag="h1"
					color={theme?.colors.primary}
					fw="bd"
					size="x-lg"
				/>

				<Text
					text={`${popular.runtime} | ${popular.genres} | ${popular.release}`}
					tag="span"
					color={theme?.colors.primary}
					fw="lg"
					size="x-sm"
				/>

				<S.HeroRating>
					<div className="rating">
						<Star weight="fill" size={32} color={theme?.colors.yellow} />

						<Text
							text={popular.vote}
							tag="span"
							color={theme?.colors.primary}
							fw="rg"
							size="lg"
						/>
						<Text
							text="/10"
							tag="span"
							color={theme?.colors.primary}
							fw="lg"
							size="x-sm"
						/>
					</div>

					<a href={popular.imdbUrl} target="_blank" rel="noopener noreferrer">
						<img src="/assets/icons/imdb.png" alt="imdb logo" />
					</a>
				</S.HeroRating>

				<MediaQuery minWidth={650}>
					<Text
						text={popular.description}
						tag="p"
						color={theme?.colors.primary}
						fw="lg"
						size="nl"
					/>
				</MediaQuery>

				<S.GroupButtons>
					<Button fill={theme?.colors.orange}>
						<Play weight="fill" size={26} color={theme?.colors.light} />
						<Text
							text="Assistir Agora"
							tag="span"
							color={theme?.colors.light}
							fw="sb"
							size="sm"
						/>
					</Button>

					<Button fill={theme?.colors.gray_light}>
						<FilmStrip weight="fill" size={26} color={theme?.colors.light} />
						<Text
							text="Trailer"
							tag="span"
							color={theme?.colors.light}
							fw="sb"
							size="sm"
						/>
					</Button>
				</S.GroupButtons>
			</S.HeroContent>
		</S.Hero>
	);
};

export default Hero;
