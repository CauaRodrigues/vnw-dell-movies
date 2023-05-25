import { api } from "./api";

export default class ServiceSearch {
	async searchTitles(endpoint, title) {
		const data = await api
			.get(
				`/search/${endpoint}?query=${title}&include_adult=false&language=pt-BR&page=1`
			)
			.then((res) => res.data);

		return data.results;
	}

	async listByCategory(endpoint, genreId) {
		const data = await api
			.get(
				`/discover/${endpoint}?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=${genreId}`
			)
			.then((res) => res.data);

		return data;
	}
}
