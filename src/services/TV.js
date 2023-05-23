import { api } from "./api";
import { FormatTime, FormatDate } from "@utils/FormatData";

export default class ServiceTV {
	async getPopularSerie() {
		const popularSeries = await api
			.get(`/tv/62560?language=pt-BR`)
			.then((res) => {
				const data = res.data;
				const genresList = data.genres.map((genre) => genre.name);
				const genres = genresList.join(", ");
				const runtime = FormatTime(data.episode_run_time[0]);
				const release = FormatDate(data.first_air_date);

				const formatData = {
					title: data.name,
					image: `https://image.tmdb.org/t/p/original/4ehcaqwJDUo9Byhse4Q5UgLByAh.jpg`,
					imdbUrl: `https://www.imdb.com/title/${data.imdb_id}/`,
					description: data.overview,
					vote: data.vote_average.toFixed(1),
					genres,
					runtime,
					release,
				};

				return formatData;
			});

		return popularSeries;
	}

	async getGenresList() {
		const genresList = await api
			.get("/genre/tv/list?language=pt-BR")
			.then((res) => res.data.genres);

		return genresList;
	}

	async getLastReleases() {
		const releasesList = await api
			.get("/movie/now_playing?include_adult=false&language=pt-BR")
			.then((res) => res.data.results);

		return releasesList;
	}

	async getPopularList(pageNumber = 1) {
		const popularList = await api
			.get(`/tv/popular?include_adult=false&language=pt-BR&page=${pageNumber}`)
			.then((res) => res.data);

		return popularList;
	}

	async filterSeriesById(genreId, pageNumber = 1) {
		const movies = await api
			.get(
				`/discover/tv?include_adult=false&include_video=false&language=pt-BR&page=${pageNumber}&sort_by=popularity.desc&with_genres=${genreId}`
			)
			.then((res) => res.data);

		return movies;
	}
}
