import React from "react";
import Text from "@components/Text";
import * as S from "./category.styled";

const CardCateory = ({ categoryName }) => {
	return (
		<S.Box>
			<Text text={categoryName} tag="h2" size="md" fw="bd" />
		</S.Box>
	);
};

export default CardCateory;
