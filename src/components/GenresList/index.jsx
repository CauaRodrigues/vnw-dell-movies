import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { MagnifyingGlass } from "@phosphor-icons/react";

import Text from "@components/Text";
import * as S from "./genres.styled";

const GenresList = ({ genres }) => {
	const { tab } = useParams();
	const { colors } = useTheme();

	const navigate = useNavigate();

	return (
		<S.GenresContainer>
			<S.GenresList>
				{genres.map((genre) => (
					<React.Fragment key={genre.id}>
						<S.Button
							onClick={() => {
								navigate(
									`/genres/${tab === "tv" ? "tv" : "movie"}/${genre.id}/${
										genre.name
									}`
								);
							}}
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
