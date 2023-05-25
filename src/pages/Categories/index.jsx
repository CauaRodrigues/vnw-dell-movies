import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CardGallery from "@components/CardGallery";
import ServiceSearch from "@services/Search";
import * as S from "./page.styled";

const srv = new ServiceSearch();

const Categories = () => {
	const { tab, categoryId, categoryName } = useParams();
	const [listItems, setListItems] = useState([]);

	const loadData = async () => {
		await srv.listByCategory(tab, categoryId).then((data) => {
			setListItems(data.results);
		});
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<S.Container>
			<S.Content>
				<CardGallery
					title={`${tab === "tv" ? "Séries" : "Filmes"} de ${categoryName}`}
					list={listItems}
				/>
			</S.Content>
		</S.Container>
	);
};

export default Categories;
