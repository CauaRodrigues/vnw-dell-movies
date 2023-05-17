import { useTheme } from "styled-components";
import { FilmStrip, Play, Star } from "@phosphor-icons/react";

import Text from "@components/Text";
import Button from "@components/Button";
import * as S from "./hero.styled";

const Hero = ({ popular }) => {
	const theme = useTheme();

	return (
		<S.Hero bgimage={popular.backdrop_path}>
			<S.HeroContent>
				<Text
					text="Avatar: o Caminho da Água"
					tag="h1"
					color={theme?.colors.primary}
					fw="bd"
					size="x-lg"
				/>

				<Text
					text="3h 23min | Fantasia, Família | 2023"
					tag="span"
					color={theme?.colors.primary}
					fw="lg"
					size="x-sm"
				/>

				<S.HeroRating>
					<div className="rating">
						<Star weight="fill" size={32} color={theme?.colors.yellow} />

						<Text
							text="9,9"
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

					<img src="/assets/icons/imdb.png" alt="imdb logo" />
				</S.HeroRating>

				<Text
					text="Lorem ipsum dolor sit amet consectetur adipiscing elit placerat accumsan posuere justo blandit, primis mauris ut sed pretium nulla porta fringilla montes pellentesque. Donec quis cum volutpat dictumst lectus, ad lacinia class."
					tag="p"
					color={theme?.colors.primary}
					fw="lg"
					size="nl"
				/>

				<S.GroupButtons>
					<Button bgcolor={theme?.colors.orange}>
						<Play weight="fill" size={26} color={theme?.colors.light} />
						<Text
							text="Assistir Agora"
							tag="span"
							color={theme?.colors.light}
							fw="sb"
							size="sm"
						/>
					</Button>

					<Button bgcolor={theme?.colors.gray_light}>
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
