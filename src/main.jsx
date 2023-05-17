import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "@styles/GlobalStyles";
import theme from "@styles/theme";
import router from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />

			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
