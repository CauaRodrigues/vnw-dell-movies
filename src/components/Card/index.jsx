import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";

import Text from "@components/Text";
import { FormatDate } from "@utils/FormatData";
import * as S from "./card.styled";

const Card = ({ title, release, poster, description }) => {
	const [showDescription, setShowDescription] = useState(false);
	const [overview, setOverview] = useState("");

	const { colors } = useTheme();
	const year = FormatDate(release);
	const image = `https://image.tmdb.org/t/p/original${poster}`;

	useEffect(() => {
		const listWords = description.split(" ");
		if (listWords.length >= 200) {
			const text = listWords.slice(0, 220);
			setOverview(text.join(" "));
		} else {
			setOverview(description);
		}
	}, []);

	const handlerCard = () => {
		setShowDescription((prevState) => !prevState);
	};

	return (
		<S.CardBox onClick={handlerCard} isOpen={showDescription}>
			<img src={image} alt={title} />

			<S.CardInfo isOpen={showDescription}>
				<div className="title--card">
					<Text
						text={title}
						tag="figcaption"
						color={colors.primary}
						size="sm"
						fw="bd"
					/>
				</div>

				{showDescription ? (
					<div className="description--card">
						<Text
							text={overview}
							tag="p"
							color={colors.primary}
							size="x-sm"
							fw="lg"
						/>
					</div>
				) : (
					<Text
						text={year}
						tag="figcaption"
						color={colors.primary}
						size="sm"
						fw="lg"
					/>
				)}
			</S.CardInfo>
		</S.CardBox>
	);
};

export default Card;
