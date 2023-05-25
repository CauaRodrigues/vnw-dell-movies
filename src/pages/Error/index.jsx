import React from "react";
import { useTheme } from "styled-components";

import Text from "@components/Text";
import * as S from "./page.styled";

const Error = () => {
	const { colors } = useTheme();

	return (
		<S.Container>
			<S.Header>
				<img src="/assets/logo/dellmovies.svg" alt="Dell Movies" />
			</S.Header>

			<S.Content>
				<div className="content--text">
					<Text
						text="Você se perdeu?"
						color={colors.primary}
						size="x-lg"
						fw="bd"
					/>

					<Text
						text="Página não encontrada"
						color={colors.primary}
						size="md"
						fw="rg"
					/>
				</div>

				<img src="/assets/images/not-found.png" alt="404 Error" />

				<S.LinkButton to="/movies">
					<Text
						text="Ir para página Inicial"
						color={colors.primary}
						size="nl"
						fw="sb"
					/>
				</S.LinkButton>
			</S.Content>
		</S.Container>
	);
};

export default Error;
