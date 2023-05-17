import { createBrowserRouter } from "react-router-dom";

import Layout from "@components/Layout";
import { Home, Error } from "./pages";

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
				path: "/search",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Home />,
			},
		],
	},
]);

export default router;
