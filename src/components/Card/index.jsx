import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";

import Text from "@components/Text";
import { FormatDate } from "@utils/FormatData";
import * as S from "./card.styled";

const Card = ({ title, release, poster, description }) => {
	const [showDescription, setShowDescription] = useState(false);
	const [overview, setOverview] = useState("");
	const [image, setImage] = useState(
		`https://image.tmdb.org/t/p/w500${poster}`
	);

	const { colors } = useTheme();
	const year = release ? FormatDate(release) : "????";

	useEffect(() => {
		if (description) {
			const listWords = description.split(" ");
			if (listWords.length >= 200) {
				const text = listWords.slice(0, 220);
				setOverview(text.join(" "));
			} else {
				setOverview(description);
			}
		} else {
			setOverview("????");
		}
	}, []);

	const handlerCard = () => {
		setShowDescription((prevState) => !prevState);
	};

	const handlerImageError = () => {
		setImage("/assets/images/image-default.png");
	};

	return (
		<S.CardBox onClick={handlerCard} isopen={showDescription ? 1 : 0}>
			<img src={image} onError={handlerImageError} alt={title} />

			<S.CardInfo isopen={showDescription ? 1 : 0}>
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
