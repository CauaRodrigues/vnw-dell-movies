import React, { useEffect, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import { useTheme } from "styled-components";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import MediaQuery, { useMediaQuery } from "react-responsive";

import Text from "@components/Text";
import Card from "@components/Card";
import * as S from "./releases.styled";

const LastReleases = ({ releases }) => {
	const { colors } = useTheme();
	const [itemsNumber, setItemsNumber] = useState(5);

	const isNotDesktop = useMediaQuery({ query: "(max-width: 975px)" });
	const isTablet = useMediaQuery({ query: "(max-width: 710px)" });
	const isMobile = useMediaQuery({ query: "(max-width: 520px)" });
	const smallMobile = useMediaQuery({ query: "(max-width: 340px)" });

	useEffect(() => {
		if (isNotDesktop) {
			setItemsNumber(4);
		}
		if (isTablet) {
			setItemsNumber(3);
		}
		if (isMobile) {
			setItemsNumber(2);
		}
		if (smallMobile) {
			setItemsNumber(1);
		}
	}, [isTablet, isNotDesktop]);

	const Arrows = ({ type, onClick, isEdge }) => {
		const pointer =
			type === consts.PREV ? (
				<CaretLeft size={32} weight="light" color={colors.primary} />
			) : (
				<CaretRight size={32} weight="light" color={colors.primary} />
			);
		return (
			<S.ArrowButton onClick={onClick} disabled={isEdge}>
				{pointer}
			</S.ArrowButton>
		);
	};

	return (
		<S.ContainerReleases>
			<Text
				text="Últimos Lançamentos"
				tag="h2"
				color={colors.primary}
				size="lg"
				fw="bd"
			/>

			<Carousel
				itemsToShow={itemsNumber}
				itemsToScroll={itemsNumber}
				renderArrow={Arrows}
				pagination={false}
				enableMouseSwipe={true}
				itemPadding={[8, 8]}
				enableSwipe
			>
				{releases.map((item) => (
					<Card
						key={item.id}
						title={item.title}
						poster={item.poster_path}
						release={item.release_date}
						description={item.overview}
					/>
				))}
			</Carousel>
		</S.ContainerReleases>
	);
};

export default LastReleases;
