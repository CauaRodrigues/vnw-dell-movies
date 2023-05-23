import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { MagnifyingGlass } from "@phosphor-icons/react";

import Text from "@components/Text";
import * as S from "./genres.styled";

const GenresList = ({ genres, addFilter }) => {
	const [genreSelected, setGenreSelected] = useState();
	const { colors } = useTheme();

	const selectGenreToFilter = (genreId) => {
		setGenreSelected(genreId);
	};

	return (
		<S.GenresContainer>
			<S.GenresList>
				{genres.map((genre) => (
					<React.Fragment key={genre.id}>
						<S.Button
							onClick={() => {
								selectGenreToFilter(genre.id);
								addFilter(genre.id);
							}}
							active={genreSelected === genre.id ? 1 : 0}
						>
							<li>
								<Text
									text={genre.name}
									tag="span"
									size="nl"
									fw="rg"
									color={colors.primary}
								/>
							</li>
						</S.Button>
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
