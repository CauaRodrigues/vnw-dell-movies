import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import { MagnifyingGlass } from "@phosphor-icons/react";

import Text from "@components/Text";
import * as S from "./genres.styled";

const GenresList = ({ genres }) => {
	const { colors } = useTheme();

	return (
		<S.GenresContainer>
			<S.GenresList>
				{genres.map((genre) => (
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
			</S.GenresList>

			<li>
				<MagnifyingGlass size={26} />
			</li>
		</S.GenresContainer>
	);
};

export default GenresList;
