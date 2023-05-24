import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MediaQuery from "react-responsive";

import Text from "@components/Text";
import SearchButton from "@components/SearchButton";
import * as S from "./header.styled";

const Header = () => {
	const { tab } = useParams();

	const [tabActive, setTabActive] = useState(() =>
		tab === "series" ? false : true
	);

	const handlerTab = () => {
		setTabActive((prevState) => !prevState);
	};

	useEffect(() => {
		setTabActive(() => (tab === "series" ? false : true));
	}, [tab]);

	return (
		<S.Header>
			<Link to="/">
				<img
					className="logo"
					src="/assets/logo/dellmovies.svg"
					alt="Dell Movies"
				/>
			</Link>

			<MediaQuery minWidth="610px">
				<S.NavMenu>
					<Link
						to="/series"
						className="tab"
						id={!tabActive ? "active" : "deactivated"}
						onClick={handlerTab}
					>
						<Text text="Séries" tag="span" color="inherit" size="nl" fw="rg" />
					</Link>

					<Link
						to="/movies"
						className="tab"
						id={tabActive ? "active" : "deactivated"}
						onClick={handlerTab}
					>
						<Text text="Filmes" tag="span" color="inherit" size="nl" fw="rg" />
					</Link>
				</S.NavMenu>

				<S.NavMenu>
					<SearchButton actualTab={tab} />

					<Link to="#search">
						<Text text="Filtro" tag="span" color="inherit" size="nl" fw="rg" />
					</Link>

					<Link to="/login">
						<Text text="Login" tag="span" color="inherit" size="nl" fw="rg" />
					</Link>
				</S.NavMenu>
			</MediaQuery>
		</S.Header>
	);
};

export default Header;
