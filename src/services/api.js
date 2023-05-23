import axios from "axios";

export const api = axios.create({
	baseURL: import.meta.env.VITE_APP_API_BASE_URL,
	headers: {
		Accept: "application/json",
		Authorization: import.meta.env.VITE_APP_API_ACCESS_TOKEN,
	},
});
