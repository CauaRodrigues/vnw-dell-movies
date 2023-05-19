import React from "react";
import Carousel from "react-elastic-carousel";

import Text from "@components/Text";
import * as S from "./releases.styled";

const breakpoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 },
];

const LastReleases = ({ releases }) => {
	return (
		<S.ContainerReleases>
			<Text text="Últimos Lançamentos" tag="h2" />

			<Carousel>
				<span>1</span>
				<span>1</span>
				<span>1</span>
			</Carousel>
		</S.ContainerReleases>
	);
};

export default LastReleases;
