import React from "react";
import styled from "styled-components";

const Text = ({
	tag = "p",
	text = "",
	color = "inherit",
	size = "nl",
	fw = "400",
}) => {
	return (
		<TextStyled as={tag} color={color} size={size} fw={fw}>
			{text}
		</TextStyled>
	);
};

const TextStyled = styled.span`
	color: ${(props) => props.color};

	font-size: ${(props) => {
		switch (props.size) {
			case "x-sm":
				return "0.8rem";
			case "sm":
				return "0.9rem";
			case "nl":
				return "min(1rem, 6vw)";
			case "md":
				return "min(1.2rem, 8vw)";
			case "lg":
				return "min(1.6rem, 10vw)";
			case "x-lg":
				return "min(2.2rem, 10vw)";
			case "xx-lg":
				return "min(3.4rem, 15vw)";
			default:
				return "1rem";
		}
	}};

	font-weight: ${(props) => {
		switch (props.fw) {
			case "lg":
				return "300";
			case "rg":
				return "400";
			case "sb":
				return "600";
			case "bd":
				return "700";
			default:
				return "400";
		}
	}};
`;

export default Text;
