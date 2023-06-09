import { createBrowserRouter } from "react-router-dom";

import Layout from "@components/Layout";
import { Home, Search, Error, Categories, AllCategories } from "./pages";

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
				path: "/genres/:tab/:categoryId/:categoryName",
				element: <Categories />,
			},
			{
				path: "/genres/:tab?",
				element: <AllCategories />,
			},
			{
				path: "/login",
				element: <Home />,
			},
		],
	},
]);

export default router;
