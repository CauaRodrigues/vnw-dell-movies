import axios from "axios";
import { FormatTime, FormatDate } from "@utils/FormatData";

const api = axios.create({
	baseURL: import.meta.env.VITE_APP_API_BASE_URL,
	headers: {
		Accept: "application/json",
		Authorization: import.meta.env.VITE_APP_API_ACCESS_TOKEN,
	},
});

export default class Service {
	async getPopularMovie() {
		const popularMovie = await api
			.get(`/movie/76600?language=pt-BR`)
			.then((res) => {
				const data = res.data;
				const genresList = data.genres.map((genre) => genre.name);
				const genres = genresList.join(", ");
				const runtime = FormatTime(data.runtime);
				const release = FormatDate(data.release_date);

				const formatData = {
					title: data.title,
					image: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
					imdbUrl: `https://www.imdb.com/title/${data.imdb_id}/`,
					description: data.overview,
					vote: data.vote_average.toFixed(1),
					genres,
					runtime,
					release,
				};

				return formatData;
			});

		return popularMovie;
	}

	async getGenresList() {
		const genresList = await api
			.get("/genre/movie/list?language=pt-BR")
			.then((res) => res.data.genres);

		return genresList;
	}

	async getLastReleases() {
		const releasesList = await api
			.get("/movie/now_playing?language=pt-BR")
			.then((res) => res.data.results);

		return releasesList;
	}

	async getPopularList(pageNumber = 1) {
		const popularList = await api
			.get(`/movie/popular?language=pt-BR&page=${pageNumber}`)
			.then((res) => res.data);

		return popularList;
	}
}
