import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Hero from "@components/Hero";
import Service from "@services/api";
import GenresList from "@components/GenresList";
import * as S from "./page.styled";

const srv = new Service();

const Home = () => {
	const [banner, setBanner] = useState({});
	const [genresList, setGenresList] = useState([]);

	const { tab } = useParams();

	const loadData = async () => {
		await srv.getPopularMovie().then((data) => {
			setBanner(data);
		});

		await srv.getGenresList().then((data) => {
			setGenresList(data);
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
				</S.ContainerContent>
			</S.Main>
		</>
	);
};

export default Home;
