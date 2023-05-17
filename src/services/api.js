import axios from "axios";

const api = axios.create({
	baseURL: import.meta.env.VITE_APP_API_BASE_URL,
	headers: {
		Accept: "application/json",
		Authorization: import.meta.env.VITE_APP_API_ACCESS_TOKEN,
	},
});

export default class Service {
	async getPopularMovie() {
		const popularList = await api
			.get("/movie/popular?language=pt-BR&page=1")
			.then((res) => res.data);

		const IdMovie = popularList.results[0].id;
		const popularMovie = await api
			.get(`/movie/${IdMovie}`)
			.then((res) => res.data);

		return popularMovie;
	}
}
