import React from "react";
import Text from "@components/Text";
import { MagnifyingGlass } from "@phosphor-icons/react";
import * as S from "./genres.styled";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";

const GenresList = ({ genres }) => {
	const { colors } = useTheme();

	return (
		<S.GenresContainer>
			{genres.slice(0, 8).map((genre) => (
				<React.Fragment key={genre.id}>
					<Link to="/">
						<li>
							<Text
								text={genre.name}
								tag="span"
								size="nl"
								fw="rg"
								color={colors.primary}
							/>
						</li>
					</Link>
				</React.Fragment>
			))}

			<li>
				<MagnifyingGlass size={26} />
			</li>
		</S.GenresContainer>
	);
};

export default GenresList;
