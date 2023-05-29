import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { useParams } from "react-router-dom";

import ServiceSearch from "@services/Search";
import Text from "@components/Text";
import CardCateory from "@components/CardCategory";
import * as S from "./page.styled";

const srv = new ServiceSearch();

const AllCategories = () => {
	const { tab } = useParams();
	const { colors } = useTheme();

	const [genresList, setGenresList] = useState([]);

	const renderCards = () => {
		switch (tab) {
			case "movie":
				return (
					<>
						<Text text="Filmes" tag="h2" size="lg" fw="sb" />

						<S.ContentList>
							{genresList.map((genre) => (
								<CardCateory categoryName={genre.name} key={genre.id} />
							))}
						</S.ContentList>
					</>
				);
			case "tv":
				return (
					<>
						<Text text="Séries" tag="h2" size="lg" fw="sb" />

						<S.ContentList>
							{genresList.map((genre) => (
								<CardCateory categoryName={genre.name} key={genre.id} />
							))}
						</S.ContentList>
					</>
				);
			default:
				return (
					<>
						<Text text="Filmes" tag="h2" size="lg" fw="sb" />
						<S.ContentList>
							{genresList[0]
								? genresList[0].map((genre) => (
										<CardCateory categoryName={genre.name} key={genre.id} />
								  ))
								: null}
						</S.ContentList>

						<Text text="Séries" tag="h2" size="lg" fw="sb" />
						<S.ContentList>
							{genresList[1]
								? genresList[1].map((genre) => (
										<CardCateory categoryName={genre.name} key={genre.id} />
								  ))
								: null}
						</S.ContentList>
					</>
				);
		}
	};

	const loadGenres = async () => {
		const actualTab = tab === "tv" || tab === "movie" ? tab : "all";
		await srv.getGenresList(actualTab).then((data) => {
			setGenresList(data);
			console.log(data);
		});
	};

	useEffect(() => {
		loadGenres();
	}, []);

	return (
		<S.Container>
			<S.Content>
				<Text text="Gêneros" tag="h1" size="x-lg" fw="bd" />

				{renderCards()}
			</S.Content>
		</S.Container>
	);
};

export default AllCategories;
