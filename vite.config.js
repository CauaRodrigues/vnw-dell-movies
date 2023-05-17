import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: "@styles",
				replacement: path.resolve(__dirname, "src/styles"),
			},
			{
				find: "@components",
				replacement: path.resolve(__dirname, "src/components"),
			},
			{
				find: "@pages",
				replacement: path.resolve(__dirname, "src/pages"),
			},
			{
				find: "@services",
				replacement: path.resolve(__dirname, "src/services"),
			},
			{
				find: "@utils",
				replacement: path.resolve(__dirname, "src/utils"),
			},
		],
	},
});
