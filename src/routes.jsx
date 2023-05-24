import { createBrowserRouter } from "react-router-dom";

import Layout from "@components/Layout";
import { Home, Search, Error } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				path: "/:tab?",
				element: <Home />,
			},
			{
				path: "/search/:tab/:text",
				element: <Search />,
			},
			{
				path: "/login",
				element: <Home />,
			},
		],
	},
]);

export default router;
