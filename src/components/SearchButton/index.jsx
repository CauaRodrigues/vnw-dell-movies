import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { MagnifyingGlass } from "@phosphor-icons/react";

import Text from "@components/Text";
import * as S from "./search.styled";

const SearchButton = ({ actualTab }) => {
	const navigate = useNavigate();
	const { colors } = useTheme();

	const [searchText, setSearchText] = useState("");
	const [warning, setWarning] = useState("");

	const onSearch = () => {
		if (searchText.trim()) {
			navigate(`/search/${actualTab || "movie"}/${searchText}`);
		} else {
			setWarning("Digite para pesquisar");
		}
	};

	return (
		<S.ContainerSearch>
			<S.FieldSearch>
				<S.Button onClick={onSearch} type="button">
					<MagnifyingGlass size={26} color={colors.primary} />
				</S.Button>

				<S.Field
					type="text"
					placeholder="Título"
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
					onKeyDown={(e) => (e.code === "Enter" ? onSearch() : null)}
				/>
			</S.FieldSearch>

			{/* {warning ? (
				<Text text={warning} color={colors.orange} size="x-sm" fw="rg" />
			) : null} */}
		</S.ContainerSearch>
	);
};

export default SearchButton;
