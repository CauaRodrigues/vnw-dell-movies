import React from "react";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";

import Text from "@components/Text";
import * as S from "./category.styled";

const CardCateory = ({ categoryName, categoryId, tab }) => {
	const { colors } = useTheme();

	return (
		<Link to={`/genres/${tab}/${categoryId}/${categoryName}`}>
			<S.Box>
				<Text
					text={categoryName}
					tag="h2"
					size="md"
					fw="bd"
					color={colors.primary}
				/>
			</S.Box>
		</Link>
	);
};

export default CardCateory;
