import React from "react";
import { useParams } from "react-router-dom";

import Series from "./Series";
import Movies from "./Movies";

const Home = () => {
	const { tab } = useParams();

	return <>{tab === "series" ? <Series /> : <Movies />}</>;
};

export default Home;
