import React, { useEffect, useState } from "react";
import * as S from "./pagination.styled";

const Pagination = ({ actualPage, totalPages, onPageChange }) => {
	const [currentPage, setCurrentPage] = useState(actualPage);
	const [pagesButtons, setPagesButtons] = useState([]);

	const handlePageClick = (page = 1) => {
		setCurrentPage(page);
	};

	const renderPageButtons = () => {
		const buttons = [];
		const max = currentPage === totalPages ? totalPages : currentPage + 3;
		for (let i = currentPage; i <= max; i++) {
			buttons.push(
				<S.PageButton
					key={i}
					active={i === currentPage ? 1 : 0}
					onClick={() => {
						handlePageClick(i);
						onPageChange(i);
					}}
				>
					{i}
				</S.PageButton>
			);
		}
		setPagesButtons(buttons);
	};

	useEffect(() => {
		renderPageButtons();
	}, [currentPage]);

	return (
		<S.PaginationContainer>
			<S.Button
				onClick={() => {
					handlePageClick(currentPage - 1);
					onPageChange(currentPage - 1);
				}}
				active={currentPage === 1 ? 1 : 0}
			>
				Anterior
			</S.Button>
			{currentPage !== 1 ? (
				<>
					<S.PageButton
						onClick={() => {
							handlePageClick(1);
							onPageChange(1);
						}}
					>
						1
					</S.PageButton>
					<span>...</span>
				</>
			) : null}

			{pagesButtons}

			{currentPage !== totalPages ? (
				<>
					{" "}
					<span>...</span>
					<S.PageButton
						onClick={() => {
							handlePageClick(totalPages);
							onPageChange(totalPages);
						}}
					>
						{totalPages}
					</S.PageButton>
				</>
			) : null}

			<S.Button
				onClick={() => {
					handlePageClick(currentPage + 1);
					onPageChange(currentPage + 1);
				}}
				active={currentPage === totalPages ? 1 : 0}
			>
				Próximo
			</S.Button>
		</S.PaginationContainer>
	);
};

export default Pagination;
