import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CardGallery from "@components/CardGallery";
import ServiceSearch from "@services/Search";
import * as S from "./page.styled";

const srv = new ServiceSearch();

const Search = () => {
	const { tab, text } = useParams();
	const [listItems, setListItems] = useState([]);

	const loadData = async () => {
		await srv.searchTitles(tab, text).then((data) => {
			setListItems(data);
		});
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<S.Container>
			<S.Content>
				<CardGallery
					title={`Resultados para "${text}" em ${
						tab === "tv" ? "Séries" : "Filmes"
					}`}
					list={listItems}
				/>
			</S.Content>
		</S.Container>
	);
};

export default Search;
