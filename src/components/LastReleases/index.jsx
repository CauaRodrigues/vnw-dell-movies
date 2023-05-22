import React from "react";
import { useTheme } from "styled-components";

import Text from "@components/Text";
import Card from "@components/Card";
import * as S from "./releases.styled";
import Carousel, { consts } from "react-elastic-carousel";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const LastReleases = ({ releases }) => {
	const { colors } = useTheme();

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
				itemsToShow={5}
				enableSwipe
				itemsToScroll={5}
				pagination={false}
				enableMouseSwipe={true}
				itemPadding={[8, 8]}
				renderArrow={Arrows}
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
