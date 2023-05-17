import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { useParams } from "react-router-dom";

import Text from "@components/Text";
import Hero from "@components/Hero";
import Service from "@services/api";

const srv = new Service();

const Home = () => {
	const [isMovies, setIsMovies] = useState(true);
	const [popularMovie, setPopularMovie] = useState([]);

	const theme = useTheme();
	const { tab } = useParams();

	const loadMovie = async () => {
		await srv.getPopularMovie().then((data) => {
			setPopularMovie(data);
		});
	};

	useEffect(() => {
		if (tab === "series") {
			setIsMovies(false);
		} else {
			setIsMovies(true);
		}

		loadMovie();
	}, [tab]);

	const title = isMovies ? "Filmes" : "Séries";

	return (
		<>
			<Hero popular={popularMovie} />

			<Text
				tag="h1"
				text={title}
				size="x-lg"
				color={theme?.colors.yellow}
				fw="bd"
			/>
		</>
	);
};

export default Home;
