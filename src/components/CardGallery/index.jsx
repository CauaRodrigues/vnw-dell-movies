import React from "react";
import { useTheme } from "styled-components";

import Card from "@components/Card";
import Text from "@components/Text";

import * as S from "./gallery.styled";

const CardGallery = ({ list, title }) => {
	const { colors } = useTheme();

	return (
		<S.Container>
			<Text text={title} tag="h2" color={colors.primary} size="lg" fw="bd" />

			<S.Gallery>
				{list.map((item) => (
					<React.Fragment key={item.id}>
						<Card
							title={item.title}
							poster={item.poster_path}
							release={item.release_date}
							description={item.overview}
						/>
					</React.Fragment>
				))}
			</S.Gallery>
		</S.Container>
	);
};

export default CardGallery;
