import { useEffect, useState } from "react";

import Hero from "@components/Hero";
import ServiceTV from "@services/TV";
import GenresList from "@components/GenresList";
import LastReleases from "@components/LastReleases";
import CardGallery from "@components/CardGallery";
import * as S from "./page.styled";

const srv = new ServiceTV();

const Series = () => {
	const [banner, setBanner] = useState({});
	const [genresList, setGenresList] = useState([]);
	const [lastReleases, setLastReleases] = useState([]);
	const [popularList, setPopularList] = useState([]);
	const [filteredMovies, setFilteredMovies] = useState([]);

	const [filterId, setFilterId] = useState();

	const loadData = async () => {
		await srv.getPopularSerie().then((data) => {
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
			console.log(data);
		});

		if (filterId) {
			await srv.filterMoviesById(filterId).then((data) => {
				setFilteredMovies(data.results);
			});
		}
	};

	useEffect(() => {
		loadData();
	}, [filterId]);

	return (
		<>
			<Hero popular={banner} />

			<S.Main>
				<S.ContainerContent>
					<GenresList genres={genresList} addFilter={(id) => setFilterId(id)} />
					{/* <LastReleases releases={lastReleases} /> */}
					<CardGallery
						list={filterId ? filteredMovies : popularList}
						title="Em Alta"
					/>
				</S.ContainerContent>
			</S.Main>
		</>
	);
};

export default Series;
