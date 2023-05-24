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
}
