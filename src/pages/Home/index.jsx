import { useEffect, useState } from "react";

import Hero from "@components/Hero";
import Service from "@services/api";
import GenresList from "@components/GenresList";
import LastReleases from "@components/LastReleases";
import CardGallery from "@components/CardGallery";
import * as S from "./page.styled";

const srv = new Service();

const Home = () => {
	const [banner, setBanner] = useState({});
	const [genresList, setGenresList] = useState([]);
	const [lastReleases, setLastReleases] = useState([]);
	const [popularList, setPopularList] = useState([]);

	const loadData = async () => {
		await srv.getPopularMovie().then((data) => {
			setBanner(data);
		});

		await srv.getGenresList().then((data) => {
			setGenresList(data);
		});

		await srv.getLastReleases().then((data) => {
			setLastReleases(data);
		});

		await srv.getPopularList(1).then((data) => {
			setPopularList(data.results);
		});
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<>
			<Hero popular={banner} />

			<S.Main>
				<S.ContainerContent>
					<GenresList genres={genresList} />
					<LastReleases releases={lastReleases} />
					<CardGallery list={popularList} title="Em Alta" />
				</S.ContainerContent>
			</S.Main>
		</>
	);
};

export default Home;
