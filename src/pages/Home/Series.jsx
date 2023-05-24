import { useEffect, useState } from "react";

import Hero from "@components/Hero";
import ServiceTV from "@services/TV";
import GenresList from "@components/GenresList";
import LastReleases from "@components/LastReleases";
import CardGallery from "@components/CardGallery";
import Pagination from "@components/Pagination";
import * as S from "./page.styled";

const srv = new ServiceTV();

const Series = () => {
	const [banner, setBanner] = useState({});
	const [genresList, setGenresList] = useState([]);
	const [lastReleases, setLastReleases] = useState([]);
	const [popularList, setPopularList] = useState([]);
	const [filteredSeries, setFilteredSeries] = useState([]);

	const [filterId, setFilterId] = useState();
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 500;

	const handlerPageNumber = (number) => {
		setCurrentPage(number);
	};

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

		await srv.getPopularList(currentPage).then((data) => {
			setPopularList(data.results);
		});

		if (filterId) {
			await srv.filterSeriesById(filterId, currentPage).then((data) => {
				setFilteredSeries(data.results);
			});
		}
	};

	useEffect(() => {
		loadData();
	}, [filterId, currentPage]);

	return (
		<>
			<Hero popular={banner} />

			<S.Main>
				<S.ContainerContent>
					<GenresList genres={genresList} addFilter={(id) => setFilterId(id)} />
					<LastReleases releases={lastReleases} />
					<CardGallery
						list={filterId ? filteredSeries : popularList}
						title="Em Alta"
					/>
					<Pagination
						actualPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlerPageNumber}
					/>
				</S.ContainerContent>
			</S.Main>
		</>
	);
};

export default Series;
