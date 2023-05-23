import { useEffect, useState } from "react";

import Hero from "@components/Hero";
import ServiceMovie from "@services/Movie";
import GenresList from "@components/GenresList";
import LastReleases from "@components/LastReleases";
import CardGallery from "@components/CardGallery";
import Pagination from "@components/Pagination";
import * as S from "./page.styled";

const srv = new ServiceMovie();

const Movies = () => {
	const [banner, setBanner] = useState({});
	const [genresList, setGenresList] = useState([]);
	const [lastReleases, setLastReleases] = useState([]);
	const [popularList, setPopularList] = useState([]);
	const [filteredMovies, setFilteredMovies] = useState([]);

	const [filterId, setFilterId] = useState();
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState();

	const handlerPageNumber = (number) => {
		setCurrentPage(number);
	};

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

		await srv.getPopularList(currentPage).then((data) => {
			setTotalPages(data.total_pages);
			setPopularList(data.results);
		});

		if (filterId) {
			await srv.filterMoviesById(filterId).then((data) => {
				setFilteredMovies(data.results);
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
					{/* <LastReleases releases={lastReleases} /> */}
					<CardGallery
						list={filterId ? filteredMovies : popularList}
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

export default Movies;
