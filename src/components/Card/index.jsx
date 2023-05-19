import React from "react";

import Text from "@components/Text";
import { FormatDate } from "@utils/FormatData";

import * as S from "./card.styled";
import { useTheme } from "styled-components";

const Card = ({ title, release, poster, description }) => {
	const { colors } = useTheme();
	const year = FormatDate(release);
	const image = `https://image.tmdb.org/t/p/original${poster}`;

	return (
		<S.CardBox>
			<img src={image} alt={title} />

			<Text
				text={title}
				tag="figcaption"
				color={colors.primary}
				size="sm"
				fw="bd"
			/>
			<Text
				text={year}
				tag="figcaption"
				color={colors.primary}
				size="sm"
				fw="lg"
			/>
		</S.CardBox>
	);
};

export default Card;
